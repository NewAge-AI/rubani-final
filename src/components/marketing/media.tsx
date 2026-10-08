import { cn } from "@notra/ui/lib/utils";
import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * Media for cards and heroes. Either a photo path, or `art:<variant>` for a
 * generated gradient composition in the brand palette.
 */
export type MediaSource = string;

type ArtVariant = "agents" | "orchestration" | "edge" | "sovereign";

type ShapeSpec = {
  tone: "navy" | "coral" | "lilac";
  style: CSSProperties;
};

const ART: Record<ArtVariant, { base: string; shapes: ShapeSpec[] }> = {
  agents: {
    base: "radial-gradient(120% 90% at 80% 10%, #2a2440 0%, #17171c 55%, #0c1720 100%)",
    shapes: [
      { tone: "lilac", style: { width: "58%", height: "70%", right: "-8%", top: "-12%", "--shape-rotate": "-18deg" } as CSSProperties },
      { tone: "coral", style: { width: "30%", height: "44%", right: "30%", top: "8%", "--shape-rotate": "22deg" } as CSSProperties },
      { tone: "navy", style: { width: "46%", height: "60%", left: "-10%", bottom: "-18%", "--shape-rotate": "10deg" } as CSSProperties },
    ],
  },
  orchestration: {
    base: "radial-gradient(120% 90% at 20% 0%, #13294d 0%, #0c1720 60%, #08111a 100%)",
    shapes: [
      { tone: "navy", style: { width: "52%", height: "76%", left: "6%", top: "-14%", "--shape-rotate": "-8deg" } as CSSProperties },
      { tone: "navy", style: { width: "36%", height: "52%", left: "44%", top: "4%", "--shape-rotate": "16deg" } as CSSProperties },
      { tone: "lilac", style: { width: "34%", height: "50%", right: "-6%", top: "18%", "--shape-rotate": "-20deg" } as CSSProperties },
    ],
  },
  edge: {
    base: "radial-gradient(120% 100% at 70% 0%, #4a2a22 0%, #1f1a1d 50%, #0c1720 100%)",
    shapes: [
      { tone: "coral", style: { width: "62%", height: "84%", right: "-14%", top: "-24%", "--shape-rotate": "12deg" } as CSSProperties },
      { tone: "lilac", style: { width: "34%", height: "46%", left: "18%", top: "4%", "--shape-rotate": "-14deg" } as CSSProperties },
      { tone: "navy", style: { width: "44%", height: "58%", left: "-12%", bottom: "-20%", "--shape-rotate": "6deg" } as CSSProperties },
    ],
  },
  sovereign: {
    base: "radial-gradient(130% 100% at 50% 0%, #1b3a6b 0%, #0c1720 65%, #08111a 100%)",
    shapes: [
      { tone: "navy", style: { width: "60%", height: "90%", left: "20%", top: "-30%", "--shape-rotate": "4deg" } as CSSProperties },
      { tone: "lilac", style: { width: "26%", height: "40%", right: "4%", top: "10%", "--shape-rotate": "-24deg" } as CSSProperties },
    ],
  },
};

function ArtBackdrop({ variant }: { variant: ArtVariant }) {
  const art = ART[variant];
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ background: art.base }}
    >
      {art.shapes.map((shape, index) => (
        <span
          className={`landing-shape landing-shape--${shape.tone} opacity-90`}
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative list
          key={index}
          style={shape.style}
        />
      ))}
      <div className="landing-grain absolute inset-0 opacity-50" />
    </div>
  );
}

export function MediaBackground({
  src,
  alt = "",
  sizes,
  priority,
  className,
}: {
  src: MediaSource;
  alt?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (src.startsWith("art:")) {
    return <ArtBackdrop variant={src.slice(4) as ArtVariant} />;
  }
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
