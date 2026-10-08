import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Link from "next/link";
import type { Capability } from "@/data/platform";
import { MediaBackground } from "./media";

/** Hairline grid of capabilities, three across on desktop. */
export function CapabilityGrid({
  items,
  tone = "paper",
}: {
  items: Capability[];
  tone?: "paper" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "landing-reveal-stagger mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 md:mt-14 lg:grid-cols-3",
        isDark ? "border-white/10 bg-white/10" : "border-ink/8 bg-ink/8"
      )}
    >
      {items.map((item) => (
        <div
          data-spotlight={isDark ? "dark" : ""}
          className={cn(
            "flex flex-col p-6 transition-colors md:p-8",
            isDark ? "bg-midnight hover:bg-[#101e29]" : "bg-white hover:bg-[#fdfdfb]"
          )}
          key={item.title}
        >
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-xl",
              isDark ? "border border-white/15 text-[#a9c1ee]" : "bg-brand-soft text-brand"
            )}
          >
            <HugeiconsIcon className="size-5" icon={item.icon} />
          </span>
          <h3
            className={cn(
              "mt-5 font-normal text-[1.1875rem] tracking-[-0.02em] sm:mt-8 sm:text-[1.25rem]",
              isDark ? "text-white" : "text-ink"
            )}
          >
            {item.title}
          </h3>
          <p
            className={cn(
              "mt-2.5 text-[0.9375rem] leading-relaxed",
              isDark ? "text-white/60" : "text-ink/60"
            )}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/** Numbered process steps with a top rule, like an enterprise rollout plan. */
export function StepList({
  steps,
  tone = "paper",
}: {
  steps: readonly { title: string; description: string }[];
  tone?: "paper" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <ol className="landing-reveal-stagger mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:mt-14 md:gap-y-10 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li className="relative flex flex-col pt-6" key={step.title}>
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-x-0 top-0 h-px overflow-hidden",
              isDark ? "bg-white/15" : "bg-ink/12"
            )}
          >
            <span
              className="landing-step-fill block h-full w-full"
              style={{ transitionDelay: `${300 + index * 420}ms` }}
            />
          </span>
          <span
            className={cn(
              "font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
              isDark ? "text-coral" : "text-brand"
            )}
          >
            Step {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className={cn(
              "mt-4 font-normal text-[1.375rem] tracking-[-0.02em]",
              isDark ? "text-white" : "text-ink"
            )}
          >
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-2.5 text-[0.9375rem] leading-relaxed",
              isDark ? "text-white/60" : "text-ink/60"
            )}
          >
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Two-column label/value table used for "at a glance" specs. */
export function SpecTable({
  rows,
}: {
  rows: readonly { label: string; value: string }[];
}) {
  return (
    <dl className="landing-reveal divide-y divide-ink/8 overflow-hidden rounded-2xl border border-ink/8 bg-white">
      {rows.map((row) => (
        <div
          className="grid grid-cols-1 gap-1 px-6 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6 md:px-8"
          key={row.label}
        >
          <dt className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em] sm:pt-1">
            {row.label}
          </dt>
          <dd className="text-[1rem] text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Photographic link card used to cross-link products and industries. */
export function MediaLinkCard({
  href,
  image,
  eyebrow,
  title,
  description,
  className,
}: {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "landing-card-media group relative flex min-h-[18rem] flex-col justify-end overflow-hidden rounded-2xl bg-ink p-6 md:min-h-[22rem] md:p-7",
        className
      )}
      href={href}
    >
      <MediaBackground sizes="(max-width: 768px) 100vw, 33vw" src={image} />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/40 to-ink/5"
      />
      <div className="relative">
        <p className="font-mono text-[0.625rem] text-white/60 uppercase tracking-[0.14em]">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-normal text-[1.5rem] text-white leading-tight tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 max-w-sm text-[0.875rem] text-white/70 leading-relaxed md:line-clamp-none">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-medium text-[0.875rem] text-white">
          Learn more
          <HugeiconsIcon
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            icon={ArrowRight01Icon}
          />
        </span>
      </div>
    </Link>
  );
}

/** Quiet text link card for lists of related items. */
export function TextLinkCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      data-spotlight=""
      className="group flex flex-col justify-between gap-6 rounded-2xl border border-ink/8 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(23,23,28,0.25)] md:gap-10 md:p-7"
      href={href}
    >
      <div>
        <p className="font-mono text-[0.625rem] text-ink/50 uppercase tracking-[0.14em]">
          {eyebrow}
        </p>
        <h3 className="mt-3 font-normal text-[1.375rem] text-ink tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-2 text-[0.9375rem] text-ink/60 leading-relaxed">
          {description}
        </p>
      </div>
      <span className="flex size-9 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
        <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
      </span>
    </Link>
  );
}
