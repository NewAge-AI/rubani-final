"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = ".landing-reveal, .landing-reveal-stagger";

/**
 * Site-wide motion: one-shot in-view reveals and the card spotlight.
 * Does nothing when the visitor prefers reduced motion.
 */
export function MotionController() {
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: re-scan reveals on every route change
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    const track = (scope: ParentNode) => {
      for (const el of scope.querySelectorAll(REVEAL_SELECTOR)) {
        if (!el.classList.contains("is-inview")) {
          observer.observe(el);
        }
      }
    };

    track(document);
    root.classList.add("motion-ready");

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) {
            if (node.matches(REVEAL_SELECTOR)) {
              observer.observe(node);
            }
            track(node);
          }
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>(
        "[data-spotlight]"
      );
      if (!target) {
        return;
      }
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
