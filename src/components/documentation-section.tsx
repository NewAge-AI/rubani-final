"use client";

import { useCallback, useEffect, useRef, useState } from "react";

function ChangelogCard() {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="h-full overflow-hidden">
        <article className="prose prose-stone prose-sm dark:prose-invert h-full max-w-none overflow-hidden px-5 py-4 md:px-6 md:py-5">
          <p>
            Rubani turns sovereignty, orchestration, and edge AI into a full
            enterprise stack for African institutions.
          </p>

          <p className="font-semibold">
            Data stays in-country
          </p>
          <p>
            Intelligence runs inside your infrastructure, under your control,
            without leaking proprietary data to third-party model companies.
          </p>

          <p className="font-semibold">
            Right-sized model strategy
          </p>
          <p>
            Small models handle most enterprise workloads first, while
            orchestration selects the right model for each task.
          </p>

          <p className="font-semibold">Edge inference</p>
          <p>
            AI reaches customers and SMEs on-device, in low-bandwidth settings,
            where productivity is actually created.
          </p>

          <p className="font-semibold">
            No single vendor lock-in
          </p>
          <p>
            Open, orchestrated models reduce dependency on any one external AI
            vendor or cloud provider.
          </p>

          <p className="font-semibold">
            Sustainable cost
          </p>
          <p>
            Small-model-first workloads can be dramatically cheaper while
            preserving privacy, latency, and accuracy requirements.
          </p>
        </article>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-background via-background/95 to-transparent" />
    </div>
  );
}

