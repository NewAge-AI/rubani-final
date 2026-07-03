import {
  AiBrain01Icon,
  BookOpen01Icon,
  SparklesIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";

export const CONTACT_RECIPIENT = "hello@rubani.ai";

export const CONTACT_RATE_LIMIT = {
  requests: 3,
  window: "1h",
} as const;

export const CONTACT_MESSAGE_MIN_LENGTH = 10;
export const CONTACT_MESSAGE_MAX_LENGTH = 2000;

export const CONTACT_RESPONSE_TIME =
  "Within one business day, often the same hour.";

export const CONTACT_PURPOSE =
  "For demos, partnerships, deployment questions, and security disclosures.";

export const CONTACT_RESOURCE_LINKS = [
  {
    href: "/features",
    label: "Platform",
    description: "Capabilities for data integration, AI, reporting, and governance.",
    icon: BookOpen01Icon,
    external: false,
  },
  {
    href: "/pricing",
    label: "Engagements",
    description: "Pilot, platform, and enterprise deployment paths.",
    icon: AiBrain01Icon,
    external: false,
  },
  {
    href: "/about",
    label: "About Rubani",
    description: "Learn how Rubani supports modern institutions.",
    icon: UserGroupIcon,
    external: false,
  },
  {
    href: "/pricing",
    label: "Request a demo",
    description: "Tell us about your institution and priority workflow.",
    icon: SparklesIcon,
    external: false,
  },
] as const;
