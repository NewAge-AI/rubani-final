import {
  AiBrain01Icon,
  LockIcon,
  Shield01Icon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
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
    image: "/landing/solutions/data.png",
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
    image: "/landing/solutions/model.png",
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
    image: "/landing/solutions/audit.png",
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
    image: "/landing/solutions/compliance.png",
  },
] as const;

const CERTIFICATIONS = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR-aligned",
] as const;

export function LandingSecurity() {
  return (
    <LandingSectionFrame tone="muted">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <LandingSectionHeader
          description="Rubani is built for regulated environments where sovereignty, oversight, and auditability are non-negotiable."
          eyebrow="Enterprise Ready"
          titleLines={[
            { text: "Security institutions" },
            { muted: true, text: "can defend." },
          ]}
        />

        <div className="landing-reveal flex flex-wrap gap-2 lg:justify-end lg:pb-1">
          {CERTIFICATIONS.map((cert) => (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-950/12 px-3 py-1.5 font-mono text-[0.6875rem] text-neutral-600 uppercase tracking-[0.1em]"
              key={cert}
            >
              <HugeiconsIcon
                className="size-3 text-[#1b3a6b]"
                icon={Tick02Icon}
              />
              {cert}
            </span>
          ))}
        </div>
      </div>

      <div className="landing-reveal-stagger mt-12 grid grid-cols-1 gap-px overflow-hidden border border-neutral-950/10 bg-neutral-950/10 md:grid-cols-2">
        {BLOCKS.map((block) => (
          <div
            className="group relative flex flex-col bg-white"
            key={block.title}
          >
            <div className="relative h-40 w-full overflow-hidden">
              <Image
                alt=""
                className="object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={block.image}
                unoptimized
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/100 via-black/75 to-black/0"
              />
              <div
                aria-hidden="true"
                className="landing-abacus-dots absolute inset-0 opacity-20"
              />
              <p className="absolute inset-0 flex items-center justify-center font-medium text-[1.125rem] text-white tracking-[-0.02em]">
                {block.title}
              </p>
            </div>

            <div className="relative flex flex-1 flex-col px-6 pt-8 pb-7">
              <div className="-top-7 absolute left-6 flex size-12 items-center justify-center rounded-full bg-[#1b3a6b] text-white ring-4 ring-white">
                <HugeiconsIcon className="size-5" icon={block.icon} /> 
              </div>
              <p className="text-[0.9375rem] text-neutral-600 leading-relaxed transition-transform duration-300 ease-out group-hover:translate-x-1">
                {block.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-neutral-200/80 border-t pt-5">
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
            </div>
          </div>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
