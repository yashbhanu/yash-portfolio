import type { Config } from "tailwindcss";

// All values resolve to CSS variables defined in src/app/globals.css so both
// themes share one set of utilities.
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-2": "var(--paper-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        rule: "var(--rule)",
        accent: "var(--accent)",
        "accent-ink": "var(--accent-ink)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        cap: ["var(--step--1)", { lineHeight: "1.45" }],
        body: ["var(--step-0)", { lineHeight: "1.6" }],
        lead: ["var(--step-1)", { lineHeight: "1.45" }],
        h3: ["var(--step-2)", { lineHeight: "1.15" }],
        h2: ["var(--step-3)", { lineHeight: "1.04" }],
        h1: ["var(--step-4)", { lineHeight: "0.98" }],
        display: ["var(--step-5)", { lineHeight: "0.9" }],
      },
      spacing: {
        gutter: "var(--gutter)",
        page: "var(--page-x)",
        section: "var(--section-y)",
      },
      maxWidth: {
        page: "var(--max)",
        measure: "68ch",
      },
      screens: {
        "3xl": "1800px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
