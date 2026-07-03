import type { Metadata } from "next";
import type { OfferLike } from "~types/jsonld";
import PricingComparisonTable from "../../components/pricing-comparison-table";
import { PricingCards } from "../../components/pricing-section";
import { PRICING_PLANS } from "../../utils/constants";
import {
  buildBreadcrumbJsonLd,
  buildProductJsonLd,
  serializeJsonLd,
} from "../../utils/jsonld";
import { DEFAULT_SOCIAL_IMAGE, TWITTER_HANDLE } from "../../utils/metadata";
import { SITE_URL } from "../../utils/urls";

const title = "Pricing";
const description =
  "Explore Rubani engagement options for pilots, platform deployments, and enterprise institutional AI programmes.";
const url = `${SITE_URL}/pricing`;

const offers: OfferLike[] = Object.values(PRICING_PLANS).flatMap((plan) => {
  if (plan.pricing.monthly === null || plan.pricing.annually === null) {
    return [];
  }

  return [
    {
      "@type": "Offer",
      name: `${plan.name} monthly plan`,
      description: plan.description,
      price: plan.pricing.monthly,
      priceCurrency: "USD",
      url,
      availability: "https://schema.org/OnlineOnly",
      itemCondition: "https://schema.org/NewCondition",
      category: plan.name,
    },
    {
      "@type": "Offer",
      name: `${plan.name} annual plan`,
      description: plan.description,
      price: plan.pricing.annually,
      priceCurrency: "USD",
      url,
      availability: "https://schema.org/OnlineOnly",
      itemCondition: "https://schema.org/NewCondition",
      category: plan.name,
    },
  ];
});

const productJsonLd = buildProductJsonLd({
  name: "Rubani",
  description,
  image: `${SITE_URL}${DEFAULT_SOCIAL_IMAGE.url}`,
  url,
  offers,
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", url: SITE_URL },
  { name: "Pricing", url },
]);

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

export default function PricingPage() {
  return (
    <div className="flex w-full flex-col items-center justify-start overflow-hidden border-border/70 border-b pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: server-built JSON-LD
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(productJsonLd) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: server-built JSON-LD
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
        type="application/ld+json"
      />
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <div className="flex items-center justify-center gap-6 self-stretch px-6 py-12 md:px-24 md:py-16">
          <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-4">
            <h1 className="self-stretch text-balance text-center font-sans font-semibold text-4xl text-foreground leading-tight tracking-tight md:text-6xl">
              Engagements that scale with{" "}
              <span className="text-primary">your institution</span>
            </h1>

            <div className="self-stretch text-center font-normal font-sans text-base text-muted-foreground leading-7">
              Start with a focused workflow. Expand when you
              <br />
              need more systems, teams, and decision flows.
            </div>
          </div>
        </div>

        <PricingCards />
      </div>

      <div className="w-full border-border border-t">
        <PricingComparisonTable />
      </div>
    </div>
  );
}
