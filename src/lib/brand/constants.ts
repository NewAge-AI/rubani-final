import type { BrandAssetPaths, BrandColor, BrandFont } from "~types/brand";

export const BRAND_ASSETS: BrandAssetPaths = {
  mark: {
    svg: "/brand/rubani-icon.svg",
    png: "/brand/rubani-icon.svg",
  },
  wordmark: {
    svg: "/brand/rubani-icon.svg",
    png: "/brand/rubani-icon.svg",
  },
  wordmarkDark: {
    svg: "/brand/rubani-icon.svg",
    png: "/brand/rubani-icon.svg",
  },
  zip: "/brand/rubani-icon.svg",
};

export const BRAND_COLORS: BrandColor[] = [
  {
    name: "Navy",
    hex: "#1B3A6B",
    value: "#1B3A6B",
    usage: "Primary accent for links, buttons, and highlights.",
  },
  {
    name: "Rubani Blue",
    hex: "#00318C",
    value: "#00318C",
    usage: "Logo accent and institutional brand blue.",
  },
  {
    name: "Ink",
    hex: "#1C1814",
    value: "#1C1814",
    usage: "Primary text and dark brand surfaces.",
  },
  {
    name: "Cream",
    hex: "#EDEBE4",
    value: "#EDEBE4",
    usage: "Warm institutional background surface.",
  },
  {
    name: "Background Light",
    hex: "#FFFFFF",
    value: "hsl(0 0% 100%)",
    usage: "Default light surface.",
  },
  {
    name: "Background Dark",
    hex: "#131316",
    value: "hsl(233 7% 8%)",
    usage: "Default dark surface.",
  },
];

export const BRAND_FONTS: BrandFont[] = [
  {
    name: "Outfit",
    fontClassName: "font-sans",
    role: "Primary typeface for UI and body copy.",
    googleFontsUrl: "https://fonts.google.com/specimen/Outfit",
  },
  {
    name: "JetBrains Mono",
    fontClassName: "font-mono",
    role: "Mono typeface for labels, metadata, and technical context.",
    googleFontsUrl: "https://fonts.google.com/specimen/JetBrains+Mono",
  },
];

export const FONT_SAMPLE = "The quick brown fox jumps over the lazy dog";
