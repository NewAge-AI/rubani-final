"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE_DESCRIPTION } from "@/utils/metadata";
import {
  LandingButton,
  LandingContainer,
  LandingTextLink,
} from "./landing-section";

const ROTATING_PHRASES = [
  "for banks.",
  "for SACCOs.",
  "for insurers.",
  "for hospitals.",
  "for governments.",
  "for telcos.",
] as const;

const PHRASE_INTERVAL_MS = 3200;

type AgentScenario = {
  agent: string;
  sources: readonly string[];
  prompt: string;
  results: readonly string[];
};

const AGENT_SCENARIOS: readonly AgentScenario[] = [
  {
    agent: "Credit Risk Agent",
    sources: ["Core banking", "Bureau data"],
    prompt: "Summarise exposure across the SME loan book",
    results: ["Exposure summary ready", "3 accounts flagged", "12 sources cited"],
  },
  {
    agent: "KYC Agent",
    sources: ["KYC registry", "Document store"],
    prompt: "Verify documents for today's new applicants",
    results: ["14 documents checked", "2 sent for review", "Data stayed in-country"],
  },
  {
    agent: "Customer Care Agent",
    sources: ["USSD", "WhatsApp"],
    prompt: "Jibu maswali ya salio kwa Kiswahili",
    results: ["Replied in Swahili", "Edge model · 1B", "Escalations routed"],
  },
];

const TYPE_MS = 34;
const RESULT_MS = 420;
const HOLD_MS = 2600;

function RotatingPhrase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_PHRASES.length);
    }, PHRASE_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <span className="relative block h-[1.08em] w-full overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <m.span
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            className="absolute inset-x-0 top-0 block text-ink/40"
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            key={ROTATING_PHRASES[index]}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ROTATING_PHRASES[index]}
          </m.span>
        </AnimatePresence>
      </span>
    </LazyMotion>
  );
}

