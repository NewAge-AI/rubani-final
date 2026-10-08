"use client";

import { ArrowRight01Icon, PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@notra/ui/components/ui/collapsible";
import { useState } from "react";
import type { FAQItem } from "~types/faq";
import {
  LandingEyebrow,
  LandingSectionFrame,
  LandingTextLink,
} from "./landing-section";

const faqData: FAQItem[] = [
  {
    question: "Where does Rubani run?",
    answer:
      "Entirely inside your infrastructure: your cloud, your servers, your network. Models, embeddings, and data processes stay within your environment.",
  },
  {
    question: "Do we need to replace our existing systems?",
    answer:
      "No. Rubani connects to the systems you already run, including ERP, CRM, core banking, OSS/BSS, EHR, files, and legacy databases.",
  },
  {
    question: "How long does it take to see value?",
    answer:
      "Engagements start with your highest-value data sources and use cases. Most institutions move from scoping to decision-ready intelligence in weeks.",
  },
  {
    question: "Is our data sent outside the organization?",
    answer:
      "Rubani is architected for data sovereignty. Processing runs on-premises or in your private cloud with access controls enforced by design.",
  },
  {
    question: "Which institutions is Rubani built for?",
    answer:
      "Regulated organisations that cannot compromise on privacy, auditability, or control, including financial services, government, healthcare, telco, and utilities operators.",
  },
  {
    question: "What happens in a demo?",
    answer:
      "We walk through how Rubani applies to your sector and systems, including ingestion, intelligence, reports, and scenarios relevant to your institution.",
  },
];

export function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <LandingSectionFrame id="faq" tone="stone">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
          <LandingEyebrow>FAQ</LandingEyebrow>
          <h2 className="font-normal text-[2rem] text-ink leading-[1.08] tracking-[-0.035em] sm:text-[2.5rem] md:text-[3rem]">
            Questions, answered.
          </h2>
          <p className="max-w-sm text-base text-ink/60 leading-relaxed">
            Can&apos;t find what you&apos;re looking for? Our team works with
            institutions across the continent.
          </p>
          <LandingTextLink className="w-fit" href="/contact">
            Talk to our team
            <HugeiconsIcon className="size-4" icon={ArrowRight01Icon} />
          </LandingTextLink>
        </div>

        <div className="border-ink/10 border-t">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Collapsible
                className="border-ink/10 border-b"
                key={item.question}
                onOpenChange={(open) => setOpenIndex(open ? index : null)}
                open={isOpen}
              >
                <CollapsibleTrigger className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="font-display text-[1.125rem] text-ink tracking-[-0.01em] md:text-[1.25rem]">
                    {item.question}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink/70">
                    <HugeiconsIcon
                      className={`size-3.5 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      icon={PlusSignIcon}
                    />
                  </span>
                </CollapsibleTrigger>
                <CollapsibleContent className="max-w-2xl pb-6 text-[0.9375rem] text-ink/60 leading-relaxed md:text-base">
                  {item.answer}
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </LandingSectionFrame>
  );
}
