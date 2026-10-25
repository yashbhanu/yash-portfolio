import Link from "next/link";
import { site } from "@/content/site";
import { formatMonth } from "@/lib/format";
import type { LatestPost } from "@/lib/latest-post";
import LiveClock from "@/components/ui/LiveClock";

function Cell({ k, children, className = "" }: { k: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex min-w-0 items-baseline gap-3 border-rule py-2.5 md:px-4 md:first:pl-0 ${className}`}>
      <dt className="label shrink-0">{k}</dt>
      <dd className="mono min-w-0 text-ink md:truncate">{children}</dd>
    </div>
  );
}

export default function StatusBar({ latest }: { latest: LatestPost }) {
  const { location } = site;

  return (
    <dl
      aria-label="Status"
      className="grid grid-cols-1 divide-y divide-rule border-y border-rule md:grid-cols-[auto_auto_auto_minmax(0,1fr)] md:divide-x md:divide-y-0"
    >
      <Cell k="Status">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {site.currentRole ?? site.role}
          {site.availability && <span className="text-muted"> · {site.availability}</span>}
        </span>
      </Cell>
      <Cell k="Loc">
        {location.city}, {location.country === "India" ? "IN" : location.country}
      </Cell>
      <Cell k="Local">
        <LiveClock timeZone={location.timeZone} label={location.tzLabel} />
      </Cell>
      <Cell k="Latest">
        <time dateTime={latest.date} className="mr-2 text-muted">
          {formatMonth(latest.date.slice(0, 7))}
        </time>
        <Link
          href={latest.href}
          {...(latest.external && { target: "_blank", rel: "noopener noreferrer" })}
          className="link"
        >
          {latest.title}
          {latest.external && <span aria-label="(opens in a new tab)"> ↗</span>}
        </Link>
      </Cell>
    </dl>
  );
}
