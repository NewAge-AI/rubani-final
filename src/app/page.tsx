import type { Metadata } from "next";
import { LandingComparison } from "../components/landing/landing-comparison";
import { LandingCTA } from "../components/landing/landing-cta";
import { LandingFAQ } from "../components/landing/landing-faq";
import { LandingHero } from "../components/landing/landing-hero";
import { LandingPillars } from "../components/landing/landing-pillars";
import { LandingProductCards } from "../components/landing/landing-product-cards";
import { LandingSecurity } from "../components/landing/landing-security";
import { LandingSolutions } from "../components/landing/landing-solutions";
import { LandingStats } from "../components/landing/landing-stats";
import {
  NOTRA_CONTACT_EMAIL,
  NOTRA_SAME_AS,
  NOTRA_SUPPORT_EMAIL,
  siteUrl,
} from "../utils/agent-metadata";
import { serializeJsonLd } from "../utils/jsonld";
import { SITE_DESCRIPTION, SITE_TITLE } from "../utils/metadata";
import { SITE_URL } from "../utils/urls";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rubani",
  url: SITE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: SITE_DESCRIPTION,
  creator: {
    "@type": "Organization",
    name: "Rubani",
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rubani",
  url: SITE_URL,
  logo: siteUrl("/brand/rubani-logo.png"),
  description: SITE_DESCRIPTION,
  sameAs: NOTRA_SAME_AS,
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: NOTRA_CONTACT_EMAIL,
      contactType: "sales",
      availableLanguage: ["en"],
    },
    {
      "@type": "ContactPoint",
      email: NOTRA_SUPPORT_EMAIL,
      contactType: "customer support",
      availableLanguage: ["en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    addressRegion: "Delaware",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Rubani institutional intelligence",
  provider: organizationJsonLd,
  serviceType: "Institutional AI and data intelligence platform",
  areaServed: "Worldwide",
  description: SITE_DESCRIPTION,
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Rubani?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rubani is the sovereign AI platform for African enterprise, using small orchestrated models that run inside controlled infrastructure and reach customers at the edge.",
      },
    },
    {
      "@type": "Question",
      name: "Who does Rubani serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rubani serves African enterprises that need sovereign AI, model orchestration, edge inference, and data control across financial services, telecommunications, government, utilities, and other mission-critical sectors.",
      },
    },
  ],
};

const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: SITE_TITLE,
  url: SITE_URL,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "#agent-readable-summary"],
  },
};

function LandingPageJsonLd() {
  return (
    <>
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(softwareJsonLd) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(organizationJsonLd),
        }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(serviceJsonLd) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
        type="application/ld+json"
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(speakableJsonLd) }}
        type="application/ld+json"
      />
    </>
  );
}

export default function LandingPage() {
  return (
    <div className="landing-abacus w-full overflow-hidden bg-black">
      <LandingPageJsonLd />
      <main className="flex w-full flex-col">
        <LandingHero />
        <LandingStats />
        <LandingProductCards />
        <LandingPillars />
        <LandingComparison />
        <LandingSolutions />
        <LandingSecurity />
        <LandingFAQ />
        <LandingCTA />
      </main>
    </div>
  );
}
