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
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#1B3A6B",
    background_color: "#EDEBE4",
    display: "standalone",
  });
}
