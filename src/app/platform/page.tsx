import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/components/marketing/architecture-diagram";
import { MediaLinkCard, StepList } from "@/components/marketing/blocks";
import { PageHero } from "@/components/marketing/page-hero";
import { LandingComparison } from "@/components/landing/landing-comparison";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { DEPLOYMENT_STEPS, INTEGRATIONS, PLATFORM_PRODUCTS } from "@/data/platform";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Platform",
  description:
    "The Rubani platform: governed agents, policy-driven model orchestration, a sovereign data fabric, and edge deployment for African enterprise.",
  path: "/platform",
});

export default function PlatformPage() {
  return (
    <main className="w-full">
      <PageHero
        description="Agents, orchestration, and a governed data fabric, deployed inside your infrastructure and out to the edge. One stack, owned by you."
        eyebrow="Rubani Platform"
        primary={{ label: "Request a demo", href: "/contact" }}
        secondary={{ label: "See the security model", href: "/security" }}
        title="The sovereign AI stack for African enterprise."
      >
        <ArchitectureDiagram />
      </PageHero>

      <LandingSectionFrame>
        <LandingSectionHeader
          description="Each layer works on its own and gets stronger together. Start with one, extend when you're ready."
          eyebrow="Products"
          titleLines={[
            { text: "Four products." },
            { muted: true, text: "One governed platform." },
          ]}
        />
        <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PLATFORM_PRODUCTS.map((product) => (
            <MediaLinkCard
              className="min-h-[24rem] md:min-h-[28rem]"
              description={product.summary}
              eyebrow={product.tag}
              href={`/platform/${product.slug}`}
              image={product.image}
              key={product.slug}
              title={product.name}
            />
          ))}
        </div>
      </LandingSectionFrame>

      <LandingComparison />

      <LandingSectionFrame>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <LandingSectionHeader
            description="Rubani connects to the systems you already run. No rip-and-replace, no data copied to a third-party cloud."
            sticky
            eyebrow="Integrations"
            titleLines={[
              { text: "Works with the systems" },
              { muted: true, text: "you already trust." },
            ]}
          />
          <ul className="landing-reveal-stagger grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INTEGRATIONS.map((integration) => (
              <li
                className="flex h-16 items-center rounded-xl border border-ink/8 bg-white px-4 text-[0.9375rem] text-ink"
                key={integration}
              >
                {integration}
              </li>
            ))}
          </ul>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <LandingSectionHeader
          description="A proven path from first workshop to institution-wide rollout, with governance in place from day one."
          eyebrow="How deployments work"
          titleLines={[
            { text: "From first workflow" },
            { muted: true, text: "to every department." },
          ]}
          tone="dark"
        />
        <StepList steps={DEPLOYMENT_STEPS} tone="dark" />
      </LandingSectionFrame>

      <LandingCTA
        description="See the platform running on your data, inside your environment. We'll scope a pilot around your highest-value workflow."
        secondary={{ label: "View engagement models", href: "/pricing" }}
        title="See Rubani on your own data."
      />
    </main>
  );
}
