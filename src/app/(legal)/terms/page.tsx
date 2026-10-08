import type { Metadata } from "next";
import TermsContent from "../../../content/legal/terms.mdx";
import { DEFAULT_SOCIAL_IMAGE, TWITTER_HANDLE } from "../../../utils/metadata";
import { SITE_URL } from "../../../utils/urls";

const title = "Terms of Service";
const description =
  "Terms of Service for using Rubani, the institutional intelligence platform.";
const url = `${SITE_URL}/terms`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: "Rubani",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_SOCIAL_IMAGE.url],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

export default function TermsPage() {
  return (
    <>
      <h1 className="not-prose mb-10 font-light text-[2.75rem] text-ink leading-[1.04] tracking-[-0.045em] md:text-[3.75rem]">
        Terms of Service
      </h1>
      <TermsContent />
    </>
  );
}
