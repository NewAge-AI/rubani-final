import {
  Alert02Icon,
  Analytics01Icon,
  BubbleChatIcon,
  Building03Icon,
  CreditCardIcon,
  CustomerSupportIcon,
  DocumentValidationIcon,
  ElectricTower01Icon,
  IdentityCardIcon,
  Invoice01Icon,
  MedicalFileIcon,
  Router01Icon,
  Search01Icon,
  Stethoscope02Icon,
  TranslateIcon,
  Wrench01Icon,
} from "@hugeicons/core-free-icons";
import type { Capability } from "./platform";

export type Solution = {
  slug: string;
  name: string;
  short: string;
  /** One line used in menus and cards. */
  summary: string;
  headline: string;
  description: string;
  image: string;
  audience: string[];
  challenges: { title: string; description: string }[];
  useCases: Capability[];
  outcomes: { title: string; description: string }[];
  products: string[];
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    short: "Financial Services",
    summary: "Banks, SACCOs, insurers, and digital lenders.",
    headline: "Faster credit, sharper risk, and data that never leaves the bank.",
    description:
      "Banks, SACCOs, insurers, and digital lenders run credit, KYC, and fraud agents inside their own infrastructure, cutting review time without sending customer data to a foreign cloud.",
    image: "/landing/solutions/financial-services.webp",
    audience: ["Commercial banks", "SACCOs", "Insurers", "Digital lenders"],
    challenges: [
      {
        title: "Customer data can't leave",
        description:
          "Regulators and boards expect customer data to stay in-country, which rules out most hosted AI services.",
      },
      {
        title: "Credit is slow to underwrite",
        description:
          "SME and retail credit reviews depend on manual document handling across disconnected systems.",
      },
      {
        title: "Fraud moves faster than rules",
        description:
          "Static rules miss new patterns across mobile money, cards, and agent networks.",
      },
    ],
    useCases: [
      {
        icon: CreditCardIcon,
        title: "SME and retail credit",
        description:
          "Assemble applications, extract statements, and draft credit memos with cited evidence for analysts.",
      },
      {
        icon: IdentityCardIcon,
        title: "KYC and onboarding",
        description:
          "Verify documents, screen customers, and pre-fill onboarding while keeping identity data on-premise.",
      },
      {
        icon: Alert02Icon,
        title: "Fraud and AML triage",
        description:
          "Prioritise alerts, summarise case context, and draft suspicious activity narratives for review.",
      },
      {
        icon: BubbleChatIcon,
        title: "Customer service agents",
        description:
          "Resolve balance, loan, and claims queries across app, USSD, and WhatsApp in local languages.",
      },
      {
        icon: DocumentValidationIcon,
        title: "Regulatory reporting",
        description:
          "Generate returns and board packs from the governed data fabric with full lineage.",
      },
      {
        icon: Analytics01Icon,
        title: "Portfolio intelligence",
        description:
          "Monitor exposure, early-warning signals, and collections priorities across the book.",
      },
    ],
    outcomes: [
      {
        title: "Shorter review cycles",
        description:
          "Analysts start from a drafted, evidenced memo instead of a blank page.",
      },
      {
        title: "Defensible decisions",
        description:
          "Every recommendation carries its sources, model version, and approval trail.",
      },
      {
        title: "Sovereign by architecture",
        description:
          "Customer data is processed inside the bank's own infrastructure, end to end.",
      },
    ],
    products: ["agents", "data-fabric", "orchestration"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    short: "Healthcare",
    summary: "Hospitals, clinics, and health networks.",
    headline: "Clinical intelligence that keeps patient data where it belongs.",
    description:
      "Hospitals, clinics, and health networks deploy clinical copilots and records intelligence on-premise, keeping patient data sovereign while still reaching frontline staff at the edge.",
    image: "/landing/solutions/healthcare.webp",
    audience: ["Hospital groups", "Clinic networks", "Health insurers", "Public health programmes"],
    challenges: [
      {
        title: "Records are fragmented",
        description:
          "Patient histories are scattered across paper, EMRs, labs, and referral letters.",
      },
      {
        title: "Clinicians are stretched",
        description:
          "Documentation and administrative work take time away from patient care.",
      },
      {
        title: "Connectivity is uneven",
        description:
          "Rural and community facilities can't depend on a fast, constant connection to the cloud.",
      },
    ],
    useCases: [
      {
        icon: MedicalFileIcon,
        title: "Records summarisation",
        description:
          "Produce concise patient summaries from notes, labs, and referrals, with links to the source.",
      },
      {
        icon: Stethoscope02Icon,
        title: "Clinical documentation",
        description:
          "Draft notes, discharge summaries, and referral letters for clinician review and sign-off.",
      },
      {
        icon: Search01Icon,
        title: "Guideline search",
        description:
          "Answer questions against approved protocols and formularies, with citations.",
      },
      {
        icon: Invoice01Icon,
        title: "Claims and coding",
        description:
          "Pre-check claims and suggest coding to reduce rejections and rework.",
      },
      {
        icon: TranslateIcon,
        title: "Patient communication",
        description:
          "Explain instructions and follow-ups to patients in the language they speak.",
      },
      {
        icon: Analytics01Icon,
        title: "Operational planning",
        description:
          "Forecast demand, stock, and staffing from governed operational data.",
      },
    ],
    outcomes: [
      {
        title: "More time with patients",
        description:
          "Documentation starts as a reviewed draft, not a blank form.",
      },
      {
        title: "Care at the edge",
        description:
          "Compact models keep working in facilities with limited connectivity.",
      },
      {
        title: "Patient data stays sovereign",
        description:
          "Processing runs on-premise or in an in-country private cloud.",
      },
    ],
    products: ["data-fabric", "edge", "agents"],
  },
  {
    slug: "government",
    name: "Government",
    short: "Government",
    summary: "Ministries, agencies, and parastatals.",
    headline: "Modern citizen services on AI the state actually controls.",
    description:
      "Ministries, agencies, and parastatals modernise citizen services with orchestrated, auditable AI that stays in-country and satisfies public-sector governance requirements.",
    image: "/landing/solutions/government.webp",
    audience: ["Ministries", "Revenue authorities", "Regulators", "Parastatals"],
    challenges: [
      {
        title: "Sovereignty is non-negotiable",
        description:
          "Citizen data and national workloads can't depend on foreign platforms or models.",
      },
      {
        title: "Services must reach everyone",
        description:
          "Citizens use every kind of device, language, and connection, not just smartphones.",
      },
      {
        title: "Decisions must be auditable",
        description:
          "Public institutions need to explain and defend every automated recommendation.",
      },
    ],
    useCases: [
      {
        icon: CustomerSupportIcon,
        title: "Citizen service agents",
        description:
          "Answer questions and guide applications across web, USSD, and call centres in local languages.",
      },
      {
        icon: DocumentValidationIcon,
        title: "Case and permit processing",
        description:
          "Check applications for completeness, extract fields, and route cases to the right officer.",
      },
      {
        icon: Search01Icon,
        title: "Policy and legal search",
        description:
          "Search legislation, circulars, and precedent with cited answers for officials.",
      },
      {
        icon: Invoice01Icon,
        title: "Revenue intelligence",
        description:
          "Surface compliance gaps and risk signals across tax and licensing data.",
      },
      {
        icon: Analytics01Icon,
        title: "Programme monitoring",
        description:
          "Track delivery and outcomes across agencies from one governed fabric.",
      },
      {
        icon: Building03Icon,
        title: "Inter-agency data sharing",
        description:
          "Share governed views across agencies without copying sensitive records.",
      },
    ],
    outcomes: [
      {
        title: "Services for every citizen",
        description:
          "Low-bandwidth channels and local languages widen access.",
      },
      {
        title: "Auditable by design",
        description:
          "Recommendations carry evidence, model lineage, and human approvals.",
      },
      {
        title: "National control",
        description:
          "Models and data run in-country, on infrastructure the state governs.",
      },
    ],
    products: ["orchestration", "agents", "edge"],
  },
  {
    slug: "telecom-utilities",
    name: "Telecommunications & Utilities",
    short: "Telecom & Utilities",
    summary: "Network, billing, and utility operators.",
    headline: "Smarter networks and care for every customer on the grid.",
    description:
      "Networks, billing, and utility operators orchestrate OSS/BSS and customer-care agents at the edge, reaching low-bandwidth regions without routing traffic through distant data centres.",
    image: "/landing/solutions/telecom-utilities.webp",
    audience: ["Mobile network operators", "Power utilities", "Water utilities", "ISPs"],
    challenges: [
      {
        title: "Care at massive scale",
        description:
          "Millions of customers, many on basic phones, need fast answers about bills and service.",
      },
      {
        title: "Field operations are complex",
        description:
          "Faults, outages, and maintenance span huge territories with patchy connectivity.",
      },
      {
        title: "Revenue leaks",
        description:
          "Billing errors, fraud, and non-technical losses erode margins quietly.",
      },
    ],
    useCases: [
      {
        icon: CustomerSupportIcon,
        title: "Customer care agents",
        description:
          "Resolve billing, top-up, and outage queries over USSD, SMS, app, and voice.",
      },
      {
        icon: Router01Icon,
        title: "Network operations copilot",
        description:
          "Correlate alarms, summarise incidents, and suggest next actions for NOC teams.",
      },
      {
        icon: Wrench01Icon,
        title: "Field service assistant",
        description:
          "Guide technicians with on-device procedures that work offline.",
      },
      {
        icon: ElectricTower01Icon,
        title: "Loss and anomaly detection",
        description:
          "Flag meter, usage, and billing anomalies that signal fraud or leakage.",
      },
      {
        icon: Invoice01Icon,
        title: "Billing assurance",
        description:
          "Reconcile OSS/BSS records and explain bill changes to customers.",
      },
      {
        icon: Analytics01Icon,
        title: "Demand forecasting",
        description:
          "Plan capacity and maintenance from governed network and usage data.",
      },
    ],
    outcomes: [
      {
        title: "Care that scales",
        description:
          "Agents handle routine queries so people focus on complex cases.",
      },
      {
        title: "Faster resolution in the field",
        description:
          "Technicians get guidance on-device, even without a signal.",
      },
      {
        title: "Lower cost to serve",
        description:
          "Small, orchestrated models keep inference costs predictable at scale.",
      },
    ],
    products: ["edge", "agents", "orchestration"],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
