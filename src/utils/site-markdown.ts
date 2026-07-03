import { BRAND_ASSETS, BRAND_COLORS, BRAND_FONTS } from "@/lib/brand/constants";
import {
  COMPARISON_FEATURES,
  PRICING_PLANS,
  SOCIAL_PROOF_LOGOS,
} from "@/utils/constants";
import { markdownSection } from "@/utils/markdown";
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/utils/metadata";
import { SITE_URL } from "@/utils/urls";

const FAQ_ITEMS = [
  {
    question: "What is Rubani and who is it for?",
    answer:
      "Rubani is an institutional intelligence platform for regulated and mission-critical organisations, including financial services, healthcare, government, utilities, manufacturing, and education.",
  },
  {
    question: "What does Rubani generate?",
    answer:
      "Rubani generates explainable insights, recommendations, alerts, reports, and workflow outputs from authorized institutional data.",
  },
  {
    question: "Which integrations are available right now?",
    answer:
      "Rubani connects through APIs, databases, files, event streams, and custom connectors for legacy, cloud, and proprietary systems.",
  },
  {
    question: "How does governed AI work?",
    answer:
      "Recommendations can include source evidence, confidence, reasoning, approvals, and audit history so humans remain in control.",
  },
  {
    question: "Is Rubani only for banks?",
    answer:
      "No. Rubani supports banks and financial institutions, but also governments, healthcare providers, utilities, manufacturers, education systems, and other institutions.",
  },
  {
    question: "Can Rubani deploy inside our infrastructure?",
    answer:
      "Yes. Rubani supports private cloud, on-premise, hybrid, and sovereign deployment models for strict security and residency needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Request a demo. We will map your systems, priority workflow, deployment needs, and first intelligence use case.",
  },
] as const;

function renderPlanPrice(
  plan: (typeof PRICING_PLANS)[keyof typeof PRICING_PLANS],
  billingPeriod: "monthly" | "annually"
) {
  if (plan.pricing[billingPeriod] === null) {
    return "Contact us";
  }

  const price = plan.pricing[billingPeriod];

  if (billingPeriod === "annually") {
    return "Custom annual engagement";
  }

  return "Custom monthly engagement";
}

function renderPlanFeatures(
  plan: (typeof PRICING_PLANS)[keyof typeof PRICING_PLANS]
) {
  return plan.features.map((feature) => {
    if (typeof feature === "string") {
      return `- ${feature}`;
    }

    return `- ${feature.label} (${feature.subtitle})`;
  });
}

function renderComparisonValue(value: boolean | string): string {
  if (typeof value !== "boolean") {
    return value;
  }

  return value ? "Yes" : "No";
}

export function buildFeaturesMarkdown() {
  return [
    "# Features",
    "",
    "Rubani connects institutional systems and delivers trusted, governed intelligence for critical decisions.",
    "",
    markdownSection("Core Features", [
      "### Institutional signals organized",
      "Risk, operations, finance, and compliance signals land in one place.",
      "",
      "### Explainable intelligence",
      "Rubani shows source evidence, confidence, and reasoning behind recommendations.",
      "",
      "### Flexible integrations",
      "APIs, databases, files, event streams, and custom connectors bring existing systems together.",
      "",
      "### More to come",
      "We are building new features every week.",
    ]),
    markdownSection("Publishing Workflows", [
      "### Automate reporting",
      "Operational, board, and regulatory packs compile with source lineage.",
      "",
      "### Route decision workflows",
      "Recommendations move to the right owners with approvals and evidence.",
      "",
      "### Monitor critical signals",
      "Risk, service, and operational changes are flagged before issues escalate.",
    ]),
    markdownSection("Next Steps", [
      "- [Engagements](https://rubani.ai/pricing.md)",
      "- [Resources](https://rubani.ai/blog.md)",
      "- [Request a demo](https://rubani.ai/contact)",
    ]),
  ].join("\n");
}

