import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { posts as mediumPosts } from "@/content/posts";
import { readingMinutes } from "./format";

const DIR = path.join(process.cwd(), "src/content/writing");

export interface ArticleFrontmatter {
  title: string;
  description: string;
  /** YYYY-MM-DD */
  date: string;
  tags?: string[];
  /** Drafts render in `next dev` only. */
  draft?: boolean;
}

export interface WritingEntry {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  href: string;
  external: boolean;
  source: "medium" | "site";
}

export interface Article extends WritingEntry {
  body: string;
}

const showDrafts = process.env.NODE_ENV !== "production";

/** Local MDX articles in src/content/writing (files starting with "_" are ignored). */
export const getArticles = cache((): Article[] => {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx") && !f.startsWith("_"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(DIR, file), "utf8"));
      const fm = data as ArticleFrontmatter;
      return {
        fm,
        article: {
          slug,
          title: fm.title,
          description: fm.description,
          date: String(fm.date),
          readingMinutes: readingMinutes(content),
          tags: fm.tags ?? [],
          href: `/writing/${slug}`,
          external: false,
          source: "site" as const,
          body: content,
        },
      };
    })
    .filter(({ fm }) => showDrafts || !fm.draft)
    .map(({ article }) => article);
});

export const getArticle = (slug: string) => getArticles().find((a) => a.slug === slug);

/** Every post, local and Medium, newest first. */
export const getWriting = cache((): WritingEntry[] => {
  const local: WritingEntry[] = getArticles().map(({ body: _body, ...entry }) => entry);
  const medium: WritingEntry[] = mediumPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.publishedAt,
    readingMinutes: p.readingMinutes,
    tags: p.tags,
    href: p.href,
    external: true,
    source: "medium",
  }));
  return [...local, ...medium].sort((a, b) => b.date.localeCompare(a.date));
});
