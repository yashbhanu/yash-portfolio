import { sections } from "@/content/sections";
import { site } from "@/content/site";
import { getWriting } from "@/lib/writing";

export const dynamic = "force-static";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS 2.0 feed of every post, local and Medium. */
export function GET() {
  const self = new URL("/writing/feed.xml", site.url).toString();
  const items = getWriting()
    .map((post) => {
      const link = new URL(post.href, site.url).toString();
      return `    <item>
      <title>${esc(post.title)}</title>
      <link>${esc(link)}</link>
      <guid isPermaLink="true">${esc(link)}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${esc(post.description)}</description>
${post.tags.map((t) => `      <category>${esc(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${site.name} — ${sections.writing.label}`)}</title>
    <link>${esc(new URL(sections.writing.href, site.url).toString())}</link>
    <description>${esc(sections.writing.caption)}</description>
    <language>en</language>
    <atom:link href="${esc(self)}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
