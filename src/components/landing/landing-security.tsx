import {
  AiBrain01Icon,
  LockIcon,
  Shield01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LandingSectionFrame,
  LandingSectionHeader,
  LandingTextLink,
} from "./landing-section";

const BLOCKS = [
  {
    icon: Shield01Icon,
    title: "Sovereign by default",
    description:
      "Every deployment runs inside your infrastructure or private cloud. Zero data egress, zero shared training, zero exceptions.",
  },
  {
    icon: LockIcon,
    title: "Governed orchestration",
    description:
      "Model routing, access, and change control are policy-driven, so orchestration never becomes a black box.",
  },
  {
    icon: AiBrain01Icon,
    title: "Evidence for every decision",
    description:
      "Explainable outputs, human oversight, and immutable logs give risk teams evidence for every recommendation.",
  },
  {
    icon: Tick02Icon,
    title: "Ready for examiners",
    description:
      "Compliance reporting and institution-wide controls are built in from the architecture up, not bolted on after deployment.",
  },
] as const;

export function LandingSecurity() {
  return (
    <LandingSectionFrame id="security">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="flex flex-col lg:sticky lg:top-28 lg:self-start">
          <LandingSectionHeader
            description="Rubani is built for regulated environments where sovereignty, oversight, and auditability are non-negotiable."
            eyebrow="Enterprise ready"
            titleLines={[
              { text: "Private. Governed." },
              { muted: true, text: "Auditable by design." },
            ]}
          />
          <LandingTextLink className="mt-8 w-fit" href="/security">
            Visit the trust center
          </LandingTextLink>
        </div>

        <div className="landing-reveal-stagger grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4">
          {BLOCKS.map((block) => (
            <div
              className="flex flex-col rounded-2xl border border-ink/8 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(23,23,28,0.25)] md:p-7"
              data-spotlight=""
              key={block.title}
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <HugeiconsIcon className="size-5" icon={block.icon} />
              </span>
              <h3 className="mt-6 font-normal text-[1.25rem] text-ink tracking-[-0.02em] md:mt-10 md:text-[1.375rem]">
                {block.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] text-ink/60 leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </LandingSectionFrame>
  );
}
