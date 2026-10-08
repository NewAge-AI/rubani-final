"use client";

import { usePathname } from "next/navigation";
import type { SiteShellProps } from "../types/site-shell";
import FooterSection from "./footer-section";
import { MotionController } from "./motion-controller";
import { Navbar } from "./navbar";

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <MotionController />
      <Navbar variant={pathname === "/" ? "landing" : undefined} />
      <div className="flex w-full flex-1 flex-col">{children}</div>
      <FooterSection />
    </div>
  );
}
