import type { ReactNode } from "react";

interface Props {
  mark: string;
  title: string;
  /** Let the body run the full measure (figures) instead of the text column. */
  wide?: boolean;
  children: ReactNode;
}

export default function CaseSection({ mark, title, wide, children }: Props) {
  return (
    <section className="page mt-section">
      <div className="grid-12 gap-y-6 border-t border-ink pt-3">
        <h2 className="col-span-4 md:col-span-3">
          <span className="label">
            <span className="text-accent-ink">§{mark}</span>
            <span className="ml-3">{title}</span>
          </span>
        </h2>
        <div className={wide ? "col-span-4 md:col-span-12 md:mt-6" : "col-span-4 md:col-span-8 lg:col-span-7"}>{children}</div>
      </div>
    </section>
  );
}
