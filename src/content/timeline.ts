import type { TimelineEntry } from "./types";

// Merges v1's Education / Experience tabs into one changelog, newest first.
// Roles and dates only; the résumé carries the detail.
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
  {
    version: null,
    kind: "education",
    title: "Master of Computer Applications",
    org: "Mumbai University",
    start: "2021-12",
    end: "2023-07",
    notes: ["Academic topper, batch 2021–23."],
  },
  {
    version: null,
    kind: "education",
    title: "B.Sc. Computer Science",
    org: "Mumbai University",
    start: "2018-08",
    end: "2021-04",
    notes: [],
  },
];
