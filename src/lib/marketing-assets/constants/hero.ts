import { assetHeroSchema } from "../schemas/hero";
import type { AssetHero } from "../types/hero";

export const ASSET_HERO = assetHeroSchema.parse({
  title: "Turn institutional signals into",
  accent: "governed briefs",
  description:
    "Rubani reads institutional context, understands your workflow, and generates governed intelligence your teams can review and act on.",
  primaryCta: "Request a demo",
  secondaryCta: "See the workflow",
  videos: [
    {
      src: "/marketing/marketing-assets-loop.mp4",
      poster: "/marketing/marketing-assets-loop-poster.jpg",
      label:
        "Rubani generating a governed intelligence brief from connected institutional data",
    },
    {
      src: "/marketing/marketing-paper-loop.mp4",
      poster: "/marketing/marketing-paper-loop-poster.jpg",
      label:
        "A governed brief prepared for board and executive review",
    },
    {
      src: "/marketing/marketing-edit-loop.mp4",
      poster: "/marketing/marketing-edit-loop-poster.jpg",
      label:
        "A reviewer editing recommendations while source lineage remains attached",
    },
  ],
}) satisfies AssetHero;
