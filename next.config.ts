import type { NextConfig } from "next";

// Static export: `npm run build` writes a fully static site to ./out,
// which can be served by GitHub Pages, Google Cloud Storage, Firebase Hosting, etc.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
