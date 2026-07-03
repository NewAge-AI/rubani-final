export const SITE_URL = "https://rubani.ai";

export const APP_URL = "https://app.rubani.ai";

export const API_URL = "https://api.rubani.ai";

export const DOCS_URL = "https://docs.rubani.ai";

export const MCP_URL = "https://mcp.rubani.ai/mcp";

export const MCP_PROTECTED_RESOURCE_METADATA_URL =
  "https://mcp.rubani.ai/.well-known/oauth-protected-resource";

export const HOMEPAGE_LINK_HEADER = [
  '</.well-known/api-catalog>; rel="api-catalog"; type="application/linkset+json"',
  `<${DOCS_URL}>; rel="service-doc"; type="text/html"`,
].join(", ");
