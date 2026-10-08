import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CapabilityGrid,
  MediaLinkCard,
  SpecTable,
  StepList,
  TextLinkCard,
} from "@/components/marketing/blocks";
import { SplitHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import { PRODUCT_OVERLAYS } from "@/components/landing/landing-product-cards";
import {
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { getPlatformProduct, PLATFORM_PRODUCTS } from "@/data/platform";
import { getSolution, type Solution } from "@/data/solutions";
import { buildPageMetadata } from "@/utils/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return PLATFORM_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getPlatformProduct(slug);
  if (!product) {
    return {};
  }
  return buildPageMetadata({
    title: product.name,
    description: product.description,
    path: `/platform/${product.slug}`,
  });
}

export default async function PlatformProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getPlatformProduct(slug);
  if (!product) {
    notFound();
  }

  const solutions = product.solutions
    .map((solutionSlug) => getSolution(solutionSlug))
    .filter((solution): solution is Solution => Boolean(solution));
  const otherProducts = PLATFORM_PRODUCTS.filter(
    (other) => other.slug !== product.slug
  );

  return (
    <main className="w-full">
      <SplitHero
        breadcrumbs={[
          { label: "Platform", href: "/platform" },
          { label: product.name },
        ]}
        description={product.description}
        eyebrow={product.tag}
        image={product.image}
        overlay={PRODUCT_OVERLAYS[product.slug]}
        primary={{ label: "Request a demo", href: "/contact" }}
        secondary={{ label: "Talk to an expert", href: "/contact" }}
        title={product.headline}
      />

      <LandingSectionFrame>
        <LandingSectionHeader
          eyebrow="Capabilities"
          titleLines={[
            { text: `What ${product.name}` },
            { muted: true, text: "brings to your institution." },
          ]}
        />
        <CapabilityGrid items={product.capabilities} />
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <LandingSectionHeader
          eyebrow="How it works"
          titleLines={[
            { text: "Live in weeks," },
            { muted: true, text: "governed from day one." },
          ]}
          tone="dark"
        />
        <StepList steps={product.steps} tone="dark" />
      </LandingSectionFrame>

      <LandingSectionFrame tone="stone">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <LandingSectionHeader
            description="The essentials your architecture, security, and risk teams will ask about."
            eyebrow="At a glance"
            titleLines={[{ text: "Built for" }, { muted: true, text: "regulated estates." }]}
          />
          <SpecTable rows={product.specs} />
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <LandingSectionHeader
          eyebrow="In practice"
          titleLines={[
            { text: "Where institutions" },
            { muted: true, text: "put it to work." },
          ]}
        />
        <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {solutions.map((solution) => (
            <MediaLinkCard
              description={solution.summary}
              eyebrow="Industry"
              href={`/solutions/${solution.slug}`}
              image={solution.image}
              key={solution.slug}
              title={solution.name}
            />
          ))}
        </div>

        <div className="mt-24 border-ink/10 border-t pt-12">
          <p className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
            Explore the rest of the platform
          </p>
          <div className="landing-reveal-stagger mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherProducts.map((other) => (
              <TextLinkCard
                description={other.summary}
                eyebrow={other.tag}
                href={`/platform/${other.slug}`}
                key={other.slug}
                title={other.name}
              />
            ))}
          </div>
        </div>
      </LandingSectionFrame>

      <LandingCTA
        description={`See ${product.name} running on your data, inside your environment, scoped around your highest-value workflow.`}
        secondary={{ label: "Back to platform overview", href: "/platform" }}
        title="Put it to work in your institution."
      />
    </main>
  );
}
