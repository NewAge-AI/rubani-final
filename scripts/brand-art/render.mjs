// Renders every brand graphic into ../../public/landing/art as WebP.
// Usage: npm install && npm run dots && npm run render
// Requires a Chromium binary; set CHROMIUM_PATH if it isn't on the default path.
import { createReadStream, copyFileSync, existsSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join } from "node:path";
import { chromium } from "playwright-core";
import sharp from "sharp";

const ROOT = new URL(".", import.meta.url).pathname;
const OUT = join(ROOT, "../../public/landing/art");
copyFileSync(join(ROOT, "../../src/fonts/switzer/Switzer-Variable.woff2"), join(ROOT, "Switzer-Variable.woff2"));

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript", ".json": "application/json", ".woff2": "font/woff2" };
const server = createServer((req, res) => {
  const path = join(ROOT, decodeURIComponent(new URL(req.url, "http://x").pathname));
  if (!existsSync(path)) { res.statusCode = 404; res.end(); return; }
  res.setHeader("Content-Type", TYPES[extname(path)] ?? "application/octet-stream");
  createReadStream(path).pipe(res);
}).listen(8765);

// [scene, output name, width, height, extra query]
const JOBS = [
  ["africa", "africa-network", 2400, 1350, ""],
  ["africa", "africa-network-square", 2000, 1600, "&layout=square"],
  ["agents", "agents-conversation", 2400, 1500, ""],
  ["orchestrationLabeled", "orchestration-router", 2000, 1600, ""],
  ["fabric", "data-fabric", 2000, 1600, ""],
  ["reach", "edge-dusk-network", 2400, 1500, ""],
  ["llm", "small-models-vs-llm", 2400, 1500, ""],
  ["model", "model-ensemble", 2400, 1500, ""],
  ["audit", "audit-lens", 2400, 1500, ""],
  ["compliance", "compliance-shield", 2400, 1500, ""],
  ["compliance1", "governance-rings", 2400, 1500, ""],
  ["cost", "cost-curve", 2400, 1500, ""],
  ["risk", "risk-gauge", 2400, 1500, ""],
  ["security", "security", 2400, 1350, ""],
  ["security", "security-wide", 2600, 1100, "&hero=1"],
  ["finance", "industry-financial-services", 2400, 1350, ""],
  ["finance", "industry-financial-services-wide", 2600, 1100, "&hero=1"],
  ["healthcare", "industry-healthcare", 2400, 1350, ""],
  ["healthcare", "industry-healthcare-wide", 2600, 1100, "&hero=1"],
  ["government", "industry-government", 2400, 1350, ""],
  ["government", "industry-government-wide", 2600, 1100, "&hero=1"],
  ["telecom", "industry-telecom-utilities", 2400, 1350, ""],
  ["telecom", "industry-telecom-utilities-wide", 2600, 1100, "&hero=1"],
];

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
for (const [scene, name, w, h, extra] of JOBS) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.goto(`http://localhost:8765/scene.html?scene=${scene}&w=${w}&h=${h}${extra}`);
  await page.waitForFunction(() => window.__done === true, null, { timeout: 240000 });
  const png = await page.locator("canvas").screenshot();
  await sharp(png).resize({ width: Math.min(w, 2400) }).webp({ quality: 82, effort: 6 }).toFile(join(OUT, `${name}.webp`));
  console.log("rendered", name);
  await page.close();
}
await browser.close();
server.close();
