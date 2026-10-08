import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/marketing/faq-list";
import { PageHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingEyebrow,
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { COMPARISON_FEATURES, PRICING_PLANS } from "@/utils/constants";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing",
  description:
    "Rubani engagement models for pilots, platform deployments, and enterprise institutional AI programmes.",
  path: "/pricing",
});

const TIERS = [
  { key: "basic", plan: PRICING_PLANS.basic, featured: false },
  { key: "pro", plan: PRICING_PLANS.pro, featured: true },
  { key: "enterprise", plan: PRICING_PLANS.enterprise, featured: false },
] as const;

const PRICING_FAQ = [
  {
    question: "Why don't you publish prices?",
    answer:
      "Every deployment depends on your infrastructure, data estate, workloads, and regulatory requirements. We scope each engagement so you pay for what you actually run, with no surprises later.",
  },
  {
    question: "How is pricing structured?",
    answer:
      "Engagements typically combine a platform subscription with implementation services. Because Rubani routes most work to small models running in your environment, compute costs stay predictable as usage grows.",
  },
  {
    question: "How long does a pilot take?",
    answer:
      "Pilots focus on one high-value workflow. Most institutions move from scoping to a working, governed workflow in weeks, ending with an executive readout and a recommendation.",
  },
  {
    question: "Can we start with a pilot and expand?",
    answer:
      "Yes. Pilots are designed to graduate into a platform deployment. The connectors, governance, and models you build carry forward.",
  },
  {
    question: "Do you support procurement and security reviews?",
    answer:
      "Yes. Every engagement includes security review support, and we work with procurement, legal, and risk teams through standard due diligence.",
  },
] as const;

function renderCell(value: string | boolean) {
  if (value === true) {
    return (
      <HugeiconsIcon
        aria-label="Included"
        className="size-4 text-brand"
        icon={Tick02Icon}
      />
    );
  }
  if (value === false) {
    return (
      <span aria-label="Not included" className="text-ink/30">
        —
      </span>
    );
  }
  return value;
}

