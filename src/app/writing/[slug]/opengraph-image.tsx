import { formatDate } from "@/lib/format";
import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { getArticle, getArticles } from "@/lib/writing";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Article";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug)!;
  return renderOg({
    kicker: "Writing",
    title: article.title,
    meta: `${formatDate(article.date)} · ${article.readingMinutes} min read`,
  });
}
