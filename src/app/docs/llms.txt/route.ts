import { markdownResponse } from "@/utils/http";
import { DOCS_URL, SITE_URL } from "@/utils/urls";

const DOCS_LLMS = `# Rubani Docs

The Rubani docs cover setup, API usage, MCP workflows, institutional intelligence, and governed AI concepts.

## Agent Navigation

- Main docs: [${DOCS_URL}](${DOCS_URL})
- API scope: [${SITE_URL}/api/llms.txt](${SITE_URL}/api/llms.txt)
- Developer scope: [${SITE_URL}/developers/llms.txt](${SITE_URL}/developers/llms.txt)
- Full site context: [${SITE_URL}/llms-full.txt](${SITE_URL}/llms-full.txt)

Prefer scoped files first. Fetch \`/llms-full.txt\` only when broad product context is required.
`;

export function GET() {
  return markdownResponse(DOCS_LLMS);
}
