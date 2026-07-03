import type { Metadata } from "next";
import { ChangelogPageHeader } from "@/components/changelog-page-header";
import { ChangelogTimeline } from "@/components/changelog-timeline";
import {
  buildChangelogTimelineItems,
  listNotraChangelogPosts,
} from "@/utils/changelog";
import { DEFAULT_SOCIAL_IMAGE, TWITTER_HANDLE } from "@/utils/metadata";
import { SITE_URL } from "@/utils/urls";

const title = "Rubani Updates";
const description =
  "Follow the latest Rubani product updates, improvements, and release notes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/changelog/notra`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/changelog/notra`,
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

export default async function NotraChangelogPage() {
  const posts = await listNotraChangelogPosts();
  const timelineItems = buildChangelogTimelineItems(posts);

  return (
    <>
      <ChangelogPageHeader
        description={
          <>
            Every product update, release note, and improvement from the Rubani
            team in one place.
          </>
        }
        title={
          <>
            The Rubani <span className="text-primary">Updates</span>
          </>
        }
      />

      <div className="mt-14 w-full max-w-[760px] self-center">
        <ChangelogTimeline
          emptyDescription="We'll share new releases and product improvements here soon."
          emptyTitle="No changelog entries yet"
          items={timelineItems}
        />
      </div>
    </>
  );
}
