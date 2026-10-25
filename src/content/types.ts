// Shared types for the content layer. Components import data from
// `@/content/*` and never hardcode copy, links or facts.

export type SocialId = "github" | "linkedin" | "medium" | "email";

export interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  handle: string;
}

export interface Site {
  /** Current employer, for structured data. */
  worksFor: string | null;
  education: string[];
  name: string;
  shortName: string;
  role: string;
  /** One-line positioning statement for the masthead. */
  positioning: string;
  /** Legacy v1 meta description, kept for SEO continuity. */
  description: string;
  url: string;
  location: { city: string; country: string; timeZone: string; tzLabel: string };
  /** Shown in the masthead status bar. `null` = not yet provided. */
  availability: string | null;
  currentRole: string | null;
  email: string;
  resumeUrl: string;
  /** Public RSS feed used for the masthead's latest-post line. */
  mediumFeed: string;
  socials: SocialLink[];
}

export type StackLayer = "language" | "frontend" | "backend" | "ai" | "data" | "infra";

export interface StackGroup {
  layer: StackLayer;
  label: string;
  items: string[];
}

export interface About {
  /** Paragraphs set in large editorial type. */
  bio: string[];
  stack: StackGroup[];
}

export type TimelineKind = "education" | "experience";

export interface TimelineEntry {
  /** Release-note style tag, e.g. "v2024.1". `null` until dates are known. */
  version: string | null;
  kind: TimelineKind;
  title: string;
  org: string | null;
  start: string | null;
  end: string | null;
  notes: string[];
}

/** A node in a project's architecture schematic. */
export interface ArchNode {
  id: string;
  label: string;
  /** Small mono caption under the label, e.g. "Next.js · Vercel". */
  detail?: string;
  tier: "client" | "edge" | "service" | "data" | "external";
}

export interface ArchEdge {
  from: string;
  to: string;
  label?: string;
  /** Bidirectional/persistent channel, e.g. a websocket. */
  duplex?: boolean;
}

export interface Architecture {
  caption: string;
  nodes: ArchNode[];
  edges: ArchEdge[];
  /** True when derived from the tech list rather than confirmed by Yash. */
  inferred: boolean;
}

export interface Decision {
  title: string;
  body: string;
}

export interface Project {
  slug: string;
  index: string;
  name: string;
  summary: string;
  year: string | null;
  role: string | null;
  stack: string[];
  image: { src: string; alt: string };
  links: { github?: string; live?: string; extra?: { label: string; href: string }[] };
  problem: string | null;
  architecture: Architecture;
  decisions: Decision[];
  screenshots: { src: string; alt: string; caption?: string }[];
  metrics: { label: string; value: string }[];
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  /** ISO date from the Medium RSS feed. */
  publishedAt: string;
  readingMinutes: number;
  href: string;
  coverImage: string;
  platform: "medium";
}
