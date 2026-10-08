import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";

/** Full-bleed background image for cards, heroes, and menu features. */
export function MediaBackground({
  src,
  alt = "",
  sizes,
  priority,
  className,
}: {
  src: string;
  alt?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      alt={alt}
      className={cn("object-cover", className)}
      fill
      priority={priority}
      sizes={sizes}
      src={src}
    />
  );
}
