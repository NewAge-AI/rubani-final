import Image from "next/image";
import { LandingSectionFrame, LandingSectionHeader } from "./landing-section";

const PRODUCTS = [
  {
    tag: "Applications",
    title: "Agents & Copilots",
    description:
      "Credit, savings, customer, and SME agents, plus developer APIs, deployed as copilots across the business.",
    image: "/landing/solutions/agents.webp",
  },
  {
    tag: "Orchestration",
    title: "Smart Model Orchestration",
    description:
      "The right-sized model for every task, balancing accuracy, cost, privacy, and latency.",
    image: "/landing/solutions/orchestration.webp",
  },
  {
    tag: "Data",
    title: "360° Data Fabric",
    description:
      "Integrates, aligns, and contextualizes your data, from transactions and devices to customers, markets, and compliance, into one fabric that turns it into actionable insight.",
    image: "/landing/solutions/360-fabric.webp",
  },
] as const;

export function LandingProductCards() {
  return (
    <LandingSectionFrame id="how-it-works" tone="muted">
      <img
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 hidden w-[34rem] max-w-none rotate-180 opacity-50 mix-blend-multiply select-none lg:block"
        src="/landing/product-bg-4.svg"
      />

      <LandingSectionHeader
        description="How the three founding principles become a full stack, from customer-facing agents down to the sovereign data fabric underneath them."
        eyebrow="Rubani Platform Architecture"
        titleLines={[
          { text: "How the principles" },
          { muted: true, text: "become a full stack." },
        ]}
      />

      <div className="landing-reveal-stagger relative mt-12 flex flex-col overflow-hidden border border-neutral-200/80 bg-white/95 backdrop-blur-sm">
        {PRODUCTS.map((product) => (
          <article
            className="landing-product-row grid grid-cols-1 items-center gap-8 border-neutral-200/80 border-b px-4 py-10 last:border-b-0 md:grid-cols-[3fr_2fr] md:px-8 md:py-12"
            key={product.tag}
          >
            <div data-landing-motion>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] opacity-60">
                {product.tag}
              </span>
              <h3 className="mt-3 font-medium text-[1.75rem] tracking-[-0.03em] md:text-[2.25rem]">
                {product.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed opacity-70 md:text-base">
                {product.description}
              </p>
            </div>
            <div className="relative h-44 overflow-hidden rounded-none bg-neutral-100 md:h-56">
              <Image
                alt=""
                className="object-cover opacity-90"
                fill
                sizes="(max-width: 768px) 100vw, 460px"
                src={product.image}
              />
            </div>
          </article>
        ))}
      </div>
    </LandingSectionFrame>
  );
}
