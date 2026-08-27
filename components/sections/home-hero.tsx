"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticCta } from "@/components/layout/magnetic-cta";
import { TiltCard } from "@/components/motion/tilt-card";
import { PosTerminal } from "@/components/mockups/product-ui";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative bg-mesh">
      {/* Intent: a dark ledger opening — huge type, a live till, no stock photography. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="bg-noise absolute inset-0" />
      </div>
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-24">
        <div>
          <p className="eyebrow text-teal">Omni Ledger · Hisaar Solutions</p>
          <h1 className="display mt-5 text-[clamp(2.6rem,7vw,5.6rem)] text-paper">
            The shop’s brain,
            <span className="block text-mute">not just the scanner.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg">
            Counter, stock, udhaar, and reports in one ledger. Sales keep moving
            when the fibre drops. Profit stays on the owner’s screen.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticCta>
              <Button asChild size="lg">
                <a href={site.trialMessage} target="_blank" rel="noopener noreferrer">
                  Book a 14-day trial
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </MagneticCta>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">See Omni Ledger</Link>
            </Button>
          </div>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-mute">
            There is no self-serve signup. WhatsApp {site.phone}.
          </p>
        </div>
        <TiltCard className="w-full self-center">
          {/* Intent: original till chrome; SE rest shadow; hover is a cursor lamp, not an orange rim. */}
          <PosTerminal />
        </TiltCard>
      </div>
    </section>
  );
}
