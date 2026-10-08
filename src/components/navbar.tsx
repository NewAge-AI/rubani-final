"use client";

import {
  ArrowDown01Icon,
  ArrowRight01Icon,
  Cancel01Icon,
  Menu02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "@notra/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getNavbarVariantForPath } from "@/lib/navigation/navbar-variant";
import type { NavbarProps } from "@/types/navbar";
import { MAIN_NAV, type NavMenu } from "@/utils/navigation";
import { MediaBackground } from "./marketing/media";
import { RubaniMark } from "./notra-mark";

const CLOSE_DELAY_MS = 120;

function MegaMenuPanel({
  menu,
  onNavigate,
}: {
  menu: NavMenu;
  onNavigate: () => void;
}) {
  return (
    <div className="mx-auto grid max-w-[80rem] grid-cols-[1fr_2fr_1.1fr] gap-10 px-8 pt-8 pb-10">
      <div className="flex flex-col gap-3 border-ink/8 border-r pr-10">
        <p className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
          Overview
        </p>
        <Link
          className="group mt-1 flex items-center gap-2 font-display text-[1.375rem] text-ink tracking-[-0.02em]"
          href={menu.overview.href}
          onClick={onNavigate}
        >
          {menu.overview.label}
          <HugeiconsIcon
            className="size-4 transition-transform group-hover:translate-x-1"
            icon={ArrowRight01Icon}
          />
        </Link>
        <p className="text-[0.875rem] text-ink/60 leading-relaxed">
          {menu.overview.description}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-1">
        {menu.items.map((item) => (
          <li key={item.href}>
            <Link
              className="flex flex-col gap-1 rounded-xl px-4 py-3.5 transition-colors hover:bg-stone"
              href={item.href}
              onClick={onNavigate}
            >
              <span className="text-[0.9375rem] text-ink">{item.label}</span>
              <span className="text-[0.8125rem] text-ink/55 leading-snug">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        className="landing-card-media group relative flex min-h-[11rem] flex-col justify-end overflow-hidden rounded-xl bg-ink p-5"
        href={menu.featured.href}
        onClick={onNavigate}
      >
        <MediaBackground sizes="320px" src={menu.featured.image} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/40 to-transparent"
        />
        <p className="relative font-mono text-[0.625rem] text-white/60 uppercase tracking-[0.14em]">
          {menu.featured.eyebrow}
        </p>
        <p className="relative mt-1.5 flex items-end justify-between gap-3 text-[1rem] text-white leading-snug">
          {menu.featured.title}
          <HugeiconsIcon
            className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
            icon={ArrowRight01Icon}
          />
        </p>
      </Link>
    </div>
  );
}

export function Navbar({ variant }: NavbarProps = {}) {
  const pathname = usePathname();
  const resolvedVariant =
    variant ??
    (pathname === "/" ? "landing" : getNavbarVariantForPath(pathname));
  const isStatic = resolvedVariant === "static";
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number | null>(null);

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

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menus whenever the route changes
  useEffect(() => {
    setIsOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function cancelClose() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function scheduleClose() {
    cancelClose();
    closeTimer.current = window.setTimeout(
      () => setOpenMenu(null),
      CLOSE_DELAY_MS
    );
  }

  const activeMenu = MAIN_NAV.find((item) => item.label === openMenu)?.menu;
  const isSolid = scrolled || isOpen || Boolean(activeMenu);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        "top-0 z-50 w-full border-b transition-[background-color,border-color] duration-300",
        isStatic ? "relative" : "sticky",
        // backdrop-filter would make the header the containing block for the
        // fixed mobile panel, so the open menu uses a solid background instead.
        isOpen
          ? "border-border/80 bg-background"
          : isSolid
            ? "border-border/80 bg-background/90 backdrop-blur-xl"
            : "border-transparent bg-background"
      )}
      onMouseLeave={scheduleClose}
    >
      <div className="relative mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          aria-label="Rubani home"
          className="flex shrink-0 items-center"
          href="/"
        >
          <RubaniMark className="h-14 w-auto shrink-0" />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 lg:flex"
        >
          {MAIN_NAV.map((item) =>
            item.menu ? (
              <button
                aria-expanded={openMenu === item.label}
                aria-haspopup="true"
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-foreground/5 hover:text-foreground",
                  openMenu === item.label || isActive(item.href)
                    ? "text-foreground"
                    : "text-foreground/70"
                )}
                key={item.label}
                onClick={() =>
                  setOpenMenu((current) =>
                    current === item.label ? null : item.label
                  )
                }
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMenu(item.label);
                }}
                type="button"
              >
                {item.label}
                <HugeiconsIcon
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    openMenu === item.label && "rotate-180"
                  )}
                  icon={ArrowDown01Icon}
                />
              </button>
            ) : (
              <Link
                className={cn(
                  "rounded-full px-3.5 py-2 text-[0.875rem] transition-colors hover:bg-foreground/5 hover:text-foreground",
                  isActive(item.href) ? "text-foreground" : "text-foreground/70"
                )}
                href={item.href}
                key={item.label}
                onMouseEnter={scheduleClose}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center justify-end gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            <Link
              className="rounded-full px-3.5 py-2 text-[0.875rem] text-foreground/70 transition-colors hover:text-foreground"
              href="/contact"
            >
              Contact sales
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

      {activeMenu ? (
        <div
          className="absolute inset-x-0 top-full hidden border-border/80 border-b bg-background shadow-[0_32px_64px_-32px_rgba(23,23,28,0.25)] lg:block"
          onMouseEnter={cancelClose}
        >
          <MegaMenuPanel menu={activeMenu} onNavigate={() => setOpenMenu(null)} />
        </div>
      ) : null}

      {isOpen && (
        <div
          className="fixed inset-x-0 top-16 bottom-0 flex flex-col overflow-y-auto bg-background px-5 pt-2 pb-8 lg:hidden"
          id="mobile-navigation"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {MAIN_NAV.map((item) =>
              item.menu ? (
                <div className="border-border border-b" key={item.label}>
                  <button
                    aria-expanded={mobileSection === item.label}
                    className="flex w-full items-center justify-between py-4 font-display text-[1.375rem] text-foreground tracking-[-0.02em]"
                    onClick={() =>
                      setMobileSection((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    type="button"
                  >
                    {item.label}
                    <HugeiconsIcon
                      className={cn(
                        "size-4 transition-transform",
                        mobileSection === item.label && "rotate-180"
                      )}
                      icon={ArrowDown01Icon}
                    />
                  </button>
                  {mobileSection === item.label ? (
                    <ul className="flex flex-col pb-4">
                      {[
                        {
                          href: item.menu.overview.href,
                          label: item.menu.overview.label,
                        },
                        ...item.menu.items,
                      ].map((link) => (
                        <li key={link.href}>
                          <Link
                            className="block py-2.5 text-[1rem] text-foreground/70"
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ) : (
                <Link
                  className="border-border border-b py-4 font-display text-[1.375rem] text-foreground tracking-[-0.02em]"
                  href={item.href}
                  key={item.label}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
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
          </div>
        </div>
      )}
    </header>
  );
}
