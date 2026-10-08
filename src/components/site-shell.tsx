"use client";

import { usePathname } from "next/navigation";
import type { SiteShellProps } from "../types/site-shell";
import FooterSection from "./footer-section";
import { Navbar } from "./navbar";

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <Navbar variant={isLanding ? "landing" : undefined} />
      {isLanding ? (
        children
      ) : (
        <div className="relative mx-auto flex w-full max-w-none flex-1 flex-col items-center px-4 pb-16 sm:px-6 md:px-8 md:pb-24 lg:max-w-7xl lg:px-0">
          {children}
        </div>
      )}
      <FooterSection />
    </div>
  );
}
