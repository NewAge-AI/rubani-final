import {
  KenyaRevenueAuthorityLogo,
  MtnLogo,
  PostgreSqlLogo,
  SafaricomMpesaLogo,
  SapLogo,
  TemenosLogo,
} from "@/components/institution-logos";
import type { ComponentType, SVGProps } from "react";

export const NOTRA_LOGO_PATH = "/brand/rubani-logo.png";

export const RSS_FEED_PATH = "/rss.xml";
export const RSS_FEED_TITLE = "Rubani Blog RSS Feed";
export const RSS_FEED_DESCRIPTION =
  "Insights, guides, and stories from the Rubani team.";
export const RSS_FEED_LANGUAGE = "en-us";

export const BLOG_INDEX_PATH = "/blog";
export const BLOG_AUTHOR_PATH = "/blog/author";
export const CHANGELOG_INDEX_PATH = "/changelog";
export const NOTRA_CHANGELOG_INDEX_PATH = "/changelog/notra";
export const SITEMAP_PATH = "/sitemap.xml";
export const LLMS_PATH = "/llms.txt";
export const LLMS_FULL_PATH = "/llms-full.txt";

export const MARBLE_BLOG_CATEGORY_SLUG = "blog";
export const MARBLE_CHANGELOG_CATEGORY_SLUG = "changelog";
export const MARBLE_DEFAULT_POST_LIMIT = 100;

export const MARBLE_CACHE_KEYS = {
  blogPosts: "marble-blog-posts-v4",
  blogAuthors: "marble-blog-authors-v1",
  changelogPosts: "marble-changelog-posts-v2",
} as const;

export const MARBLE_CACHE_TAGS = {
  blogPosts: "marble-blog-posts",
  blogAuthors: "marble-blog-authors",
  changelogPosts: "marble-changelog-posts",
} as const;

export const MARBLE_POST_CACHE_TAG_PREFIX = "marble-post";

export const MARBLE_REVALIDATE_SECONDS = {
  blogPosts: 3000,
  blogAuthors: 3000,
  changelogPosts: 300,
} as const;

export const OG_EXCLUDED_CONTRIBUTOR = "mezotv";
export const OG_MAX_CONTRIBUTORS = 6;
export const OG_MAX_LOGIN_LENGTH = 12;
export const OG_BLOG_TITLE_MAX_LENGTH = 80;

export const BLOG_HEADING_REGEX = /<h([2-3])[^>]*>([\s\S]*?)<\/h\1>/gi;
export const BLOG_PARAGRAPH_REGEX = /<p[^>]*>([\s\S]*?)<\/p>/gi;
export const BLOG_TAG_REGEX = /<[^>]+>/g;
export const BLOG_WHITESPACE_REGEX = /\s+/g;
export const BLOG_FAQ_HEADING_REGEX =
  /^(frequently asked questions|faqs?|q\s*&\s*a)$/i;
export const BLOG_NUMBERED_HEADING_PREFIX_REGEX = /^\d+\.\s*/;
export const JSON_LD_SCRIPT_CLOSE_REGEX = /<\/(script)/gi;
export const HTML_ENTITY_REGEX = /&(amp|lt|gt|quot|#39|nbsp);/g;

export const HTML_ENTITY_MAP: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  "#39": "'",
  nbsp: " ",
};



export const PRICING_PLANS = {
  basic: {
    name: "Pilot",
    description: "For institutions validating one high-value workflow.",
    pricing: { monthly: null, annually: null },
    cta: {
      label: "Request demo",
      href: "/contact",
    },
    features: [
      "One priority use case",
      "System discovery workshop",
      "Initial data integration",
      "Governed AI workflow",
      { label: "Executive readout", subtitle: "clear findings and next steps" },
      "Security review support",
    ],
  },
  pro: {
    name: "Platform",
    description: "For teams scaling intelligence across departments.",
    pricing: { monthly: null, annually: null },
    cta: {
      label: "Talk to sales",
      href: "/contact",
    },
    features: [
      "Multiple departments",
      "Custom connectors",
      "Role-based dashboards",
      "Explainable models",
      { label: "Automated reporting", subtitle: "operations, board, and regulatory packs" },
      "Audit trails and approvals",
    ],
  },
  enterprise: {
    name: "Enterprise",
    description: "For regulated institutions with complex deployment needs.",
    pricing: { monthly: null, annually: null },
    cta: { label: "Contact us", href: "/contact" },
    features: [
      "On-premise or private cloud",
      "Data residency support",
      "Dedicated solution team",
      "Custom model governance",
      "Advanced access controls",
      "Full lineage and monitoring",
      "Priority support",
    ],
  },
} as const;

const FEATURES_TABLE = [
  {
    category: "Workflows",
    items: [
      {
        name: "Decision workflows",
        basic: "1",
        pro: "Unlimited",
        enterprise: "Unlimited",
      },
      {
        name: "AI intelligence",
        basic: "Pilot",
        pro: "Platform",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Team",
    items: [
      {
        name: "Departments",
        basic: "1",
        pro: "Multiple",
        enterprise: "Unlimited",
      },
      {
        name: "Integrations",
        basic: "2",
        pro: "Unlimited",
        enterprise: "Custom",
      },
      {
        name: "Reports",
        basic: "Pilot",
        pro: "Automated",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Data",
    items: [
      {
        name: "Audit retention",
        basic: "Scoped",
        pro: "Configured",
        enterprise: "Unlimited",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        name: "Implementation support",
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Security review",
        basic: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Dedicated support",
        basic: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
] as const;

export const COMPARISON_FEATURES = FEATURES_TABLE.map(
  ({ category, items }) => ({
    category,
    features: items,
  })
);

export const SOCIAL_PROOF_LOGOS: {
  name: string;
  Component: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  className?: string;
}[] = [
  {
    name: "Temenos",
    Component: TemenosLogo,
    href: "https://www.temenos.com",
    className: "h-14 md:h-16",
  },
  {
    name: "SAP",
    Component: SapLogo,
    href: "https://www.sap.com",
    className: "h-14 md:h-16",
  },
  {
    name: "M-PESA",
    Component: SafaricomMpesaLogo,
    href: "https://www.safaricom.co.ke/about/brand-toolkit/logos",
    className: "h-24 md:h-28",
  },
  {
    name: "KRA",
    Component: KenyaRevenueAuthorityLogo,
    href: "https://kra.go.ke",
    className: "h-14 md:h-16",
  },
  {
    name: "MTN",
    Component: MtnLogo,
    href: "https://www.mtn.com",
    className: "h-14 md:h-16",
  },
  {
    name: "PostgreSQL",
    Component: PostgreSqlLogo,
    href: "https://www.postgresql.org",
    className: "h-14 md:h-16",
  },
];
