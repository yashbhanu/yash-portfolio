"use client";

import { AnimatePresence, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import type { Project } from "@/content/types";

export type WorkRow = Pick<Project, "slug" | "index" | "name" | "summary" | "stack" | "image" | "links">;

const PREVIEW_W = 360;
const PREVIEW_H = 240;

export default function WorkIndex({ projects }: { projects: WorkRow[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const baseId = useId();

  // Cursor-following preview (fine pointers only; hidden below md).
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 260, damping: 28, mass: 0.6 };
  const sx = useSpring(x, reduce ? { duration: 0 } : spring);
  const sy = useSpring(y, reduce ? { duration: 0 } : spring);

  const place = (clientX: number, clientY: number) => {
    x.set(Math.min(clientX + 24, window.innerWidth - PREVIEW_W - 16));
    y.set(Math.max(16, Math.min(clientY - PREVIEW_H / 2, window.innerHeight - PREVIEW_H - 16)));
  };

  // Keyboard focus: anchor the preview to the right edge of the focused row.
  const placeForRow = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    x.jump(Math.min(r.right - PREVIEW_W - 24, window.innerWidth - PREVIEW_W - 16));
    y.jump(Math.max(16, r.top + r.height / 2 - PREVIEW_H / 2));
    sx.jump(x.get());
    sy.jump(y.get());
  };

  return (
    <div className="relative">
      {/* column heads */}
      <div aria-hidden className="label grid-12 hidden border-b border-rule pb-2 md:grid">
        <span className="col-span-1">No.</span>
        <span className="col-span-6">Project</span>
        <span className="col-span-5">Stack</span>
      </div>

      <ol
        className="group/list"
        onPointerMove={(e) => e.pointerType === "mouse" && place(e.clientX, e.clientY)}
        onPointerLeave={() => setActive(null)}
      >
        {projects.map((p) => {
          const isActive = active === p.slug;
          const isOpen = expanded === p.slug;
          const panelId = `${baseId}-${p.slug}`;
          const dim = active !== null && !isActive;

          return (
            <li key={p.slug} className="border-b border-rule">
              {/* desktop: whole row links to the case study */}
              <Link
                href={`/work/${p.slug}`}
                className={`grid-12 hidden items-baseline py-6 transition-opacity duration-300 focus-visible:outline-offset-[-2px] md:grid lg:py-8 ${
                  dim ? "opacity-35" : "opacity-100"
                }`}
                onPointerEnter={(e) => {
                  if (e.pointerType !== "mouse") return;
                  sx.jump(x.get());
                  sy.jump(y.get());
                  setActive(p.slug);
                }}
                onFocus={(e) => {
                  placeForRow(e.currentTarget);
                  setActive(p.slug);
                }}
                onBlur={() => setActive(null)}
              >
                <span className="mono col-span-1 text-muted">{p.index}</span>
                <span className="col-span-6 flex items-baseline gap-4">
                  <span
                    className={`font-serif text-h1 tracking-[-0.02em] transition-transform duration-500 ease-out ${
                      isActive ? "translate-x-3 italic" : ""
                    }`}
                  >
                    {p.name}
                  </span>
                </span>
                <span className="mono col-span-5 flex justify-between gap-4 text-muted">
                  <span>{p.stack.join(" · ")}</span>
                  <span
                    aria-hidden
                    className={`text-ink transition-all duration-300 ${isActive ? "translate-x-0 text-accent-ink opacity-100" : "-translate-x-2 opacity-0"}`}
                  >
                    →
                  </span>
                </span>
              </Link>

              {/* mobile: tap to expand */}
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setExpanded(isOpen ? null : p.slug)}
                className="flex w-full items-start gap-4 py-5 text-left md:hidden"
              >
                <span className="mono pt-2 text-muted">{p.index}</span>
                <span className="flex-1">
                  <span className={`block font-serif text-h2 leading-none ${isOpen ? "italic" : ""}`}>{p.name}</span>
                  <span className="mono mt-2 block text-muted">
                    {p.stack.slice(0, 2).join(" · ")}
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`mono pt-2 text-lead leading-none transition-transform duration-300 ${isOpen ? "rotate-45 text-accent-ink" : ""}`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    id={panelId}
                    key="panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden md:hidden"
                  >
                    <div className="space-y-4 pb-6">
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        width={720}
                        height={480}
                        sizes="100vw"
                        className="aspect-[3/2] w-full border border-rule object-cover"
                      />
                      <p className="text-muted">{p.summary}</p>
                      <p className="mono text-muted">{p.stack.join(" · ")}</p>
                      <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <Link href={`/work/${p.slug}`} className="label link text-ink">
                          Case study →
                        </Link>
                        {p.links.live && (
                          <a href={p.links.live} target="_blank" rel="noopener noreferrer" className="label link text-ink">
                            Live ↗
                          </a>
                        )}
                        {p.links.github && (
                          <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="label link text-ink">
                            Code ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>

      {/* floating preview: decorative, the row link carries the name */}
      <m.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
        style={{ x: sx, y: sy, width: PREVIEW_W, height: PREVIEW_H }}
      >
        <m.div
          className="relative h-full w-full overflow-hidden border border-ink bg-paper-2 shadow-[8px_8px_0_0_var(--rule)]"
          initial={false}
          animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.92 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {projects.map((p) => (
            <Image
              key={p.slug}
              src={p.image.src}
              alt=""
              fill
              sizes={`${PREVIEW_W}px`}
              className={`object-cover transition-opacity duration-300 ${active === p.slug ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <span className="label absolute bottom-0 left-0 bg-ink px-2 py-1 text-paper">
            fig. {projects.find((p) => p.slug === active)?.index ?? "00"}
          </span>
        </m.div>
      </m.div>
    </div>
  );
}
