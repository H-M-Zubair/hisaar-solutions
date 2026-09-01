"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticCta } from "@/components/layout/magnetic-cta";
import { TiltCard } from "@/components/motion/tilt-card";
import { PosTerminal } from "@/components/mockups/product-ui";
import { HeroHeadlineCascade } from "@/components/motion/headline-cascade";
import { AwesomeSlide } from "@/components/motion/awesome-reveal";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative bg-mesh">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="bg-noise absolute inset-0" />
      </div>
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-32 lg:pt-24">
        <div className="min-w-0">
          <p className="eyebrow text-teal">B2B SaaS</p>
          <HeroHeadlineCascade />
          <p className="mt-6 max-w-md text-base leading-relaxed text-mute sm:text-lg">
            A custom software company that ships its own products. Omni Ledger
            is our multi-sector POS — grocery, pharmacy, restaurant, and
            retail: clothes, mobile shops, and more.
            We also build software for one business when a product is not enough.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticCta>
              <Button asChild size="lg">
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Talk to Hisaar Solutions on WhatsApp (opens in a new tab)"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </Button>
            </MagneticCta>
            <Button asChild variant="outline" size="lg">
              <Link href="/products">See Omni Ledger</Link>
            </Button>
          </div>
          <p className="mt-5 max-w-sm text-xs leading-relaxed text-mute">
            WhatsApp {site.phone}.
          </p>
        </div>
        <AwesomeSlide direction="right" delay={280} duration={900} fraction={0} className="w-full min-w-0 self-center overflow-visible">
          <TiltCard className="w-full self-center">
            <PosTerminal />
          </TiltCard>
        </AwesomeSlide>
      </div>
    </section>
  );
}
