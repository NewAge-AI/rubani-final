"use client";

import { TitleCard } from "@notra/ui/components/ui/title-card";
import { domAnimation, LazyMotion, m, useInView } from "motion/react";
import { useRef } from "react";
import {
  KenyaRevenueAuthorityLogo,
  SafaricomMpesaLogo,
  SapLogo,
  TemenosLogo,
} from "./institution-logos";
import { RubaniIcon } from "./notra-mark";

const allItems = [
  {
    icon: <TemenosLogo className="h-5 w-auto" />,
    heading: "Temenos T24",
    label: "Core banking signal stays inside your infrastructure",
    accentColor: "#1B3A6B",
  },
  {
    icon: <RubaniIcon className="size-5" />,
    heading: "Model Router",
    label: "Right-sized model selected for affordability task",
    accentColor: "#1A5C3E",
  },
  {
    icon: <SafaricomMpesaLogo className="h-5 w-auto" />,
    heading: "M-Pesa",
    label: "Edge customer transaction context available",
    accentColor: "#C96D4A",
  },
  {
    icon: <KenyaRevenueAuthorityLogo className="h-5 w-auto" />,
    heading: "KRA Registry",
    label: "Compliance data joins sovereign fabric",
    accentColor: "#1B3A6B",
  },
  {
    icon: <RubaniIcon className="size-5" />,
    heading: "Edge Agent",
    label: "Low-bandwidth inference ready for SME workflow",
    accentColor: "#1A5C3E",
  },
  {
    icon: <RubaniIcon className="size-5" />,
    heading: "Cost Control",
    label: "Small model used before specialist escalation",
    accentColor: "#C96D4A",
  },
  {
    icon: <SapLogo className="h-5 w-auto" />,
    heading: "ERP",
    label: "Operational data remains under enterprise control",
    accentColor: "#1B3A6B",
  },
  {
    icon: <SapLogo className="h-5 w-auto" />,
    heading: "SAP",
    label: "Enterprise workflow connected without vendor lock-in",
    accentColor: "#1A5C3E",
  },
  {
    icon: <RubaniIcon className="size-5" />,
    heading: "Sovereign Cloud",
    label: "Private deployment keeps intelligence in-country",
    accentColor: "#C96D4A",
  },
];

type FeedEntry = (typeof allItems)[number] & { id: number };

const initialItems: FeedEntry[] = allItems.slice(0, 3).map((item, index) => ({
  ...item,
  id: index,
}));

export function ActivityFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex w-full flex-col gap-3" ref={ref}>
        {initialItems.map((item, i) => (
          <m.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            className="w-full"
            initial={{ opacity: 0, y: -16 }}
            key={item.id}
            transition={{ duration: 0.25, ease: "easeOut", delay: i * 0.06 }}
          >
            <TitleCard
              accentColor={item.accentColor}
              action={
                <span className="text-muted-foreground text-xs">
                  {i === 0 ? "just now" : `${(i + 1) * 2}m ago`}
                </span>
              }
              className="w-full text-sm"
              heading={item.heading}
              icon={item.icon}
            >
              <p className="truncate text-muted-foreground text-sm">
                {item.label}
              </p>
            </TitleCard>
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}
