import {
  AiBrain01Icon,
  Analytics01Icon,
  AuditIcon,
  BubbleChatIcon,
  CloudServerIcon,
  CpuIcon,
  Database01Icon,
  DocumentValidationIcon,
  FlowConnectionIcon,
  Globe02Icon,
  Key01Icon,
  Layers01Icon,
  LockIcon,
  Plug01Icon,
  Route01Icon,
  ServerStack01Icon,
  Shield01Icon,
  SmartPhone01Icon,
  TranslateIcon,
  WifiOff01Icon,
  WorkflowSquare01Icon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";

export type Capability = {
  icon: IconSvgElement;
  title: string;
  description: string;
};

export type PlatformProduct = {
  slug: string;
  name: string;
  tag: string;
  /** One line used in menus and cards. */
  summary: string;
  headline: string;
  description: string;
  image: string;
  capabilities: Capability[];
  steps: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  solutions: string[];
};

export const PLATFORM_PRODUCTS: PlatformProduct[] = [
  {
    slug: "agents",
    name: "Agents & Copilots",
    tag: "Applications",
    summary: "Governed agents for credit, customers, SMEs, and operations.",
    headline: "Agents that do real work, inside your walls.",
    description:
      "Deploy credit, savings, customer, and SME agents, plus developer APIs, as copilots across the business. Every agent runs on your infrastructure, cites its evidence, and hands off to people when it should.",
    image: "/landing/art/agents-conversation.webp",
    capabilities: [
      {
        icon: BubbleChatIcon,
        title: "Customer and SME agents",
        description:
          "Answer, onboard, and service customers across web, app, USSD, and WhatsApp channels in the languages they actually use.",
      },
      {
        icon: DocumentValidationIcon,
        title: "Credit and risk copilots",
        description:
          "Draft credit memos, summarise exposures, and surface risk signals with cited evidence for every recommendation.",
      },
      {
        icon: WorkflowSquare01Icon,
        title: "Workflow automation",
        description:
          "Chain agents into approval-aware workflows that route work to the right team with accountable next steps.",
      },
      {
        icon: TranslateIcon,
        title: "Multilingual by design",
        description:
          "Serve customers in English, French, Swahili, and other regional languages without sending data abroad.",
      },
      {
        icon: Plug01Icon,
        title: "Developer APIs",
        description:
          "Build your own agents on the same governed runtime with APIs, SDKs, and tool integrations.",
      },
      {
        icon: AuditIcon,
        title: "Human in the loop",
        description:
          "Set confidence thresholds, escalation paths, and review queues so people stay accountable for outcomes.",
      },
    ],
    steps: [
      {
        title: "Choose a workflow",
        description:
          "Start with one high-value process, such as SME credit review or customer onboarding.",
      },
      {
        title: "Ground it in your data",
        description:
          "Connect the systems the agent needs through the data fabric, with access scoped per role.",
      },
      {
        title: "Set the guardrails",
        description:
          "Define policies, approval steps, and escalation rules before anything reaches a customer.",
      },
      {
        title: "Deploy and observe",
        description:
          "Ship to staff or customers, then monitor quality, cost, and outcomes from one console.",
      },
    ],
    specs: [
      { label: "Channels", value: "Web, mobile, USSD, WhatsApp, internal tools" },
      { label: "Runtime", value: "Your data centre, private cloud, or edge" },
      { label: "Oversight", value: "Review queues, approvals, full audit trail" },
      { label: "Extensibility", value: "APIs, SDKs, custom tools" },
    ],
    solutions: ["financial-services", "telecom-utilities", "government"],
  },
  {
    slug: "orchestration",
    name: "Model Orchestration",
    tag: "Orchestration",
    summary: "The right-sized model for every task, routed by policy.",
    headline: "The right model for every task. Not one big LLM.",
    description:
      "Rubani routes each task to the smallest model that meets the bar for accuracy, cost, privacy, and latency. Open models first, frontier models only where policy allows, and no single vendor in the critical path.",
    image: "/landing/art/orchestration-router.webp",
    capabilities: [
      {
        icon: Route01Icon,
        title: "Policy-driven routing",
        description:
          "Route by task, data sensitivity, language, cost ceiling, and latency target, defined as reviewable policy.",
      },
      {
        icon: CpuIcon,
        title: "Small models first",
        description:
          "Fine-tuned open-source models handle most enterprise work at a fraction of the compute cost.",
      },
      {
        icon: Layers01Icon,
        title: "Model registry",
        description:
          "Version, evaluate, and promote models with lineage, so every output traces to a known model.",
      },
      {
        icon: Analytics01Icon,
        title: "Continuous evaluation",
        description:
          "Track quality, drift, and cost per task, and fall back automatically when a model underperforms.",
      },
      {
        icon: Key01Icon,
        title: "Model-level permissions",
        description:
          "Control which teams, data classes, and workflows may use which models.",
      },
      {
        icon: FlowConnectionIcon,
        title: "No vendor lock-in",
        description:
          "Swap models and providers without rewriting applications. The orchestration layer stays yours.",
      },
    ],
    steps: [
      {
        title: "Profile the workload",
        description:
          "Classify tasks by sensitivity, language, volume, and quality bar.",
      },
      {
        title: "Assign models",
        description:
          "Map each task class to candidate models and evaluate them on your own data.",
      },
      {
        title: "Codify policy",
        description:
          "Express routing, fallbacks, and permissions as versioned, reviewable policy.",
      },
      {
        title: "Optimise continuously",
        description:
          "Re-route as models improve and costs change, without touching the applications.",
      },
    ],
    specs: [
      { label: "Models", value: "Open-source, fine-tuned, and approved frontier" },
      { label: "Routing inputs", value: "Task, sensitivity, cost, latency, language" },
      { label: "Governance", value: "Versioned policy, permissions, lineage" },
      { label: "Deployment", value: "Co-located with your data" },
    ],
    solutions: ["financial-services", "healthcare", "telecom-utilities"],
  },
  {
    slug: "data-fabric",
    name: "360° Data Fabric",
    tag: "Data",
    summary: "One governed fabric across transactions, devices, and customers.",
    headline: "Every system, aligned into one governed fabric.",
    description:
      "Integrate, align, and contextualise data from transactions and devices to customers, markets, and compliance. The fabric turns fragmented systems into actionable intelligence without moving data out of your control.",
    image: "/landing/art/data-fabric.webp",
    capabilities: [
      {
        icon: Plug01Icon,
        title: "Connect existing systems",
        description:
          "Core banking, ERP, CRM, OSS/BSS, EHR, files, and legacy databases, with no rip-and-replace programme.",
      },
      {
        icon: Database01Icon,
        title: "Unified entity model",
        description:
          "Resolve customers, accounts, devices, and assets into one consistent view across systems.",
      },
      {
        icon: FlowConnectionIcon,
        title: "Lineage everywhere",
        description:
          "Trace every insight and agent answer back to its source records and transformations.",
      },
      {
        icon: LockIcon,
        title: "Fine-grained access",
        description:
          "Row- and field-level controls enforced at the fabric, so agents only see what users may see.",
      },
      {
        icon: Analytics01Icon,
        title: "Decision-ready views",
        description:
          "Serve operational, board, and regulatory reporting from the same governed source of truth.",
      },
      {
        icon: Shield01Icon,
        title: "In-country by default",
        description:
          "Data is processed where it lives. Nothing is copied to a third-party cloud to make AI work.",
      },
    ],
    steps: [
      {
        title: "Map your estate",
        description:
          "Inventory systems, owners, data classes, and residency requirements.",
      },
      {
        title: "Connect and align",
        description:
          "Stand up connectors and resolve entities across sources into one model.",
      },
      {
        title: "Govern access",
        description:
          "Apply role, row, and field policies once, enforced for people and agents alike.",
      },
      {
        title: "Activate",
        description:
          "Expose governed data to agents, analytics, and reporting with full lineage.",
      },
    ],
    specs: [
      { label: "Sources", value: "Core banking, ERP, CRM, OSS/BSS, EHR, files" },
      { label: "Controls", value: "Role, row, and field-level policy" },
      { label: "Traceability", value: "End-to-end lineage" },
      { label: "Residency", value: "Processed in-country, in your estate" },
    ],
    solutions: ["financial-services", "healthcare", "government"],
  },
  {
    slug: "edge",
    name: "Edge Deployment",
    tag: "Deployment",
    summary: "On-premise, private cloud, and on-device inference.",
    headline: "AI that reaches people where the network doesn't.",
    description:
      "Run Rubani in your data centre, your private cloud, or on devices in the field. Compact models keep working in low-bandwidth and intermittently connected environments, where a billion people and SMEs will meet AI first.",
    image: "/landing/art/africa-network-square.webp",
    capabilities: [
      {
        icon: ServerStack01Icon,
        title: "On-premise",
        description:
          "Deploy the full platform inside your own data centre, air-gapped where required.",
      },
      {
        icon: CloudServerIcon,
        title: "Private cloud",
        description:
          "Run in a sovereign or in-country private cloud under your organisation's controls.",
      },
      {
        icon: SmartPhone01Icon,
        title: "On-device inference",
        description:
          "Ship compact models to branch hardware, agent devices, and handsets for instant responses.",
      },
      {
        icon: WifiOff01Icon,
        title: "Offline-tolerant",
        description:
          "Queue, sync, and reconcile when connectivity returns, without losing work or audit history.",
      },
      {
        icon: Globe02Icon,
        title: "Low-bandwidth delivery",
        description:
          "Serve USSD, SMS, and lightweight channels so customers on any phone can be reached.",
      },
      {
        icon: AiBrain01Icon,
        title: "Central governance",
        description:
          "Manage models, policies, and updates for every edge node from one control plane.",
      },
    ],
    steps: [
      {
        title: "Choose the footprint",
        description:
          "Decide what runs centrally, in private cloud, and at the edge for each workload.",
      },
      {
        title: "Size the models",
        description:
          "Compress and fine-tune models to fit the hardware and connectivity on the ground.",
      },
      {
        title: "Roll out in waves",
        description:
          "Pilot at a few sites, measure, then scale with staged, reversible updates.",
      },
      {
        title: "Operate centrally",
        description:
          "Monitor health, quality, and cost across every node from a single console.",
      },
    ],
    specs: [
      { label: "Targets", value: "Data centre, private cloud, branch, device" },
      { label: "Connectivity", value: "Online, intermittent, or offline" },
      { label: "Channels", value: "App, web, USSD, SMS" },
      { label: "Operations", value: "Central control plane, staged updates" },
    ],
    solutions: ["telecom-utilities", "healthcare", "government"],
  },
];

export function getPlatformProduct(slug: string) {
  return PLATFORM_PRODUCTS.find((product) => product.slug === slug);
}

export const DEPLOYMENT_STEPS = [
  {
    title: "Discover",
    description:
      "A short workshop to map systems, data classes, and the workflow with the clearest return.",
  },
  {
    title: "Connect",
    description:
      "Connectors and the data fabric are stood up inside your estate, with access governed from day one.",
  },
  {
    title: "Deploy",
    description:
      "Agents go live on right-sized models, on-premise, in private cloud, or at the edge.",
  },
  {
    title: "Govern and scale",
    description:
      "Measure outcomes, tune routing and cost, then extend to the next department.",
  },
] as const;

export const INTEGRATIONS = [
  "Core banking",
  "Mobile money",
  "Card switches",
  "Credit bureaus",
  "ERP",
  "CRM",
  "OSS/BSS",
  "Billing",
  "EHR / EMR",
  "Data warehouses",
  "Document stores",
  "Legacy databases",
] as const;
