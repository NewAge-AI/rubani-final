import { LandingContainer } from "./landing-section";

const SECTORS = [
  "Commercial banks",
  "SACCOs",
  "Insurers",
  "Digital lenders",
  "Hospitals",
  "Health insurers",
  "Ministries",
  "Revenue authorities",
  "Mobile network operators",
  "Power & water utilities",
] as const;

function SectorList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 md:gap-10 md:pr-10"
    >
      {SECTORS.map((sector) => (
        <li
          className="flex items-center gap-8 whitespace-nowrap font-display text-[1.0625rem] text-ink/55 tracking-[-0.01em] md:gap-10 md:text-[1.1875rem]"
          key={sector}
        >
          {sector}
          <span aria-hidden="true" className="size-1 rounded-full bg-ink/25" />
        </li>
      ))}
    </ul>
  );
}

/** Sector strip where premium sites place a customer logo band. */
export function LandingSectors() {
  return (
    <section
      aria-label="Institutions Rubani is built for"
      className="w-full border-ink/8 border-y bg-paper py-7 md:py-9"
    >
      <LandingContainer className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em] md:max-w-[12rem]">
          Built for the institutions that keep Africa running
        </p>
        <div className="landing-marquee-mask relative min-w-0 flex-1 overflow-hidden">
          <div className="landing-marquee-track flex w-max">
            <SectorList />
            <SectorList hidden />
          </div>
        </div>
      </LandingContainer>
    </section>
  );
}
