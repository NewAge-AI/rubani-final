import {
  buildAgentJson,
  NOTRA_CAPABILITIES,
  siteUrl,
} from "@/utils/agent-metadata";
import { jsonResponse } from "@/utils/http";

export function GET() {
  const agent = buildAgentJson();

  return jsonResponse({
    name: "Rubani",
    description: agent.description,
    url: agent.url,
    version: "1.0.0",
    provider: {
      organization: "Rubani",
      url: agent.url,
    },
    documentationUrl: agent.docs,
    iconUrl: agent.icon,
    contactUrl: siteUrl("/contact"),
    endpoints: {
      api: agent.api.base_url,
      openapi: agent.api.openapi,
      mcp: agent.mcp.streamable_http,
      webmcp: agent.mcp.webmcp,
      auth: agent.api.auth,
    },
    capabilities: NOTRA_CAPABILITIES,
    skills: [
      {
        id: "institutional_intelligence",
        name: "Generate institutional intelligence",
        description:
          "Turn connected institutional data into explainable insights, reports, and recommendations.",
        inputModes: ["application/json", "text/plain"],
        outputModes: ["application/json", "text/markdown", "text/html"],
      },
      {
        id: "governance_context",
        name: "Apply governance context",
        description:
          "Use institutional policies, review rules, and workflow context to keep outputs governed.",
        inputModes: ["application/json", "text/markdown"],
        outputModes: ["text/markdown", "text/html"],
      },
    ],
  });
}
