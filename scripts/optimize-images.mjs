#!/usr/bin/env bun
/**
 * Repeatable image optimizer for public assets.
 *
 * - Auto-discovers every PNG/JPG anywhere under public/landing and converts
 *   it to WebP, resized to a sane max width for how large it ever renders
 *   on screen. Top-level files (full-bleed hero/CTA backgrounds) get a
 *   larger max width than files nested in subfolders (cards/tiles).
 * - Skips files that already have an up-to-date .webp next to them, so it
 *   is safe to run repeatedly / after adding a single new image.
 * - Re-compresses the brand logo PNG (kept as PNG for email-client
 *   compatibility) with palette quantization.
 * - Shrinks the embedded raster inside the favicon SVG.
 *
 * Run with: bun scripts/optimize-images.mjs
 * Run with: bun scripts/optimize-images.mjs --force   (re-convert everything)
 */
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import sharp from "sharp";

const ROOT = new URL("../public", import.meta.url).pathname;
const LANDING_DIR = join(ROOT, "landing");
const FORCE = process.argv.includes("--force");

const RASTER_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

const TOP_LEVEL_MAX_WIDTH = 2400; // full-bleed hero/CTA backgrounds
const NESTED_MAX_WIDTH = 1400; // cards/tiles inside subfolders
const WEBP_QUALITY = 70;

/** @param {string} dir */
function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? listFiles(full) : [full];
  });
}

function human(bytes) {
  return `${(bytes / 1024).toFixed(0)}kb`;
}

function isUpToDate(sourcePath, outputPath) {
  if (FORCE || !existsSync(outputPath)) {
    return false;
  }
  return statSync(outputPath).mtimeMs >= statSync(sourcePath).mtimeMs;
}

async function convertToWebp(sourcePath, maxWidth, quality) {
  const webpPath = sourcePath.replace(/\.(png|jpe?g)$/i, ".webp");

  if (isUpToDate(sourcePath, webpPath)) {
    console.log(`skip  ${relative(ROOT, sourcePath)} (already optimized)`);
    return;
  }

  const before = statSync(sourcePath).size;
  const image = sharp(sourcePath);
  const metadata = await image.metadata();
  const width = metadata.width ?? maxWidth;
  const resized = width > maxWidth ? image.resize({ width: maxWidth }) : image;
  const buffer = await resized.webp({ quality }).toBuffer();
  writeFileSync(webpPath, buffer);
  console.log(
    `webp  ${relative(ROOT, sourcePath)} -> ${relative(ROOT, webpPath)}  ${human(before)} -> ${human(buffer.length)}`
  );
}

async function recompressLogoPng(pngPath, maxWidth) {
  const before = statSync(pngPath).size;
  const image = sharp(pngPath);
  const metadata = await image.metadata();
  const width = metadata.width ?? maxWidth;
  const resized = width > maxWidth ? image.resize({ width: maxWidth }) : image;
  const buffer = await resized
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toBuffer();
  writeFileSync(pngPath, buffer);
  console.log(
    `png   ${relative(ROOT, pngPath)}  ${human(before)} -> ${human(buffer.length)}`
  );
}

async function shrinkFaviconSvg(svgPath, maxSize) {
  const before = statSync(svgPath).size;
  const svg = readFileSync(svgPath, "utf8");
  const match = svg.match(/data:image\/(png|jpeg);base64,([^"']+)/);
  if (!match) {
    console.log(`skip  ${relative(ROOT, svgPath)} (no embedded raster)`);
    return;
  }
  const [full, , base64] = match;
  const raw = Buffer.from(base64, "base64");
  const resizedBuffer = await sharp(raw)
    .resize({ width: maxSize, height: maxSize, fit: "inside" })
    .png({ compressionLevel: 9, palette: true, colors: 64 })
    .toBuffer();
  const replacement = `data:image/png;base64,${resizedBuffer.toString("base64")}`;
  const nextSvg = svg.replace(full, replacement);
  writeFileSync(svgPath, nextSvg);
  console.log(
    `svg   ${relative(ROOT, svgPath)}  ${human(before)} -> ${human(nextSvg.length)}`
  );
}

async function main() {
  const landingFiles = listFiles(LANDING_DIR).filter((file) =>
    RASTER_EXTENSIONS.has(extname(file).toLowerCase())
  );

  for (const file of landingFiles) {
    const isTopLevel = dirname(file) === LANDING_DIR;
    const maxWidth = isTopLevel ? TOP_LEVEL_MAX_WIDTH : NESTED_MAX_WIDTH;
    await convertToWebp(file, maxWidth, WEBP_QUALITY);
  }

  await recompressLogoPng(join(ROOT, "brand/rubani-logo.png"), 900);
  await shrinkFaviconSvg(join(ROOT, "brand/rubani-icon.svg"), 512);

  console.log("\nDone.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
