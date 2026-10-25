"use client";

import { useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import * as m from "motion/react-m";
import { useMemo, useRef } from "react";
import type { Architecture } from "@/content/types";
import { layoutSchematic, type Orientation } from "./schematic-layout";

/**
 * The site's one "wow" moment: the diagram draws itself as it scrolls through
 * the viewport. Nodes trace their outlines first, then each edge runs in turn
 * and drops its arrowhead. Reduced motion renders it fully drawn.
 */

function useRange(progress: MotionValue<number>, from: number, to: number) {
  return useTransform(progress, [from, to], [0, 1], { clamp: true });
}

function DrawPath({ d, progress, from, to, className }: { d: string; progress: MotionValue<number>; from: number; to: number; className: string }) {
  const len = useRange(progress, from, to);
  return <m.path d={d} className={className} fill="none" style={{ pathLength: len }} />;
}

function FadeIn({ progress, at, children }: { progress: MotionValue<number>; at: number; children: React.ReactNode }) {
  const opacity = useRange(progress, at, at + 0.06);
  return <m.g style={{ opacity }}>{children}</m.g>;
}

function Diagram({ arch, orientation, progress }: { arch: Architecture; orientation: Orientation; progress: MotionValue<number> }) {
  const layout = useMemo(() => layoutSchematic(arch, orientation), [arch, orientation]);
  const { nodes, edges } = layout;

  // Timeline (0→1): nodes 0–0.3, edges staggered across 0.25–0.95.
  const edgeSpan = 0.7 / Math.max(edges.length, 1);

  return (
    <svg
      viewBox={`0 0 ${layout.width} ${layout.height}`}
      className="h-auto w-full"
      style={{ maxWidth: layout.width }}
      aria-hidden
    >
      {nodes.map((n, i) => {
        const outline = `M${n.x} ${n.y} H${n.x + n.w} V${n.y + n.h} H${n.x} Z`;
        const at = 0.04 * i;
        return (
          <g key={n.id}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} className={n.tier === "external" ? "fill-paper-2" : "fill-paper"} />
            <DrawPath
              d={outline}
              progress={progress}
              from={at}
              to={at + 0.22}
              className="stroke-ink"
            />
            {n.tier === "data" && (
              <DrawPath d={`M${n.x} ${n.y + 5} H${n.x + n.w}`} progress={progress} from={at + 0.1} to={at + 0.26} className="stroke-ink" />
            )}
            <FadeIn progress={progress} at={at + 0.12}>
              <text x={n.x + 12} y={n.y + n.h / 2 - 2} className="fill-ink font-sans text-[14px]">
                {n.label}
              </text>
              {n.detail && (
                <text x={n.x + 12} y={n.y + n.h / 2 + 14} className="fill-muted font-mono text-[10px]">
                  {n.detail}
                </text>
              )}
              <text x={n.x} y={n.y - 6} className="fill-muted font-mono text-[9px] uppercase tracking-[0.08em]">
                {n.tier}
              </text>
            </FadeIn>
          </g>
        );
      })}

      {edges.map((e, i) => {
        const from = 0.25 + i * edgeSpan;
        const to = from + edgeSpan * 1.4;
        const stroke = e.duplex ? "stroke-accent" : "stroke-ink";
        return (
          <g key={e.key}>
            <DrawPath d={e.d} progress={progress} from={from} to={to} className={`${stroke} [stroke-width:1.25]`} />
            <FadeIn progress={progress} at={Math.min(to, 0.94)}>
              {e.heads.map((h, j) => (
                <path key={j} d={h} className={e.duplex ? "fill-accent" : "fill-ink"} />
              ))}
              {e.label && (
                <text x={e.label.x} y={e.label.y} textAnchor={e.label.anchor} className="fill-muted font-mono text-[10px]">
                  {e.label.text}
                </text>
              )}
            </FadeIn>
          </g>
        );
      })}
    </svg>
  );
}

export default function Schematic({ arch, figure }: { arch: Architecture; figure: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "center 0.5"] });
  const full = useTransform(scrollYProgress, () => 1);
  const progress = reduce ? full : scrollYProgress;

  const description = `${arch.caption}: ${arch.edges
    .map((e) => {
      const name = (id: string) => arch.nodes.find((n) => n.id === id)?.label ?? id;
      return `${name(e.from)} ${e.duplex ? "⇄" : "→"} ${name(e.to)}${e.label ? ` (${e.label})` : ""}`;
    })
    .join("; ")}`;

  return (
    <figure ref={ref} className="border border-rule">
      <div role="img" aria-label={description} className="blueprint flex justify-center overflow-hidden px-4 py-8 md:px-8 md:py-12">
        <div className="hidden w-full justify-center md:flex">
          <Diagram arch={arch} orientation="horizontal" progress={progress} />
        </div>
        <div className="flex w-full justify-center md:hidden">
          <Diagram arch={arch} orientation="vertical" progress={progress} />
        </div>
      </div>
      <figcaption className="label flex flex-wrap justify-between gap-2 border-t border-rule px-3 py-2">
        <span>
          fig. {figure} — {arch.caption}
        </span>
        <span className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden className="inline-block h-px w-4 bg-ink" /> request
          </span>
          {arch.edges.some((e) => e.duplex) && (
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden className="inline-block h-px w-4 bg-accent" /> realtime
            </span>
          )}
        </span>
      </figcaption>
    </figure>
  );
}
