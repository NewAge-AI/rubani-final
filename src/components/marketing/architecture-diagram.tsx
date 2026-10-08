const LAYERS = [
  {
    label: "Applications",
    name: "Agents & Copilots",
    chips: ["Credit", "KYC", "Customer care", "Field service"],
  },
  {
    label: "Orchestration",
    name: "Policy router",
    chips: ["Small · 3B", "Medium · 8B", "Edge · 1B", "Approved frontier"],
  },
  {
    label: "Data",
    name: "360° Data Fabric",
    chips: ["Core banking", "CRM", "OSS/BSS", "EHR"],
  },
  {
    label: "Infrastructure",
    name: "Your estate",
    chips: ["On-premise", "Private cloud", "Edge devices"],
  },
] as const;

/** Layered view of the Rubani stack with a governance rail across every layer. */
export function ArchitectureDiagram() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-midnight p-4 text-white sm:p-6 md:p-10">
      <div
        aria-hidden="true"
        className="landing-grain pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="relative grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:gap-4">
        <ol className="flex flex-col gap-3">
          {LAYERS.map((layer, index) => (
            <li
              className="grid grid-cols-1 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-[13rem_1fr] md:p-6"
              key={layer.label}
              style={{ marginInline: `${index * 0.75}rem` }}
            >
              <div>
                <p className="font-mono text-[0.625rem] text-white/50 uppercase tracking-[0.14em]">
                  {String(index + 1).padStart(2, "0")} · {layer.label}
                </p>
                <p className="mt-1.5 font-display text-[1.25rem] tracking-[-0.02em]">
                  {layer.name}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.chips.map((chip) => (
                  <span
                    className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-[0.75rem] text-white/80"
                    key={chip}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
        <div className="flex items-center justify-center rounded-2xl border border-[#a9c1ee]/30 bg-brand/30 px-4 py-4 md:w-16 md:py-0">
          <p className="font-mono text-[0.625rem] text-[#c7d7f5] uppercase tracking-[0.18em] md:rotate-180 md:[writing-mode:vertical-rl]">
            Governance · policy · access · audit
          </p>
        </div>
      </div>
    </div>
  );
}
