import type { SectionMeta } from "@/content/sections";
import RevealLines from "./RevealLines";

interface Props {
  section: SectionMeta;
  /** h1 on standalone pages, h2 on the home page. */
  as?: "h1" | "h2";
  /** Override the section's default heading lines. */
  title?: string[];
}

export default function SectionHead({ section, as: Tag = "h2", title = section.title }: Props) {
  return (
    <header className="grid-12 gap-y-2 border-t border-ink pt-3">
      <p className="label col-span-2 md:col-span-3">
        <span className="text-accent-ink">§{section.number}</span>
        <span className="ml-3">{section.label}</span>
      </p>
      <p className="label col-span-2 text-right md:col-span-9 md:text-left">{section.caption}</p>
      <Tag id={`${section.id}-title`} className="col-span-full mt-6 font-serif text-display tracking-[-0.02em] md:col-span-9 md:col-start-4 md:mt-10">
        <RevealLines lines={title} italicLast />
      </Tag>
    </header>
  );
}