export function buildPricingMarkdown() {
  const planSections = Object.values(PRICING_PLANS)
    .map((plan) =>
      [
        `## ${plan.name}`,
        "",
        plan.description,
        "",
        `Monthly: ${renderPlanPrice(plan, "monthly")}`,
        `Annual: ${renderPlanPrice(plan, "annually")}`,
        `CTA: [${plan.cta.label}](${plan.cta.href})`,
        "",
        ...renderPlanFeatures(plan),
        "",
      ].join("\n")
    )
    .join("\n");

  const comparisonSections = COMPARISON_FEATURES.map(({ category, features }) =>
    markdownSection(
      category,
      features.map((feature) => {
        const basic = renderComparisonValue(feature.basic);
        const pro = renderComparisonValue(feature.pro);
        const enterprise = renderComparisonValue(feature.enterprise);

        return `- ${feature.name}: Basic ${basic}, Pro ${pro}, Enterprise ${enterprise}`;
      })
    )
  ).join("\n");

  return [
    "# Pricing",
    "",
    "Explore Rubani engagement options for pilots, platform deployments, and enterprise programmes.",
    "",
    "Start with a focused workflow. Expand when you need more systems, teams, and decision flows.",
    "",
    planSections,
    "## Feature Comparison",
    "",
    comparisonSections,
  ].join("\n");
}

export function buildLandingMarkdown() {
  const socialProofLines = SOCIAL_PROOF_LOGOS.map(
    (logo) => `- [${logo.name}](${logo.href})`
  );

  return [
    "# Rubani",
    "",
    SITE_TAGLINE,
    "",
    SITE_DESCRIPTION,
    "",
    "Primary CTA: [Request a demo](https://rubani.ai/contact)",
    "",
    markdownSection("Explore in Markdown", [
      "- [Features](https://rubani.ai/features.md)",
      "- [Engagements](https://rubani.ai/pricing.md)",
      "- [Resources](https://rubani.ai/blog.md)",
    ]),
    markdownSection("Social Proof", [
      "Institutions trust Rubani for critical decisions.",
      "Rubani turns fragmented operational data into governed intelligence for every team.",
      "",
      ...socialProofLines,
    ]),
    markdownSection("Features", [
      "Your systems run. Rubani connects the intelligence.",
      "Rubani connects core systems, ERPs, CRMs, and data stores, then surfaces explainable insight.",
      "",
      "See the dedicated feature page: [Features](https://rubani.ai/features.md)",
    ]),
    markdownSection("Pricing", [
      "Engagements shaped around your institution.",
      "Start with a focused workflow. Expand when you need more systems, teams, and decision flows.",
      "",
      "See the dedicated engagements page: [Engagements](https://rubani.ai/pricing.md)",
    ]),
    markdownSection(
      "FAQ",
      FAQ_ITEMS.flatMap((item) => [`### ${item.question}`, item.answer, ""])
    ),
    markdownSection("Call to Action", [
      "Turn institutional data into trusted decisions.",
      "Your institution already has the data. Let Rubani turn it into explainable intelligence.",
      "",
      "[Request a demo](https://rubani.ai/contact)",
    ]),
  ].join("\n");
}

export function buildBrandMarkdown() {
  const colorLines = BRAND_COLORS.map(
    (color) => `- ${color.name}: ${color.hex} (${color.value}) - ${color.usage}`
  );
  const fontLines = BRAND_FONTS.map(
    (font) => `- [${font.name}](${font.googleFontsUrl}) - ${font.role}`
  );

  return [
    "# Brand Guidelines",
    "",
    "Official assets and guidelines to help you reference the Rubani brand, including our logo, colors and typography.",
    "",
    markdownSection("Assets", [
      `- [Brand asset](${SITE_URL}${BRAND_ASSETS.zip})`,
      `- Logo: [SVG](${SITE_URL}${BRAND_ASSETS.mark.svg}) / [PNG](${SITE_URL}${BRAND_ASSETS.mark.png})`,
      `- Wordmark: [SVG](${SITE_URL}${BRAND_ASSETS.wordmark.svg}) / [PNG](${SITE_URL}${BRAND_ASSETS.wordmark.png})`,
      `- Wordmark for dark surfaces: [SVG](${SITE_URL}${BRAND_ASSETS.wordmarkDark.svg}) / [PNG](${SITE_URL}${BRAND_ASSETS.wordmarkDark.png})`,
    ]),
    markdownSection("Logo", [
      "The Rubani mark uses warm ink, cream, navy, and coral accents.",
      "Keep it on a light surface and give it room to breathe. On dark surfaces, place the mark on a cream tile.",
    ]),
    markdownSection("Colors", colorLines),
    markdownSection("Typography", [
      ...fontLines,
      "",
      "The wordmark sets the Rubani name next to the mark.",
    ]),
  ].join("\n");
}
