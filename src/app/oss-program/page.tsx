import { Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import type { Metadata } from "next";
import { OssApplicationForm } from "@/components/oss-program/oss-application-form";
import { DEFAULT_SOCIAL_IMAGE, TWITTER_HANDLE } from "@/utils/metadata";
import { SITE_URL } from "@/utils/urls";

const title = "Rubani for Institutions";
const description =
  "Rubani partners with institutions to scope governed AI pilots, connect priority systems, and prove intelligence workflows with real operational data.";
const url = `${SITE_URL}/oss-program`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "website",
    siteName: "Rubani",
    images: [DEFAULT_SOCIAL_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_SOCIAL_IMAGE.url],
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
  },
};

const BENEFITS = [
  {
    label: "Focused pilot scope",
    detail:
      "Start with one high-value workflow and a clear implementation path.",
  },
  {
    label: "Connected institutional data",
    detail:
      "Connect the systems, files, and workflows that matter most.",
  },
  {
    label: "Governed AI outputs",
    detail:
      "Generate explainable insights, reports, and recommendations with review.",
  },
  {
    label: "A direct line to the team",
    detail: "Work directly with the Rubani team on fit, rollout, and controls.",
  },
] as const;

const OSI_LICENSES_URL = "https://opensource.org/licenses";

const ELIGIBILITY = [
  {
    id: "public",
    content: "Your institution has a priority workflow with measurable value.",
  },
  {
    id: "license",
    content: (
      <>
        Your team can support secure discovery and integration under an{" "}
        <a
          className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover"
          href={OSI_LICENSES_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          agreed implementation scope
        </a>
        .
      </>
    ),
  },
  {
    id: "useful",
    content:
      "You need intelligence across systems, teams, or regulated workflows.",
  },
  {
    id: "maintainer",
    content: "You can involve the business, data, and security stakeholders.",
  },
  {
    id: "active",
    content: "You have real data sources or reports ready to evaluate.",
  },
] as const;

export default function OssProgramPage() {
  return (
    <div className="flex w-full flex-col items-center justify-start overflow-hidden border-border/70 border-b pt-20 sm:pt-24 md:pt-28 lg:pt-32">
      <section className="flex w-full items-center justify-center px-6 py-12 md:px-24 md:py-16">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-4">
          <h1 className="text-balance text-center font-sans font-semibold text-4xl text-foreground leading-tight tracking-tight md:text-6xl">
            Rubani for <span className="text-primary">Institutions</span>
          </h1>
          <p className="text-pretty text-center font-normal font-sans text-base text-muted-foreground leading-7">
            Scope a focused Rubani pilot around your systems, governance, and
            the first decision workflow that can prove value.
          </p>
        </div>
      </section>

      <section className="w-full border-border/70 border-t px-6 py-12 md:px-24 md:py-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight md:text-3xl">
              What you get
            </h2>
            <p className="max-w-2xl font-normal font-sans text-muted-foreground text-sm leading-6">
              Selected institutions get a clear path from discovery to a
              working intelligence workflow.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <div
                className="flex flex-col gap-1.5 bg-card p-6"
                key={benefit.label}
              >
                <div className="flex items-center gap-2.5">
                  <HugeiconsIcon
                    className="size-4 text-primary"
                    icon={Tick02Icon}
                    strokeWidth={2.5}
                  />
                  <h3 className="font-medium font-sans text-base text-foreground">
                    {benefit.label}
                  </h3>
                </div>
                <p className="font-normal font-sans text-muted-foreground text-sm leading-6">
                  {benefit.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-border/70 border-t px-6 py-12 md:px-24 md:py-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
          <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight md:text-3xl">
            Who's eligible
          </h2>
          <ul className="flex flex-col gap-3">
            {ELIGIBILITY.map((item) => (
              <li className="flex items-start gap-3" key={item.id}>
                <HugeiconsIcon
                  className="mt-1 size-4 shrink-0 text-primary"
                  icon={Tick02Icon}
                  strokeWidth={2.5}
                />
                <span className="font-normal font-sans text-foreground text-sm leading-6">
                  {item.content}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full border-border/70 border-t px-6 py-12 md:px-24 md:py-16">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight md:text-3xl">
              Apply
            </h2>
            <p className="font-normal font-sans text-muted-foreground text-sm leading-6">
              Tell us about your institution and priority workflow. We'll be in
              touch by email.
            </p>
          </div>
          <OssApplicationForm />
        </div>
      </section>
    </div>
  );
}
