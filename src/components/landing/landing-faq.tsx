"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@notra/ui/components/ui/collapsible";
import { useState } from "react";
import type { FAQItem } from "~types/faq";
import { LandingEyebrow } from "./landing-section";

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
    <section
      className="w-full bg-[#fafafa] px-6 py-16 md:px-10 md:py-20 lg:px-12"
      id="faq"
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center">
          <LandingEyebrow>FAQ</LandingEyebrow>
          <h2 className="mt-3 font-medium text-[2rem] text-neutral-950 tracking-[-0.03em] md:text-[3rem]">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {faqData.map((item, index) => (
            <Collapsible
              key={item.question}
              onOpenChange={(open) => setOpenIndex(open ? index : null)}
              open={openIndex === index}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6">
                <span className="font-medium text-neutral-950 text-sm md:text-base">
                  {item.question}
                </span>
                <HugeiconsIcon
                  className={`size-4 shrink-0 text-neutral-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  icon={ArrowDown01Icon}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed md:px-6 md:text-base">
                {item.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}
