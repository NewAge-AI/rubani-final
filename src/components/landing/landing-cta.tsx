import {
  LandingButton,
  LandingContainer,
  LandingEyebrow,
  LandingShapes,
  LandingTextLink,
} from "./landing-section";

type LandingCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  secondary?: { label: string; href: string };
};

export function LandingCTA({
  eyebrow = "Get started",
  title = "Own your intelligence, end to end.",
  description = "Deploy AI agents your customers can actually reach, on infrastructure you actually control, at a cost your business can actually sustain. No leaked IP. No vendor lock-in. No data centre required.",
  secondary = { label: "Explore the platform", href: "/platform" },
}: LandingCTAProps = {}) {
  return (
    <section className="w-full bg-paper py-20 md:py-28" id="cta">
      <LandingContainer>
        <div className="landing-reveal relative overflow-hidden rounded-3xl bg-[#ecebf4]">
          <LandingShapes className="top-0 right-[-12%] bottom-0 hidden w-[58%] md:block" />
          <div className="relative flex min-h-[26rem] flex-col justify-between gap-12 p-8 md:min-h-[30rem] md:max-w-[52%] md:p-14">
            <div className="flex flex-col gap-5">
              <LandingEyebrow>{eyebrow}</LandingEyebrow>
              <h2 className="font-normal text-[2.25rem] text-ink leading-[1.06] tracking-[-0.035em] md:text-[3.25rem]">
                {title}
              </h2>
              <p className="max-w-md text-base text-ink/65 leading-relaxed">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <LandingButton href="/contact">Request a demo</LandingButton>
              <LandingTextLink href={secondary.href}>{secondary.label}</LandingTextLink>
            </div>
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
