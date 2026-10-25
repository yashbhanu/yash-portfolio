import { contactCopy, sections } from "@/content/sections";
import { site } from "@/content/site";
import CopyEmail from "@/components/ui/CopyEmail";
import RevealLines from "@/components/ui/RevealLines";

export default function ContactSection({ as: Tag = "h2" }: { as?: "h1" | "h2" }) {
  const socials = site.socials.filter((s) => s.id !== "email");

  return (
    <section id={sections.contact.id} aria-labelledby="contact-title" className={`grain border-t border-ink pb-section ${Tag === "h1" ? "mt-8 md:mt-12" : "mt-section"}`}>
      <div className="page pt-3">
        <div className="grid-12">
          <p className="label col-span-2 md:col-span-3">
            <span className="text-accent-ink">§{sections.contact.number}</span>
            <span className="ml-3">{sections.contact.label}</span>
          </p>
          <p className="label col-span-2 text-right md:col-span-9 md:text-left">{sections.contact.caption}</p>
        </div>

        <Tag
          id="contact-title"
          className="mt-12 font-serif text-[clamp(3.2rem,1.4rem+8.2vw,11rem)] leading-[0.88] tracking-[-0.03em] md:mt-20"
        >
          <RevealLines lines={contactCopy.statement} italicLast />
        </Tag>

        <div className="grid-12 mt-14 gap-y-12 md:mt-20">
          <div className="col-span-4 md:col-span-7">
            <p className="max-w-measure text-lead text-muted">{contactCopy.lede}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-rule py-4">
              <a
                href={`mailto:${site.email}`}
                className="min-w-0 break-all font-serif text-h3 transition-colors hover:text-accent-ink sm:break-normal"
              >
                {site.email}
              </a>
              <CopyEmail email={site.email} />
            </div>
          </div>

          <nav aria-label="Elsewhere" className="col-span-4 md:col-span-4 md:col-start-9">
            <ul className="border-t border-ink">
              {socials.map((s) => (
                <li key={s.id} className="border-b border-rule">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-3"
                  >
                    <span className="transition-colors group-hover:text-accent-ink">{s.label}</span>
                    <span className="mono truncate text-muted">
                      {s.handle} <span aria-hidden>↗</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="border-b border-rule">
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-3"
                >
                  <span className="transition-colors group-hover:text-accent-ink">Résumé</span>
                  <span className="mono text-muted">
                    pdf <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
