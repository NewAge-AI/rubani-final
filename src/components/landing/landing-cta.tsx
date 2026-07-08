import { Button } from "@notra/ui/components/ui/button";
import Link from "next/link";
import { LandingEyebrow } from "./landing-section";

export function LandingCTA() {
  return (
    <section
      className="relative w-full overflow-hidden border-white/12 border-t"
      id="cta"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/landing/hero-field.webp')] bg-center bg-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/75 via-black/85 to-black"
      />
      <div className="landing-abacus-dots absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-[75rem] px-4 py-20 text-center md:py-24 xl:px-8">
        <LandingEyebrow className="justify-center" tone="dark">
          Value proposition
        </LandingEyebrow>
        <h2 className="mt-4 font-medium text-[2.25rem] text-white leading-[1.1] tracking-[-0.03em] md:text-[3.5rem] md:leading-[1.05]">
          Own your intelligence,
          <span className="block text-[#8eb4ff]">end to end.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-white/65 leading-relaxed">
          Rubani lets you deploy AI agents your customers can actually reach, on
          infrastructure you actually control, at a cost your business can
          actually sustain. No leaked IP. No vendor lock-in. No data centre
          required.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            className="landing-btn-shimmer h-11 rounded-full border-0 bg-white px-8 text-black hover:bg-white/90"
            nativeButton={false}
            render={<Link href="/contact" />}
          >
            Request a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
