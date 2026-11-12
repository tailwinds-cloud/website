// Turn the brand artwork in assets/images/*.png into the files the site uses.
// Usage (from repo root): npm run brand:export
//
// The source PNGs are artwork on an opaque white 2000px square, so this script:
//   1. loads each one, removes the white background (color-to-alpha on the edge band
//      so anti-aliased edges stay clean on dark backgrounds) and crops to the artwork;
//   2. writes transparent PNG masters to assets/png/;
//   3. writes small WebP/PNG versions for the site to public/brand/;
//   4. builds favicons, apple/PWA icons and the Open Graph image.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const root = path.resolve(import.meta.dirname, "..", "..");
const p = (...s) => path.join(root, ...s);
const src = (f) => p("assets", "images", f);
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };

for (const d of [p("assets", "png"), p("public", "brand"), p("public", "icons")]) {
  fs.rmSync(d, { recursive: true, force: true });
  fs.mkdirSync(d, { recursive: true });
}

/** Load a source image as raw RGBA. */
async function rasterize(file) {
  const { data, info } = await sharp(src(file)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, w: info.width, h: info.height };
}

const toSharp = ({ data, w, h }) => sharp(data, { raw: { width: w, height: h, channels: 4 } });

/** Flood-fill the near-white background from the edges and make it transparent. */
function removeBackground(img) {
  const { data, w, h } = img;
  const isBg = (i) => data[i] >= 238 && data[i + 1] >= 238 && data[i + 2] >= 238;
  const bg = new Uint8Array(w * h);
  const stack = [];
  for (let x = 0; x < w; x++) stack.push(x, (h - 1) * w + x);
  for (let y = 0; y < h; y++) stack.push(y * w, y * w + w - 1);
  while (stack.length) {
    const k = stack.pop();
    if (bg[k] || !isBg(k * 4)) continue;
    bg[k] = 1;
    const x = k % w;
    if (x > 0) stack.push(k - 1);
    if (x < w - 1) stack.push(k + 1);
    if (k >= w) stack.push(k - w);
    if (k < w * (h - 1)) stack.push(k + w);
  }
  // Pixels within 3px of the background are anti-aliased against white: un-blend them.
  const near = new Uint8Array(w * h);
  for (let k = 0; k < w * h; k++) {
    if (!bg[k]) continue;
    const x = k % w, y = (k / w) | 0;
    for (let dy = -3; dy <= 3; dy++)
      for (let dx = -3; dx <= 3; dx++) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < w && ny >= 0 && ny < h) near[ny * w + nx] = 1;
      }
  }
  for (let k = 0; k < w * h; k++) {
    const i = k * 4;
    if (bg[k]) { data[i + 3] = 0; continue; }
    if (!near[k]) continue;
    const a = Math.max(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]) / 255;
    if (a <= 0.02) { data[i + 3] = 0; continue; }
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(255 - (255 - data[i + c]) / a);
    data[i + 3] = Math.round(a * 255);
  }
  return img;
}

/** Bounding box of pixels with alpha above a threshold, optionally limited to rows [y0, y1). */
function bbox({ data, w, h }, y0 = 0, y1 = h) {
  let l = w, t = h, r = -1, b = -1;
  for (let y = y0; y < y1; y++)
    for (let x = 0; x < w; x++)
      if (data[(y * w + x) * 4 + 3] > 16) {
        if (x < l) l = x;
        if (x > r) r = x;
        if (y < t) t = y;
        if (y > b) b = y;
      }
  return { left: l, top: t, width: r - l + 1, height: b - t + 1 };
}

function crop(img, box) {
  const { data, w } = img;
  const out = Buffer.alloc(box.width * box.height * 4);
  for (let y = 0; y < box.height; y++)
    data.copy(out, y * box.width * 4, ((box.top + y) * w + box.left) * 4, ((box.top + y) * w + box.left + box.width) * 4);
  return { data: out, w: box.width, h: box.height };
}

const trim = (img) => crop(img, bbox(img));

/** White "reversed" version for dark backgrounds: darker ink -> more opaque white. */
function knockout(img, gain = 2.2) {
  const data = Buffer.from(img.data);
  for (let i = 0; i < data.length; i += 4) {
    const luma = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
    data[i + 3] = Math.round(Math.min(1, (1 - luma) * gain) * data[i + 3]);
    data[i] = data[i + 1] = data[i + 2] = 255;
  }
  return { ...img, data };
}

/** Split the stacked logo at the widest empty row band: returns the icon above it. */
function iconFromStacked(img) {
  const { data, w, h } = img;
  const empty = (y) => { for (let x = 0; x < w; x++) if (data[(y * w + x) * 4 + 3] > 16) return false; return true; };
  let best = { len: 0, at: 0 }, run = 0;
  for (let y = Math.floor(h * 0.3); y < Math.floor(h * 0.8); y++) {
    run = empty(y) ? run + 1 : 0;
    if (run > best.len) best = { len: run, at: y - run + 1 };
  }
  if (best.len < 4) throw new Error("Could not find the gap between icon and wordmark in the stacked logo");
  return crop(img, bbox(img, 0, best.at));
}

