import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode, { type Options as PrettyCodeOptions } from "rehype-pretty-code";
import { site } from "@/content/site";
import { formatDate } from "@/lib/format";
import { getArticle, getArticles } from "@/lib/writing";
import { mdxComponents } from "@/components/writing/mdx-components";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.href },
    openGraph: {
      type: "article",
      url: article.href,
      publishedTime: article.date,
      authors: [site.name],
      tags: article.tags,
    },
  };
}

const prettyCode: PrettyCodeOptions = {
  theme: { light: "vitesse-light", dark: "vitesse-dark" },
  keepBackground: false,
  defaultLang: "plaintext",
};

export default async function ArticlePage({ params }: Params) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const { content } = await compileMDX({
    source: article.body,
    components: mdxComponents,
    options: { mdxOptions: { rehypePlugins: [[rehypePrettyCode, prettyCode]] } },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Person", name: site.name, url: site.url },
    url: new URL(article.href, site.url).toString(),
    keywords: article.tags.join(", "),
  };

  return (
    <article className="page pb-section pt-8 md:pt-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header>
        <div className="label flex justify-between gap-4 border-b border-ink pb-3">
          <nav aria-label="Breadcrumb">
            <Link href="/writing" className="link">
              /writing
            </Link>
          </nav>
          <span>
            <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingMinutes} min read
          </span>
        </div>
        <div className="grid-12 mt-8 md:mt-14">
          <h1 className="col-span-4 font-serif text-h1 tracking-[-0.02em] md:col-span-10 md:col-start-3 lg:col-span-8 lg:col-start-3">
            {article.title}
          </h1>
          <p className="col-span-4 mt-6 font-serif text-h3 text-muted md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-3">
            {article.description}
          </p>
          {article.tags.length > 0 && (
            <p className="label col-span-4 mt-6 md:col-span-8 md:col-start-3">{article.tags.join(" / ")}</p>
          )}
        </div>
      </header>

      <div className="grid-12 mt-12 border-t border-rule pt-10 md:mt-16">
        <div className="prose-article col-span-4 md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-3">{content}</div>
      </div>

      <footer className="grid-12 mt-section">
        <div className="col-span-4 flex justify-between border-t border-ink pt-4 md:col-span-8 md:col-start-3 lg:col-span-7 lg:col-start-3">
          <Link href="/writing" className="label link text-ink">
            ← All writing
          </Link>
          <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Re: ${article.title}`)}`} className="label link text-ink">
            Reply by email
          </a>
        </div>
      </footer>
    </article>
  );
}
