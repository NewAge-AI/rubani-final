import Link from "next/link";
import {
  LandingButton,
  LandingContainer,
  LandingEyebrow,
  LandingShapes,
} from "@/components/landing/landing-section";

const SUGGESTIONS = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Security", href: "/security" },
  { label: "Contact sales", href: "/contact" },
] as const;

export default function NotFound() {
  return (
    <main className="w-full bg-paper">
      <LandingContainer className="py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-[#ecebf4]">
          <LandingShapes className="top-0 right-[-14%] bottom-0 hidden w-[55%] md:block" />
          <div className="relative flex min-h-[30rem] flex-col justify-between gap-12 p-8 md:max-w-[55%] md:p-14">
            <div>
              <LandingEyebrow>Error 404</LandingEyebrow>
              <h1 className="mt-6 font-light text-[2.75rem] text-ink leading-[1.04] tracking-[-0.045em] md:text-[4rem]">
                This page couldn&apos;t be found.
              </h1>
              <p className="mt-5 max-w-md text-base text-ink/65 leading-relaxed">
                The link may be out of date, or the page may have moved. Try
                one of these instead.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {SUGGESTIONS.map((suggestion) => (
                  <li key={suggestion.href}>
                    <Link
                      className="inline-flex rounded-full border border-ink/12 bg-white/70 px-4 py-2 text-[0.875rem] text-ink transition-colors hover:border-ink"
                      href={suggestion.href}
                    >
                      {suggestion.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <LandingButton className="w-fit" href="/">
              Back to home
            </LandingButton>
          </div>
        </div>
      </LandingContainer>
    </main>
  );
}
