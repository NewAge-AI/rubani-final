#!/usr/bin/env bun
/**
 * Regenerates the static default social preview image (public/og-image.png)
 * used as the fallback openGraph/twitter image for every page that doesn't
 * define its own opengraph-image.tsx.
 *
 * Run with: bun scripts/generate-og-image.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const ROOT = new URL("..", import.meta.url).pathname;

async function loadGoogleFont(family, text) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const fontUrl = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!fontUrl) {
    throw new Error(`Failed to resolve font URL for ${family}`);
  }
  const fontResponse = await fetch(fontUrl);
  return fontResponse.arrayBuffer();
}

const SIZE = { width: 1200, height: 630 };
const TAGLINE = "Sovereign, orchestrated, edge-first AI.";
const SUBLINE = "Built for African enterprise.";
const DOMAIN = "rubani.ai";

async function main() {
  const uiText = `RUBANI ${DOMAIN} ${TAGLINE} ${SUBLINE}`;

  const [sansFont, sansBoldFont, iconSvg] = await Promise.all([
    loadGoogleFont("Outfit", uiText),
    loadGoogleFont("Outfit:wght@600", uiText),
    Promise.resolve(
      readFileSync(join(ROOT, "public/brand/rubani-icon.svg"), "utf-8")
    ),
  ]);

  const iconDataUrl = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`;

  const image = new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#05070c",
          backgroundImage:
            "radial-gradient(circle at 15% 15%, rgba(142,180,255,0.16), transparent 45%)",
          padding: "5rem",
          fontFamily: "Outfit",
        },
        children: [
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: { display: "flex", alignItems: "center", gap: "1rem" },
                    children: [
                      {
                        type: "img",
                        props: {
                          src: iconDataUrl,
                          width: 48,
                          height: 48,
                          style: { borderRadius: "0.5rem" },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            color: "#ffffff",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            letterSpacing: "-0.02em",
                          },
                          children: "Rubani",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "1rem",
                      fontWeight: 600,
                      letterSpacing: "0.24em",
                    },
                    children: "SOVEREIGN AI",
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                marginTop: "3.5rem",
                flex: 1,
                justifyContent: "center",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "3.375rem",
                      lineHeight: 1.15,
                      letterSpacing: "-0.03em",
                      maxWidth: "44rem",
                    },
                    children: TAGLINE,
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      color: "#8eb4ff",
                      fontWeight: 600,
                      fontSize: "3.375rem",
                      lineHeight: 1.15,
                      letterSpacing: "-0.03em",
                      marginTop: "0.5rem",
                    },
                    children: SUBLINE,
                  },
                },
              ],
            },
          },
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                    },
                    children: "Small, orchestrated models. Zero data egress.",
                  },
                },
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                    },
                    children: DOMAIN,
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      ...SIZE,
      fonts: [
        { name: "Outfit", data: sansFont, style: "normal", weight: 400 },
        { name: "Outfit", data: sansBoldFont, style: "normal", weight: 600 },
      ],
    }
  );

  const buffer = Buffer.from(await image.arrayBuffer());
  writeFileSync(join(ROOT, "public/og-image.png"), buffer);
  console.log(`Wrote public/og-image.png (${(buffer.length / 1024).toFixed(0)}kb)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
