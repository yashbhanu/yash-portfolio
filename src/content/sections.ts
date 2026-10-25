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
  /** Past versions of the site, newest first. */
  editions: [
    { label: "Vol. 2", note: "current", href: null },
    {
      label: "Vol. 1",
      note: "2024–2026, archived",
      href: "https://web.archive.org/web/20260223050105/https://yash-bhanushali.vercel.app/",
    },
  ],
};

/** Two-key "g then x" navigation plus single-key actions; `?` opens the sheet. */
export const shortcuts = {
  goto: [
    { keys: "g h", label: "Front page", href: "/" },
    { keys: "g w", label: "Work", href: "/work" },
    { keys: "g a", label: "About", href: "/about" },
    { keys: "g r", label: "Writing (read)", href: "/writing" },
    { keys: "g c", label: "Contact", href: "/contact" },
  ],
  actions: [
    { keys: "⌘ K", label: "Command palette" },
    { keys: "t", label: "Toggle theme" },
    { keys: "?", label: "This sheet" },
  ],
};
