import { LandingContainer } from "./landing-section";

const STATS = [
  {
    value: "100%",
    label: "Data residency",
    detail:
      "Intelligence stays inside your infrastructure and under your control.",
  },
  {
    value: "Edge",
    label: "First delivery",
    detail: "Reach customers and SMEs in low-bandwidth environments.",
  },
  {
    value: "99%",
    label: "Cheaper compute",
    detail:
      "Small, right-sized models first, orchestrated per task, not one big LLM.",
  },
  {
    value: "Zero",
    label: "Vendor lock-in",
    detail: "Open orchestration across systems, clouds, and deployment models.",
  },
] as const;

export function LandingStats() {
  return (
    <section className="w-full bg-ink py-14 text-white md:py-16">
      <LandingContainer>
        <div className="landing-reveal-stagger grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {STATS.map((stat) => (
            <div className="flex flex-col" key={stat.label}>
              <p className="font-mono text-[0.6875rem] text-white/50 uppercase tracking-[0.14em]">
                {stat.label}
              </p>
              <p className="mt-3 font-display font-light text-[2.75rem] leading-none tracking-[-0.04em] md:text-[3.5rem]">
                {stat.value}
              </p>
              <p className="mt-4 max-w-[16rem] text-[0.875rem] text-white/55 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
