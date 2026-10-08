"use client";

import { cn } from "@notra/ui/lib/utils";
import { useEffect, useRef } from "react";

type LonLat = readonly [number, number];

const HUB: LonLat = [36.82, -1.29]; // Nairobi
const CITIES: readonly LonLat[] = [
  [3.38, 6.52], // Lagos
  [28.05, -26.2], // Johannesburg
  [31.24, 30.04], // Cairo
  [15.27, -4.32], // Kinshasa
  [38.75, 9.03], // Addis Ababa
  [-0.19, 5.6], // Accra
  [-17.45, 14.69], // Dakar
  [-7.59, 33.57], // Casablanca
  [30.06, -1.94], // Kigali
  [39.28, -6.79], // Dar es Salaam
  [13.23, -8.84], // Luanda
  [32.58, 0.35], // Kampala
  [28.32, -15.39], // Lusaka
  [-4.0, 5.35], // Abidjan
];

const BOUNDS = { west: -20, east: 53, north: 38.5, south: -36 };
const PACKET_SPEED = 0.0045;
const PACKETS_PER_ROUTE = 2;

type Palette = { dot: string; dotHot: string; arc: string; packet: string; hub: string };

const PALETTES: Record<"dark" | "light", Palette> = {
  dark: {
    dot: "rgba(143, 168, 222, 0.5)",
    dotHot: "rgba(255, 178, 140, 0.95)",
    arc: "rgba(229, 104, 63, 0.28)",
    packet: "#ffd2b8",
    hub: "#e5683f",
  },
  light: {
    dot: "rgba(27, 58, 107, 0.32)",
    dotHot: "rgba(229, 104, 63, 0.9)",
    arc: "rgba(229, 104, 63, 0.35)",
    packet: "#e5683f",
    hub: "#e5683f",
  },
};

/**
 * Dot-matrix Africa with sovereign edge nodes. Packets travel between the
 * Nairobi hub and regional cities; nodes pulse as packets arrive.
 */
