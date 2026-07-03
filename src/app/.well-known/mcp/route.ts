import { jsonResponse } from "@/utils/http";
import {
  DOCS_URL,
  MCP_PROTECTED_RESOURCE_METADATA_URL,
  MCP_URL,
} from "@/utils/urls";

export function GET() {
  return jsonResponse(
    {
      name: "Rubani MCP",
      version: "1.0.0",
      transport: "streamable-http",
      endpoint: MCP_URL,
      documentation: `${DOCS_URL}/devtools/mcp`,
      instructions:
        "Use Rubani MCP after authenticating with OAuth or a Rubani API key. The server exposes tools for reading institutional context, generating reports, and applying governance guidance.",
      authentication: {
        type: "bearer",
        resource_metadata: MCP_PROTECTED_RESOURCE_METADATA_URL,
      },
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "cache-control": "public, max-age=3600",
      },
    }
  );
}
