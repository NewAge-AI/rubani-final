import { SITE_DESCRIPTION } from "@/utils/metadata";

export function GET() {
  return Response.json({
    name: "Rubani",
    short_name: "Rubani",
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    icons: [
      {
        src: "/brand/rubani-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/brand/rubani-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
    theme_color: "#1B3A6B",
    background_color: "#EDEBE4",
    display: "standalone",
  });
}
