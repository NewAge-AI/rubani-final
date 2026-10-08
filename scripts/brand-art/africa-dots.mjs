import fs from "node:fs";
import { feature } from "topojson-client";
const topo = JSON.parse(fs.readFileSync("node_modules/world-atlas/countries-50m.json", "utf8"));
const AFRICA = new Set(["012","024","072","108","120","132","140","148","174","178","180","204","226","231","232","262","266","270","288","324","384","404","426","430","434","450","454","466","478","480","504","508","516","562","566","624","646","678","686","694","706","710","716","728","729","732","748","768","788","800","818","834","854","894"]);
const countries = feature(topo, topo.objects.countries).features.filter(f => AFRICA.has(String(f.id).padStart(3,"0")));
console.log("countries", countries.length);
const polys = [];
for (const c of countries) {
  const g = c.geometry;
  const list = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  for (const p of list) polys.push(p);
}
function inRing(x, y, ring) {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}
function inside(x, y) {
  for (const p of polys) if (inRing(x, y, p[0]) && !p.slice(1).some(h => inRing(x, y, h))) return true;
  return false;
}
const step = 0.9, dots = [];
for (let lat = -36; lat <= 38; lat += step) for (let lon = -19; lon <= 52; lon += step) if (inside(lon, lat)) dots.push([+lon.toFixed(2), +lat.toFixed(2)]);
fs.writeFileSync("africa-dots.json", JSON.stringify(dots));
console.log("dots", dots.length);
