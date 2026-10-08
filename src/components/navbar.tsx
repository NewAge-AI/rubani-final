"use client";

import { Cancel01Icon, Menu02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getNavbarVariantForPath } from "@/lib/navigation/navbar-variant";
import type { NavbarProps } from "@/types/navbar";
import { LANDING_NAV } from "@/utils/navigation";
import { RubaniMark } from "./notra-mark";
import { ThemeToggle } from "./theme-toggle";

export function Navbar({ variant }: NavbarProps = {}) {
  const pathname = usePathname();
  const resolvedVariant =
    variant ??
    (pathname === "/" ? "landing" : getNavbarVariantForPath(pathname));
  const isLanding = resolvedVariant === "landing";
  const isStatic = resolvedVariant === "static";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "top-0 z-50 w-full border-b transition-[background-color,border-color] duration-300",
        isStatic ? "relative" : "sticky",
        scrolled || isOpen
          ? "border-border/80 bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          aria-label="Rubani home"
          className="flex shrink-0 items-center"
          href="/"
        >
          <RubaniMark className="h-14 w-auto shrink-0" />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex"
        >
          {LANDING_NAV.map((item) => (
            <Link
              className="rounded-full px-3.5 py-2 text-[0.875rem] text-foreground/75 transition-colors hover:bg-foreground/5 hover:text-foreground"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            {!isLanding && <ThemeToggle />}
            <Link
              className="rounded-full px-3.5 py-2 text-[0.875rem] text-foreground/75 transition-colors hover:text-foreground"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="rounded-full bg-primary px-4 py-2 font-medium text-[0.875rem] text-primary-foreground transition-colors hover:bg-primary-hover"
              href="/contact"
            >
              Request a demo
            </Link>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-foreground/5 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
          >
            <HugeiconsIcon
              className="size-5"
              icon={isOpen ? Cancel01Icon : Menu02Icon}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 flex flex-col overflow-y-auto bg-background px-5 pt-4 pb-8 lg:hidden"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {LANDING_NAV.map((item) => (
              <Link
                className="border-border border-b py-4 font-display text-[1.375rem] text-foreground tracking-[-0.02em]"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link
              className="block rounded-full bg-primary px-4 py-3 text-center font-medium text-primary-foreground text-sm"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Request a demo
            </Link>
            <Link
              className="block rounded-full border border-border px-4 py-3 text-center font-medium text-foreground text-sm"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact sales
            </Link>
            {!isLanding && (
              <div className="mt-2 flex justify-center">
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
