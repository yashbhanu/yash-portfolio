import Link from "next/link";
import { colophon } from "@/content/sections";
import { site } from "@/content/site";
import type { LatestPost } from "@/lib/latest-post";
import StatusBar from "./StatusBar";

export default function Masthead({ latest }: { latest: LatestPost }) {
  const [first, ...rest] = site.name.split(" ");

  return (
    <section aria-labelledby="masthead-title" className="grain border-b border-rule">
      <div className="page pb-6 pt-6 md:pt-10">
        <div className="label grid grid-cols-2 gap-x-gutter md:grid-cols-3">
          <span>Portfolio — {colophon.version.replace("v", "Vol. ")}</span>
          <span className="hidden text-center md:block">{site.role}</span>
          <span className="text-right">{site.location.country}</span>
        </div>

        {/* newspaper double rule */}
        <div aria-hidden className="mt-3 h-[3px] bg-ink" />
        <div aria-hidden className="mt-[3px] h-px bg-ink" />

        <div className="blueprint">
        <h1
          id="masthead-title"
          className="py-[0.06em] font-serif text-[clamp(4.5rem,23vw,9rem)] leading-[0.84] tracking-[-0.035em] md:whitespace-nowrap md:text-center md:text-[min(15.4vw,15.5rem)]"
        >
          <span className="block md:inline">{first}</span>{" "}
          <span className="block italic md:inline">{rest.join(" ")}</span>
        </h1>
        </div>

        <div aria-hidden className="h-px bg-ink" />
        <div aria-hidden className="mt-[3px] h-[3px] bg-ink" />

        <div className="grid-12 gap-y-6 py-8 md:py-12">
          <p className="col-span-4 font-serif text-h3 md:col-span-8 lg:col-span-7">{site.positioning}</p>
          <div className="col-span-4 flex flex-wrap items-end gap-3 md:col-span-4 md:col-start-9 md:justify-end lg:col-span-5 lg:col-start-8">
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-3 bg-ink px-5 text-paper transition-colors hover:bg-accent hover:text-[var(--on-accent)]"
            >
              <span className="label text-current">Résumé</span>
              <span aria-hidden className="mono transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link
              href="#work"
              className="label inline-flex h-12 items-center gap-3 border border-ink px-5 text-ink transition-colors hover:border-accent hover:text-accent-ink"
            >
              Selected work <span aria-hidden>↓</span>
            </Link>
          </div>
        </div>

        <StatusBar latest={latest} />
      </div>
    </section>
  );
}
