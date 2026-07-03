"use client";

import { useEffect, useMemo, useState } from "react";
import { SOCIAL_PROOF_LOGOS } from "@/utils/constants";

const VISIBLE_LOGO_COUNT = 4;
const ROTATION_INTERVAL_MS = 3600;
const FADE_DURATION_MS = 300;
const FALLBACK_LOGO = SOCIAL_PROOF_LOGOS[0]!;

export function SocialProofLogoCarousel() {
  const [offset, setOffset] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setOffset((current) => (current + 1) % SOCIAL_PROOF_LOGOS.length);
        setVisible(true);
      }, FADE_DURATION_MS);
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const logos = useMemo(
    () =>
      Array.from({ length: VISIBLE_LOGO_COUNT }, (_, index) => {
        const logoIndex = (offset + index) % SOCIAL_PROOF_LOGOS.length;
        return SOCIAL_PROOF_LOGOS[logoIndex] ?? FALLBACK_LOGO;
      }),
    [offset]
  );

  return (
    <div
      className={`grid flex-1 grid-cols-1 border-border border-r border-l transition-[opacity,transform,filter] duration-500 md:grid-cols-4 ${
        visible ? "opacity-100" : "opacity-0"
      } ${visible ? "translate-y-0 blur-0" : "translate-y-2 blur-[2px]"}`}
    >
      {logos.map((logo, index) => (
        <a
          className={`landing-logo-tile flex h-24 items-center justify-center gap-2.5 transition-opacity hover:opacity-80 md:h-36 lg:h-40 ${
            index < logos.length - 1
              ? "border-border border-b md:border-r-[0.5px] md:border-b-0"
              : ""
          }`}
          href={logo.href}
          key={`${logo.name}-${offset}-${index}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <logo.Component className={`w-auto ${logo.className ?? "h-8"}`} />
        </a>
      ))}
    </div>
  );
}
