import { SITE_URL } from "./urls";

export const SITE_TAGLINE =
  "Sovereign, orchestrated, edge-first AI — built for African enterprise.";

export const SITE_TITLE = `Rubani. ${SITE_TAGLINE}`;

export const SITE_DESCRIPTION =
  "Rubani is the sovereign AI platform for African enterprise: small, orchestrated models that run inside your infrastructure, reach your customers at the edge, and never leak your data to a third party.";

export const DEFAULT_SOCIAL_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Rubani social preview image",
} as const;

export const TWITTER_HANDLE = "@rubaniai";

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      siteName: "Rubani",
      images: [DEFAULT_SOCIAL_IMAGE],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [DEFAULT_SOCIAL_IMAGE.url],
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
    },
  };
}
