import { sections } from "@/content/sections";
import { timeline } from "@/content/timeline";
import { formatMonth, versionTag } from "@/lib/format";
import SectionHead from "@/components/ui/SectionHead";
import DevTodo from "@/components/ui/DevTodo";

const KIND_TAG = { experience: "work", education: "edu" } as const;

export default function Changelog() {
  return (
    <section id={sections.timeline.id} aria-labelledby={`${sections.timeline.id}-title`} className="page pt-section">
      <SectionHead section={sections.timeline} />

      <ol className="mt-12 md:mt-16">
        {timeline.map((entry, i) => {
          const version = entry.version ?? versionTag(entry.start);
          const start = formatMonth(entry.start);
          const end = entry.start ? (formatMonth(entry.end) ?? "present") : null;

          return (
            <li key={i} className="grid-12 relative gap-y-2 border-t border-rule py-8 first:border-ink">
              <div className="col-span-4 flex items-baseline gap-3 md:col-span-3 md:flex-col md:gap-1">
                {(version || process.env.NODE_ENV !== "production") && (
                  <span className="mono text-ink">{version ?? "v—"}</span>
                )}
                <span className="label">
                  [{KIND_TAG[entry.kind]}]{start && <> · {start} — {end}</>}
                </span>
              </div>

              <div className="col-span-4 md:col-span-8 md:col-start-4 lg:col-span-6 lg:col-start-4">
                <h3 className="font-serif text-h3">
                  {entry.title}
                  {entry.org && <span className="italic text-muted"> — {entry.org}</span>}
                </h3>
                {entry.notes.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {entry.notes.map((note, j) => (
                      <li key={j} className="flex gap-3 text-muted">
                        <span aria-hidden className="mono pt-[0.2em] text-accent-ink">
                          +
                        </span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {(!entry.start || (entry.kind === "experience" && !entry.org)) && (
                  <DevTodo>dates{entry.kind === "experience" ? ", company" : ", degree"} for “{entry.title}”</DevTodo>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
