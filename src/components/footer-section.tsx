import { Github } from "@notra/ui/components/ui/svgs/github";
import { Linkedin } from "@notra/ui/components/ui/svgs/linkedin";
import { XTwitter } from "@notra/ui/components/ui/svgs/twitter";
import { Youtube } from "@notra/ui/components/ui/svgs/youtube";
import Link from "next/link";
import { SOCIAL_LINKS } from "../utils/social-links";
import { RubaniMark } from "./notra-mark";

const FOOTER_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Agents & Copilots", href: "/#platform" },
      { label: "Model Orchestration", href: "/#platform" },
      { label: "360° Data Fabric", href: "/#platform" },
      { label: "Principles", href: "/#features" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Financial Services", href: "/#solutions" },
      { label: "Healthcare", href: "/#solutions" },
      { label: "Government", href: "/#solutions" },
      { label: "Telecom & Utilities", href: "/#solutions" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security", href: "/#security" },
      { label: "Data sovereignty", href: "/#security" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact sales", href: "/contact" },
      { label: "Request a demo", href: "/contact" },
    ],
  },
] as const;

const SOCIALS = [
  { label: "X", href: SOCIAL_LINKS.x, Icon: XTwitter },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: "GitHub", href: SOCIAL_LINKS.github, Icon: Github },
  { label: "YouTube", href: SOCIAL_LINKS.youtube, Icon: Youtube },
] as const;

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-ink text-white">
      <div className="mx-auto w-full max-w-[80rem] px-5 pt-16 pb-10 md:px-8 md:pt-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_2fr] lg:gap-20">
          <div className="flex flex-col items-start gap-5">
            <p className="font-mono text-[0.6875rem] text-coral uppercase tracking-[0.14em]">
              Sovereign AI moves fast
            </p>
            <p className="max-w-sm font-display text-[1.5rem] leading-tight tracking-[-0.02em]">
              Talk to us about deploying AI inside your institution.
            </p>
            <p className="max-w-sm text-[0.875rem] text-white/55 leading-relaxed">
              Sovereign AI infrastructure for African enterprise. In-country
              data, orchestrated models, and edge-first delivery.
            </p>
            <Link
              className="mt-2 inline-flex h-10 items-center rounded-full bg-white px-5 font-medium text-[0.875rem] text-ink transition-colors hover:bg-white/90"
              href="/contact"
            >
              Request a demo
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {FOOTER_COLUMNS.map((column) => (
              <div className="flex flex-col gap-4" key={column.title}>
                <p className="text-[0.875rem] text-white">{column.title}</p>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-[0.875rem] text-white/55 transition-colors hover:text-white"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-white/10 border-t pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <RubaniMark className="h-12 w-auto shrink-0 brightness-0 invert" />
            <p className="text-[0.8125rem] text-white/45">
              {`© ${year} Rubani. All rights reserved.`}
            </p>
          </div>
          <div className="flex items-center gap-1">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                aria-label={`Visit Rubani on ${label}`}
                className="inline-flex size-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                href={href}
                key={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon className="size-4 [&_path]:fill-current" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
