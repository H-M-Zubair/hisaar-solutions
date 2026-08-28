"use client";

import { Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Editorial clip-reveal: each line is masked, then rises from below.
 * Line 1, then 2, then 3, then 4 — bottom → top, staggered.
 */
const clipRise = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 108%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const LINES = [
  { text: "The shop’s", mute: false },
  { text: "brain,", mute: false },
  { text: "not just the", mute: true },
  { text: "scanner.", mute: true },
] as const;

export function HeroHeadlineCascade() {
  const reduce = useReducedMotion();
  const instant = Boolean(reduce);

  return (
    <div
      role="heading"
      aria-level={1}
      aria-label="The shop’s brain, not just the scanner."
      className="display mt-5 text-[clamp(2.6rem,7vw,5.6rem)] text-paper"
    >
      {LINES.map((line, i) => (
        <div
          key={line.text}
          className={cn("overflow-hidden pb-[0.08em]", line.mute && "text-mute")}
        >
          <Reveal
            keyframes={clipRise}
            delay={instant ? 0 : 80 + i * 140}
            duration={instant ? 0 : 900}
            triggerOnce
            fraction={0}
            style={{ display: "block" }}
          >
            <span className="block">{line.text}</span>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
