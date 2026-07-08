export type LandingNavLink = {
  href: string;
  label: string;
};

export const LANDING_NAV: readonly LandingNavLink[] = [
  { href: "/#features", label: "Platform" },
  { href: "/#how-it-works", label: "Architecture" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
