import {
  AiBrain01Icon,
  ArrowRight01Icon,
  Globe02Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LiveAfricaMap } from "../marketing/live-africa-map";
import { MediaBackground } from "../marketing/media";
import Link from "next/link";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const PRINCIPLES = [
  {
    icon: Shield01Icon,
    title: "Sovereignty matters. Own your intelligence.",
    description:
      "Your data stays yours, inside your infrastructure and under your control. We do not give it away to AI model companies.",
  },
  {
    icon: AiBrain01Icon,
    title: "Model orchestration, not one big LLM.",
    description:
      "Most enterprise workloads will run on smaller, cheaper, open-source models. Orchestration is required; lock-in to one vendor is not.",
  },
  {
    icon: Globe02Icon,
    title: "Edge AI is the African opportunity.",
    description:
      "A billion people and SMEs will be reached at the edge, not from a cloud data centre, where productivity is created.",
  },
] as const;

function PrincipleText({
  principle,
}: {
  principle: (typeof PRINCIPLES)[number];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-display text-[1.25rem] text-white leading-tight tracking-[-0.02em] md:text-[1.5rem]">
        {principle.title}
      </p>
      <p className="max-w-md text-[0.9375rem] text-white/60 leading-relaxed">
        {principle.description}
      </p>
    </div>
  );
}

function PrincipleIcon({ icon }: { icon: (typeof PRINCIPLES)[number]["icon"] }) {
  return (
    <span className="flex size-11 items-center justify-center rounded-xl border border-white/15 text-[#a9c1ee]">
      <HugeiconsIcon className="size-5" icon={icon} />
    </span>
  );
}

export function LandingPillars() {
  const [sovereignty, orchestration, edge] = PRINCIPLES;

  return (
    <LandingSectionFrame id="features" tone="dark">
      <div
        aria-hidden="true"
        className="landing-grain pointer-events-none absolute inset-0 opacity-60"
      />
      <LandingSectionHeader
        description="Three beliefs shape how Rubani is built: sovereignty over data, orchestration over lock-in, and the edge over the data centre."
        eyebrow="Founding principles"
        titleLines={[
          { text: "Sovereign. Orchestrated." },
          { muted: true, text: "Edge-first by design." },
        ]}
        tone="dark"
      />

      <div className="landing-reveal-stagger relative mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="landing-card-media relative flex min-h-[20rem] flex-col justify-end overflow-hidden rounded-2xl md:col-span-2 md:min-h-[24rem]">
          <MediaBackground
            sizes="(max-width: 768px) 100vw, 66vw"
            src="/landing/art/security.webp"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-midnight via-midnight/60 to-midnight/5"
          />
          <div className="relative p-6 md:p-9">
            <PrincipleText principle={sovereignty} />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/12 bg-white/[0.02] p-6 md:min-h-[24rem] md:gap-10 md:p-9" data-spotlight="dark">
          <PrincipleIcon icon={orchestration.icon} />
          <PrincipleText principle={orchestration} />
        </div>

        <div className="flex flex-col justify-between gap-8 rounded-2xl border border-white/12 bg-white/[0.02] p-6 md:min-h-[22rem] md:gap-10 md:p-9" data-spotlight="dark">
          <PrincipleIcon icon={edge.icon} />
          <PrincipleText principle={edge} />
        </div>

        <div className="landing-card-media relative flex min-h-[20rem] flex-col justify-between overflow-hidden rounded-2xl p-6 md:col-span-2 md:min-h-[22rem] md:p-9">
          <div aria-hidden="true" className="absolute inset-0 bg-midnight">
            <div className="absolute inset-y-0 right-0 w-full opacity-60 md:w-[62%] md:opacity-100">
              <LiveAfricaMap />
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-midnight via-midnight/75 to-midnight/10"
          />
          <p className="relative font-mono text-[0.6875rem] text-white/60 uppercase tracking-[0.14em]">
            The Rubani thesis
          </p>
          <div className="relative flex flex-col gap-6">
            <p className="max-w-lg font-display text-[1.5rem] text-white leading-[1.15] tracking-[-0.03em] sm:text-[1.75rem] md:text-[2.25rem]">
              Africa&apos;s next billion AI users will be reached at the edge.
            </p>
            <Link
              className="landing-link inline-flex w-fit items-center gap-1.5 font-medium text-[0.9375rem] text-white"
              href="/contact"
            >
              Request a briefing
              <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
            </Link>
          </div>
        </div>
      </div>
    </LandingSectionFrame>
  );
}
