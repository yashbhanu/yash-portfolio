import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getArticles } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => new URL(p, site.url).toString();
  const now = new Date();

  return [
    { url: url("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...["/work", "/about", "/writing", "/contact"].map((p) => ({
      url: url(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...projects.map((p) => ({ url: url(`/work/${p.slug}`), lastModified: now, priority: 0.7 })),
    ...getArticles().map((a) => ({ url: url(a.href), lastModified: new Date(a.date), priority: 0.6 })),
  ];
}
