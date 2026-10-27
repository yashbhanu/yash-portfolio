import Link from "next/link";
import { colophon } from "@/content/sections";
import { site } from "@/content/site";

// Vercel exposes the commit at build time; absent locally, which is fine.
// const sha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7);

export default function Colophon() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink">
      <div className="page grid-12 gap-y-8 py-10">
        <p className="label col-span-full">
          <span className="text-accent-ink">§</span> Colophon
        </p>

        <div className="col-span-4 md:col-span-6">
          <p className="label mb-2">Built with</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-[0.95rem]">
            {colophon.stack.map((item, i) => (
              <li key={item}>
                {item}
                {i < colophon.stack.length - 1 && <span aria-hidden className="ml-3 text-muted">·</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 flex flex-col justify-between gap-4 md:col-span-6 md:items-end md:text-right">
          <div className="space-y-1">
            <p className="mono text-muted">
              {colophon.version}
              {/* {sha && <> · {sha}</>} */} · © {year} {site.name}
            </p>
            <a href={site.sourceRepo} target="_blank" rel="noopener noreferrer" className="label link block">
              View source ↗
            </a>
            <p className="label hidden md:block">
              Press <kbd className="border border-rule px-1 text-ink">?</kbd> for shortcuts
            </p>
          </div>
          <Link href="#top" className="label link">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
