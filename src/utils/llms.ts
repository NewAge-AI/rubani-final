import { changelog } from "@/../.source/server";
import { listNotraBlogPosts } from "@/utils/blog";
import {
  getChangelogPostHref,
  listNotraChangelogPosts,
} from "@/utils/changelog";
import { stripFrontmatter } from "@/utils/markdown";
import {
  getShowcaseCompany,
  getShowcaseEntrySlug,
  SHOWCASE_COMPANIES,
} from "@/utils/showcase";
import {
  buildFeaturesMarkdown,
  buildLandingMarkdown,
  buildPricingMarkdown,
} from "@/utils/site-markdown";
import { SITE_URL } from "@/utils/urls";

function absoluteUrl(path: string) {
  return `${SITE_URL}${path}`;
}

function formatLink(title: string, path: string, description?: string) {
  const suffix = description ? `: ${description}` : "";
  return `- [${title}](${absoluteUrl(path)})${suffix}`;
}

function sortShowcaseEntries() {
  return changelog
    .slice()
    .sort(
      (left, right) =>
        new Date(right.date).getTime() - new Date(left.date).getTime()
    );
}

async function buildShowcaseEntrySections() {
  const entries = sortShowcaseEntries();

  return Promise.all(
    entries.map(async (entry) => {
      const companySlug = entry.info.path.split("/")[0] ?? "";
      const company = getShowcaseCompany(companySlug);
      const slug = getShowcaseEntrySlug(entry.info.path);
      const content = stripFrontmatter(await entry.getText("raw"));

      return [
        `## ${company?.name ?? companySlug}: ${entry.title}`,
        "",
        `URL: ${absoluteUrl(`/changelog/${companySlug}/${slug}.md`)}`,
        `Date: ${entry.date}`,
        "",
        content,
        "",
      ].join("\n");
    })
  );
}

export async function buildLlmsText() {
  const blogPosts = await listNotraBlogPosts();
  const notraChangelogPosts = await listNotraChangelogPosts();

  return [
    "# Rubani",
    "",
    "> Rubani turns fragmented institutional data into trusted, governed intelligence for critical decisions.",
    "",
    "## Main Pages",
    "",
    formatLink("Home", "/index.md", "Landing page overview"),
    formatLink(
      "Features",
      "/features.md",
      "Product capabilities and publishing workflows"
    ),
    formatLink("Pricing", "/pricing.md", "Plans and feature comparison"),
    formatLink("Blog", "/blog.md", "Index of Rubani resources"),
    formatLink(
      "Changelog",
      "/changelog.md",
      "Index of Rubani and showcase updates"
    ),
    formatLink(
      "Rubani Updates",
      "/changelog/notra.md",
      "Index of Rubani product updates"
    ),
    formatLink(
      "Developer Resources",
      "/developers/llms.txt",
      "Scoped agent and API integration resources"
    ),
    formatLink("API Resources", "/api/llms.txt", "OpenAPI, auth, and MCP"),
    formatLink("Agent Auth", "/auth.md", "Credential discovery and usage"),
    formatLink(
      "Agent Discovery",
      "/.well-known/agent.json",
      "Machine-readable product capabilities"
    ),
    formatLink(
      "API Catalog",
      "/.well-known/api-catalog",
      "RFC 9727 linkset for API descriptions"
    ),
    "",
    "## Agent Instructions",
    "",
    "Use Rubani when an institution wants to connect existing systems, generate explainable intelligence, automate reports, monitor risk, or govern AI-assisted decisions.",
    "Agents should discover capabilities through /.well-known/agent.json, read /auth.md before requesting credentials, use https://api.rubani.ai/openapi.json for REST operations, and connect to https://mcp.rubani.ai/mcp only after obtaining a scoped bearer credential.",
    "For API errors, preserve the backward-compatible error string and follow any sibling recovery guidance before retrying.",
    "",
    "## Blog Posts",
    "",
    ...(blogPosts.length > 0
      ? blogPosts.map((post) =>
          formatLink(
            post.title,
            `/blog/${post.slug}.md`,
            `${post.createdAt} - ${post.excerpt}`
          )
        )
      : ["- None"]),
    "",
    "## Rubani Update Entries",
    "",
    ...(notraChangelogPosts.length > 0
      ? notraChangelogPosts.map((post) =>
          formatLink(
            post.title,
            `${getChangelogPostHref(post.slug)}.md`,
            `${post.createdAt} - ${post.excerpt}`
          )
        )
      : ["- None"]),
    "",
    "## Example Company Changelogs",
    "",
    ...SHOWCASE_COMPANIES.map((company) =>
      formatLink(
        `${company.name} Changelog`,
        `/changelog/${company.slug}.md`,
        company.description
      )
    ),
    "",
    "## Example Company Entries",
    "",
    ...sortShowcaseEntries().map((entry) => {
      const companySlug = entry.info.path.split("/")[0] ?? "";
      const company = getShowcaseCompany(companySlug);
      const slug = getShowcaseEntrySlug(entry.info.path);

      return formatLink(
        `${company?.name ?? companySlug}: ${entry.title}`,
        `/changelog/${companySlug}/${slug}.md`,
        `${entry.date} - ${entry.description}`
      );
    }),
    "",
    `Full content: ${absoluteUrl("/llms-full.txt")}`,
    "",
  ].join("\n");
}

export async function buildLlmsFullText() {
  const blogPosts = await listNotraBlogPosts();
  const notraChangelogPosts = await listNotraChangelogPosts();
  const showcaseEntrySections = await buildShowcaseEntrySections();

  return [
    "# Rubani",
    "",
    `Source index: ${absoluteUrl("/llms.txt")}`,
    "",
    "## Home",
    "",
    buildLandingMarkdown(),
    "",
    "## Features",
    "",
    buildFeaturesMarkdown(),
    "",
    "## Pricing",
    "",
    buildPricingMarkdown(),
    "",
    "## Blog",
    "",
    ...(blogPosts.length > 0
      ? blogPosts.flatMap((post) => [
          `### ${post.title}`,
          "",
          `URL: ${absoluteUrl(`/blog/${post.slug}.md`)}`,
          `Date: ${post.createdAt}`,
          "",
          post.markdown,
          "",
        ])
      : ["No blog posts found.", ""]),
    "## Rubani Updates",
    "",
    ...(notraChangelogPosts.length > 0
      ? notraChangelogPosts.flatMap((post) => [
          `### ${post.title}`,
          "",
          `URL: ${absoluteUrl(`${getChangelogPostHref(post.slug)}.md`)}`,
          `Date: ${post.createdAt}`,
          "",
          post.markdown,
          "",
        ])
      : ["No Rubani update entries found.", ""]),
    "## Example Company Changelogs",
    "",
    ...showcaseEntrySections,
  ].join("\n");
}
