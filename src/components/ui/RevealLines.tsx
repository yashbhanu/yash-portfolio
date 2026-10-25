"use client";

import * as m from "motion/react-m";

interface Props {
  lines: string[];
  /** Set the final line in italic, the house style for section heads. */
  italicLast?: boolean;
}

/**
 * Staggered line reveal for headings. The visible lines are aria-hidden; the
 * accessible name is the joined text so screen readers hear one phrase.
 * Under prefers-reduced-motion, globals.css pins [data-reveal] in place.
 */
export default function RevealLines({ lines, italicLast }: Props) {
  return (
    <>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden className="block">
        {lines.map((line, i) => (
          <span key={i} className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
            <m.span
              data-reveal
              className={`block ${italicLast && i === lines.length - 1 && lines.length > 1 ? "italic" : ""}`}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
            >
              {line}
            </m.span>
          </span>
        ))}
      </span>
    </>
  );
}
