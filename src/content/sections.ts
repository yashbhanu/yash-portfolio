// Section metadata and editorial copy that frames the content. Components read
// headings and microcopy from here so wording lives in one place.

export interface SectionMeta {
  id: string;
  number: string;
  label: string;
  href: string;
  /** Heading, one entry per typeset line. */
  title: string[];
  /** Mono caption set in the margin. */
  caption: string;
}

export const sections = {
  work: {
    id: "work",
    number: "01",
    label: "Selected Work",
    href: "/work",
    title: ["Selected", "work"],
    caption: "index of shipped projects, newest first",
  },
  about: {
    id: "about",
    number: "02",
    label: "About",
    href: "/about",
    title: ["About"],
    caption: "bio + spec sheet",
  },
  timeline: {
    id: "timeline",
    number: "03",
    label: "Changelog",
    href: "/about#timeline",
    title: ["Changelog"],
    caption: "education and experience, as release notes",
  },
  writing: {
    id: "writing",
    number: "04",
    label: "Writing",
    href: "/writing",
    title: ["Writing"],
    caption: "technical articles on the web platform and backend",
  },
  contact: {
    id: "contact",
    number: "05",
    label: "Contact",
    href: "/contact",
    title: ["Contact"],
    caption: "the fastest route is email",
  },
} satisfies Record<string, SectionMeta>;

/** Slash-style primary navigation. */
export const nav = [
  { label: "work", href: "/work" },
  { label: "about", href: "/about" },
  { label: "writing", href: "/writing" },
  { label: "contact", href: "/contact" },
];

export const contactCopy = {
  // TODO(yash): closing statement in your own voice. v1 said: "Feel free to reach
  // out for any queries or opportunities by dropping an email."
  statement: ["Have something", "worth building?", "Let’s talk."],
  lede: "Feel free to reach out for any queries or opportunities by dropping an email.",
};

export const colophon = {
  type: [
    { name: "Instrument Serif", role: "display" },
    { name: "Instrument Sans", role: "text" },
    { name: "JetBrains Mono", role: "metadata" },
  ],
  stack: ["Next.js 14 (App Router)", "TypeScript", "Tailwind CSS", "Motion", "MDX + Shiki", "Vercel"],
  version: "v2.0",
};
