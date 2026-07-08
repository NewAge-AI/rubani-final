"use client";

import { ArrowUpRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import { AnimatePresence, domAnimation, LazyMotion, m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LandingEyebrow } from "./landing-section";

const SOLUTIONS = [
  {
    id: "financial-services",
    tab: "Financial Services",
    description:
      "Banks, SACCOs, insurers, and digital lenders run credit, KYC, and fraud agents inside their own infrastructure, cutting review time without sending customer data to a foreign cloud.",
    href: "/contact",
    cta: "See how banks use Rubani",
    image: "/landing/solutions/financial-services.webp",
  },
  {
    id: "healthcare",
    tab: "Healthcare",
    description:
      "Hospitals, clinics, and health networks deploy clinical copilots and records intelligence on-premise, keeping patient data sovereign while still reaching frontline staff at the edge.",
    href: "/contact",
    cta: "See how healthcare uses Rubani",
    image: "/landing/solutions/healthcare.webp",
  },
  {
    id: "government",
    tab: "Government",
    description:
      "Ministries, agencies, and parastatals modernise citizen services with orchestrated, auditable AI that stays in-country and satisfies public-sector governance requirements.",
    href: "/contact",
    cta: "See how government uses Rubani",
    image: "/landing/solutions/government.webp",
  },
  {
    id: "telecom-utilities",
    tab: "Telecommunications & Utilities",
    description:
      "Networks, billing, and utility operators orchestrate OSS/BSS and customer-care agents at the edge, reaching low-bandwidth regions without routing traffic through distant data centres.",
    href: "/contact",
    cta: "See how operators use Rubani",
    image: "/landing/solutions/telecom-utilities.webp",
  },
] as const;

export function LandingSolutions() {
  const [activeId, setActiveId] = useState<(typeof SOLUTIONS)[number]["id"]>(
    SOLUTIONS[0].id
  );
  const active =
    SOLUTIONS.find((solution) => solution.id === activeId) ?? SOLUTIONS[0];

  return (
    <section className="relative w-full overflow-hidden border-white/12 border-t bg-black">
      {SOLUTIONS.map((solution) => (
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-out",
            solution.id === activeId ? "opacity-100" : "opacity-0"
          )}
          key={solution.id}
        >
          <Image
            alt=""
            className="object-cover brightness-[0.45]"
            fill
            priority={solution.id === SOLUTIONS[0].id}
            sizes="100vw"
            src={solution.image}
          />
        </div>
      ))}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-2/5 bg-linear-to-b from-black/85 via-black/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/95 via-black/55 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[38rem] w-full max-w-[75rem] flex-col justify-end px-4 py-16 md:min-h-[42rem] md:py-20 xl:px-8">
        <LandingEyebrow tone="dark">Industry Solutions</LandingEyebrow>
        <h2 className="mt-4 max-w-2xl font-medium text-[2rem] text-white leading-[1.12] tracking-[-0.04em] md:text-[3rem] md:leading-[1.08]">
          AI infrastructure for industries
          <span className="block text-white/50">
            that cannot afford to get it wrong.
          </span>
        </h2>

        <div
          className="mt-8 flex flex-wrap gap-2 overflow-x-auto"
          role="tablist"
        >
          {SOLUTIONS.map((solution) => (
            <button
              aria-selected={solution.id === activeId}
              className={cn(
                "landing-btn-shimmer inline-flex min-h-[2.75rem] shrink-0 items-center justify-center rounded-full border px-4 py-2 text-sm transition-all",
                solution.id === activeId
                  ? "border-white bg-white text-black"
                  : "border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:text-white"
              )}
              key={solution.id}
              onClick={() => setActiveId(solution.id)}
              role="tab"
              type="button"
            >
              {solution.tab}
            </button>
          ))}
        </div>

        <LazyMotion features={domAnimation}>
          <div className="mt-10 flex max-w-2xl flex-col gap-6 md:mt-12">
            <AnimatePresence mode="wait">
              <m.p
                animate={{ opacity: 1, filter: "blur(0px)" }}
                className="text-base text-white/80 leading-relaxed md:text-lg"
                exit={{ opacity: 0, filter: "blur(4px)" }}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                key={active.id}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {active.description}
              </m.p>
            </AnimatePresence>
            <Link
              className="inline-flex items-center gap-2 text-sm text-white hover:text-white/80"
              href={active.href}
            >
              {active.cta}
              <HugeiconsIcon className="size-4" icon={ArrowUpRight02Icon} />
            </Link>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
