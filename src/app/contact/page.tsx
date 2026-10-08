import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/contact/contact-email";
import { ContactForm } from "@/components/contact/contact-form";
import {
  LandingContainer,
  LandingEyebrow,
} from "@/components/landing/landing-section";
import { CONTACT_RESPONSE_TIME } from "@/constants/contact";
import { buildPageMetadata } from "@/utils/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Rubani",
  description:
    "Talk to the Rubani team about demos, institutional AI use cases, deployment, security, partnerships, and integrations.",
  path: "/contact",
});

const NEXT_STEPS = [
  {
    title: "A conversation, not a pitch",
    description:
      "A solutions lead reviews your note and replies to schedule a call with the right specialists.",
  },
  {
    title: "A demo on your use case",
    description:
      "We walk through Rubani applied to your sector, systems, and priority workflow.",
  },
  {
    title: "A scoped proposal",
    description:
      "You receive a pilot plan covering deployment footprint, timeline, and security review.",
  },
] as const;

const OTHER_TOPICS = [
  { label: "Security and risk reviews", href: "/security" },
  { label: "Engagement models", href: "/pricing" },
  { label: "Platform overview", href: "/platform" },
] as const;

export default function ContactPage() {
  return (
    <main className="w-full bg-paper">
      <LandingContainer className="pt-10 pb-16 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="landing-hero-reveal flex flex-col">
            <LandingEyebrow>Contact sales</LandingEyebrow>
            <h1 className="mt-6 text-balance font-light text-[2.375rem] text-ink leading-[1.04] tracking-[-0.04em] md:text-[4rem]">
              Let&apos;s talk about your institution.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-[1.0625rem] text-ink/65 leading-relaxed md:text-lg">
              Tell us about your systems and the workflow that matters most.
              Typical response time: {CONTACT_RESPONSE_TIME.toLowerCase()}
            </p>

            <ol className="mt-12 flex flex-col">
              {NEXT_STEPS.map((step, index) => (
                <li
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-ink/10 border-t py-6"
                  key={step.title}
                >
                  <span className="font-mono text-[0.75rem] text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display text-[1.125rem] text-ink tracking-[-0.01em]">
                      {step.title}
                    </p>
                    <p className="mt-1.5 text-[0.9375rem] text-ink/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 border-ink/10 border-t pt-8">
              <p className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
                Prefer email?
              </p>
              <div className="mt-4">
                <ContactEmail />
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {OTHER_TOPICS.map((topic) => (
                  <li key={topic.href}>
                    <Link
                      className="landing-link text-[0.875rem] text-ink/70 hover:text-ink"
                      href={topic.href}
                    >
                      {topic.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="landing-hero-reveal [animation-delay:120ms] lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-ink/8 bg-white p-6 shadow-[0_40px_80px_-48px_rgba(23,23,28,0.35)] sm:p-8 md:p-10">
              <p className="font-display text-[1.5rem] text-ink tracking-[-0.02em]">
                Request a demo
              </p>
              <p className="mt-1.5 mb-8 text-[0.9375rem] text-ink/60">
                All fields except institution are required.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </LandingContainer>
    </main>
  );
}