function BlogCard() {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="flex h-full flex-col gap-3 overflow-hidden px-5 py-4 md:px-6 md:py-5">
        <div className="rounded-xl border bg-muted/30 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-sm">Model route selected</p>
              <p className="text-muted-foreground text-xs">
                Smart orchestration layer
              </p>
            </div>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-primary text-xs">
              Low latency
            </span>
          </div>
        </div>
        <div className="grid gap-2 text-[0.8125rem]">
          {[
            ["Task", "Customer affordability signal"],
            ["Model", "Small open model inside VPC"],
            ["Escalation", "Specialist model only when required"],
          ].map(([team, action]) => (
            <div
              className="flex items-center justify-between gap-3 rounded-lg border p-3"
              key={team}
            >
              <div>
                <p className="font-medium">{team}</p>
                <p className="text-muted-foreground text-xs">{action}</p>
              </div>
              <span className="rounded-full bg-muted px-2 py-0.5 text-muted-foreground text-xs">
                Routed
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-background via-background/95 to-transparent" />
    </div>
  );
}

function AlertCard() {
  return (
    <div className="relative h-full w-full bg-background">
      <div className="flex h-full flex-col gap-3 overflow-hidden px-5 py-4 md:px-6 md:py-5">
        <div className="flex flex-col gap-3 rounded-xl border p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-sm">
                Edge inference ready
              </p>
              <p className="text-muted-foreground text-xs">
                Mobile device · Low bandwidth · Local context
              </p>
            </div>
            <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-destructive text-xs">
              Online
            </span>
          </div>
          <div className="space-y-2 text-[0.8125rem] leading-relaxed">
            <p>Agent can respond close to the customer and SME workflow.</p>
            <p>
              Data remains inside controlled infrastructure while the agent
              serves the edge where the work happens.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 border-t pt-3 text-xs">
            <div>
              <p className="text-muted-foreground">Reach</p>
              <p className="font-medium">Edge-first</p>
            </div>
            <div>
              <p className="text-muted-foreground">Data</p>
              <p className="font-medium">Sovereign</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-28 bg-linear-to-t from-background via-background/95 to-transparent" />
    </div>
  );
}

const CARD_CONTENT = [ChangelogCard, BlogCard, AlertCard] as const;

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
      setAnimationKey((prev) => prev + 1);
    }, 7000);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    setAnimationKey((prev) => prev + 1);
    startInterval();
  };

  const Card = CARD_CONTENT[activeCard] ?? CARD_CONTENT[0];

  return (
    <div className="flex w-full flex-col items-center justify-center shadow-[inset_0_-1px_0_var(--border)]">
      <div className="flex items-center justify-center gap-6 self-stretch px-6 py-12 shadow-[inset_0_-1px_0_var(--border)] md:px-24 md:py-16">
        <div className="flex w-full max-w-[586px] flex-col items-center justify-start gap-4">
          <h2 className="self-stretch text-balance text-center font-sans font-semibold text-3xl text-foreground leading-tight tracking-tight md:text-5xl md:leading-[60px]">
            Built against the way{" "}
            <span className="text-primary">the industry defaults</span>
          </h2>
          <div className="self-stretch text-center font-normal font-sans text-base text-muted-foreground leading-7">
            Data stays in-country, model strategy is right-sized,
            <br />
            and reach extends to the edge.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start self-stretch overflow-hidden px-4 md:px-9">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 py-8 md:flex-row md:gap-12 md:py-11">
          <div className="order-2 flex w-full flex-col items-center justify-between gap-4 md:order-1 md:w-auto md:max-w-[400px] md:self-stretch">
            <button
              className={`landing-card flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden border border-border/70 transition-all duration-300 ${
                activeCard === 0 ? "border-border bg-background" : ""
              }`}
              onClick={() => handleCardClick(0)}
              type="button"
            >
              <div
                className={`h-0.5 w-full overflow-hidden bg-primary/8 ${activeCard === 0 ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className="h-0.5 animate-[progressBar_7s_linear_forwards] bg-primary will-change-transform"
                  key={
                    activeCard === 0
                      ? animationKey
                      : `inactive-0-${animationKey}`
                  }
                />
              </div>
              <div className="flex w-full flex-col gap-2 px-6 py-5">
                <div className="flex flex-col justify-center self-stretch font-sans font-semibold text-foreground text-sm leading-6">
                  Data sovereignty
                </div>
                <div className="self-stretch whitespace-pre-line font-normal font-sans text-[13px] text-muted-foreground leading-[22px]">
                  Stays in-country and inside your infrastructure.
                  {"\n"}
                  Your data remains under your control.
                </div>
              </div>
            </button>

            <button
              className={`landing-card flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden border border-border/70 transition-all duration-300 ${
                activeCard === 1 ? "border-border bg-background" : ""
              }`}
              onClick={() => handleCardClick(1)}
              type="button"
            >
              <div
                className={`h-0.5 w-full overflow-hidden bg-primary/8 ${activeCard === 1 ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className="h-0.5 animate-[progressBar_7s_linear_forwards] bg-primary will-change-transform"
                  key={
                    activeCard === 1
                      ? animationKey
                      : `inactive-1-${animationKey}`
                  }
                />
              </div>
              <div className="flex w-full flex-col gap-2 px-6 py-5">
                <div className="flex flex-col justify-center self-stretch font-sans font-semibold text-foreground text-sm leading-6">
                  Model orchestration
                </div>
                <div className="self-stretch whitespace-pre-line font-normal font-sans text-[13px] text-muted-foreground leading-[22px]">
                  The right-sized model for every task
                  {"\n"}
                  without single-vendor lock-in.
                </div>
              </div>
            </button>

            <button
              className={`landing-card flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden border border-border/70 transition-all duration-300 ${
                activeCard === 2 ? "border-border bg-background" : ""
              }`}
              onClick={() => handleCardClick(2)}
              type="button"
            >
              <div
                className={`h-0.5 w-full overflow-hidden bg-primary/8 ${activeCard === 2 ? "opacity-100" : "opacity-0"}`}
              >
                <div
                  className="h-0.5 animate-[progressBar_7s_linear_forwards] bg-primary will-change-transform"
                  key={
                    activeCard === 2
                      ? animationKey
                      : `inactive-2-${animationKey}`
                  }
                />
              </div>
              <div className="flex w-full flex-col gap-2 px-6 py-5">
                <div className="flex flex-col justify-center self-stretch font-sans font-semibold text-foreground text-sm leading-6">
                  Edge reach
                </div>
                <div className="self-stretch whitespace-pre-line font-normal font-sans text-[13px] text-muted-foreground leading-[22px]">
                  On-device and low-bandwidth inference
                  {"\n"}for customers and SMEs.
                </div>
              </div>
            </button>
          </div>

          <div className="order-1 flex w-full flex-col items-center justify-center gap-2 px-0 md:order-2 md:w-auto md:px-0">
            <div className="landing-card flex h-[250px] w-full flex-col items-start justify-start overflow-hidden border border-border bg-background md:h-[420px] md:w-[580px]">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
