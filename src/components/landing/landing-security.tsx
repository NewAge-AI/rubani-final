import {
  AiBrain01Icon,
  LockIcon,
  Shield01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  LandingIconRow,
  LandingSectionFrame,
  LandingSectionHeader,
} from "./landing-section";

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
    <LandingSectionFrame tone="muted">
      <LandingSectionHeader
        description="Rubani is built for regulated environments where sovereignty, oversight, and auditability are non-negotiable."
        eyebrow="Enterprise Ready"
        titleLines={[
          { text: "Security institutions" },
          { muted: true, text: "can defend." },
        ]}
      />

      <div className="landing-reveal-stagger mt-12 flex flex-col overflow-hidden border border-neutral-200/80 bg-white">
        {BLOCKS.map((block) => (
          <LandingIconRow
            description={block.description}
            icon={block.icon}
            key={block.title}
            title={block.title}
            variant="soft"
          >
            <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
              {block.items.map((item) => (
                <li
                  className="flex items-center gap-2 text-neutral-700 text-sm"
                  key={item}
                >
                  <HugeiconsIcon
                    className="size-3.5 shrink-0 text-[#1b3a6b]"
                    icon={Tick02Icon}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </LandingIconRow>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
