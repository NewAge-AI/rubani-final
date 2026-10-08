import {
  AuditIcon,
  Key01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import type { Metadata } from "next";
import { CapabilityGrid } from "@/components/marketing/blocks";
import { ImageHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingEyebrow,
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { CONTACT_RECIPIENT } from "@/constants/contact";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Security & Trust",
  description:
    "How Rubani keeps data sovereign: in-country deployment, governed orchestration, fine-grained access, audit trails, and human oversight.",
  path: "/security",
});

const PRINCIPLES = [
  {
    icon: Shield01Icon,
    title: "Your data stays yours",
    description:
      "Rubani runs inside your infrastructure or an in-country private cloud. We do not train shared models on your data or pass it to AI model companies.",
  },
  {
    icon: Key01Icon,
    title: "You hold the keys",
    description:
      "Encryption keys, identity, and access policy remain under your organisation's control, integrated with your existing directory.",
  },
  {
    icon: AuditIcon,
    title: "Every decision is evidenced",
    description:
      "Outputs carry their sources, model version, and approvals, recorded in tamper-evident logs your auditors can review.",
  },
];

const CONTROL_GROUPS = [
  {
    id: "data",
    title: "Data protection",
    controls: [
      {
        title: "In-country residency",
        description:
          "Data is stored and processed in the jurisdiction you choose, inside your estate.",
      },
      {
        title: "Encryption in transit and at rest",
        description:
          "TLS for every connection and encryption at rest, with keys managed by your organisation.",
      },
      {
        title: "Zero data egress",
        description:
          "No customer data leaves your environment to reach a model provider or Rubani.",
      },
      {
        title: "No shared training",
        description:
          "Your data is never used to train models for other customers.",
      },
    ],
  },
  {
    id: "access",
    title: "Access and identity",
    controls: [
      {
        title: "Single sign-on",
        description:
          "Integrates with your identity provider so joiners, movers, and leavers are handled centrally.",
      },
      {
        title: "Role-based access",
        description:
          "Permissions are scoped by role, team, and data class, for people and agents alike.",
      },
      {
        title: "Row- and field-level policy",
        description:
          "The data fabric enforces fine-grained controls before any data reaches a model.",
      },
      {
        title: "Least privilege for agents",
        description:
          "Agents receive only the tools and data their workflow requires.",
      },
    ],
  },
  {
    id: "models",
    title: "Model governance",
    controls: [
      {
        title: "Model registry and lineage",
        description:
          "Every model is versioned and evaluated, and every output traces to a known model.",
      },
      {
        title: "Policy-driven routing",
        description:
          "Which models may handle which data is defined as versioned, reviewable policy.",
      },
      {
        title: "Model-level permissions",
        description:
          "Restrict models by team, workflow, and data sensitivity.",
      },
      {
        title: "Evaluation and drift monitoring",
        description:
          "Quality is tracked continuously, with automatic fallback when a model underperforms.",
      },
    ],
  },
  {
    id: "oversight",
    title: "Audit and oversight",
    controls: [
      {
        title: "Immutable audit trails",
        description:
          "Prompts, retrievals, outputs, and approvals are logged for review.",
      },
      {
        title: "Human-in-the-loop",
        description:
          "Confidence thresholds and review queues keep people accountable for outcomes.",
      },
      {
        title: "Explainable outputs",
        description:
          "Recommendations cite the records and documents they rely on.",
      },
      {
        title: "Evidence packs",
        description:
          "Export the evidence examiners and auditors need, per decision or per workflow.",
      },
    ],
  },
] as const;

const DEPLOYMENT_MODELS = [
  {
    label: "Where data lives",
    values: ["Your data centre", "In-country private cloud", "On branch hardware and devices"],
  },
  {
    label: "Network posture",
    values: ["Air-gap capable", "Private networking", "Online, intermittent, or offline"],
  },
  {
    label: "Who operates it",
    values: ["Your team, with Rubani support", "Your team or a managed service", "Central control plane"],
  },
  {
    label: "Best for",
    values: ["Highest-sensitivity workloads", "Scaling across departments", "Field and customer reach"],
  },
] as const;

const REGIMES = [
  "Kenya Data Protection Act, 2019",
  "Nigeria Data Protection Act, 2023",
  "South Africa POPIA",
  "Ghana Data Protection Act, 2012",
  "Rwanda Law No. 058/2021",
  "Uganda Data Protection and Privacy Act, 2019",
  "Sector regulator and central bank guidance",
  "GDPR, for cross-border operations",
] as const;

