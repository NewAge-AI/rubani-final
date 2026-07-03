import { markdownResponse } from "@/utils/http";
import { API_URL, DOCS_URL, SITE_URL } from "@/utils/urls";

const API_LLMS = `# Rubani API

Rubani's public API is served from ${API_URL}. Use it when an agent needs to read institutional context, create intelligence outputs, manage workflows, or apply governance rules for an authenticated organization.

## Discovery

- OpenAPI: [${API_URL}/openapi.json](${API_URL}/openapi.json)
- API catalog: [${SITE_URL}/.well-known/api-catalog](${SITE_URL}/.well-known/api-catalog)
- Authentication guide: [${SITE_URL}/auth.md](${SITE_URL}/auth.md)
- Developer docs: [${DOCS_URL}](${DOCS_URL})

## Authentication

Send \`Authorization: Bearer <RUBANI_API_KEY>\`. Unauthenticated API requests return \`WWW-Authenticate\` with protected-resource metadata.

## Core Endpoints

- \`GET /v1/status\` checks public API reachability.
- \`GET /v1/posts\` lists generated posts for the authenticated organization.
- \`POST /v1/posts/generate\` starts intelligence generation.
- \`GET /v1/skills\` lists reusable writing skills.
`;

export function GET() {
  return markdownResponse(API_LLMS);
}
