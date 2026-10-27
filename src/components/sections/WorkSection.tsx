import { projects } from "@/content/projects";
import { sections } from "@/content/sections";
import SectionHead from "@/components/ui/SectionHead";
import WorkIndex, { type WorkRow } from "./WorkIndex";

// Only the fields the index renders cross the client boundary.
const rows: WorkRow[] = projects.map(({ slug, index, name, summary, stack, image, links }) => ({
  slug,
  index,
  name,
  summary,
  stack,
  image,
  links,
}));

export default function WorkSection({ as }: { as?: "h1" | "h2" }) {
  return (
    <section id={sections.work.id} aria-labelledby={`${sections.work.id}-title`} className={`page ${as === "h1" ? "pt-8 md:pt-12" : "pt-section"}`}>
      <SectionHead section={sections.work} as={as} />
      <div className="mt-12 md:mt-16">
        <WorkIndex projects={rows} />
      </div>
    </section>
  );
}