export default function PricingPage() {
  return (
    <main className="w-full">
      <PageHero
        description="Start with one high-value workflow, then scale across the institution. Every engagement is scoped to your infrastructure, data, and regulatory context."
        eyebrow="Pricing"
        title="Engagement models built around your institution."
      >
        <div className="landing-reveal-stagger grid grid-cols-1 gap-4 lg:grid-cols-3">
          {TIERS.map(({ key, plan, featured }) => (
            <div
              data-spotlight={featured ? "dark" : ""}
              className={cn(
                "flex flex-col rounded-2xl border p-6 md:p-8",
                featured
                  ? "border-ink bg-ink text-white"
                  : "border-ink/8 bg-white text-ink"
              )}
              key={key}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-[1.5rem] tracking-[-0.02em]">
                  {plan.name}
                </p>
                {featured ? (
                  <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[0.625rem] text-white/80 uppercase tracking-[0.14em]">
                    Most common
                  </span>
                ) : null}
              </div>
              <p
                className={cn(
                  "mt-2 text-[0.9375rem] leading-relaxed",
                  featured ? "text-white/65" : "text-ink/60"
                )}
              >
                {plan.description}
              </p>
              <p className="mt-6 font-display font-light text-[2rem] tracking-[-0.035em] md:mt-8 md:text-[2.25rem]">
                Custom
              </p>
              <p
                className={cn(
                  "text-[0.8125rem]",
                  featured ? "text-white/50" : "text-ink/50"
                )}
              >
                Scoped to your deployment
              </p>
              <Link
                className={cn(
                  "mt-6 inline-flex h-11 items-center justify-center rounded-full font-medium text-[0.9375rem] transition-colors md:mt-8",
                  featured
                    ? "bg-white text-ink hover:bg-white/90"
                    : "bg-ink text-white hover:bg-black"
                )}
                href={plan.cta.href}
              >
                {plan.cta.label}
              </Link>
              <ul
                className={cn(
                  "mt-6 flex flex-col gap-2.5 border-t pt-5 md:mt-8 md:gap-3 md:pt-6",
                  featured ? "border-white/15" : "border-ink/8"
                )}
              >
                {plan.features.map((feature) => {
                  const label =
                    typeof feature === "string" ? feature : feature.label;
                  return (
                    <li
                      className={cn(
                        "flex items-start gap-2.5 text-[0.9375rem]",
                        featured ? "text-white/85" : "text-ink/80"
                      )}
                      key={label}
                    >
                      <HugeiconsIcon
                        className={cn(
                          "mt-1 size-3.5 shrink-0",
                          featured ? "text-[#a9c1ee]" : "text-brand"
                        )}
                        icon={Tick02Icon}
                      />
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </PageHero>

      <LandingSectionFrame tone="stone">
        <LandingSectionHeader
          eyebrow="Compare"
          titleLines={[{ text: "What each engagement" }, { muted: true, text: "includes." }]}
        />
        <div className="landing-reveal mt-10 flex flex-col gap-3 md:hidden">
          {COMPARISON_FEATURES.map((group) => (
            <div
              className="overflow-hidden rounded-2xl border border-ink/8 bg-white"
              key={group.category}
            >
              <p className="bg-stone/50 px-5 py-3 font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
                {group.category}
              </p>
              <dl className="divide-y divide-ink/8">
                {group.features.map((feature) => (
                  <div className="px-5 py-4" key={feature.name}>
                    <dt className="text-[0.9375rem] text-ink">{feature.name}</dt>
                    <dd className="mt-3 grid grid-cols-3 gap-2">
                      {TIERS.map(({ key, plan }) => (
                        <span className="flex flex-col gap-1" key={key}>
                          <span className="font-mono text-[0.5625rem] text-ink/45 uppercase tracking-[0.12em]">
                            {plan.name}
                          </span>
                          <span className="text-[0.875rem] text-ink/75">
                            {renderCell(feature[key])}
                          </span>
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
        <div className="landing-reveal mt-14 hidden overflow-x-auto rounded-2xl border border-ink/8 bg-white md:block">
          <table className="w-full min-w-[40rem] text-left">
            <thead>
              <tr className="border-ink/8 border-b">
                <th className="w-[34%] px-6 py-5 md:px-8" scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {TIERS.map(({ key, plan }) => (
                  <th
                    className="px-6 py-5 font-display font-normal text-[1.125rem] text-ink tracking-[-0.02em] md:px-8"
                    key={key}
                    scope="col"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            {COMPARISON_FEATURES.map((group) => (
              <tbody className="border-ink/8 border-b last:border-b-0" key={group.category}>
                <tr>
                  <th
                    className="bg-stone/50 px-6 py-3 font-mono font-normal text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em] md:px-8"
                    colSpan={4}
                    scope="colgroup"
                  >
                    {group.category}
                  </th>
                </tr>
                {group.features.map((feature) => (
                  <tr className="border-ink/6 border-t" key={feature.name}>
                    <th
                      className="px-6 py-4 font-normal text-[0.9375rem] text-ink md:px-8"
                      scope="row"
                    >
                      {feature.name}
                    </th>
                    {TIERS.map(({ key }) => (
                      <td
                        className="px-6 py-4 text-[0.9375rem] text-ink/70 md:px-8"
                        key={key}
                      >
                        {renderCell(feature[key])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
            <LandingEyebrow>FAQ</LandingEyebrow>
            <h2 className="font-normal text-[2rem] text-ink leading-[1.08] tracking-[-0.035em] sm:text-[2.5rem] md:text-[3rem]">
              Pricing questions.
            </h2>
            <p className="max-w-sm text-base text-ink/60 leading-relaxed">
              Anything else? Our team can walk you through a typical
              engagement.
            </p>
          </div>
          <FaqList items={PRICING_FAQ} />
        </div>
      </LandingSectionFrame>

      <LandingCTA
        description="Tell us about your institution and priority workflow. We'll come back with a scoped proposal."
        secondary={{ label: "Explore the platform", href: "/platform" }}
        title="Get a scoped proposal."
      />
    </main>
  );
}