export default function SecurityPage() {
  return (
    <main className="w-full">
      <ImageHero
        description="Rubani is built for regulated environments where sovereignty, oversight, and auditability are non-negotiable. Security isn't a layer we add. It's the architecture."
        eyebrow="Security & Trust"
        image="/landing/solutions/360-fabric.webp"
        primary={{ label: "Request our security pack", href: "/contact" }}
        secondary={{ label: "Talk to our security team", href: "/contact" }}
        title="Sovereign by architecture. Secure by default."
      />

      <LandingSectionFrame>
        <LandingSectionHeader
          eyebrow="Our commitments"
          titleLines={[
            { text: "Three promises" },
            { muted: true, text: "we design everything around." },
          ]}
        />
        <CapabilityGrid items={PRINCIPLES} />
      </LandingSectionFrame>

      <LandingSectionFrame tone="stone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <LandingSectionHeader
              description="The controls your security, risk, and compliance teams will review, built in from the architecture up."
              eyebrow="Controls"
              titleLines={[{ text: "Security controls" }, { muted: true, text: "at every layer." }]}
            />
            <nav aria-label="Control categories" className="hidden flex-col gap-1 lg:flex">
              {CONTROL_GROUPS.map((group) => (
                <a
                  className="w-fit rounded-full px-3 py-1.5 text-[0.875rem] text-ink/60 transition-colors hover:bg-white hover:text-ink"
                  href={`#${group.id}`}
                  key={group.id}
                >
                  {group.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-12">
            {CONTROL_GROUPS.map((group) => (
              <section className="scroll-mt-24" id={group.id} key={group.id}>
                <h3 className="font-normal text-[1.5rem] text-ink tracking-[-0.02em]">
                  {group.title}
                </h3>
                <ul className="landing-reveal mt-5 divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white">
                  {group.controls.map((control) => (
                    <li
                      className="grid grid-cols-1 gap-2 px-6 py-5 sm:grid-cols-[1fr_1.4fr] sm:gap-8 md:px-7"
                      key={control.title}
                    >
                      <p className="flex items-center gap-2.5 text-[1rem] text-ink">
                        <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                        {control.title}
                      </p>
                      <p className="text-[0.9375rem] text-ink/60 leading-relaxed">
                        {control.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <LandingSectionHeader
          description="Choose the footprint each workload needs. Mix models within one institution, governed from one control plane."
          eyebrow="Deployment models"
          titleLines={[{ text: "Deploy where" }, { muted: true, text: "your risk posture requires." }]}
        />
        <div className="landing-reveal mt-14 overflow-x-auto rounded-2xl border border-ink/8 bg-white">
          <table className="w-full min-w-[44rem] text-left">
            <thead>
              <tr className="border-ink/8 border-b">
                <th className="w-[22%] px-6 py-5 md:px-8" scope="col">
                  <span className="sr-only">Attribute</span>
                </th>
                {["On-premise", "Private cloud", "Edge"].map((heading) => (
                  <th
                    className="px-6 py-5 font-normal font-display text-[1.25rem] text-ink tracking-[-0.02em] md:px-8"
                    key={heading}
                    scope="col"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/8">
              {DEPLOYMENT_MODELS.map((row) => (
                <tr key={row.label}>
                  <th
                    className="px-6 py-5 font-mono font-normal text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em] md:px-8"
                    scope="row"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value) => (
                    <td
                      className="px-6 py-5 text-[0.9375rem] text-ink/80 md:px-8"
                      key={value}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <LandingSectionHeader
            description="Deployments are architected to help institutions meet their obligations under African data protection law and sector regulation. Your counsel and regulators remain the final word on compliance."
            eyebrow="Regulatory alignment"
            titleLines={[
              { text: "Designed for African" },
              { muted: true, text: "data protection regimes." },
            ]}
            tone="dark"
          />
          <ul className="landing-reveal-stagger grid grid-cols-1 gap-3 self-end sm:grid-cols-2">
            {REGIMES.map((regime) => (
              <li
                className="flex min-h-16 items-center rounded-xl border border-white/12 bg-white/[0.03] px-5 py-4 text-[0.9375rem] text-white/85"
                key={regime}
              >
                {regime}
              </li>
            ))}
          </ul>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="landing-reveal flex flex-col justify-between gap-10 rounded-2xl border border-ink/8 bg-white p-8 md:p-10">
            <div>
              <LandingEyebrow>Security review</LandingEyebrow>
              <h3 className="mt-5 font-normal text-[1.75rem] text-ink leading-tight tracking-[-0.02em]">
                Request our security pack
              </h3>
              <p className="mt-3 max-w-md text-[0.9375rem] text-ink/60 leading-relaxed">
                Architecture overview, data-flow diagrams, and answers to
                standard security questionnaires for your review.
              </p>
            </div>
            <a
              className="landing-link w-fit font-medium text-[0.9375rem] text-ink"
              href="/contact"
            >
              Request access
            </a>
          </div>
          <div className="landing-reveal flex flex-col justify-between gap-10 rounded-2xl border border-ink/8 bg-white p-8 md:p-10">
            <div>
              <LandingEyebrow>Responsible disclosure</LandingEyebrow>
              <h3 className="mt-5 font-normal text-[1.75rem] text-ink leading-tight tracking-[-0.02em]">
                Report a vulnerability
              </h3>
              <p className="mt-3 max-w-md text-[0.9375rem] text-ink/60 leading-relaxed">
                If you believe you've found a security issue, email us with
                details and steps to reproduce. We'll acknowledge promptly and
                keep you updated.
              </p>
            </div>
            <a
              className="landing-link w-fit font-medium text-[0.9375rem] text-ink"
              href={`mailto:${CONTACT_RECIPIENT}?subject=Security%20disclosure`}
            >
              {CONTACT_RECIPIENT}
            </a>
          </div>
        </div>
      </LandingSectionFrame>

      <LandingCTA
        description="Walk through our architecture with your security and risk teams, and see exactly where your data lives at every step."
        secondary={{ label: "Explore the platform", href: "/platform" }}
        title="Security you can defend to your board."
      />
    </main>
  );
}
