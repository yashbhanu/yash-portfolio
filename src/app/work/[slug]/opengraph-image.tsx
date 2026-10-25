import { getProject, projects } from "@/content/projects";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Case study";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)!;
  return renderOg({
    kicker: `Case study ${project.index}`,
    title: project.name,
    meta: project.stack.join(" · "),
  });
}
