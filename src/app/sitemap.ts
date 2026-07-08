import type { MetadataRoute } from "next";
import { SITE_URL } from "@/utils/urls";

const STATIC_PAGE_LAST_MODIFIED = new Date("2026-04-24");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: STATIC_PAGE_LAST_MODIFIED,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: STATIC_PAGE_LAST_MODIFIED,
    },
  ];
}
