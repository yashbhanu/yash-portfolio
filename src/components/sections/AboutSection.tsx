import { about } from "@/content/about";
import { sections } from "@/content/sections";
import { site } from "@/content/site";
import SectionHead from "@/components/ui/SectionHead";

export default function AboutSection({ as }: { as?: "h1" | "h2" }) {
  const { location } = site;

  return (
    <section id={sections.about.id} aria-labelledby={`${sections.about.id}-title`} className={`page ${as === "h1" ? "pt-8 md:pt-12" : "pt-section"}`}>
      <SectionHead section={sections.about} as={as} />

      <div className="grid-12 mt-12 gap-y-14 md:mt-16">
        <div className="col-span-4 space-y-6 md:col-span-9 md:col-start-4 lg:col-span-6 lg:col-start-4">
          {about.bio.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-serif text-h3 first-letter:float-left first-letter:mr-3 first-letter:mt-[0.06em] first-letter:font-serif first-letter:text-[3.4em] first-letter:leading-[0.8] first-letter:text-accent-ink"
                  : "text-lead text-muted"
              }
            >
              {para}
            </p>
          ))}
        </div>

        <aside aria-label="Spec sheet" className="col-span-4 md:col-span-9 md:col-start-4 lg:col-span-3 lg:col-start-10">
          <div className="border border-ink">
            <p className="label flex justify-between border-b border-ink bg-ink px-3 py-2 text-paper">
              <span>Spec sheet</span>
              <span>rev. {new Date().getFullYear()}</span>
            </p>
            <dl className="divide-y divide-rule">
              {about.stack.map((group) => (
                <div key={group.layer} className="grid grid-cols-[6.5rem_1fr] gap-3 px-3 py-3">
                  <dt className="label pt-[0.15em]">{group.label}</dt>
                  <dd className="text-[0.95rem] leading-snug">{group.items.join(", ")}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[6.5rem_1fr] gap-3 px-3 py-3">
                <dt className="label pt-[0.15em]">Based in</dt>
                <dd className="text-[0.95rem] leading-snug">
                  {location.city}, {location.country} ({location.tzLabel})
                </dd>
              </div>
            </dl>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label flex justify-between border-t border-ink px-3 py-2 text-ink transition-colors hover:bg-accent hover:text-[var(--on-accent)]"
            >
              <span>Full résumé</span>
              <span aria-hidden>↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="label mt-2">fig. 02 — stack, grouped by layer</p>
        </aside>
      </div>
    </section>
  );
}
