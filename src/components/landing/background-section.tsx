import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import type { ReactNode } from "react";

type BackgroundSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  image: string;
  overlayClassName?: string;
};

export function BackgroundSection({
  children,
  className,
  id,
  image,
  overlayClassName,
}: BackgroundSectionProps) {
  return (
    <section
      className={cn("relative isolate w-full overflow-hidden", className)}
      id={id}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          alt=""
          className="object-cover"
          fill
          priority={id === "hero"}
          sizes="100vw"
          src={image}
          unoptimized
        />
        <div
          className={cn(
            "absolute inset-0 bg-linear-to-b from-background/92 via-background/88 to-background/96 dark:from-background/94 dark:via-background/90 dark:to-background/98",
            overlayClassName
          )}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
