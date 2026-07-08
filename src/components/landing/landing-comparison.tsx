import { Cancel01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const ROWS = [
  {
    feature: "Data",
    traditional: "Leaves your environment",
    rubani: "Stays in-country, inside your infrastructure",
  },
  {
    feature: "Model strategy",
    traditional: "One large, general-purpose model",
    rubani: "Right-sized model, orchestrated per task",
  },
  {
    feature: "Cost",
    traditional: "Usage-based, unpredictable spend",
    rubani: "Small models first, up to 99% cheaper",
  },
  {
    feature: "Vendor risk",
    traditional: "Single point of vendor lock-in",
    rubani: "No single point of vendor lock-in",
  },
  {
    feature: "Reach",
    traditional: "Cloud-only, high-bandwidth delivery",
    rubani: "Edge inference, on-device, low-bandwidth",
  },
] as const;

function TableCorner({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute text-neutral-950/25",
        className
      )}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
    >
      <path
        d="M 12 0 L 0 0 L 0 12"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  );
}

export function LandingComparison() {
  return (
    <LandingSectionFrame tone="muted">
      <LandingSectionHeader
        description="Rubani is built against the way the industry defaults: general-purpose models, cloud-only delivery, and unpredictable cost."
        eyebrow="A Differentiated Approach"
        titleLines={[
          { text: "Built against the way" },
          { text: "the industry defaults." },
        ]}
      />

      <div className="landing-reveal mt-12 pb-2">
        <div className="relative overflow-hidden border border-neutral-950/10 bg-white">
          <TableCorner className="-top-px -left-px" />
          <TableCorner className="-right-px -bottom-px rotate-180" />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[42rem] border-collapse">
              <thead>
                <tr className="border-neutral-950/10 border-b">
                  <th className="bg-[#f5f7fb] px-4 py-3 text-left">
                    <span className="font-mono text-[0.625rem] text-neutral-500 uppercase tracking-[0.14em]">
                      
                    </span>
                  </th>
                  <th className="bg-red-50/50 px-4 py-3 text-center">
                    <span className="font-mono text-[0.625rem] text-red-600 uppercase tracking-[0.14em]">
                      Industry default
                    </span>
                  </th>
                  <th className="bg-emerald-50 px-4 py-3 text-center">
                    <span className="font-mono text-[0.625rem] text-emerald-800 uppercase tracking-[0.14em]">
                      With Rubani
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, index) => (
                  <tr
                    className="landing-comparison-row border-neutral-950/5 border-b last:border-b-0"
                    key={row.feature}
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-[0.9375rem] text-neutral-950 leading-[1.45]">
                        {row.feature}
                      </p>
                    </td>
                    <td className="bg-red-50/50 px-4 py-3 text-center">
                      <span className="inline-flex items-center justify-center gap-1.5 text-red-600/70 text-sm">
                        <HugeiconsIcon
                          className="size-3.5 shrink-0"
                          icon={Cancel01Icon}
                        />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="bg-emerald-50 px-4 py-3 text-center">
                      <span className="inline-flex items-center justify-center gap-1.5 font-medium text-emerald-800 text-sm">
                        <HugeiconsIcon
                          className="size-3.5 shrink-0"
                          icon={Tick02Icon}
                        />
                        {row.rubani}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </LandingSectionFrame>
  );
}
