import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/content/projects";
import { openGraph } from "@/lib/metadata";
import DevTodo from "@/components/ui/DevTodo";
import Schematic from "@/components/project/Schematic";
import CaseSection from "@/components/project/CaseSection";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — case study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: openGraph(`/work/${project.slug}`, { type: "article" }, false),
  };
}

export default function CaseStudyPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const i = projects.indexOf(project);
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const { links } = project;

  const meta: { k: string; v: React.ReactNode }[] = [
    { k: "Stack", v: project.stack.join(", ") },
  ];

  let fig = 0;
  const nextFig = () => String(++fig).padStart(2, "0");
  let mark = 0;
  const nextMark = () => String.fromCharCode(65 + mark++);
  // Empty sections show a TODO in dev and are omitted from production builds.
  const dev = process.env.NODE_ENV !== "production";

  return (
    <article className="pb-section">
      <header className="page pt-8 md:pt-12">
        <div className="label flex justify-between gap-4 border-b border-ink pb-3">
          <nav aria-label="Breadcrumb">
            <Link href="/work" className="link">
              /work
            </Link>
            <span aria-hidden> / </span>
            <span aria-current="page" className="text-ink">
              {project.slug}
            </span>
          </nav>
          <span>
            Case study {project.index} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="mt-6 font-serif text-[clamp(4rem,1rem+14vw,13rem)] leading-[0.86] tracking-[-0.035em] md:mt-10">
          {project.name}
        </h1>

        <div className="grid-12 mt-10 gap-y-10 border-t border-rule pt-8 md:mt-14">
          <p className="col-span-4 font-serif text-h3 md:col-span-7">{project.summary}</p>
          <dl className="col-span-4 divide-y divide-rule border-y border-rule md:col-span-4 md:col-start-9">
            {meta.map(({ k, v }) => (
              <div key={k} className="grid grid-cols-[5rem_1fr] gap-3 py-2.5">
                <dt className="label pt-[0.1em]">{k}</dt>
                <dd className="text-[0.95rem]">{v}</dd>
              </div>
            ))}
            {(links.live || links.github || links.extra?.length) && (
              <div className="grid grid-cols-[5rem_1fr] gap-3 py-2.5">
                <dt className="label pt-[0.1em]">Links</dt>
                <dd className="flex flex-wrap gap-x-4 gap-y-1 text-[0.95rem]">
                  {links.live && (
                    <a href={links.live} target="_blank" rel="noopener noreferrer" className="link">
                      Live site ↗
                    </a>
                  )}
                  {links.github && (
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="link">
                      Source ↗
                    </a>
                  )}
                  {links.extra?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link">
                      {l.label} ↗
                    </a>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <figure className="page mt-6 md:mt-10">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          priority
          sizes="(min-width: 1600px) 1500px, 100vw"
          className="h-auto w-full border border-ink"
        />
        <figcaption className="label mt-2">
          fig. {nextFig()} — {project.image.alt}
        </figcaption>
      </figure>

      {(project.problem || dev) && (
        <CaseSection mark={nextMark()} title="Problem">
          {project.problem ? (
            <p className="font-serif text-h3">{project.problem}</p>
          ) : (
            <DevTodo>problem statement for {project.name} (content/projects.ts → problem)</DevTodo>
          )}
        </CaseSection>
      )}

      <CaseSection mark={nextMark()} title="Architecture" wide>
        <Schematic arch={project.architecture} figure={nextFig()} />
        {project.architecture.inferred && (
          <DevTodo>this schematic was inferred from the stack list; confirm or correct it</DevTodo>
        )}
      </CaseSection>

      {project.metrics.length > 0 && (
        <CaseSection mark={nextMark()} title="Outcomes">
          <dl className="grid grid-cols-2 gap-gutter md:grid-cols-3">
            {project.metrics.map((mt) => (
              <div key={mt.label} className="border-t border-ink pt-3">
                <dd className="font-serif text-h1">{mt.value}</dd>
                <dt className="label mt-1">{mt.label}</dt>
              </div>
            ))}
          </dl>
        </CaseSection>
      )}

      {project.screenshots.length > 0 && (
        <CaseSection mark={nextMark()} title="Screens" wide>
          <div className="grid gap-gutter md:grid-cols-2">
            {project.screenshots.map((s) => (
              <figure key={s.src}>
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={s.width}
                  height={s.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full border border-rule"
                />
                <figcaption className="label mt-2">
                  fig. {nextFig()} — {s.caption ?? s.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </CaseSection>
      )}

      <nav aria-label="More projects" className="page mt-section">
        <div className="grid grid-cols-2 border-t border-ink">
          <Link href={`/work/${prev.slug}`} className="group border-r border-rule py-6 pr-4">
            <span className="label">← Previous</span>
            <span className="mt-2 block font-serif text-h2 transition-colors group-hover:text-accent-ink">{prev.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="group py-6 pl-4 text-right">
            <span className="label">Next →</span>
            <span className="mt-2 block font-serif text-h2 transition-colors group-hover:text-accent-ink">{next.name}</span>
          </Link>
        </div>
      </nav>
    </article>
  );
}
