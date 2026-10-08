import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  tone = "light",
}: {
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em]",
          tone === "dark" ? "text-white/55" : "text-ink/50"
        )}
      >
        {items.map((item, index) => (
          <li className="flex items-center gap-1.5" key={item.label}>
            {index > 0 ? (
              <HugeiconsIcon className="size-3 opacity-60" icon={ArrowRight01Icon} />
            ) : null}
            {item.href ? (
              <Link
                className={cn(
                  "transition-colors",
                  tone === "dark" ? "hover:text-white" : "hover:text-ink"
                )}
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={tone === "dark" ? "text-white/85" : "text-ink/80"}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
