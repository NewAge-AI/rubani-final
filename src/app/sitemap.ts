import type { MetadataRoute } from "next";
import { PLATFORM_PRODUCTS } from "@/data/platform";
import { SOLUTIONS } from "@/data/solutions";
import { SITE_URL } from "@/utils/urls";

const STATIC_PAGE_LAST_MODIFIED = new Date("2026-10-08");

const STATIC_PATHS = [
  "",
  "/platform",
  "/solutions",
  "/security",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...STATIC_PATHS,
    ...PLATFORM_PRODUCTS.map((product) => `/platform/${product.slug}`),
    ...SOLUTIONS.map((solution) => `/solutions/${solution.slug}`),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: STATIC_PAGE_LAST_MODIFIED,
  }));
}
