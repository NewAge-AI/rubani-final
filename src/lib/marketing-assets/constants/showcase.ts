import { assetShowcaseSectionsSchema } from "../schemas/showcase";
import type { AssetShowcaseSection } from "../types/showcase";

export const ASSET_SHOWCASE_SECTIONS = assetShowcaseSectionsSchema.parse([
  {
    id: "generate",
    headingPre: "If it lacks lineage, ",
    headingAccent: "nobody",
    headingPost: " trusts it.",
    paragraphs: [
      "Disconnected reports get missed and generic dashboards get ignored. Rubani connects your systems, reads the institutional context, and composes intelligence that matches how your organisation works.",
      "When it is ready, teams can review a governed brief with evidence, recommendations, owners, and source lineage already attached.",
    ],
    videoSrc: "/marketing/marketing-assets-loop.mp4",
    posterSrc: "/marketing/marketing-assets-loop-poster.jpg",
    videoLabel:
      "Rubani generating an intelligence brief from connected institutional data",
    mediaSide: "right",
  },
  {
    id: "paste",
    headingPre: "Send it where ",
    headingAccent: "decisions",
    headingPost: " happen.",
    paragraphs: [
      "Route the brief to board packs, operational reviews, regulatory reporting, or frontline workflows without rebuilding the evidence trail by hand.",
    ],
    videoSrc: "/marketing/marketing-paper-loop.mp4",
    posterSrc: "/marketing/marketing-paper-loop-poster.jpg",
    videoLabel:
      "A governed intelligence brief prepared for institutional review",
    mediaSide: "left",
  },
  {
    id: "edit",
    headingPre: "Review the recommendation, ",
    headingAccent: "keep",
    headingPost: " the evidence.",
    paragraphs: [
      "Change owners, add reviewer notes, or adjust the recommended next step while preserving confidence, source systems, timestamps, and audit history.",
    ],
    videoSrc: "/marketing/marketing-edit-loop.mp4",
    posterSrc: "/marketing/marketing-edit-loop-poster.jpg",
    videoLabel:
      "A reviewer updating a governed recommendation with lineage preserved",
    mediaSide: "right",
  },
]) satisfies AssetShowcaseSection[];
