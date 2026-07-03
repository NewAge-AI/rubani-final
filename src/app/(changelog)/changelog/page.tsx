import type { Metadata } from "next";
import { changelog } from "@/../.source/server";
import { ChangelogPageHeader } from "@/components/changelog-page-header";
import { ShowcaseOverviewGrid } from "@/components/showcase-overview-grid";
import { DEFAULT_SOCIAL_IMAGE, TWITTER_HANDLE } from "@/utils/metadata";
import { SHOWCASE_COMPANIES } from "@/utils/showcase";
import { SHOWCASE_COMPANY_ICONS } from "@/utils/showcase-icons";
import { SITE_URL } from "@/utils/urls";

const title = "Changelog";
const description =
  "See how Rubani-style intelligence turns operational signals into clear updates from real projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/changelog`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/changelog`,
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

export default async function ChangelogHubPage() {
  const postCounts = new Map(
    SHOWCASE_COMPANIES.map((company) => [
      company.slug,
      changelog.filter((entry) =>
        entry.info.path.startsWith(`${company.slug}/`)
      ).length,
    ])
  );

  const companies = SHOWCASE_COMPANIES.slice()
    .sort((left, right) => {
      const countDifference =
        (postCounts.get(right.slug) ?? 0) - (postCounts.get(left.slug) ?? 0);

      if (countDifference !== 0) {
        return countDifference;
      }

      return left.name.localeCompare(right.name);
    })
    .map((company) => ({
      ...company,
      entryCount: postCounts.get(company.slug) ?? 0,
      icon: SHOWCASE_COMPANY_ICONS[company.slug],
    }));

  return (
    <>
      <ChangelogPageHeader
        description={
          <>
            See how Rubani-style intelligence turns operational signals into clear
            <br className="hidden sm:block" />
            updates from banks, telcos, public systems, and core platforms.
          </>
        }
        title={
          <>
            Example <span className="text-primary">Changelogs</span>
          </>
        }
      />

      <ShowcaseOverviewGrid companies={companies} />

      <p className="mt-8 text-center font-sans text-muted-foreground text-xs">
        These examples show relevant systems and institutions for Rubani-style
        deployments and are generated for demonstration purposes only.
      </p>
    </>
  );
}
