"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function MagneticCta({
  children,
  className,
  strength = 18,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
  }

  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex will-change-transform", className)}
      style={{ transition: "transform 180ms ease-out" }}
    >
      {children}
    </div>
  );
}
