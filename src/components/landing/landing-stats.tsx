import { LandingSectionFrame } from "./landing-section";

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
    <LandingSectionFrame padding="compact" tone="dark">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STATS.map((stat) => (
          <div
            className="border-white/10 border-b pb-8 last:border-b-0 md:border-r md:border-b-0 md:pr-8 md:pb-0 md:last:border-r-0 lg:pr-8"
            key={stat.label}
          >
            <div className="font-medium text-4xl text-white tracking-[-0.03em] md:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 font-mono text-[0.6875rem] text-white/55 uppercase tracking-[0.18em]">
              {stat.label}
            </div>
            <p className="mt-3 text-sm text-white/45 leading-relaxed">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
