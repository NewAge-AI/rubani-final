"use client";

import OrbitImages from "@notra/ui/components/OrbitImages";
import {
  ECitizenIcon,
  KenyaRevenueAuthorityIcon,
  MtnLogo,
  PostgreSqlIcon,
  SafaricomMpesaIcon,
  SapIcon,
  TemenosIcon,
} from "./institution-logos";
import { RubaniIcon } from "./notra-mark";

const items = [
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="core"
  >
    <TemenosIcon className="size-11" />
  </div>,
  <div
    className="flex size-20 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-1.5 shadow-sm dark:border-white/15"
    key="workflow"
  >
    <SafaricomMpesaIcon className="size-24" />
  </div>,
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="ops"
  >
    <KenyaRevenueAuthorityIcon className="size-11" />
  </div>,
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="data"
  >
    <ECitizenIcon className="size-11" />
  </div>,
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="reports"
  >
    <PostgreSqlIcon className="size-11" />
  </div>,
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="governance"
  >
    <SapIcon className="size-11" />
  </div>,
  <div
    className="flex size-16 items-center justify-center overflow-hidden rounded-full border border-border bg-white dark:bg-background p-2.5 shadow-sm dark:border-white/15"
    key="cloud"
  >
    <MtnLogo className="size-11" />
  </div>,
];

const centerLogo = (
  <div className="flex size-16 items-center justify-center rounded-full border border-border bg-[#f8f5f1] text-primary shadow-md dark:border-white/10 dark:bg-[#111827]">
    <RubaniIcon className="size-8 shrink-0" />
  </div>
);

interface IntegrationOrbitProps {
  className?: string;
}

export default function IntegrationOrbit({
  className = "",
}: IntegrationOrbitProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="aspect-square h-full">
        <OrbitImages
          baseWidth={400}
          centerContent={centerLogo}
          direction="normal"
          duration={25}
          fill
          itemSize={80}
          items={items}
          pathColor="color-mix(in srgb, var(--border) 60%, transparent)"
          pathWidth={1}
          paused={false}
          radius={150}
          responsive
          rotation={0}
          shape="circle"
          showPath
        />
      </div>
    </div>
  );
}
