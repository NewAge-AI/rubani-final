"use client";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import { useEffect, useRef, useState } from "react";
import { PLATFORM_PRODUCTS } from "@/data/platform";
import { LiveAfricaMap } from "../marketing/live-africa-map";
import { MediaBackground } from "../marketing/media";
import {
  LandingEyebrow,
  LandingSectionFrame,
  LandingSectionHeader,
  LandingTextLink,
} from "./landing-section";
import { PRODUCT_OVERLAYS } from "./product-overlays";

function ProductVisual({ slug, image }: { slug: string; image: string }) {
  return (
    <>
      {slug === "edge" ? (
        <div className="absolute inset-0 bg-midnight">
          <LiveAfricaMap />
        </div>
      ) : (
        <MediaBackground sizes="(max-width: 1024px) 100vw, 50vw" src={image} />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent"
      />
      {slug === "agents" ? (
        <div className="landing-float absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
          {PRODUCT_OVERLAYS.agents}
        </div>
      ) : null}
    </>
  );
}

/**
 * Sticky scroll story: products scroll on the left while the matching visual
 * stays pinned on the right and crossfades as each one becomes active.
 */
export function LandingPlatformScrolly() {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    for (const el of itemRefs.current) {
      if (el) {
        observer.observe(el);
      }
    }
    return () => observer.disconnect();
  }, []);

  const progress = (active + 1) / PLATFORM_PRODUCTS.length;

  return (
    <LandingSectionFrame id="platform">
      <LandingSectionHeader
        description="Four layers that work on their own and get stronger together, from customer-facing agents down to the sovereign data fabric and out to the edge."
        eyebrow="Rubani Platform"
        titleLines={[
          { text: "One platform, from agent" },
          { muted: true, text: "to the edge." },
        ]}
      />

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-0 hidden w-px bg-ink/10 lg:block"
          >
            <span
              className="block h-full w-full origin-top bg-linear-to-b from-brand to-coral transition-transform duration-700 ease-out"
              style={{ transform: `scaleY(${progress})` }}
            />
          </span>
          <ol className="flex flex-col gap-12 lg:gap-0">
            {PLATFORM_PRODUCTS.map((product, index) => (
              <li
                className={cn(
                  "flex flex-col justify-center transition-opacity duration-500 lg:min-h-[62vh] lg:pl-10",
                  index === active ? "lg:opacity-100" : "lg:opacity-35"
                )}
                data-index={index}
                key={product.slug}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <LandingEyebrow>
                  {String(index + 1).padStart(2, "0")} · {product.tag}
                </LandingEyebrow>
                <h3 className="mt-4 font-normal text-[1.75rem] text-ink leading-[1.1] tracking-[-0.03em] sm:text-[2rem] md:text-[2.5rem]">
                  {product.name}
                </h3>
                <p className="mt-3 max-w-md text-base text-ink/65 leading-relaxed lg:hidden">
                  {product.summary}
                </p>
                <p className="mt-4 hidden max-w-md text-[1.0625rem] text-ink/65 leading-relaxed lg:block">
                  {product.description}
                </p>
                <LandingTextLink
                  className="mt-5 w-fit lg:mt-6"
                  href={`/platform/${product.slug}`}
                >
                  Explore {product.name}
                  <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
                </LandingTextLink>
                <div className="landing-card-media relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-ink lg:hidden">
                  <ProductVisual image={product.image} slug={product.slug} />
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 h-[min(38rem,calc(100vh-8rem))] overflow-hidden rounded-2xl bg-ink">
            {PLATFORM_PRODUCTS.map((product, index) => (
              <div
                aria-hidden={index !== active}
                className={cn(
                  "absolute inset-0 transition-[opacity,transform] duration-700 ease-out",
                  index === active
                    ? "scale-100 opacity-100"
                    : "pointer-events-none scale-[1.04] opacity-0"
                )}
                key={product.slug}
              >
                <ProductVisual image={product.image} slug={product.slug} />
              </div>
            ))}
            <div className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full bg-ink/60 px-3 py-1.5 backdrop-blur-md">
              {PLATFORM_PRODUCTS.map((product, index) => (
                <span
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    index === active ? "w-5 bg-white" : "w-1.5 bg-white/40"
                  )}
                  key={product.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </LandingSectionFrame>
  );
}