/** Live-feeling agent console: types a prompt, then streams in results. */
function AgentPanel() {
  const reduceMotion = useReducedMotion();
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [shown, setShown] = useState(0);
  const scenario = AGENT_SCENARIOS[scenarioIndex] ?? AGENT_SCENARIOS[0]!;

  useEffect(() => {
    if (reduceMotion) {
      setTyped(scenario.prompt.length);
      setShown(scenario.results.length);
      return;
    }
    let timer: number;
    if (typed < scenario.prompt.length) {
      timer = window.setTimeout(() => setTyped((t) => t + 1), TYPE_MS);
    } else if (shown < scenario.results.length) {
      timer = window.setTimeout(() => setShown((n) => n + 1), RESULT_MS);
    } else {
      timer = window.setTimeout(() => {
        setScenarioIndex((i) => (i + 1) % AGENT_SCENARIOS.length);
        setTyped(0);
        setShown(0);
      }, HOLD_MS);
    }
    return () => window.clearTimeout(timer);
  }, [reduceMotion, scenario, typed, shown]);

  const isTyping = typed < scenario.prompt.length;

  return (
    <div
      aria-label={`${scenario.agent}: ${scenario.prompt}`}
      className="w-full max-w-[30rem] rounded-2xl border border-white/10 bg-ink/80 p-4 text-white shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:p-5 md:p-6"
      role="img"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-8 items-center justify-center rounded-lg bg-white font-display font-medium text-ink sm:size-9">
          R
        </span>
        <p className="font-display text-[1.125rem] tracking-[-0.02em] sm:text-[1.25rem] md:text-[1.375rem]">
          {scenario.agent}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {scenario.sources.map((source) => (
          <span
            className="inline-flex items-center gap-2 rounded-md border border-white/12 bg-white/5 px-2.5 py-1.5 text-[0.6875rem] text-white/80"
            key={source}
          >
            {source}
            <span className="flex items-center gap-1 font-mono text-[0.5625rem] text-white/50 uppercase tracking-[0.12em]">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Ready
            </span>
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 py-2.5 pr-2.5 pl-4">
        <p className="min-h-[1.25rem] truncate text-[0.8125rem] text-white/80 sm:text-[0.875rem]">
          {scenario.prompt.slice(0, typed)}
          {isTyping ? (
            <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 animate-pulse bg-white/70" />
          ) : null}
        </p>
        <span
          className={`flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isTyping ? "bg-white/10 text-white/60" : "bg-white text-ink"
          }`}
        >
          <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
        </span>
      </div>
      <ul className="mt-3 flex min-h-[1.875rem] flex-wrap gap-2">
        {scenario.results.slice(0, shown).map((result) => (
          <li
            className="landing-chip-in rounded-full bg-white/10 px-3 py-1 text-[0.75rem] text-white/90"
            key={`${scenarioIndex}-${result}`}
          >
            {result}
          </li>
        ))}
      </ul>
      <p className="mt-3 font-mono text-[0.625rem] text-white/45 uppercase tracking-[0.14em]">
        Running in-country · zero data egress
      </p>
    </div>
  );
}

export function LandingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-paper pt-14 pb-16 md:pt-20 md:pb-24">
      <LandingContainer>
        <div className="landing-hero-reveal flex flex-col items-center text-center">
          <Link
            className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white py-1 pr-3 pl-1 text-[0.8125rem] text-ink/70 transition-colors hover:border-ink/20 hover:text-ink"
            href="/security"
          >
            <span className="whitespace-nowrap rounded-full bg-brand px-2 py-0.5 font-mono text-[0.625rem] text-white uppercase tracking-[0.12em]">
              Built for Africa
            </span>
            <span className="sm:hidden">Data stays in-country</span>
            <span className="hidden sm:inline">
              Your data never leaves your infrastructure
            </span>
            <HugeiconsIcon
              className="size-3.5 transition-transform group-hover:translate-x-0.5"
              icon={ArrowRight01Icon}
            />
          </Link>

          <h1 className="mt-7 w-full max-w-4xl text-balance font-normal text-[2.375rem] text-ink leading-[1.05] tracking-[-0.04em] sm:text-[3.5rem] md:text-[4.5rem]">
            Sovereign, edge-first AI
            <RotatingPhrase />
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-[1.0625rem] text-ink/65 leading-relaxed md:text-lg">
            {SITE_DESCRIPTION}
          </p>
          <p className="sr-only" id="agent-readable-summary">
            Rubani is the sovereign AI platform for African enterprise: small,
            orchestrated models that run inside your infrastructure, reach your
            customers at the edge, and never leak your data to a third party.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <LandingButton href="/contact">Request a demo</LandingButton>
            <LandingTextLink href="/platform">Explore the platform</LandingTextLink>
          </div>
        </div>

        <div className="landing-hero-reveal mt-12 grid grid-cols-1 gap-4 [animation-delay:140ms] md:mt-20 md:grid-cols-[1.7fr_1fr]">
          <div className="landing-card-media relative flex min-h-[23rem] items-center justify-center overflow-hidden rounded-2xl bg-ink p-4 sm:p-5 md:min-h-[34rem] md:p-10">
            <Image
              alt="Sunrise over an African savannah"
              className="landing-kenburns object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 64vw"
              src="/landing/hero-field.webp"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/10 to-transparent"
            />
            <div className="landing-float relative w-full max-w-[30rem]">
              <AgentPanel />
            </div>
          </div>

          <div className="landing-card-media relative hidden min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl bg-ink md:flex md:min-h-[34rem]">
            <Image
              alt="Modern institutional headquarters"
              className="object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 36vw"
              src="/landing/solutions/government.webp"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/20 to-transparent"
            />
            <div className="relative p-6 md:p-7">
              <p className="font-mono text-[0.625rem] text-white/60 uppercase tracking-[0.14em]">
                Deployment
              </p>
              <p className="mt-2 font-display text-[1.5rem] text-white leading-tight tracking-[-0.02em]">
                Inside your infrastructure. Out to the edge.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["On-premise", "Private cloud", "On-device"].map((label) => (
                  <span
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.75rem] text-white/85 backdrop-blur-md"
                    key={label}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
