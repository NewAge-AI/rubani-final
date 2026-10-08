"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import { useState } from "react";
import {
  LandingSectionFrame,
  LandingSectionHeader,
  LandingTextLink,
} from "./landing-section";

const SOLUTIONS = [
  {
    id: "financial-services",
    tab: "Financial Services",
    description:
      "Banks, SACCOs, insurers, and digital lenders run credit, KYC, and fraud agents inside their own infrastructure, cutting review time without sending customer data to a foreign cloud.",
        cta: "See how banks use Rubani",
    image: "/landing/solutions/financial-services.webp",
  },
  {
    id: "healthcare",
    tab: "Healthcare",
    description:
      "Hospitals, clinics, and health networks deploy clinical copilots and records intelligence on-premise, keeping patient data sovereign while still reaching frontline staff at the edge.",
        cta: "See how healthcare uses Rubani",
    image: "/landing/solutions/healthcare.webp",
  },
  {
    id: "government",
    tab: "Government",
    description:
      "Ministries, agencies, and parastatals modernise citizen services with orchestrated, auditable AI that stays in-country and satisfies public-sector governance requirements.",
        cta: "See how government uses Rubani",
    image: "/landing/solutions/government.webp",
  },
  {
    id: "telecom-utilities",
    tab: "Telecommunications & Utilities",
    description:
      "Networks, billing, and utility operators orchestrate OSS/BSS and customer-care agents at the edge, reaching low-bandwidth regions without routing traffic through distant data centres.",
        cta: "See how operators use Rubani",
    image: "/landing/solutions/telecom-utilities.webp",
  },
] as const;

export function LandingSolutions() {
  const [activeId, setActiveId] = useState<(typeof SOLUTIONS)[number]["id"]>(
    SOLUTIONS[0].id
  );

  return (
    <LandingSectionFrame id="solutions">
      <LandingSectionHeader
        description="Purpose-built deployments for the sectors where privacy, uptime, and auditability decide whether AI ships at all."
        eyebrow="Industry solutions"
        titleLines={[
          { text: "AI infrastructure for industries" },
          { muted: true, text: "that cannot afford to get it wrong." },
        ]}
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div className="flex flex-col border-ink/10 border-t" role="tablist">
          {SOLUTIONS.map((solution) => {
            const isActive = solution.id === activeId;
            return (
              <div className="border-ink/10 border-b" key={solution.id}>
                <button
                  aria-controls={`solution-${solution.id}`}
                  aria-selected={isActive}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  id={`solution-tab-${solution.id}`}
                  onClick={() => setActiveId(solution.id)}
                  role="tab"
                  type="button"
                >
                  <span
                    className={cn(
                      "font-display text-[1.375rem] tracking-[-0.02em] transition-colors md:text-[1.625rem]",
                      isActive ? "text-ink" : "text-ink/40 hover:text-ink/70"
                    )}
                  >
                    {solution.tab}
                  </span>
                  <span
                    className={cn(
                      "size-2 shrink-0 rounded-full transition-colors",
                      isActive ? "bg-coral" : "bg-transparent"
                    )}
                  />
                </button>
                <div
                  aria-labelledby={`solution-tab-${solution.id}`}
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                  id={`solution-${solution.id}`}
                  role="tabpanel"
                >
                  <div className="overflow-hidden">
                    <p className="max-w-lg pb-4 text-[1rem] text-ink/65 leading-relaxed">
                      {solution.description}
                    </p>
                    <div className="pb-6">
                      <LandingTextLink href={`/solutions/${solution.id}`}>
                        {solution.cta}
                        <HugeiconsIcon
                          className="size-4"
                          icon={ArrowRight01Icon}
                        />
                      </LandingTextLink>
                    </div>
                    <div className="relative mb-6 aspect-[16/10] overflow-hidden rounded-xl lg:hidden">
                      <Image
                        alt=""
                        className="object-cover"
                        fill
                        sizes="100vw"
                        src={solution.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative hidden min-h-[34rem] overflow-hidden rounded-2xl bg-ink lg:block">
          {SOLUTIONS.map((solution) => (
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 transition-[opacity,transform] duration-700 ease-out",
                solution.id === activeId
                  ? "scale-100 opacity-100"
                  : "scale-[1.03] opacity-0"
              )}
              key={solution.id}
            >
              <Image
                alt=""
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                src={solution.image}
              />
            </div>
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-ink/40 to-transparent"
          />
        </div>
      </div>
    </LandingSectionFrame>
  );
}