async function load(file) {
  return trim(removeBackground(await rasterize(file)));
}

/** Write a master PNG plus web-sized WebP (and optionally PNG) for the site. */
async function publish(name, img, webWidth, { png = false } = {}) {
  await toSharp(img).png({ compressionLevel: 9 }).toFile(p("assets", "png", `${name}.png`));
  const web = toSharp(img).resize({ width: Math.min(webWidth, img.w) });
  await web.clone().webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(p("public", "brand", `${name}.webp`));
  if (png) await web.clone().png({ compressionLevel: 9, palette: true, quality: 95 }).toFile(p("public", "brand", `${name}.png`));
  const m = await sharp(p("public", "brand", `${name}.webp`)).metadata();
  console.log(`${name}: ${m.width}x${m.height}`);
}

// ---------------------------------------------------------------- logos
const horizontal = await load("Primary horizontal logo.png");
const compact = await load("Compact horizontal logo.png");
const stacked = await load("Stacked logo.png");
const emblem = await load("Circular emblem.png");
const mono = await load("Monochrome emblem.png");
const icon = iconFromStacked(stacked);

await publish("logo-horizontal", horizontal, 720, { png: true }); // header; PNG for structured data
await publish("logo-horizontal-white", knockout(horizontal), 720); // footer on navy
await publish("logo-compact", compact, 720);
await publish("logo-stacked", stacked, 900);
await publish("icon", icon, 800);
await publish("icon-white", knockout(mono), 800); // watermark on the contact panel
await publish("emblem", emblem, 640);
await publish("emblem-mono", mono, 800);

// ---------------------------------------------------------------- favicons
async function squareIcon(size) {
  const pad = Math.round(size * 0.04);
  const inner = await toSharp(icon).resize(size - pad * 2, size - pad * 2, { fit: "contain", background: CLEAR }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: CLEAR } })
    .composite([{ input: inner, gravity: "center" }]).png().toBuffer();
}
fs.writeFileSync(p("src", "app", "favicon.ico"), await pngToIco(await Promise.all([16, 32, 48].map(squareIcon))));
fs.writeFileSync(p("src", "app", "icon.png"), await squareIcon(512));
fs.writeFileSync(p("public", "icons", "favicon-32.png"), await squareIcon(32));

// ---------------------------------------------------------------- app / PWA icons
const app = await load("App icon.png"); // rounded square, transparent corners
await publish("app-icon", app, 512, { png: true });
// Full-bleed square: cut inside the rounded corners so every edge pixel is filled.
const inset = Math.round(app.w * 0.07);
const bleed = crop(app, { left: inset, top: inset, width: app.w - inset * 2, height: app.h - inset * 2 });
await toSharp(bleed).resize(180, 180).png().toFile(p("src", "app", "apple-icon.png"));
// Maskable: artwork shrunk into the 80% safe zone, feathered onto a gradient sampled from its corners.
const px = (img, x, y) => { const i = (y * img.w + x) * 4; return `rgb(${img.data[i]},${img.data[i + 1]},${img.data[i + 2]})`; };
const [tl, br] = [px(bleed, 4, 4), px(bleed, bleed.w - 5, bleed.h - 5)];
for (const s of [192, 512]) {
  await toSharp(app).resize(s, s, { fit: "contain", background: CLEAR }).png().toFile(p("public", "icons", `icon-${s}.png`));
  const inner = Math.round(s * 0.8), off = Math.round((s - inner) / 2), f = Math.round(inner * 0.06);
  const feather = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${inner}" height="${inner}"><filter id="b"><feGaussianBlur stdDeviation="${f / 2}"/></filter>` +
    `<rect x="${f}" y="${f}" width="${inner - 2 * f}" height="${inner - 2 * f}" rx="${f}" fill="#fff" filter="url(#b)"/></svg>`);
  const art = await toSharp(bleed).resize(inner, inner).composite([{ input: feather, blend: "dest-in" }]).png().toBuffer();
  const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}"><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
    `<stop offset="0" stop-color="${tl}"/><stop offset="1" stop-color="${br}"/></linearGradient><rect width="${s}" height="${s}" fill="url(#g)"/></svg>`);
  await sharp(bg).composite([{ input: art, left: off, top: off }]).png().toFile(p("public", "icons", `maskable-${s}.png`));
}

// ---------------------------------------------------------------- Open Graph / Twitter card
const ogBg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
  `<stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E6F7FF"/></linearGradient></defs>` +
  `<rect width="1200" height="630" fill="url(#g)"/><rect y="618" width="1200" height="12" fill="#0F62FE"/></svg>`,
);
const ogLogo = await toSharp(horizontal).resize({ width: 1000 }).png().toBuffer();
await sharp(ogBg).composite([{ input: ogLogo, gravity: "center" }]).png().toFile(p("src", "app", "opengraph-image.png"));
fs.copyFileSync(p("src", "app", "opengraph-image.png"), p("src", "app", "twitter-image.png"));

console.log("Brand assets exported.");
