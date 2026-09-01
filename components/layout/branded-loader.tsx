"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/logo";

const KEY = "hisaar-loader-seen";

export function BrandedLoader() {
  const reduce = useReducedMotion();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (reduce) return;
    try {
      if (localStorage.getItem(KEY) === "1") return;
    } catch {
      return;
    }
    setShow(true);
    const t = window.setTimeout(() => dismiss(), 1500);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  function dismiss() {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore quota */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <motion.div
      role="dialog"
      aria-label="Hisaar loading"
      aria-live="polite"
      className="fixed inset-0 z-[80] grid place-items-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={dismiss}
    >
      <button
        type="button"
        onClick={dismiss}
        className="absolute inset-0 cursor-pointer"
        aria-label="Skip intro"
      />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.86, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo markOnly size="lg" className="pointer-events-none scale-150" />
        </motion.div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full bg-hisaar"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.35, ease: "easeInOut" }}
          />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-mute">
          Hisaar · Omni Ledger
        </p>
      </div>
    </motion.div>
  );
}
