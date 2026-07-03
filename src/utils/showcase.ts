import type { ShowcaseCompany } from "~types/showcase";

export const SHOWCASE_COMPANIES = [
  {
    slug: "bank-of-kigali",
    name: "Bank of Kigali",
    domain: "bk.rw",
    description:
      "Universal banking, credit, branch, and digital-channel signals unified for governed institutional intelligence.",
    url: "https://bk.rw",
    accentColor: "#0057A8",
  },
  {
    slug: "equity-bank",
    name: "Equity Bank",
    domain: "equitygroupholdings.com",
    description:
      "Banking and customer data workflows for risk, portfolio monitoring, and operational reporting.",
    url: "https://equitygroupholdings.com",
    accentColor: "#8A1538",
  },
  {
    slug: "mpesa",
    name: "M-PESA",
    domain: "safaricom.co.ke",
    description:
      "Mobile-money settlement, merchant, and reconciliation signals connected into institutional workflows.",
    url: "https://www.safaricom.co.ke/about/brand-toolkit/logos",
    accentColor: "#39A935",
  },
  {
    slug: "kra-etims",
    name: "KRA eTIMS",
    domain: "kra.go.ke",
    description:
      "Tax, invoice, registry, and compliance data surfaced for auditable reporting and exception handling.",
    url: "https://kra.go.ke",
    accentColor: "#D71920",
  },
  {
    slug: "ecitizen",
    name: "eCitizen",
    domain: "ecitizen.go.ke",
    description:
      "Digital public-service, identity, payment, and service-delivery workflows connected for government operations.",
    url: "https://apidocs.ecitizen.go.ke/index.html/",
    accentColor: "#1565C0",
  },
  {
    slug: "mtn-rwanda",
    name: "MTN Rwanda",
    domain: "mtn.co.rw",
    description:
      "Network, billing, mobile-money, and customer operations signals for telecommunications intelligence.",
    url: "https://www.mtn.co.rw",
    accentColor: "#FFCC00",
  },
  {
    slug: "temenos-t24",
    name: "Temenos T24",
    domain: "temenos.com",
    description:
      "Core banking events and portfolio data integrated without replacing the institution's banking system.",
    url: "https://www.temenos.com",
    accentColor: "#E31B23",
  },
  {
    slug: "iprs",
    name: "IPRS",
    domain: "immigration.go.ke",
    description:
      "Identity verification and population registry checks joined to secure onboarding and compliance workflows.",
    url: "https://immigration.go.ke",
    accentColor: "#111827",
  },
] as const satisfies readonly ShowcaseCompany[];

const MDX_EXTENSION_REGEX = /\.mdx$/;

export function getShowcaseCompany(slug: string) {
  return SHOWCASE_COMPANIES.find((company) => company.slug === slug);
}

export function getShowcaseEntrySlug(infoPath: string) {
  return infoPath.split("/").pop()?.replace(MDX_EXTENSION_REGEX, "") ?? "";
}
