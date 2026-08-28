"use client";

import type { ReactNode } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type RevealDir = "up" | "down" | "left" | "right";

type Common = {
  children: ReactNode;
  direction?: RevealDir;
  delay?: number;
  duration?: number;
  cascade?: boolean;
  damping?: number;
  className?: string;
  fraction?: number;
};

/** Fade in from a direction. Delay is milliseconds. */
export function AwesomeFade({
  children,
  direction = "up",
  delay = 0,
  duration = 750,
  cascade = false,
  damping = 0.18,
  className,
  fraction = 0.08,
}: Common) {
  const reduce = useReducedMotion();
  const instant = Boolean(reduce);

  return (
    <Fade
      direction={direction}
      delay={instant ? 0 : delay}
      duration={instant ? 0 : duration}
      cascade={cascade}
      damping={damping}
      triggerOnce
      fraction={fraction}
      className={cn(
        "min-w-0 max-w-full",
        (direction === "left" || direction === "right") && "overflow-hidden",
        className,
      )}
    >
      {children}
    </Fade>
  );
}

/** Harder travel than Fade — use for mockups, asides, posters. */
export function AwesomeSlide({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  cascade = false,
  damping = 0.18,
  className,
  fraction = 0.08,
}: Common) {
  const reduce = useReducedMotion();
  const instant = Boolean(reduce);

  return (
    <Slide
      direction={direction}
      delay={instant ? 0 : delay}
      duration={instant ? 0 : duration}
      cascade={cascade}
      damping={damping}
      triggerOnce
      fraction={fraction}
      className={cn(
        "min-w-0 max-w-full",
        (direction === "left" || direction === "right") && "overflow-hidden",
        className,
      )}
    >
      {children}
    </Slide>
  );
}
