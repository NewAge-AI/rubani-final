import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@notra/ui/components/ui/avatar";
import Link from "next/link";

export default function TestimonialsSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center border-border border-b">
      <div className="flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-16 md:py-24">
        <Link
          className="text-center font-medium font-sans text-foreground text-xl leading-relaxed tracking-tight md:text-2xl md:leading-10"
          href="/contact"
          rel="noopener noreferrer"
          target="_blank"
        >
          &ldquo;Rubani lets African enterprises own their intelligence: models run
          inside controlled infrastructure, orchestration keeps cost down, and
          agents reach customers at the edge.&rdquo;
        </Link>
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarImage alt="Rubani customer" src="/brand/rubani-icon.svg" />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <Link
              className="font-medium font-sans text-base text-foreground"
              href="/contact"
              rel="noopener noreferrer"
              target="_blank"
            >
              Rubani
            </Link>
            <span className="font-normal font-sans text-muted-foreground text-sm">
              Sovereignty · Orchestration · Edge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
