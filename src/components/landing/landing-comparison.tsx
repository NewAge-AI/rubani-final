import { Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const APPROACH = [
  {
    label: "Data",
    industry: "Sent to third-party clouds and model providers",
    rubani: "Stays in-country, inside your infrastructure",
  },
  {
    label: "Model strategy",
    industry: "One general-purpose LLM for every task",
    rubani: "Right-sized model, orchestrated per task",
  },
  {
    label: "Cost",
    industry: "Large-model pricing that scales unpredictably",
    rubani: "Small models first, significantly cheaper",
  },
  {
    label: "Vendor risk",
    industry: "Locked into a single provider's roadmap",
    rubani: "No single point of vendor lock-in",
  },
  {
    label: "Reach",
    industry: "Cloud-only, dependent on high bandwidth",
    rubani: "Edge inference, on-device, low-bandwidth",
  },
] as const;

export function LandingComparison() {
  return (
    <LandingSectionFrame tone="stone">
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <LandingSectionHeader
          description="Rubani is built against the way the industry defaults: general-purpose models, cloud-only delivery, and unpredictable cost."
          eyebrow="A differentiated approach"
          titleLines={[
            { text: "Built against the way" },
            { muted: true, text: "the industry defaults." },
          ]}
        />
        <div className="landing-reveal landing-card-media relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
          <Image
            alt="One large model beside a constellation of small, right-sized models"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src="/landing/art/small-models-vs-llm.webp"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-between gap-4 p-5 font-mono text-[0.625rem] text-white/70 uppercase tracking-[0.14em] md:p-6">
            <span>One big LLM</span>
            <span>Right-sized, orchestrated</span>
          </div>
        </div>
      </div>

      <div className="landing-reveal mt-14 overflow-hidden rounded-2xl border border-ink/8 bg-white">
        <div className="hidden grid-cols-[1fr_1.5fr_1.5fr] border-ink/8 border-b px-8 py-4 font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em] md:grid">
          <span />
          <span>Industry default</span>
          <span className="text-brand">Rubani</span>
        </div>
        <ul className="divide-y divide-ink/8">
          {APPROACH.map((item) => (
            <li
              className="grid grid-cols-1 gap-3 px-6 py-6 transition-colors hover:bg-stone/50 md:grid-cols-[1fr_1.5fr_1.5fr] md:items-center md:gap-6 md:px-8"
              key={item.label}
            >
              <p className="font-display text-[1.25rem] text-ink tracking-[-0.02em]">
                {item.label}
              </p>
              <p className="flex items-start gap-3 text-[0.9375rem] text-ink/50">
                <HugeiconsIcon
                  className="mt-0.5 size-4 shrink-0 text-ink/30"
                  icon={Cancel01Icon}
                />
                {item.industry}
              </p>
              <p className="flex items-start gap-3 text-[0.9375rem] text-ink">
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <HugeiconsIcon className="size-2.5" icon={Tick02Icon} />
                </span>
                {item.rubani}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </LandingSectionFrame>
  );
}
