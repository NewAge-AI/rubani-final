import {
  AiBrain01Icon,
  LockIcon,
  Shield01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const BLOCKS = [
  {
    icon: Shield01Icon,
    title: "Sovereign by default",
    description:
      "Every deployment runs inside your infrastructure or private cloud. Zero data egress, zero shared training, zero exceptions.",
    items: [
      "In-country residency",
      "Private cloud or on-prem",
      "Zero data egress",
      "No shared training data",
    ],
  },
  {
    icon: LockIcon,
    title: "Governed orchestration",
    description:
      "Model routing, access, and change control are policy-driven, so orchestration never becomes a black box.",
    items: [
      "Role-based access",
      "Policy-driven routing",
      "Change control",
      "Model-level permissions",
    ],
  },
  {
    icon: AiBrain01Icon,
    title: "Evidence for every decision",
    description:
      "Explainable outputs, human oversight, and immutable logs give risk teams evidence for every recommendation.",
    items: [
      "Explainable outputs",
      "Human oversight",
      "Immutable audit trails",
      "Evidence packs",
    ],
  },
  {
    icon: Tick02Icon,
    title: "Ready for examiners",
    description:
      "Compliance reporting and institution-wide controls are built in from the architecture up, not bolted on after deployment.",
    items: [
      "Compliance reporting",
      "Workflow approvals",
      "Lineage tracking",
      "Institution-wide controls",
    ],
  },
] as const;

export function LandingSecurity() {
  return (
    <LandingSectionFrame id="security">
      <LandingSectionHeader
        description="Rubani is built for regulated environments where sovereignty, oversight, and auditability are non-negotiable."
        eyebrow="Enterprise ready"
        titleLines={[
          { text: "Private. Governed. Auditable." },
          { muted: true, text: "Security institutions can defend." },
        ]}
      />

      <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        {BLOCKS.map((block) => (
          <div
            className="flex flex-col rounded-2xl border border-ink/8 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(23,23,28,0.25)] md:p-9"
            key={block.title}
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <HugeiconsIcon className="size-5" icon={block.icon} />
            </span>
            <h3 className="mt-8 font-normal text-[1.5rem] text-ink tracking-[-0.02em] md:text-[1.75rem]">
              {block.title}
            </h3>
            <p className="mt-3 max-w-md text-[0.9375rem] text-ink/60 leading-relaxed">
              {block.description}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 border-ink/8 border-t pt-6 sm:grid-cols-2">
              {block.items.map((item) => (
                <li
                  className="flex items-center gap-2.5 text-[0.875rem] text-ink/80"
                  key={item}
                >
                  <HugeiconsIcon
                    className="size-3.5 shrink-0 text-brand"
                    icon={Tick02Icon}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
