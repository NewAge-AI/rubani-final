"use client";

import { Cancel01Icon, Menu02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isLanding) {
      return;
    }

    function onScroll() {
      setScrolled(window.scrollY > 24);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinkClass = isLanding
    ? "text-white/75 hover:text-white"
    : "text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white";

  const shellClass = isLanding
    ? scrolled
      ? "border-white/10 border-b bg-black/80 backdrop-blur-xl"
      : "bg-transparent"
    : "bg-background/80 backdrop-blur-xl border-border/60 border-b";

  return (
    <header className={`transition-colors duration-300 ${shellClass}`}>
      <div
        className={`mx-auto flex h-16 items-center justify-between gap-4 ${
          isLanding
            ? "max-w-[75rem] px-4 xl:px-8"
            : "max-w-6xl px-6 md:px-10 lg:px-12"
        }`}
      >
        <Link
          aria-label="Rubani home"
          className="group flex items-center"
          href="/"
        >
          <RubaniMark
            className={`h-14 w-auto shrink-0 md:h-16 ${
              isLanding ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {LANDING_NAV.map((item) => (
            <Link
              className={`rounded-md px-3 py-2 text-sm transition-colors ${navLinkClass}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <div className="hidden items-center gap-2 lg:flex">
            {!isLanding && <ThemeToggle />}
            <Link
              className={`rounded-full px-4 py-2 font-medium text-sm transition-colors ${
                isLanding
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-primary text-primary-foreground hover:bg-primary-hover"
              }`}
              href="/contact"
            >
              Request a demo
            </Link>
          </div>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`relative inline-flex size-9 items-center justify-center rounded-md lg:hidden ${
              isLanding
                ? "text-white hover:bg-white/10"
                : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-white/6"
            }`}
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
          className={`border-t px-4 py-4 lg:hidden ${
            isLanding
              ? "border-white/10 bg-black/95"
              : "border-border bg-background"
          }`}
          id="mobile-navigation"
        >
          <nav className="flex flex-col gap-1">
            {LANDING_NAV.map((item) => (
              <Link
                className={`rounded-md px-3 py-2 text-sm ${navLinkClass}`}
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 border-white/10 border-t pt-3">
            <Link
              className={`block rounded-full px-3 py-2 text-center font-medium text-sm ${
                isLanding
                  ? "bg-white text-black"
                  : "bg-primary text-primary-foreground"
              }`}
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              Request a demo
            </Link>
            {!isLanding && (
              <div className="mt-3 flex justify-center">
                <ThemeToggle />
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
