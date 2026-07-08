import {
  AiBrain01Icon,
  Globe02Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";
import {
  LandingIconRow,
  LandingSectionFrame,
  LandingSectionHeader,
} from "./landing-section";

const PRINCIPLES = [
  {
    icon: Shield01Icon,
    title: "Sovereignty matters. Own your intelligence.",
    description:
      "Your data stays yours, inside your infrastructure and under your control. We do not give it away to AI model companies.",
  },
  {
    icon: AiBrain01Icon,
    title: "Model orchestration, not one big LLM.",
    description:
      "Most enterprise workloads will run on smaller, cheaper, open-source models. Orchestration is required; lock-in to one vendor is not.",
  },
  {
    icon: Globe02Icon,
    title: "Edge AI is the African opportunity.",
    description:
      "A billion people and SMEs will be reached at the edge, not from a cloud data centre, where productivity is created.",
  },
] as const;

export function LandingPillars() {
  return (
    <LandingSectionFrame id="features">
      <LandingSectionHeader
        description="Three beliefs that shape how Rubani is built: sovereignty over data, orchestration over lock-in, and the edge over the data centre."
        eyebrow="Core Founding Principles"
        titleLines={[
          { text: "Engineered for sovereignty," },
          { muted: true, text: "not experimentation." },
        ]}
      />

      <div className="landing-reveal-stagger mt-12 flex flex-col overflow-hidden border border-neutral-200/80 bg-white">
        {PRINCIPLES.map((principle) => (
          <LandingIconRow
            description={principle.description}
            icon={principle.icon}
            key={principle.title}
            title={principle.title}
            variant="solid"
          />
        ))}
      </div>
    </LandingSectionFrame>
  );
}
