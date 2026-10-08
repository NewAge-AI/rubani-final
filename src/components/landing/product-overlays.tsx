import type { ReactNode } from "react";

function OverlayCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-full max-w-[22rem] rounded-xl border border-white/10 bg-ink/80 p-4 text-white shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      {children}
    </div>
  );
}

function AgentsOverlay() {
  return (
    <OverlayCard>
      <div className="flex items-start gap-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-coral font-display font-medium text-[0.8125rem] text-white">
          R
        </span>
        <p className="text-[0.875rem] text-white/90 leading-snug">
          Three applicants match the SME profile. I&apos;ve drafted credit
          memos with cited evidence for review.
        </p>
      </div>
      <div className="mt-3 flex gap-2 pl-10">
        <span className="rounded-md bg-white px-2.5 py-1 font-medium text-[0.75rem] text-ink">
          Review memos
        </span>
        <span className="rounded-md border border-white/15 px-2.5 py-1 text-[0.75rem] text-white/75">
          Escalate
        </span>
      </div>
    </OverlayCard>
  );
}

const EDGE_NODES = [
  { site: "Kisumu branch", status: "Online" },
  { site: "Field agent 214", status: "Offline · queued" },
  { site: "Nairobi DC", status: "Online" },
] as const;

function EdgeOverlay() {
  return (
    <OverlayCard>
      <p className="font-mono text-[0.625rem] text-white/50 uppercase tracking-[0.14em]">
        Edge nodes
      </p>
      <ul className="mt-3 flex flex-col divide-y divide-white/10">
        {EDGE_NODES.map((node) => (
          <li
            className="flex items-center justify-between gap-3 py-2 text-[0.8125rem]"
            key={node.site}
          >
            <span className="text-white/85">{node.site}</span>
            <span className="flex items-center gap-1.5 font-mono text-[0.6875rem] text-white/55">
              <span
                className={
                  node.status === "Online"
                    ? "size-1.5 rounded-full bg-emerald-400"
                    : "size-1.5 rounded-full bg-amber-400"
                }
              />
              {node.status}
            </span>
          </li>
        ))}
      </ul>
    </OverlayCard>
  );
}

export const PRODUCT_OVERLAYS: Record<string, ReactNode> = {
  agents: <AgentsOverlay />,
  edge: <EdgeOverlay />,
};
