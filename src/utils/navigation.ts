export type LandingNavLink = {
  href: string;
  label: string;
};

export const LANDING_NAV: readonly LandingNavLink[] = [
  { href: "/#platform", label: "Platform" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#security", label: "Security" },
  { href: "/#faq", label: "FAQ" },
];
