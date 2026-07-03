"use client";

import { buttonVariants } from "@notra/ui/components/ui/button";
import { cn } from "@notra/ui/lib/utils";
import type { BrandAssetCardProps } from "~types/brand";

export function BrandAssetCard({
  variant,
  asset,
  downloadName,
  children,
}: BrandAssetCardProps) {
  return (
    <div
      className={cn(
        "group relative flex h-48 items-center justify-center rounded-2xl border border-border/70",
        variant === "light" ? "bg-white" : "bg-[#131316]"
      )}
    >
      {children}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 transition-opacity duration-150 ease-out group-focus-within:opacity-100 group-hover:opacity-100">
        <a
          className={buttonVariants({ size: "sm", variant: "secondary" })}
          download={`${downloadName}.png`}
          href={asset.png}
        >
          PNG
        </a>
      </div>
    </div>
  );
}
