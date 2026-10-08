import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  LandingButton,
  LandingContainer,
  LandingEyebrow,
  LandingTextLink,
} from "../landing/landing-section";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { MediaBackground } from "./media";

type Action = { label: string; href: string };

type PageHeroProps = {
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  title: ReactNode;
  description: ReactNode;
  primary?: Action;
  secondary?: Action;
  children?: ReactNode;
};

function HeroActions({
  primary,
  secondary,
  tone = "paper",
}: Pick<PageHeroProps, "primary" | "secondary"> & {
  tone?: "paper" | "dark";
}) {
  if (!primary && !secondary) {
    return null;
  }
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 md:mt-9">
      {primary ? (
        <LandingButton href={primary.href} tone={tone}>
          {primary.label}
        </LandingButton>
      ) : null}
      {secondary ? (
        <LandingTextLink href={secondary.href} tone={tone}>
          {secondary.label}
        </LandingTextLink>
      ) : null}
    </div>
  );
}

/** Text-led hero, optionally with a media slot underneath (rendered as children). */
export function PageHero({
  eyebrow,
  breadcrumbs,
  title,
  description,
  primary,
  secondary,
  children,
}: PageHeroProps) {
  return (
    <section className="w-full bg-paper pt-10 pb-14 md:pt-16 md:pb-24">
      <LandingContainer>
        <div className="landing-hero-reveal max-w-4xl">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow && !breadcrumbs ? <LandingEyebrow>{eyebrow}</LandingEyebrow> : null}
          <h1 className="mt-6 text-balance font-light text-[2.375rem] text-ink leading-[1.04] tracking-[-0.04em] sm:text-[3.5rem] md:text-[4.75rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-ink/65 leading-relaxed sm:text-[1.0625rem] md:mt-6 md:text-xl md:leading-relaxed">
            {description}
          </p>
          <HeroActions primary={primary} secondary={secondary} />
        </div>
        {children ? (
          <div className="landing-hero-reveal mt-10 [animation-delay:140ms] md:mt-20">
            {children}
          </div>
        ) : null}
      </LandingContainer>
    </section>
  );
}

/** Split hero: copy on the left, a rounded media card on the right. */
export function SplitHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  imageAlt = "",
  overlay,
  visual,
}: PageHeroProps & {
  image: string;
  imageAlt?: string;
  overlay?: ReactNode;
  /** Replaces the image with live content, such as an animated map. */
  visual?: ReactNode;
}) {
  return (
    <section className="w-full bg-paper pt-12 pb-16 md:pt-16 md:pb-24">
      <LandingContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="landing-hero-reveal">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
            {eyebrow ? (
              <LandingEyebrow className={breadcrumbs ? "mt-8" : undefined}>
                {eyebrow}
              </LandingEyebrow>
            ) : null}
            <h1 className="mt-5 text-balance font-light text-[2.25rem] text-ink leading-[1.04] tracking-[-0.04em] sm:text-[3.25rem] md:text-[4rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-[1.0625rem] text-ink/65 leading-relaxed md:text-lg">
              {description}
            </p>
            <HeroActions primary={primary} secondary={secondary} />
          </div>
          <div className="landing-hero-reveal landing-card-media relative flex aspect-[5/4] items-end overflow-hidden rounded-2xl bg-ink p-5 [animation-delay:120ms] md:p-8">
            {visual ? (
              <div className="absolute inset-0 bg-midnight">{visual}</div>
            ) : (
              <MediaBackground
                alt={imageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                src={image}
              />
            )}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/15 to-transparent"
            />
            {overlay ? (
              <div className="landing-float relative w-full">{overlay}</div>
            ) : null}
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}

/** Full-bleed photographic hero for industry and company pages. */
export function ImageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  children,
  className,
}: PageHeroProps & { image: string; className?: string }) {
  return (
    <section className="w-full bg-paper px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={cn(
          "relative flex min-h-[30rem] w-full items-end overflow-hidden rounded-3xl bg-ink md:min-h-[40rem]",
          className
        )}
      >
        <Image
          alt=""
          className="object-cover object-[72%_50%]"
          fill
          priority
          sizes="100vw"
          src={image}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink/55 md:hidden" />
        <LandingContainer className="relative pt-24 pb-10 md:pt-28 md:pb-16">
          <div className="landing-hero-reveal max-w-3xl">
            {breadcrumbs ? <Breadcrumbs items={breadcrumbs} tone="dark" /> : null}
            {eyebrow && !breadcrumbs ? (
              <LandingEyebrow tone="dark">{eyebrow}</LandingEyebrow>
            ) : null}
            <h1 className="mt-6 text-balance font-light text-[2.25rem] text-white leading-[1.04] tracking-[-0.04em] sm:text-[3.25rem] md:text-[4.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-white/80 leading-relaxed md:mt-6 md:text-lg">
              {description}
            </p>
            <HeroActions primary={primary} secondary={secondary} tone="dark" />
          </div>
          {children}
        </LandingContainer>
      </div>
    </section>
  );
}
