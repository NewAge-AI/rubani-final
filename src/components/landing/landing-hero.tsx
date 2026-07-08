"use client";

import {
  CloudServerIcon,
  Globe02Icon,
  LockIcon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@notra/ui/components/ui/button";
import { AnimatePresence, domAnimation, LazyMotion, m } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SOCIAL_PROOF_LOGOS } from "@/utils/constants";
import { SITE_DESCRIPTION } from "@/utils/metadata";

const TRUST_BADGES = [
  { icon: Shield01Icon, label: "Data Sovereignty" },
  { icon: CloudServerIcon, label: "On-Premise Ready" },
  { icon: Globe02Icon, label: "Edge Deployment" },
] as const;

const ROTATING_PHRASES = [
  "that banks trust.",
  "that SACCOs rely on.",
  "that insurers count on.",
  "that hospitals depend on.",
  "that governments trust.",
  "that telcos scale with.",
] as const;

const PHRASE_INTERVAL_MS = 3200;

function RotatingPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % ROTATING_PHRASES.length);
    }, PHRASE_INTERVAL_MS);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <span className="relative inline-block h-[1.2em] w-full overflow-hidden align-bottom md:h-[1.2em]">
        <AnimatePresence initial={false} mode="wait">
          <m.span
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            className="absolute inset-x-0 top-0 inline-block text-[#8eb4ff]"
            exit={{ opacity: 0, rotateX: 90, y: -8 }}
            initial={{ opacity: 0, rotateX: -90, y: 8 }}
            key={ROTATING_PHRASES[index]}
            style={{ transformOrigin: "50% 100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {ROTATING_PHRASES[index]}
          </m.span>
        </AnimatePresence>
      </span>
    </LazyMotion>
  );
}

const MARQUEE_LOGOS = [...SOCIAL_PROOF_LOGOS, ...SOCIAL_PROOF_LOGOS];

export function LandingHero() {
  return (
    <section className="landing-abacus-hero relative w-full overflow-hidden border-white/12 border-b">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/landing/hero-field.png')] bg-center bg-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/60 via-black/72 to-black/92"
      />
      <div
        aria-hidden="true"
        className="landing-abacus-dots absolute inset-0 opacity-40"
      />

      <div className="relative mx-auto flex min-h-[86vh] w-full max-w-[75rem] flex-col justify-end px-4 pt-32 pb-14 md:pt-36 md:pb-16 xl:px-8">
        <div className="landing-hero-reveal mb-6 flex flex-wrap items-center gap-2">
          {TRUST_BADGES.map((badge) => (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-white/60 text-xs tracking-wide"
              key={badge.label}
            >
              <HugeiconsIcon
                className="size-3 text-white/40"
                icon={badge.icon}
              />
              {badge.label}
            </span>
          ))}
        </div>

        <div className="landing-hero-reveal max-w-3xl [animation-delay:60ms]">
          <h1 className="text-balance font-medium text-[2.25rem] text-white leading-[1.08] tracking-[-0.03em] md:text-[3.75rem] md:leading-[1.04]">
            Sovereign, orchestrated,
            <br className="hidden md:block" /> edge-first AI
            <br />
            <RotatingPhrase />
          </h1>
          <p className="mt-4 font-medium text-[#8eb4ff]/80 text-sm uppercase tracking-[0.18em] md:text-base">
            Built for Africa.
          </p>
          <p className="mt-6 max-w-xl text-pretty text-base text-white/70 leading-relaxed md:text-lg md:leading-8">
            {SITE_DESCRIPTION}
          </p>
          <p className="sr-only" id="agent-readable-summary">
            Rubani is the sovereign AI platform for African enterprise: small,
            orchestrated models that run inside your infrastructure, reach your
            customers at the edge, and never leak your data to a third party.
          </p>
        </div>

        <div className="landing-hero-reveal mt-9 flex flex-wrap items-center gap-3 [animation-delay:120ms]">
          <Button
            className="landing-btn-shimmer h-11 rounded-full border-0 bg-white px-7 text-black hover:bg-white/90 md:h-12 md:px-8"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Request access
          </Button>
          <Button
            className="landing-btn-shimmer h-11 rounded-full border border-white/25 bg-transparent px-7 text-white hover:bg-white/10 md:h-12 md:px-8"
            nativeButton={false}
            render={<Link href="#how-it-works" />}
            variant="outline"
          >
            Explore the platform
          </Button>
        </div>
{/*
        <div className="landing-hero-reveal mt-14 [animation-delay:180ms]">
          <p className="mb-5 font-mono text-[0.6875rem] text-white/30 uppercase tracking-[0.2em]">
            Working alongside African institutions
          </p>
          <div className="landing-marquee-mask relative w-full overflow-hidden">
            <div className="landing-marquee-track items-center gap-16">
              {MARQUEE_LOGOS.map((logo, index) => (
                <div
                  className="flex shrink-0 items-center justify-center"
                  key={`${logo.name}-${index}`}
                >
                  <logo.Component
                    className={`w-auto opacity-60 brightness-0 invert ${logo.className ?? "h-7"}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
