"use client";

import * as React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { industryList } from "@/lib/industries";
import { PosTerminal, LotBoard, TableFloor, GarmentMatrix } from "@/components/mockups/product-ui";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

function Screen({ slug }: { slug: string }) {
  if (slug === "pharmacy") return <LotBoard />;
  if (slug === "restaurant") return <TableFloor />;
  if (slug === "garments") return <GarmentMatrix />;
  return <PosTerminal shop="Cantt Kirana" />;
}

function FloorCards() {
  return (
    <div className="mx-auto grid max-w-[1120px] min-w-0 gap-6 px-5 sm:px-8 md:grid-cols-2">
      {industryList.map((ind) => (
        <article
          key={ind.slug}
          className="min-w-0 rounded-2xl border border-line bg-surface p-6"
          style={{ boxShadow: `inset 3px 0 0 ${ind.accent}` }}
        >
          <p className="eyebrow" style={{ color: ind.accent }}>
            {ind.name}
          </p>
          <h2 className="display mt-3 break-words text-3xl">{ind.headline}</h2>
          <p className="mt-3 text-sm text-mute">{ind.lede}</p>
          <Link
            href={`/solutions/${ind.slug}`}
            className="mt-4 inline-block text-sm text-paper underline-offset-4 hover:underline"
            aria-label={`Open ${ind.name} POS solution`}
          >
            Open {ind.name}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function IndustryPin() {
  const wrap = React.useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useGSAP(
    () => {
      if (reduce || !wrap.current) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const section = wrap.current;
        if (!section) return;
        const panels = gsap.utils.toArray<HTMLElement>(
          section.querySelectorAll("[data-panel]"),
        );
        gsap.set(panels, { autoAlpha: 0, y: 32 });
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=320%",
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        panels.forEach((panel, i) => {
          if (i === 0) return;
          const prev = panels[i - 1];
          tl.to(prev, { autoAlpha: 0, y: -24, duration: 0.4 }, i);
          tl.fromTo(
            panel,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 0.4 },
            i,
          );
        });
      });
    },
    { scope: wrap, dependencies: [reduce] },
  );

  const list = industryList;

  if (reduce) {
    return (
      <section className="overflow-x-clip bg-ink py-20">
        <FloorCards />
      </section>
    );
  }

  return (
    <>
      <section className="overflow-x-clip bg-ink py-20 md:hidden">
        <FloorCards />
      </section>
      <section ref={wrap} className="relative hidden h-screen overflow-hidden bg-ink md:block">
        {/* Intent: one pinned GSAP sequence — the page re-skins through grocery, pharmacy, restaurant, garments. */}
        {list.map((ind, i) => (
          <article
            key={ind.slug}
            data-panel
            className="absolute inset-0 flex items-center overflow-hidden"
            style={{ ["--pin-accent" as string]: ind.accent }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background: `radial-gradient(700px 420px at 80% 20%, ${ind.accent}33, transparent 60%)`,
              }}
            />
            <div className="relative mx-auto grid w-full min-w-0 max-w-[1280px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:tracking-[0.28em]">
                  0{i + 1} / 04 · {ind.accentName}
                </p>
                <h2
                  className="display mt-4 break-words text-[clamp(2.2rem,5vw,4.2rem)]"
                  style={{ color: ind.accent }}
                >
                  {ind.name}
                </h2>
                <p className="display mt-3 break-words text-3xl text-paper sm:text-4xl">
                  {ind.headline}
                </p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-mute sm:text-base">
                  {ind.lede}
                </p>
                <Link
                  href={`/solutions/${ind.slug}`}
                  className="mt-6 inline-flex text-sm text-paper underline decoration-line underline-offset-8 hover:decoration-current"
                  aria-label={`Enter the ${ind.name.toLowerCase()} POS floor`}
                >
                  Enter the {ind.name.toLowerCase()} floor
                </Link>
              </div>
              <div className="min-w-0">
                <Screen slug={ind.slug} />
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
