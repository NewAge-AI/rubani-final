import {
  AiBrain01Icon,
  Globe02Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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

export function LandingPillars() {
  return (
    <LandingSectionFrame
      backgroundImage="/landing/solutions/government.webp"
      id="features"
    >
      <LandingSectionHeader
        description="Three beliefs that shape how Rubani is built: sovereignty over data, orchestration over lock-in, and the edge over the data centre."
        eyebrow="Core Founding Principles"
        titleLines={[
          { text: "Engineered for sovereignty," },
          { muted: true, text: "not experimentation." },
        ]}
        tone="dark"
      />

      <div className="landing-reveal-stagger mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/10 sm:grid-cols-3">
        {PRINCIPLES.map((principle) => (
          <div
            className="group relative flex flex-col gap-6 bg-[#05070c]/70 p-6 backdrop-blur-md transition-colors duration-300 hover:bg-[#05070c]/50 md:p-8"
            key={principle.title}
          >
            <div className="relative flex size-12 items-center justify-center rounded-full bg-[#8eb4ff] text-black ring-4 ring-[#8eb4ff]/15 transition-transform duration-300 group-hover:scale-105">
              <HugeiconsIcon className="size-6" icon={principle.icon} />
            </div>

            <div className="relative flex flex-col gap-3">
              <p className="font-medium text-[1.25rem] text-white tracking-[-0.02em]">
                {principle.title}
              </p>
              <p className="text-[0.9375rem] text-white/60 leading-relaxed">
                {principle.description}
              </p>
            </div>

            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#8eb4ff] transition-transform duration-300 group-hover:scale-x-100"
            />
          </div>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
