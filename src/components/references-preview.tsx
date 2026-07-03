import { RubaniIcon } from "./notra-mark";

function ReviewCard() {
  return (
    <div className="flex break-inside-avoid flex-col overflow-hidden rounded-xl border border-border/80">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <RubaniIcon className="size-9 shrink-0 rounded-full border border-border/70 p-1.5" />
            <div className="min-w-0">
              <span className="truncate font-semibold text-sm leading-tight">
                Sovereign intelligence review
              </span>
              <div className="flex items-center gap-1">
                <span className="truncate text-muted-foreground text-xs">
                  End-to-end ownership
                </span>
                <span className="text-muted-foreground/50 text-xs">·</span>
                <span className="shrink-0 text-muted-foreground/70 text-xs">
                  Today
                </span>
              </div>
            </div>
          </div>
          <span className="rounded-full hidden sm:block bg-muted px-2 py-0.5 text-[0.6875rem] text-muted-foreground">
            No lock-in
          </span>
        </div>

        <div className="space-y-2 text-[0.8125rem] leading-relaxed">
          <p>
            A customer affordability task ran on a small open model inside
            controlled infrastructure.
          </p>
          <p>
            Specialist escalation is available only when required, preserving
            privacy, latency, and cost discipline.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-0.5 text-xs">
          <div className="rounded-lg border bg-muted/30 p-2">
            <p className="text-muted-foreground">Cost</p>
            <p className="font-medium text-foreground">Small first</p>
          </div>
          <div className="rounded-lg border bg-muted/30 p-2">
            <p className="text-muted-foreground">Data</p>
            <p className="font-medium text-foreground">In-country</p>
          </div>
          <div className="rounded-lg border bg-muted/30 p-2">
            <p className="text-muted-foreground">Reach</p>
            <p className="font-medium text-foreground">Edge</p>
          </div>
        </div>
      </div>

      <div className="border-t bg-muted/50 px-4 py-2.5">
        <span className="text-muted-foreground/50 text-xs">
          No leaked IP. No vendor lock-in. No data centre required.
        </span>
      </div>
    </div>
  );
}

export default function ReferencesPreview() {
  return (
    <div className="relative overflow-hidden">
      <div className="pt-2">
        <ReviewCard />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-linear-to-t from-background to-transparent" />
    </div>
  );
}
