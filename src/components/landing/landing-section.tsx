import { cn } from "@notra/ui/lib/utils";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

type TitleLine = {
  text: string;
  muted?: boolean;
};

export type SectionTone = "paper" | "stone" | "dark";

const FRAME_BG: Record<SectionTone, string> = {
  paper: "bg-paper",
  stone: "bg-stone",
  dark: "bg-midnight text-white",
};

export function LandingContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function LandingSectionFrame({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
}) {
  return (
    <section
      className={cn(
        "relative w-full scroll-mt-16 overflow-clip py-16 md:py-28",
        FRAME_BG[tone],
        className
      )}
      id={id}
    >
      <LandingContainer className="relative">{children}</LandingContainer>
    </section>
  );
}

export function LandingEyebrow({
  children,
  tone = "paper",
  className,
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
        tone === "dark" ? "text-white/60" : "text-ink/55",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 shrink-0 rounded-full",
          tone === "dark" ? "bg-coral" : "bg-brand"
        )}
      />
      {children}
    </p>
  );
}

export function LandingSectionHeader({
  eyebrow,
  titleLines,
  description,
  className,
  tone = "paper",
  align = "left",
  sticky = false,
}: {
  /** Pin the header while the neighbouring column scrolls (desktop only). */
  sticky?: boolean;
  eyebrow: string;
  titleLines: TitleLine[];
  description?: string;
  className?: string;
  tone?: SectionTone;
  align?: "left" | "center";
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "landing-reveal flex max-w-3xl flex-col gap-5",
        align === "center" && "mx-auto items-center text-center",
        sticky && "lg:sticky lg:top-28 lg:self-start",
        className
      )}
    >
      <LandingEyebrow tone={tone}>{eyebrow}</LandingEyebrow>
      <h2 className="text-balance font-normal text-[2rem] leading-[1.08] tracking-[-0.035em] sm:text-[2.5rem] md:text-[3.25rem] md:leading-[1.04]">
        {titleLines.map((line) => (
          <span
            className={cn(
              "block",
              line.muted
                ? isDark
                  ? "text-white/45"
                  : "text-ink/40"
                : isDark
                  ? "text-white"
                  : "text-ink"
            )}
            key={line.text}
          >
            {line.text}
          </span>
        ))}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-pretty text-[0.9375rem] leading-relaxed sm:text-base md:text-[1.0625rem]",
            isDark ? "text-white/65" : "text-ink/65"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function LandingButton({
  href,
  children,
  tone = "paper",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full px-6 font-medium text-[0.9375rem] transition-[background-color,transform] duration-200 active:scale-[0.98]",
        tone === "dark"
          ? "bg-white text-ink hover:bg-white/90"
          : "bg-ink text-white hover:bg-black",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

export function LandingTextLink({
  href,
  children,
  tone = "paper",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "landing-link inline-flex items-center gap-1.5 font-medium text-[0.9375rem]",
        tone === "dark" ? "text-white" : "text-ink",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}

/**
 * Decorative glassy gradient forms used behind hero media and the closing CTA.
 */
export function LandingShapes({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
    >
      <span
        className="landing-shape landing-shape--lilac"
        style={
          {
            width: "62%",
            height: "58%",
            left: "2%",
            bottom: "-8%",
            "--shape-rotate": "-14deg",
          } as CSSProperties
        }
      />
      <span
        className="landing-shape landing-shape--navy"
        style={
          {
            width: "54%",
            height: "78%",
            left: "30%",
            top: "6%",
            "--shape-rotate": "12deg",
          } as CSSProperties
        }
      />
      <span
        className="landing-shape landing-shape--coral"
        style={
          {
            width: "40%",
            height: "92%",
            right: "-6%",
            top: "-10%",
            "--shape-rotate": "8deg",
          } as CSSProperties
        }
      />
    </div>
  );
}
