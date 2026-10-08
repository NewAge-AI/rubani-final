"use client";

import { PlusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@notra/ui/components/ui/collapsible";
import { useState } from "react";

export function FaqList({
  items,
}: {
  items: readonly { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-ink/10 border-t">
      {items.map((item, index) => {
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
  );
}
