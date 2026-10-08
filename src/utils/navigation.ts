import { PLATFORM_PRODUCTS } from "@/data/platform";
import { SOLUTIONS } from "@/data/solutions";

type NavMenuItem = {
  href: string;
  label: string;
  description: string;
};

export type NavMenu = {
  overview: { href: string; label: string; description: string };
  items: NavMenuItem[];
  featured: { href: string; image: string; eyebrow: string; title: string };
};

export type NavItem =
  | { label: string; href: string; menu?: undefined }
  | { label: string; href: string; menu: NavMenu };

export const MAIN_NAV: readonly NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    menu: {
      overview: {
        href: "/platform",
        label: "Platform overview",
        description:
          "The sovereign AI stack, from customer-facing agents to the data fabric underneath.",
      },
      items: PLATFORM_PRODUCTS.map((product) => ({
        href: `/platform/${product.slug}`,
        label: product.name,
        description: product.summary,
      })),
      featured: {
        href: "/platform/edge",
        image: "/landing/art/africa-network.webp",
        eyebrow: "Deployment",
        title: "Run AI at the edge, even offline",
      },
    },
  },
  {
    label: "Solutions",
    href: "/solutions",
    menu: {
      overview: {
        href: "/solutions",
        label: "All industries",
        description:
          "Purpose-built deployments for regulated, mission-critical institutions.",
      },
      items: SOLUTIONS.map((solution) => ({
        href: `/solutions/${solution.slug}`,
        label: solution.short,
        description: solution.summary,
      })),
      featured: {
        href: "/solutions/financial-services",
        image: "/landing/art/industry-financial-services.webp",
        eyebrow: "Financial services",
        title: "Credit and KYC agents that never leave the bank",
      },
    },
  },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/about" },
];
