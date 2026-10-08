import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingButton,
  LandingEyebrow,
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { CONTACT_RECIPIENT } from "@/constants/contact";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About Rubani",
  description:
    "Rubani is building the sovereign intelligence layer for African enterprise: small, orchestrated models that run inside institutions and reach people at the edge.",
  path: "/about",
});

const BELIEFS = [
  {
    title: "Sovereignty matters.",
    description:
      "Institutions should own their intelligence. Data that defines a bank, a hospital, or a country should not be handed to foreign model companies to make AI work.",
  },
  {
    title: "Orchestration beats one big model.",
    description:
      "Most enterprise work runs best on smaller, cheaper, open models, chosen per task. Lock-in to a single vendor is a risk, not a strategy.",
  },
  {
    title: "The edge is the opportunity.",
    description:
      "A billion people and millions of SMEs will meet AI on basic phones and in low-bandwidth places. That is where productivity will be created.",
  },
] as const;

const VALUES = [
  {
    title: "Build with institutions",
    description:
      "We design alongside the banks, agencies, and operators who will run Rubani, not in isolation from them.",
  },
  {
    title: "Right-size everything",
    description:
      "The smallest model, the simplest architecture, the shortest path to value that meets the bar.",
  },
  {
    title: "Earn trust with evidence",
    description:
      "We show our work, in our products and in how we operate, so customers can verify rather than believe.",
  },
  {
    title: "Stay accountable",
    description:
      "People remain responsible for decisions. Our job is to make those decisions better informed.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="w-full">
      <PageHero
        description="Rubani is building the sovereign intelligence layer for African enterprise: small, orchestrated models that run inside institutions and reach people at the edge."
        eyebrow="Company"
        title="AI for Africa should be owned by Africa."
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-ink md:aspect-[21/9]">
          <Image
            alt="Sunrise over an African savannah"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/landing/hero-field.webp"
          />
        </div>
      </PageHero>

      <LandingSectionFrame>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <LandingEyebrow className="self-start lg:pt-3">Our mission</LandingEyebrow>
          <p className="landing-reveal text-balance font-display font-light text-[1.75rem] text-ink leading-[1.25] tracking-[-0.025em] md:text-[2.5rem]">
            We help African institutions put AI to work on their own terms:
            inside their infrastructure, under their governance, and within
            reach of every customer and citizen they serve.
            <span className="text-ink/40">
              {" "}
              No leaked IP. No vendor lock-in. No data centre required.
            </span>
          </p>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <LandingSectionHeader
          eyebrow="What we believe"
          titleLines={[
            { text: "Three convictions" },
            { muted: true, text: "behind everything we build." },
          ]}
          tone="dark"
        />
        <ol className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {BELIEFS.map((belief, index) => (
            <li
              className="flex min-h-[20rem] flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.02] p-7 md:p-8"
              key={belief.title}
            >
              <span className="font-mono text-[0.75rem] text-coral">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-normal text-[1.5rem] text-white leading-tight tracking-[-0.02em]">
                  {belief.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-white/60 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="landing-card-media relative aspect-[5/4] overflow-hidden rounded-2xl bg-ink">
            <Image
              alt="Dot-matrix map of Africa with connected edge nodes"
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              src="/landing/art/africa-network-square.webp"
            />
          </div>
          <div>
            <LandingSectionHeader
              eyebrow="Why now"
              titleLines={[
                { text: "The next wave of AI" },
                { muted: true, text: "will be built differently." },
              ]}
            />
            <div className="landing-reveal mt-8 flex max-w-xl flex-col gap-5 text-[1.0625rem] text-ink/65 leading-relaxed">
              <p>
                The first generation of enterprise AI assumed fast networks,
                unlimited cloud budgets, and a willingness to send sensitive
                data abroad. None of those hold for most African institutions.
              </p>
              <p>
                Open models have become small enough and good enough to run
                where the data lives. Orchestrating them, per task and under
                policy, delivers the quality institutions need at a cost they
                can sustain, on infrastructure they control.
              </p>
              <p>
                Rubani exists to make that architecture practical for the
                banks, health systems, governments, and operators that keep
                the continent running.
              </p>
            </div>
          </div>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame tone="stone">
        <LandingSectionHeader
          eyebrow="How we work"
          titleLines={[{ text: "The principles" }, { muted: true, text: "we hold ourselves to." }]}
        />
        <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <div className="border-ink/15 border-t pt-6" key={value.title}>
              <h3 className="font-normal text-[1.375rem] text-ink tracking-[-0.02em]">
                {value.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] text-ink/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <div className="landing-reveal grid grid-cols-1 gap-10 overflow-hidden rounded-3xl bg-ink p-8 text-white md:grid-cols-[1.4fr_1fr] md:items-end md:p-14">
          <div>
            <LandingEyebrow tone="dark">Join us</LandingEyebrow>
            <h2 className="mt-5 font-normal text-[2.25rem] leading-[1.06] tracking-[-0.035em] md:text-[3rem]">
              Build the intelligence layer for a continent.
            </h2>
            <p className="mt-5 max-w-lg text-base text-white/65 leading-relaxed">
              We&apos;re always glad to hear from engineers, researchers, and
              operators who share our mission. Tell us what you&apos;d like to
              build.
            </p>
          </div>
          <div className="flex md:justify-end">
            <LandingButton
              href={`mailto:${CONTACT_RECIPIENT}?subject=Working%20at%20Rubani`}
              tone="dark"
            >
              Get in touch
            </LandingButton>
          </div>
        </div>
      </LandingSectionFrame>

      <LandingCTA
        description="Whether you're exploring a first pilot or planning an institution-wide programme, we'd like to hear what you're building."
        secondary={{ label: "See our security model", href: "/security" }}
        title="Let's build sovereign AI together."
      />
    </main>
  );
}
