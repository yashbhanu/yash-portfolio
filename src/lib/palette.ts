import "server-only";
import { projects } from "@/content/projects";
import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { OPEN_SHORTCUTS_EVENT } from "./events";
import { getWriting } from "./writing";

export type PaletteAction =
  | { type: "link"; href: string; external?: boolean }
  | { type: "theme" }
  | { type: "event"; name: string }
  | { type: "copy"; value: string; message: string };

export interface PaletteItem {
  id: string;
  group: "Go to" | "Work" | "Writing" | "Actions" | "Elsewhere";
  label: string;
  hint?: string;
  keywords?: string[];
  action: PaletteAction;
}

export function getPaletteItems(): PaletteItem[] {
  const goTo: PaletteItem[] = [
    { id: "home", group: "Go to", label: "Home", hint: "/", action: { type: "link", href: "/" } },
    ...Object.values(sections).map((s) => ({
      id: `section-${s.id}`,
      group: "Go to" as const,
      label: s.label,
      hint: `§${s.number}`,
      action: { type: "link" as const, href: s.href },
    })),
  ];

  const work: PaletteItem[] = projects.map((p) => ({
    id: `work-${p.slug}`,
    group: "Work",
    label: p.name,
    hint: p.index,
    keywords: p.stack,
    action: { type: "link", href: `/work/${p.slug}` },
  }));

  const writing: PaletteItem[] = getWriting().map((w) => ({
    id: `post-${w.slug}`,
    group: "Writing",
    label: w.title,
    hint: w.external ? "medium ↗" : `${w.readingMinutes} min`,
    keywords: w.tags,
    action: { type: "link", href: w.href, external: w.external },
  }));

  const actions: PaletteItem[] = [
    { id: "theme", group: "Actions", label: "Toggle theme", hint: "light / dark", action: { type: "theme" } },
    {
      id: "copy-email",
      group: "Actions",
      label: "Copy email address",
      hint: site.email,
      action: { type: "copy", value: site.email, message: "Email copied" },
    },
    {
      id: "resume",
      group: "Actions",
      label: "Open résumé",
      hint: "pdf ↗",
      keywords: ["cv", "resume"],
      action: { type: "link", href: site.resumeUrl, external: true },
    },
    {
      id: "shortcuts",
      group: "Actions",
      label: "Keyboard shortcuts",
      hint: "?",
      action: { type: "event", name: OPEN_SHORTCUTS_EVENT },
    },
  ];

  const elsewhere: PaletteItem[] = site.socials
    .filter((s) => s.id !== "email")
    .map((s) => ({
      id: `social-${s.id}`,
      group: "Elsewhere",
      label: s.label,
      hint: `${s.handle} ↗`,
      action: { type: "link", href: s.href, external: true },
    }));

  return [...goTo, ...work, ...writing, ...actions, ...elsewhere];
}
