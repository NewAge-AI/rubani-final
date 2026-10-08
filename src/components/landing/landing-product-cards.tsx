import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  LandingEyebrow,
  LandingSectionFrame,
  LandingSectionHeader,
  LandingTextLink,
} from "./landing-section";

function OverlayCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[22rem] rounded-xl border border-white/10 bg-ink/80 p-4 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      {children}
    </div>
  );
}

function AgentsOverlay() {
  return (
    <OverlayCard>
      <div className="flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-coral font-display font-medium text-[0.8125rem] text-white">
          R
        </span>
        <p className="text-[0.875rem] text-white/90 leading-snug">
          Three applicants match the SME profile. I&apos;ve drafted credit
          memos with cited evidence for review.
        </p>
      </div>
      <div className="mt-3 flex gap-2 pl-10">
        <span className="rounded-md bg-white px-2.5 py-1 font-medium text-[0.75rem] text-ink">
          Review memos
        </span>
        <span className="rounded-md border border-white/15 px-2.5 py-1 text-[0.75rem] text-white/75">
          Escalate
        </span>
      </div>
    </OverlayCard>
  );
}

const ROUTES = [
  { task: "KYC extraction", model: "Small · 3B", ms: "42ms" },
  { task: "Credit memo", model: "Medium · 8B", ms: "310ms" },
  { task: "Swahili support", model: "Edge · 1B", ms: "18ms" },
] as const;

function OrchestrationOverlay() {
  return (
    <OverlayCard>
      <p className="font-mono text-[0.625rem] text-white/50 uppercase tracking-[0.14em]">
        Routing policy
      </p>
      <ul className="mt-3 flex flex-col divide-y divide-white/10">
        {ROUTES.map((route) => (
          <li
            className="flex items-center justify-between gap-3 py-2 text-[0.8125rem]"
            key={route.task}
          >
            <span className="text-white/85">{route.task}</span>
            <span className="flex items-center gap-3">
              <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.6875rem] text-white/80">
                {route.model}
              </span>
              <span className="w-10 text-right font-mono text-[0.6875rem] text-white/45">
                {route.ms}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </OverlayCard>
  );
}

const SOURCES = ["Transactions", "Devices", "Customers", "Compliance"] as const;

function FabricOverlay() {
  return (
    <OverlayCard>
      <p className="font-mono text-[0.625rem] text-white/50 uppercase tracking-[0.14em]">
        Data fabric
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {SOURCES.map((source) => (
          <span
            className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-2.5 py-2 text-[0.75rem] text-white/85"
            key={source}
          >
            {source}
            <span className="size-1.5 rounded-full bg-emerald-400" />
          </span>
        ))}
      </div>
      <p className="mt-3 text-[0.75rem] text-white/55">
        4 sources aligned · lineage tracked
      </p>
    </OverlayCard>
  );
}

const PRODUCTS = [
  {
    tag: "Applications",
    title: "Agents & Copilots",
    description:
      "Credit, savings, customer, and SME agents, plus developer APIs, deployed as copilots across the business.",
    image: "/landing/solutions/agents.webp",
    overlay: <AgentsOverlay />,
  },
  {
    tag: "Orchestration",
    title: "Smart Model Orchestration",
    description:
      "The right-sized model for every task, balancing accuracy, cost, privacy, and latency.",
    image: "/landing/solutions/orchestration.webp",
    overlay: <OrchestrationOverlay />,
  },
  {
    tag: "Data",
    title: "360° Data Fabric",
    description:
      "Integrates, aligns, and contextualizes your data, from transactions and devices to customers, markets, and compliance, into one fabric that turns it into actionable insight.",
    image: "/landing/solutions/360-fabric.webp",
    overlay: <FabricOverlay />,
  },
] as const;

export function LandingProductCards() {
  return (
    <LandingSectionFrame id="platform">
      <LandingSectionHeader
        description="How the three founding principles become a full stack, from customer-facing agents down to the sovereign data fabric underneath them."
        eyebrow="Rubani Platform"
        titleLines={[
          { text: "One platform, from agent" },
          { muted: true, text: "to data fabric." },
        ]}
      />

      <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
        {PRODUCTS.map((product, index) => (
          <article
            className="landing-reveal grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
            key={product.tag}
          >
            <div className={cn("max-w-md", index % 2 === 1 && "md:order-2")}>
              <LandingEyebrow>{product.tag}</LandingEyebrow>
              <h3 className="mt-4 font-normal text-[2rem] text-ink leading-[1.08] tracking-[-0.03em] md:text-[2.75rem]">
                {product.title}
              </h3>
              <p className="mt-4 text-[1.0625rem] text-ink/65 leading-relaxed">
                {product.description}
              </p>
              <LandingTextLink className="mt-7" href="/contact">
                Talk to an expert
                <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
              </LandingTextLink>
            </div>

            <div className="landing-card-media relative flex aspect-[5/4] items-end overflow-hidden rounded-2xl bg-ink p-5 md:p-8">
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={product.image}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/20 to-transparent"
              />
              <div className="relative">{product.overlay}</div>
            </div>
          </article>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
