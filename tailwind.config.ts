import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import daisyui from "daisyui";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
        logo: ["var(--font-logo)", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "var(--ink)",
        surface: "var(--surface)",
        line: "var(--line)",
        paper: "var(--paper)",
        mute: "var(--mute)",
        teal: "var(--teal)",
        amber: "var(--amber)",
        danger: "var(--danger)",
        grocery: "var(--grocery)",
        pharmacy: "var(--pharmacy)",
        restaurant: "var(--restaurant)",
        retail: "var(--retail)",
        gold: "var(--gold)",
        hisaar: "#17D492",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      boxShadow: {
        glow: "0 0 80px -20px var(--teal)",
        cta: "0 12px 40px -16px color-mix(in srgb, var(--amber) 70%, transparent)",
      },
      keyframes: {
        "pulse-line": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.45" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "count-in": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "pulse-line": "pulse-line 2.4s ease-in-out infinite",
        ripple: "ripple 0.6s ease-out",
        "count-in": "count-in 0.5s ease-out",
        "accordion-down": "accordion-down 0.28s ease-out",
        "accordion-up": "accordion-up 0.22s ease-out",
      },
    },
  },
  plugins: [animate, daisyui],
  daisyui: {
    themes: false,
    base: false,
    logs: false,
  },
} satisfies Config;

export default config;
