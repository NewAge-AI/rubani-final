import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const APPROACH = [
  {
    label: "Data",
    text: "Stays in-country, inside your infrastructure",
    image: "/landing/solutions/data.webp",
  },
  {
    label: "Model strategy",
    text: "Right-sized model, orchestrated per task",
    image: "/landing/solutions/model.webp",
  },
  {
    label: "Cost",
    text: "Small models first, significantly cheaper",
    image: "/landing/solutions/llm.webp",
  },
  {
    label: "Vendor risk",
    text: "No single point of vendor lock-in",
    image: "/landing/solutions/risk.webp",
  },
  {
    label: "Reach",
    text: "Edge inference, on-device, low-bandwidth",
    image: "/landing/solutions/reach.webp",
  },
] as const;

export function LandingComparison() {
  return (
    <LandingSectionFrame tone="muted">
      <LandingSectionHeader
        description="Rubani is built against the way the industry defaults: general-purpose models, cloud-only delivery, and unpredictable cost."
        eyebrow="A Differentiated Approach"
        titleLines={[
          { text: "Built against the way" },
          { text: "the industry defaults." },
        ]}
      />

      <div className="landing-reveal-stagger mt-12 grid grid-cols-2 gap-px overflow-hidden border border-neutral-950/10 bg-neutral-950/10 sm:grid-cols-3 lg:grid-cols-5">
        {APPROACH.map((item, index) => (
          <div
            className={cn(
              "group relative flex aspect-[3/4] flex-col justify-end overflow-hidden bg-neutral-900 p-4",
              index === APPROACH.length - 1 &&
                "col-span-2 aspect-[16/9] sm:col-span-1 sm:aspect-[3/4]"
            )}
            key={item.label}
          >
            <Image
              alt=""
              className="object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-105"
              fill
              sizes={
                index === APPROACH.length - 1
                  ? "(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              }
              src={item.image}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black via-black/75 to-black/10"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black to-transparent"
            />
            <div className="relative transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <p className="font-mono text-[0.625rem] text-white/60 uppercase tracking-[0.14em]">
                {item.label}
              </p>
              <p className="mt-2 text-sm text-white leading-snug">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
