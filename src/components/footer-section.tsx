import { buttonVariants } from "@notra/ui/components/ui/button";
import { Discord } from "@notra/ui/components/ui/svgs/discord";
import { Github } from "@notra/ui/components/ui/svgs/github";
import { Linkedin } from "@notra/ui/components/ui/svgs/linkedin";
import { Reddit } from "@notra/ui/components/ui/svgs/reddit";
import { XTwitter } from "@notra/ui/components/ui/svgs/twitter";
import { Youtube } from "@notra/ui/components/ui/svgs/youtube";
import Link from "next/link";
import { SOCIAL_LINKS } from "../utils/social-links";
import { RubaniMark } from "./notra-mark";

type FooterSectionProps = {
  variant?: "default" | "landing";
};

export default function FooterSection({
  variant = "default",
}: FooterSectionProps) {
  const year = new Date().getFullYear();
  const isLanding = variant === "landing";

  return (
    <footer
      className={
        isLanding
          ? "w-full border-white/12 border-t bg-black px-4 py-12 xl:px-8"
          : "flex w-full flex-col items-start justify-start pt-10"
      }
    >
      <div
        className={
          isLanding
            ? "mx-auto flex w-full max-w-[75rem] flex-col gap-10 md:flex-row md:items-start md:justify-between"
            : "flex h-auto w-full flex-col items-stretch justify-between gap-8 self-stretch px-4 pb-8 md:flex-row md:px-8"
        }
      >
        <div className="flex flex-col items-start gap-5">
          <RubaniMark
            className={`h-16 w-auto shrink-0 md:h-20 ${
              isLanding ? "brightness-0 invert" : ""
            }`}
          />
          <p
            className={
              isLanding
                ? "max-w-sm text-sm text-white/55 leading-relaxed"
                : "font-medium font-sans text-foreground/90 text-sm leading-4.5"
            }
          >
            {isLanding
              ? "Sovereign AI infrastructure for African enterprise. In-country data, orchestrated models, and edge-first delivery."
              : "Sovereignty · Orchestration · Edge"}
          </p>
          <p
            className={
              isLanding
                ? "text-white/35 text-xs"
                : "font-normal font-sans text-foreground/60 text-xs leading-5"
            }
          >
            {`© ${year} Rubani. All rights reserved.`}
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <Link
            className={
              isLanding
                ? "font-medium text-sm text-white hover:text-white/80"
                : "font-medium font-sans text-foreground text-sm transition-colors hover:text-primary"
            }
            href="/contact"
          >
            Contact
          </Link>

          <div
            className={`flex items-start gap-2 ${isLanding ? "text-white" : "text-foreground"}`}
          >
            <Link
              aria-label="Visit Rubani on X"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.x}
              rel="noopener noreferrer"
              target="_blank"
            >
              <XTwitter className="size-5" />
            </Link>
            <Link
              aria-label="Visit Rubani on LinkedIn"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Linkedin className="size-5" />
            </Link>
            <Link
              aria-label="Visit Rubani on GitHub"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
            <Link
              aria-label="Visit Rubani on Discord"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.discord}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Discord className="size-5" />
            </Link>
            <Link
              aria-label="Visit Rubani on Reddit"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.reddit}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Reddit className="size-5" />
            </Link>
            <Link
              aria-label="Visit Rubani on YouTube"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={SOCIAL_LINKS.youtube}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
