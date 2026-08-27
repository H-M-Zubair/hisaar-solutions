"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Idle: throw only south-east. Hover: throw opposite the cursor (the lamp). */
const REST_X = 22;
const REST_Y = 28;
const THROW = 54;

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const hovering = React.useRef(false);
  const target = React.useRef({ rx: 0, ry: 0, sx: REST_X, sy: REST_Y });
  const current = React.useRef({ rx: 0, ry: 0, sx: REST_X, sy: REST_Y });
  const raf = React.useRef<number | null>(null);

  const paint = React.useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const c = current.current;
    const t = target.current;
    const ease = hovering.current ? 0.22 : 0.16;
    c.rx += (t.rx - c.rx) * ease;
    c.ry += (t.ry - c.ry) * ease;
    c.sx += (t.sx - c.sx) * ease;
    c.sy += (t.sy - c.sy) * ease;
    el.style.transform = `perspective(980px) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
    el.style.setProperty("--tilt-sx", `${c.sx.toFixed(2)}px`);
    el.style.setProperty("--tilt-sy", `${c.sy.toFixed(2)}px`);
    const moving =
      Math.abs(t.rx - c.rx) > 0.04 ||
      Math.abs(t.ry - c.ry) > 0.04 ||
      Math.abs(t.sx - c.sx) > 0.12 ||
      Math.abs(t.sy - c.sy) > 0.12;
    raf.current = moving ? requestAnimationFrame(paint) : null;
  }, []);

  function kick() {
    if (raf.current == null) raf.current = requestAnimationFrame(paint);
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    hovering.current = true;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    target.current = {
      rx: (py - 0.5) * -10,
      ry: (px - 0.5) * 12,
      sx: (0.5 - px) * THROW,
      sy: (0.5 - py) * THROW,
    };
    kick();
  }

  function onLeave() {
    hovering.current = false;
    target.current = { rx: 0, ry: 0, sx: REST_X, sy: REST_Y };
    kick();
  }

  React.useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "tilt-plate flex flex-col will-change-transform rounded-2xl",
        className,
      )}
      style={{
        transformStyle: "preserve-3d",
        ["--tilt-sx" as string]: `${REST_X}px`,
        ["--tilt-sy" as string]: `${REST_Y}px`,
      }}
    >
      {children}
    </div>
  );
}
