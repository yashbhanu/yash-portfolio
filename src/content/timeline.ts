import type { TimelineEntry } from "./types";

// Merges v1's Education / Experience tabs into one changelog, newest first.
// v1 only had summary sentences; no roles, companies or dates exist in the repo.
export const timeline: TimelineEntry[] = [
  {
    // TODO(yash): one entry per role: title, company, start/end (YYYY-MM), 2-3 notes each.
    version: null,
    kind: "experience",
    title: "Full Stack Developer",
    org: null,
    start: null,
    end: null,
    notes: [
      // From v1. TODO(yash): "Over 2.5 years" was written in 2024 and is now stale.
      "Over 2.5 years of hands-on experience in developing, and deploying web applications using modern technologies and frameworks, contributing to various successful projects.",
      "Experienced working directly with clients to gather requirements, improving performance & user experience of applications while aligning with client requirements.",
    ],
  },
  {
    // TODO(yash): postgraduate degree name, institute and years.
    version: null,
    kind: "education",
    title: "Postgraduation",
    org: "Mumbai University",
    start: null,
    end: null,
    notes: [
      "Strong focus on software development, data structures, and algorithm design.",
    ],
  },
  {
    // TODO(yash): undergraduate degree name, college and years.
    version: null,
    kind: "education",
    title: "Graduation",
    org: "Mumbai University",
    start: null,
    end: null,
    notes: [
      "Consistently achieved high academic performance and actively participated in various technical and hackathon events, showcasing problem-solving skills and teamwork.",
    ],
  },
];
