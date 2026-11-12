// Fetch the latest TLDR AI and TLDR Dev issues and save them to src/data/tldr.json.
// Runs automatically before `npm run build` (see "prebuild" in package.json).
// If TLDR is unreachable or rate-limits us, the previously saved file is kept so the
// build never fails because of the feed.
import fs from "node:fs";
import path from "node:path";
import { XMLParser } from "fast-xml-parser";

const FEEDS = [
  { id: "ai", name: "TLDR AI", url: "https://tldr.tech/api/rss/ai", home: "https://tldr.tech/ai" },
  { id: "dev", name: "TLDR Dev", url: "https://tldr.tech/api/rss/dev", home: "https://tldr.tech/dev" },
];
const LIMIT = 5;
const out = path.resolve(import.meta.dirname, "..", "src", "data", "tldr.json");

const parser = new XMLParser({ ignoreAttributes: true, cdataPropName: false });

async function load(feed) {
  const res = await fetch(feed.url, {
    headers: { "User-Agent": "tailwinds.cloud site build (+https://tailwinds.cloud)" },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`${feed.url} -> HTTP ${res.status}`);
  const xml = parser.parse(await res.text());
  const items = [xml?.rss?.channel?.item ?? []].flat().slice(0, LIMIT);
  return {
    ...feed,
    items: items.map((i) => ({
      title: String(i.title ?? "").trim(),
      link: String(i.link ?? feed.home),
      date: new Date(i.pubDate).toISOString(),
    })),
  };
}

let previous = null;
try {
  previous = JSON.parse(fs.readFileSync(out, "utf8"));
} catch {}

const feeds = [];
for (const feed of FEEDS) {
  try {
    feeds.push(await load(feed));
    console.log(`TLDR: fetched ${feed.name}`);
  } catch (err) {
    const old = previous?.feeds?.find((f) => f.id === feed.id);
    console.warn(`TLDR: ${feed.name} failed (${err.message}); ${old ? "keeping previous items" : "no items"}`);
    feeds.push(old ?? { ...feed, items: [] });
  }
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify({ updated: new Date().toISOString(), feeds }, null, 2) + "\n");
