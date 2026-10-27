import "server-only";
import { site } from "@/content/site";
import { getWriting } from "./writing";

export interface LatestPost {
  title: string;
  href: string;
  date: string;
  external: boolean;
}

const decode = (s: string) =>
  s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

/** Newest item in the Medium RSS feed; null on any failure. */
async function fromMedium(): Promise<LatestPost | null> {
  try {
    const res = await fetch(site.mediumFeed, {
      next: { revalidate: 60 * 60 * 24 },
      signal: AbortSignal.timeout(4000),
    });
    if (!res.ok) return null;
    const item = (await res.text()).match(/<item>([\s\S]*?)<\/item>/)?.[1];
    if (!item) return null;
    const pick = (tag: string) => item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))?.[1];
    const title = pick("title");
    const link = pick("link");
    const pubDate = pick("pubDate");
    if (!title || !link || !pubDate) return null;
    return {
      title: decode(title),
      href: decode(link).split("?")[0],
      date: new Date(pubDate).toISOString().slice(0, 10),
      external: true,
    };
  } catch {
    return null;
  }
}

/**
 * Latest post for the masthead status bar: whichever is newer of the Medium feed
 * (refreshed daily) and the content layer, which is also the offline fallback.
 */
export async function getLatestPost(): Promise<LatestPost> {
  const [local] = getWriting();
  const remote = await fromMedium();
  if (remote && remote.date > local.date) return remote;
  return { title: local.title, href: local.href, date: local.date, external: local.external };
}
