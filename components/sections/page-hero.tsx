"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AwesomeFade } from "@/components/motion/awesome-reveal";
import { PageCrumbs, type Crumb } from "@/components/layout/page-crumbs";

export function PageHero({
  kicker,
  title,
  lede,
  accent,
  crumbs,
  children,
  className,
}: {
  kicker: string;
  title: string;
  lede: string;
  accent?: string;
  crumbs?: Crumb[];
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden border-b border-line bg-mesh", className)}>
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24">
        <AwesomeFade direction="up" duration={700} fraction={0}>
          {crumbs ? <PageCrumbs items={crumbs} /> : null}
          <p className="eyebrow" style={accent ? { color: accent } : undefined}>
            {kicker}
          </p>
          <h1 className="display mt-4 max-w-4xl break-words text-[clamp(2.1rem,8vw,4.8rem)]">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">{lede}</p>
        </AwesomeFade>
        {children}
      </div>
    </section>
  );
}
