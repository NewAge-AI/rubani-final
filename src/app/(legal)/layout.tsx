import Link from "next/link";
import { LandingContainer } from "@/components/landing/landing-section";

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Terms of service", href: "/terms" },
] as const;

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full bg-paper">
      <LandingContainer className="pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[14rem_1fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.6875rem] text-ink/50 uppercase tracking-[0.14em]">
              Legal
            </p>
            <nav aria-label="Legal documents" className="mt-4 flex flex-col gap-1">
              {LEGAL_LINKS.map((link) => (
                <Link
                  className="rounded-lg py-1.5 text-[0.9375rem] text-ink/70 transition-colors hover:text-ink"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <article className="prose prose-neutral max-w-3xl prose-headings:font-display prose-h2:mt-12 prose-h2:font-normal prose-headings:text-ink prose-h2:text-[1.5rem] prose-li:text-ink/70 prose-p:text-ink/70 prose-strong:text-ink prose-a:text-brand prose-p:leading-7 prose-h2:tracking-[-0.02em] prose-a:underline-offset-2">
            {children}
          </article>
        </div>
      </LandingContainer>
    </main>
  );
}
