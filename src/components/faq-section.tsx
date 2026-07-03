"use client";

import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@notra/ui/components/ui/collapsible";
import { useState } from "react";
import { serializeJsonLd } from "@/utils/jsonld";
import type { FAQItem } from "~types/faq";

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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (question: string) => {
    setOpenItem((prev) => (prev === question ? null : question));
  };

  return (
    <div className="flex w-full items-start justify-center">
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: SSR'd JSON-LD payload, escaped via serializeJsonLd
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
        type="application/ld+json"
      />
      <div className="flex flex-1 flex-col items-start justify-start gap-6 px-4 py-16 md:px-12 md:py-20 lg:flex-row lg:gap-12">
        <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-1 lg:py-5">
          <h2 className="flex w-full flex-col justify-center text-balance font-sans font-semibold text-4xl text-foreground leading-tight tracking-tight md:leading-[44px]">
            Frequently{" "}
            <span className="whitespace-nowrap text-primary">
              Asked Questions
            </span>
          </h2>
          <div className="w-full font-normal font-sans text-base text-muted-foreground leading-7">
            Common questions about deployment, data sovereignty,
            <br className="hidden md:block" /> and fitting Rubani into your
            existing stack.
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center lg:flex-1">
          <div className="flex w-full flex-col">
            {faqData.map((item) => {
              const isOpen = openItem === item.question;

              return (
                <Collapsible
                  className="w-full overflow-hidden border-border/60 border-b"
                  key={item.question}
                  onOpenChange={() => toggleItem(item.question)}
                  open={isOpen}
                >
                  <CollapsibleTrigger className="flex w-full items-center justify-between gap-5 px-5 py-[18px] text-left transition-colors duration-200 hover:bg-foreground/2">
                    <h3 className="flex-1 font-medium font-sans text-base text-foreground leading-6">
                      {item.question}
                    </h3>
                    <div className="flex items-center justify-center">
                      <HugeiconsIcon
                        className={`size-5 text-foreground/60 transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        icon={ArrowDown01Icon}
                      />
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden transition-all duration-300 ease-in-out data-ending-style:max-h-0 data-starting-style:max-h-0 data-ending-style:opacity-0 data-starting-style:opacity-0 [[data-open]>&]:max-h-96 [[data-open]>&]:opacity-100">
                    <div className="px-5 pb-[18px] font-normal font-sans text-muted-foreground text-sm leading-6">
                      {item.answer}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
