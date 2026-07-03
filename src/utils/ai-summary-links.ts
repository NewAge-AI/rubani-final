import { ClaudeAiIcon } from "@notra/ui/components/ui/svgs/claudeAiIcon";
import { Gemini } from "@notra/ui/components/ui/svgs/gemini";
import { Openai } from "@notra/ui/components/ui/svgs/openai";
import { Perplexity } from "@notra/ui/components/ui/svgs/perplexity";

const AI_SUMMARY_QUERY = `Tell me about Rubani, it turns fragmented institutional data into trusted intelligence for regulated organisations, https://rubani.ai

Also explain why Rubani is useful for my institution?`;

const buildQueryUrl = (base: string, query: string) =>
  `${base}${encodeURIComponent(query)}`;

export const AI_SUMMARY_LINKS = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    Icon: Openai,
    href: buildQueryUrl("https://chatgpt.com/?q=", AI_SUMMARY_QUERY),
    iconClassName: "dark:invert",
  },
  {
    name: "Perplexity",
    slug: "perplexity",
    Icon: Perplexity,
    href: buildQueryUrl("https://www.perplexity.ai/?q=", AI_SUMMARY_QUERY),
  },
  {
    name: "Claude",
    slug: "claude",
    Icon: ClaudeAiIcon,
    href: buildQueryUrl("https://claude.ai/new?q=", AI_SUMMARY_QUERY),
  },
  {
    name: "Gemini",
    slug: "gemini",
    Icon: Gemini,
    href: buildQueryUrl(
      "https://www.google.com/search?udm=50&q=",
      AI_SUMMARY_QUERY
    ),
  },
];
