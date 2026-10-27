import type { TimelineEntry } from "./types";

// Experience as a changelog, newest first. Roles and dates only; the résumé
// carries the detail. Education is intentionally left off.
export const timeline: TimelineEntry[] = [
  {
    version: null,
    kind: "experience",
    title: "Software Development Engineer II",
    org: "The Sleep Company",
    start: "2025-11",
    end: null,
    notes: [],
  },
  {
    version: null,
    kind: "experience",
    title: "Software Engineer",
    org: "mple.ai",
    start: "2025-03",
    end: "2025-11",
    notes: ["Internal transfer from sister company Code-B."],
  },
  {
    version: null,
    kind: "experience",
    title: "Software Engineer",
    org: "Code-B",
    start: "2023-01",
    end: "2025-02",
    notes: [],
  },
];
