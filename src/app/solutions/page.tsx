import { AuditIcon, Globe02Icon, Shield01Icon } from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { CapabilityGrid, MediaLinkCard, StepList } from "@/components/marketing/blocks";
import { PageHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { DEPLOYMENT_STEPS } from "@/data/platform";
import { SOLUTIONS } from "@/data/solutions";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Sovereign AI for financial services, healthcare, government, and telecommunications and utilities across Africa.",
  path: "/solutions",
});

const SHARED = [
  {
    icon: Shield01Icon,
    title: "Sovereign by architecture",
    description:
      "Every deployment runs inside your infrastructure or an in-country private cloud. Data never leaves your control.",
  },
  {
    icon: AuditIcon,
    title: "Governed and auditable",
    description:
      "Policies, approvals, and immutable audit trails give risk and compliance teams evidence for every decision.",
  },
  {
    icon: Globe02Icon,
    title: "Reachable at the edge",
    description:
      "Low-bandwidth channels and on-device models put AI in front of every customer, citizen, and field worker.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="w-full">
      <PageHero
        description="Purpose-built deployments for the sectors where privacy, uptime, and auditability decide whether AI ships at all."
        eyebrow="Solutions"
        primary={{ label: "Talk to an industry expert", href: "/contact" }}
        secondary={{ label: "Explore the platform", href: "/platform" }}
        title="AI for institutions that cannot afford to get it wrong."
      >
        <div className="landing-reveal-stagger grid grid-cols-1 gap-4 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <MediaLinkCard
              className="min-h-[24rem] md:min-h-[30rem]"
              description={solution.description}
              eyebrow={solution.audience.join(" · ")}
              href={`/solutions/${solution.slug}`}
              image={solution.image}
              key={solution.slug}
              title={solution.name}
            />
          ))}
        </div>
      </PageHero>

      <LandingSectionFrame tone="stone">
        <LandingSectionHeader
          description="Whatever the sector, every Rubani deployment is built on the same three commitments."
          eyebrow="Across every industry"
          titleLines={[
            { text: "Different missions." },
            { muted: true, text: "The same standard." },
          ]}
        />
        <CapabilityGrid items={SHARED} />
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <LandingSectionHeader
          eyebrow="How we engage"
          titleLines={[
            { text: "One workflow first." },
            { muted: true, text: "Then the whole institution." },
          ]}
          tone="dark"
        />
        <StepList steps={DEPLOYMENT_STEPS} tone="dark" />
      </LandingSectionFrame>

      <LandingCTA
        description="Tell us about your sector, systems, and the workflow that matters most. We'll show you what a sovereign deployment looks like."
        secondary={{ label: "See engagement models", href: "/pricing" }}
        title="Let's map AI to your mission."
      />
    </main>
  );
}
