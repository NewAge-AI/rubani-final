"use client";

import { useEffect, useRef, useState } from "react";

const DURATION_MS = 1400;

/** Counts a numeric value up when it scrolls into view; non-numbers render as-is. */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? Number(match[2]) : null;
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!(el && match && target !== null)) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const [, prefix, , suffix] = match;
    setDisplay(`${prefix}0${suffix}`);
    let raf = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION_MS);
        const eased = 1 - (1 - t) ** 3;
        setDisplay(`${prefix}${Math.round(target * eased)}${suffix}`);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
    // biome-ignore lint/correctness/useExhaustiveDependencies: value fully determines match and target
  }, [value]);

  return (
    <span aria-label={value} ref={ref}>
      <span aria-hidden="true">{display}</span>
    </span>
  );
}
