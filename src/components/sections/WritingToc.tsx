import Link from "next/link";
import { sections } from "@/content/sections";
import { formatDate } from "@/lib/format";
import type { WritingEntry } from "@/lib/writing";
import SectionHead from "@/components/ui/SectionHead";

interface Props {
  entries: WritingEntry[];
  /** Total number of posts, for the "all writing" link when `entries` is a slice. */
  total?: number;
  as?: "h1" | "h2";
}

export default function WritingToc({ entries, total, as }: Props) {
  return (
    <section id={sections.writing.id} aria-labelledby={`${sections.writing.id}-title`} className={`page ${as === "h1" ? "pt-8 md:pt-12" : "pt-section"}`}>
      <SectionHead section={sections.writing} as={as} />

      <ol className="mt-12 md:mt-16">
        {entries.map((post, i) => (
          <li key={post.slug} className="border-t border-rule first:border-ink">
            <Link
              href={post.href}
              {...(post.external && { target: "_blank", rel: "noopener noreferrer" })}
              className="group grid-12 gap-y-2 py-6 focus-visible:outline-offset-[-2px]"
            >
              <span className="mono col-span-4 text-muted md:col-span-1">{String(i + 1).padStart(2, "0")}</span>

              <span className="col-span-4 md:col-span-11 lg:col-span-7">
                <span className="block font-serif text-h3 transition-colors group-hover:text-accent-ink">
                  {post.title}
                  {post.external && (
                    <span className="mono ml-2 align-middle text-muted">
                      <span aria-hidden>↗</span>
                      <span className="sr-only">(on Medium, opens in a new tab)</span>
                    </span>
                  )}
                </span>
                <span className="mt-2 block max-w-measure text-[0.95rem] text-muted">{post.description}</span>
              </span>

              {/* dotted leader + page-style metadata */}
              <span className="col-span-4 flex items-baseline gap-3 md:col-span-11 md:col-start-2 lg:col-span-4 lg:col-start-9">
                <span aria-hidden className="hidden flex-1 border-b border-dotted border-muted lg:block" />
                <span className="mono shrink-0 text-muted">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingMinutes} min
                </span>
              </span>

              <span className="label col-span-4 md:col-span-11 md:col-start-2">{post.tags.join(" / ")}</span>
            </Link>
          </li>
        ))}
      </ol>

      {total !== undefined && total > entries.length && (
        <div className="border-t border-rule pt-4">
          <Link href={sections.writing.href} className="label link text-ink">
            All writing ({total}) →
          </Link>
        </div>
      )}
    </section>
  );
}
