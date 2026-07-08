import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import type { ReactNode } from "react";

type TitleLine = {
  text: string;
  muted?: boolean;
};

type SectionTone = "light" | "muted" | "dark";

const FRAME_BG: Record<SectionTone, string> = {
  light: "bg-white",
  muted: "bg-[#fafafa]",
  dark: "bg-black",
};

const FRAME_BORDER: Record<SectionTone, string> = {
  light: "border-neutral-200/80",
  muted: "border-neutral-200/80",
  dark: "border-white/12",
};

const FRAME_PADDING: Record<"default" | "compact", string> = {
  default: "px-4 py-16 xl:px-8 xl:py-20",
  compact: "px-4 py-10 xl:px-8",
};

export function LandingSectionFrame({
  children,
  className,
  id,
  tone = "light",
  noBorderTop = false,
  padding = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: SectionTone;
  noBorderTop?: boolean;
  padding?: "default" | "compact";
}) {
  return (
    <section
      className={cn(
        "w-full",
        !noBorderTop && "border-t",
        FRAME_BG[tone],
        FRAME_BORDER[tone],
        className
      )}
      id={id}
    >
      <div
        className={cn(
          "relative mx-auto xl:max-w-[75rem] xl:border-x",
          FRAME_BORDER[tone]
        )}
      >
        <div className={FRAME_PADDING[padding]}>{children}</div>
      </div>
    </section>
  );
}

export function LandingEyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: SectionTone;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-[0.6875rem] uppercase tracking-[0.18em]",
        tone === "dark" ? "text-white/50" : "text-neutral-500",
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-px w-5 shrink-0",
          tone === "dark" ? "bg-white/40" : "bg-neutral-950/40"
        )}
      />
      {children}
    </p>
  );
}

function titleLineColor(tone: SectionTone, muted: boolean | undefined) {
  if (muted) {
    return tone === "dark" ? "text-white/50" : "text-neutral-500";
  }
  return tone === "dark" ? "text-white" : "text-neutral-950";
}

export function LandingSectionHeader({
  eyebrow,
  titleLines,
  description,
  className,
  tone = "light",
}: {
  eyebrow: string;
  titleLines: TitleLine[];
  description: string;
  className?: string;
  tone?: SectionTone;
}) {
  return (
    <div
      className={cn("landing-reveal flex max-w-4xl flex-col gap-4", className)}
    >
      <LandingEyebrow tone={tone}>{eyebrow}</LandingEyebrow>
      <div>
        {titleLines.map((line) => (
          <p
            className={cn(
              "font-medium text-[2rem] leading-[1.12] tracking-[-0.04em] md:text-[3rem] md:leading-[3.5rem]",
              titleLineColor(tone, line.muted)
            )}
            key={line.text}
          >
            {line.text}
          </p>
        ))}
      </div>
      <p
        className={cn(
          "max-w-2xl text-base leading-relaxed",
          tone === "dark" ? "text-white/60" : "text-neutral-600"
        )}
      >
        {description}
      </p>
    </div>
  );
}

export function LandingFeatureGrid({
  children,
  columns = 4,
  className,
}: {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "landing-feature-grid landing-reveal-stagger mt-12 overflow-hidden border border-neutral-200/80 bg-white",
        columns === 4 && "landing-feature-grid--four",
        columns === 3 && "landing-feature-grid--three",
        columns === 2 && "landing-feature-grid--two",
        className
      )}
    >
      {children}
    </div>
  );
}

export function LandingFeatureCell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "landing-feature-cell group relative flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

export function LandingRowNumber({ index }: { index: number }) {
  return (
    <span className="font-mono text-[0.6875rem] text-neutral-400 uppercase tracking-[0.16em] transition-colors duration-300 group-hover:text-neutral-950">
      {String(index).padStart(2, "0")}
    </span>
  );
}

type IconRowVariant = "solid" | "soft";

const ICON_ROW_CIRCLE: Record<IconRowVariant, string> = {
  solid: "bg-[#1b3a6b] text-white",
  soft: "bg-[#1b3a6b]/10 text-[#1b3a6b]",
};

export function LandingIconRow({
  icon: Icon,
  title,
  description,
  children,
  variant = "solid",
  tone = "light",
  className,
}: {
  icon: IconSvgElement;
  title: string;
  description: string;
  children?: ReactNode;
  variant?: IconRowVariant;
  tone?: SectionTone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "landing-icon-row flex flex-col gap-4 px-4 py-8 first:border-t-0 sm:flex-row sm:items-start sm:gap-6 xl:px-8",
        tone === "dark" && "landing-icon-row--dark",
        className
      )}
    >
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-full",
          ICON_ROW_CIRCLE[variant]
        )}
      >
        <HugeiconsIcon className="size-5" icon={Icon} />
      </div>
      <div className="flex flex-1 flex-col gap-2" data-landing-motion>
        <p
          className={cn(
            "font-medium text-[1.25rem] tracking-[-0.02em]",
            tone === "dark" ? "text-white" : "text-neutral-950"
          )}
        >
          {title}
        </p>
        <p
          className={cn(
            "text-[0.9375rem] leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-neutral-600"
          )}
        >
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
