import {
  AiBrain01Icon,
  BookOpen01Icon,
  CommandLineIcon,
  FavouriteIcon,
  File01Icon,
  MagicWand01Icon,
  Megaphone01Icon,
  Plug01Icon,
  QuillWrite01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type MarketingNavCard = {
  href: string;
  label: string;
  description: string;
  icon: IconSvgElement;
  external?: boolean;
};

export type MarketingNavRailItem = {
  href: string;
  label: string;
  icon: IconSvgElement;
  external?: boolean;
};

export type MarketingNavGroup = {
  type: "group";
  label: string;
  cardsHeading: string;
  cards: readonly MarketingNavCard[];
  railHeading: string;
  rail: readonly MarketingNavRailItem[];
};

type MarketingNavLink = {
  type: "link";
  href: string;
  label: string;
};

export type MarketingNavEntry = MarketingNavGroup | MarketingNavLink;

export const MARKETING_NAV: readonly MarketingNavEntry[] = [
  {
    type: "group",
    label: "Platform",
    cardsHeading: "Capabilities",
    cards: [
      {
        href: "/features",
        label: "Institutional Intelligence",
        description: "Connect systems and surface trusted insight",
        icon: SparklesIcon,
      },
      {
        href: "/features",
        label: "Governed AI",
        description: "Explainable recommendations with oversight",
        icon: AiBrain01Icon,
      },
      {
        href: "/features",
        label: "Decision Workflows",
        description: "Move from signal to action with controls",
        icon: MagicWand01Icon,
      },
      {
        href: "/features",
        label: "Automated Reporting",
        description: "Board, operational, and regulatory packs",
        icon: File01Icon,
      },
      {
        href: "/contact",
        label: "Custom Integrations",
        description: "Connect legacy, cloud, and proprietary systems",
        icon: Plug01Icon,
      },
    ],
    railHeading: "Deployment",
    rail: [
      {
        href: "/features",
        label: "Private Cloud",
        icon: AiBrain01Icon,
      },
      {
        href: "/features",
        label: "On-Premise",
        icon: CommandLineIcon,
      },
    ],
  },
  {
    type: "group",
    label: "Solutions",
    cardsHeading: "Industries",
    cards: [
      {
        href: "/features",
        label: "Financial Services",
        description: "Banks, SACCOs, insurers, and digital lenders",
        icon: QuillWrite01Icon,
      },
      {
        href: "/features",
        label: "Healthcare",
        description: "Hospitals, clinics, and health networks",
        icon: UserGroupIcon,
      },
      {
        href: "/features",
        label: "Government",
        description: "Ministries, agencies, and parastatals",
        icon: Megaphone01Icon,
      },
      {
        href: "/features",
        label: "Telecommunications & Utilities",
        description: "Networks, billing, and utility operators",
        icon: Plug01Icon,
      },
    ],
    railHeading: "More",
    rail: [
      {
        href: "/about",
        label: "About",
        icon: BookOpen01Icon,
      },
      {
        href: "/contact",
        label: "Contact",
        icon: FavouriteIcon,
      },
    ],
  },
  { type: "link", href: "/pricing", label: "Pricing" },
];

export const FOOTER_TOOL_LINKS = [
  {
    href: "/features",
    label: "Data Integration",
  },
  {
    href: "/features",
    label: "AI Intelligence",
  },
  {
    href: "/features",
    label: "Decision Workflows",
  },
  {
    href: "/features",
    label: "Automated Reporting",
  },
] as const;

export const FOOTER_FREE_TOOL_LINKS = [
  {
    href: "/features",
    label: "Explainable AI",
  },
  {
    href: "/features",
    label: "Human Oversight",
  },
  {
    href: "/features",
    label: "Audit Trails",
  },
] as const;

export const FOOTER_INTEGRATION_LINKS = [
  {
    href: "/features",
    label: "Core Systems",
  },
  {
    href: "/features",
    label: "ERP, CRM & Data",
  },
] as const;

export const FOOTER_PRODUCT_LINKS = [
  {
    href: "/features",
    label: "Platform",
  },
  {
    href: "/features",
    label: "Solutions",
  },
  {
    href: "/pricing",
    label: "Engagements",
  },
  {
    href: "/blog",
    label: "Resources",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/about",
    label: "About",
  },
] as const;