export function LiveAfricaMap({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!(canvas && ctx)) {
      return;
    }
    const palette = PALETTES[tone];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let dots: LonLat[] = [];
    let width = 0;
    let height = 0;
    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    let frame = 0;
    let running = false;
    let raf = 0;
    const pulses = new Map<number, number>();

    const project = ([lon, lat]: LonLat): [number, number] => [
      offsetX + (lon - BOUNDS.west) * scale,
      offsetY + (BOUNDS.north - lat) * scale,
    ];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const spanX = BOUNDS.east - BOUNDS.west;
      const spanY = BOUNDS.north - BOUNDS.south;
      scale = Math.min((width * 0.92) / spanX, (height * 0.92) / spanY);
      offsetX = (width - spanX * scale) / 2;
      offsetY = (height - spanY * scale) / 2;
    };

    // Precompute route control points for the quadratic arcs.
    const routes = () =>
      CITIES.map((city) => {
        const [x0, y0] = project(HUB);
        const [x1, y1] = project(city);
        const dist = Math.hypot(x1 - x0, y1 - y0);
        return { x0, y0, x1, y1, cx: (x0 + x1) / 2, cy: Math.min(y0, y1) - dist * 0.35 };
      });

    const point = (
      r: ReturnType<typeof routes>[number],
      t: number
    ): [number, number] => {
      const u = 1 - t;
      return [
        u * u * r.x0 + 2 * u * t * r.cx + t * t * r.x1,
        u * u * r.y0 + 2 * u * t * r.cy + t * t * r.y1,
      ];
    };

    // Static dot layer, rendered once per resize.
    let dotLayer: HTMLCanvasElement | null = null;
    const renderDots = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      dotLayer = document.createElement("canvas");
      dotLayer.width = Math.round(width * dpr);
      dotLayer.height = Math.round(height * dpr);
      const layer = dotLayer.getContext("2d");
      if (!layer) {
        return;
      }
      layer.setTransform(dpr, 0, 0, dpr, 0, 0);
      const dotR = Math.max(1, scale * 0.3);
      const cityPts = [HUB, ...CITIES].map(project);
      for (const d of dots) {
        const [x, y] = project(d);
        let near = Number.POSITIVE_INFINITY;
        for (const [cx, cy] of cityPts) {
          near = Math.min(near, Math.hypot(x - cx, y - cy));
        }
        const heat = Math.max(0, 1 - near / (scale * 4));
        layer.fillStyle = heat > 0.05 ? palette.dotHot : palette.dot;
        layer.globalAlpha = heat > 0.05 ? 0.25 + heat * 0.75 : 1;
        layer.beginPath();
        layer.arc(x, y, dotR, 0, Math.PI * 2);
        layer.fill();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (dotLayer) {
        ctx.drawImage(dotLayer, 0, 0, width, height);
      }
      const cityPts = CITIES.map(project);
      const [hx, hy] = project(HUB);

      const rs = routes();
      ctx.lineWidth = 1;
      ctx.strokeStyle = palette.arc;
      for (const r of rs) {
        ctx.beginPath();
        ctx.moveTo(r.x0, r.y0);
        ctx.quadraticCurveTo(r.cx, r.cy, r.x1, r.y1);
        ctx.stroke();
      }

      // Packets travel out and back along each route.
      rs.forEach((r, i) => {
        for (let k = 0; k < PACKETS_PER_ROUTE; k++) {
          const phase = (frame * PACKET_SPEED + i * 0.137 + k / PACKETS_PER_ROUTE) % 2;
          const outbound = phase < 1;
          const t = outbound ? phase : 2 - phase;
          if (outbound && t > 0.985) {
            pulses.set(i, frame);
          }
          const [px, py] = point(r, t);
          const glow = ctx.createRadialGradient(px, py, 0, px, py, 7);
          glow.addColorStop(0, palette.packet);
          glow.addColorStop(1, "rgba(255,210,184,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, 7, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // City nodes with arrival pulses.
      cityPts.forEach(([x, y], i) => {
        const since = frame - (pulses.get(i) ?? -999);
        if (since < 60) {
          ctx.strokeStyle = `rgba(229, 104, 63, ${0.6 * (1 - since / 60)})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(x, y, 3 + since * 0.35, 0, Math.PI * 2);
          ctx.stroke();
        }
        ctx.fillStyle = palette.packet;
        ctx.beginPath();
        ctx.arc(x, y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Hub with a steady beacon.
      const beat = (Math.sin(frame * 0.05) + 1) / 2;
      ctx.strokeStyle = `rgba(229, 104, 63, ${0.25 + beat * 0.35})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hx, hy, 8 + beat * 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = palette.hub;
      ctx.beginPath();
      ctx.arc(hx, hy, 4.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const loop = () => {
      frame += 1;
      draw();
      if (running) {
        raf = requestAnimationFrame(loop);
      }
    };

    const start = () => {
      if (running || reduceMotion) {
        return;
      }
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const visibility = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        start();
      } else {
        stop();
      }
    });
    const resizer = new ResizeObserver(() => {
      resize();
      renderDots();
      draw();
    });

    let cancelled = false;
    fetch("/landing/art/africa-dots.json")
      .then((res) => res.json())
      .then((data: LonLat[]) => {
        if (cancelled) {
          return;
        }
        dots = data;
        resize();
        renderDots();
        frame = 140;
        draw();
        resizer.observe(canvas);
        visibility.observe(canvas);
      })
      .catch(() => undefined);

    return () => {
      cancelled = true;
      stop();
      visibility.disconnect();
      resizer.disconnect();
    };
  }, [tone]);

  return (
    <canvas
      aria-label="Map of Africa showing Rubani edge nodes connected to a Nairobi hub"
      className={cn("block h-full w-full", className)}
      ref={canvasRef}
      role="img"
    />
  );
}
