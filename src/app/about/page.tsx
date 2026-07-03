import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Rubani",
  description:
    "Learn about Rubani, the institutional intelligence platform for regulated and mission-critical organisations.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-28">
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold text-4xl tracking-tight">About Rubani</h1>
        <p className="text-muted-foreground leading-7">
          Rubani is an institutional intelligence platform for regulated and
          mission-critical organisations. It connects existing systems,
          transforms fragmented data into trusted intelligence, and helps teams
          make faster, more defensible decisions.
        </p>
        <p className="text-muted-foreground leading-7">
          Rubani serves financial services, healthcare, government,
          telecommunications, utilities, manufacturing, education, and other
          institutions where governance, security, and operational context
          matter. The platform supports integrations, explainable AI,
          reporting, monitoring, and human oversight.
        </p>
        <p className="text-muted-foreground leading-7">
          Technical teams can discover Rubani through{" "}
          <Link className="underline" href="/llms.txt">
            llms.txt
          </Link>
          ,{" "}
          <Link className="underline" href="/.well-known/agent.json">
            agent.json
          </Link>
          , the public OpenAPI schema, and MCP documentation.
        </p>
      </div>
    </main>
  );
}
