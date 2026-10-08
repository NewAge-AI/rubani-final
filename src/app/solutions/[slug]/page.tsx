import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CapabilityGrid,
  MediaLinkCard,
  TextLinkCard,
} from "@/components/marketing/blocks";
import { ImageHero } from "@/components/marketing/page-hero";
import { LandingCTA } from "@/components/landing/landing-cta";
import {
  LandingSectionFrame,
  LandingSectionHeader,
} from "@/components/landing/landing-section";
import { getPlatformProduct, type PlatformProduct } from "@/data/platform";
import { getSolution, SOLUTIONS } from "@/data/solutions";
import { buildPageMetadata } from "@/utils/metadata";

type Params = { slug: string };

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    return {};
  }
  return buildPageMetadata({
    title: `${solution.name} AI`,
    description: solution.description,
    path: `/solutions/${solution.slug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) {
    notFound();
  }

  const products = solution.products
    .map((productSlug) => getPlatformProduct(productSlug))
    .filter((product): product is PlatformProduct => Boolean(product));
  const otherSolutions = SOLUTIONS.filter((other) => other.slug !== solution.slug);

  return (
    <main className="w-full">
      <ImageHero
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: solution.name },
        ]}
        description={solution.description}
        image={solution.image}
        primary={{ label: "Request a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        title={solution.headline}
      >
        <div className="mt-12 flex flex-wrap items-center gap-2 border-white/15 border-t pt-6">
          <span className="mr-2 font-mono text-[0.625rem] text-white/55 uppercase tracking-[0.14em]">
            Built for
          </span>
          {solution.audience.map((audience) => (
            <span
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.75rem] text-white/85 backdrop-blur-md"
              key={audience}
            >
              {audience}
            </span>
          ))}
        </div>
      </ImageHero>

      <LandingSectionFrame>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <LandingSectionHeader
            eyebrow="The challenge"
            titleLines={[
              { text: "Why AI has been" },
              { muted: true, text: "hard to adopt here." },
            ]}
          />
          <ol className="landing-reveal-stagger flex flex-col">
            {solution.challenges.map((challenge, index) => (
              <li
                className="grid grid-cols-[3rem_1fr] gap-4 border-ink/10 border-t py-7 last:border-b"
                key={challenge.title}
              >
                <span className="font-mono text-[0.75rem] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-normal text-[1.375rem] text-ink tracking-[-0.02em]">
                    {challenge.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[0.9375rem] text-ink/60 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame tone="stone">
        <LandingSectionHeader
          description="Agents and intelligence your teams can deploy on Rubani, inside your own environment."
          eyebrow="Use cases"
          titleLines={[
            { text: "What Rubani does" },
            { muted: true, text: `for ${solution.short.toLowerCase()}.` },
          ]}
        />
        <CapabilityGrid items={solution.useCases} />
      </LandingSectionFrame>

      <LandingSectionFrame tone="dark">
        <LandingSectionHeader
          eyebrow="Outcomes"
          titleLines={[
            { text: "What changes" },
            { muted: true, text: "when AI is yours." },
          ]}
          tone="dark"
        />
        <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {solution.outcomes.map((outcome) => (
            <div
              className="flex min-h-[16rem] flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.02] p-7 md:p-8"
              key={outcome.title}
            >
              <span aria-hidden="true" className="h-px w-10 bg-coral" />
              <div>
                <h3 className="font-normal text-[1.5rem] text-white leading-tight tracking-[-0.02em]">
                  {outcome.title}
                </h3>
                <p className="mt-3 text-[0.9375rem] text-white/60 leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </LandingSectionFrame>

      <LandingSectionFrame>
        <LandingSectionHeader
          eyebrow="Platform components"
          titleLines={[
            { text: "The parts of Rubani" },
            { muted: true, text: "behind this solution." },
          ]}
        />
        <div className="landing-reveal-stagger mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {products.map((product) => (
            <TextLinkCard
              description={product.summary}
              eyebrow={product.tag}
              href={`/platform/${product.slug}`}
              key={product.slug}
              title={product.name}
            />
          ))}
        </div>

        <div className="mt-24 border-ink/10 border-t pt-12">
          <p className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
            Other industries
          </p>
          <div className="landing-reveal-stagger mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {otherSolutions.map((other) => (
              <MediaLinkCard
                className="min-h-[18rem]"
                description={other.summary}
                eyebrow="Industry"
                href={`/solutions/${other.slug}`}
                image={other.image}
                key={other.slug}
                title={other.name}
              />
            ))}
          </div>
        </div>
      </LandingSectionFrame>

      <LandingCTA
        description={`See how institutions like yours deploy Rubani, scoped around your highest-value workflow in ${solution.short.toLowerCase()}.`}
        secondary={{ label: "All industries", href: "/solutions" }}
        title={`Bring sovereign AI to ${solution.short.toLowerCase()}.`}
      />
    </main>
  );
}
