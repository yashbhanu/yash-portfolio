import type { ArchNode, Architecture } from "@/content/types";

/**
 * Lays out an architecture graph on an orthogonal grid. Tiers become columns
 * along the main axis (left→right on desktop, top→bottom on phones); nodes in
 * a tier stack along the cross axis. Edges are three-segment elbows with ports
 * spread evenly along each node side so parallel edges never overlap.
 */

export type Orientation = "horizontal" | "vertical";

// Third-party APIs sit beside our own services: the client usually calls them
// directly, so this keeps every edge between adjacent columns.
const TIER_COLUMN: Record<ArchNode["tier"], number> = {
  client: 0,
  edge: 1,
  service: 2,
  external: 2,
  data: 3,
};

const DIMENSIONS = {
  horizontal: { nodeMain: 176, nodeCross: 64, gapMain: 150, gapCross: 44, pad: 28 },
  vertical: { nodeMain: 56, nodeCross: 136, gapMain: 84, gapCross: 52, pad: 16 },
} as const;

export interface PlacedNode extends ArchNode {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PlacedEdge {
  key: string;
  d: string;
  duplex: boolean;
  label?: { x: number; y: number; text: string; anchor: "start" | "middle" | "end" };
  /** Arrowheads as tiny closed paths, drawn once the line completes. */
  heads: string[];
}

export interface SchematicLayout {
  width: number;
  height: number;
  nodes: PlacedNode[];
  edges: PlacedEdge[];
}

type Side = "mainStart" | "mainEnd" | "crossStart" | "crossEnd";

interface UVNode {
  node: ArchNode;
  col: number;
  u: number;
  v: number;
}

export function layoutSchematic(arch: Architecture, orientation: Orientation): SchematicLayout {
  const { nodeMain, nodeCross, gapMain, gapCross, pad } = DIMENSIONS[orientation];
  const horizontal = orientation === "horizontal";

  // Compress the tiers actually present into consecutive columns.
  const tierCols = Array.from(new Set(arch.nodes.map((n) => TIER_COLUMN[n.tier]))).sort((a, b) => a - b);
  const columns = tierCols.map((t) => arch.nodes.filter((n) => TIER_COLUMN[n.tier] === t));
  const maxCount = Math.max(...columns.map((c) => c.length));
  const crossTotal = maxCount * nodeCross + (maxCount - 1) * gapCross;

  const uv = new Map<string, UVNode>();
  columns.forEach((col, c) => {
    const colCross = col.length * nodeCross + (col.length - 1) * gapCross;
    col.forEach((node, i) => {
      uv.set(node.id, {
        node,
        col: c,
        u: pad + c * (nodeMain + gapMain),
        v: pad + (crossTotal - colCross) / 2 + i * (nodeCross + gapCross),
      });
    });
  });

  const mainSize = pad * 2 + columns.length * nodeMain + (columns.length - 1) * gapMain;
  const crossSize = pad * 2 + crossTotal;

  // Decide which side of each node every edge attaches to.
  const attach = arch.edges.map((e) => {
    const a = uv.get(e.from)!;
    const b = uv.get(e.to)!;
    let fromSide: Side, toSide: Side;
    if (a.col < b.col) [fromSide, toSide] = ["mainEnd", "mainStart"];
    else if (a.col > b.col) [fromSide, toSide] = ["mainStart", "mainEnd"];
    else if (a.v < b.v) [fromSide, toSide] = ["crossEnd", "crossStart"];
    else [fromSide, toSide] = ["crossStart", "crossEnd"];
    return { e, a, b, fromSide, toSide };
  });

  // Spread ports along each side, ordered by the far end's position.
  const ports = new Map<string, number>();
  const bySide = new Map<string, { key: string; order: number }[]>();
  attach.forEach(({ a, b, fromSide, toSide }, i) => {
    const push = (n: UVNode, side: Side, other: UVNode, key: string) => {
      const id = `${n.node.id}:${side}`;
      const order = side.startsWith("main") ? other.v : other.u;
      bySide.set(id, [...(bySide.get(id) ?? []), { key, order }]);
    };
    push(a, fromSide, b, `${i}:from`);
    push(b, toSide, a, `${i}:to`);
  });
  bySide.forEach((list, id) => {
    const side = id.split(":")[1] as Side;
    const span = side.startsWith("main") ? nodeCross : nodeMain;
    list
      .sort((p, q) => p.order - q.order)
      .forEach((p, i) => ports.set(p.key, (span * (i + 1)) / (list.length + 1)));
  });

  const point = (n: UVNode, side: Side, offset: number): [number, number] => {
    switch (side) {
      case "mainStart":
        return [n.u, n.v + offset];
      case "mainEnd":
        return [n.u + nodeMain, n.v + offset];
      case "crossStart":
        return [n.u + offset, n.v];
      case "crossEnd":
        return [n.u + offset, n.v + nodeCross];
    }
  };

  // (u, v) → screen (x, y)
  const xy = ([u, v]: [number, number]): [number, number] => (horizontal ? [u, v] : [v, u]);
  const fmt = (pts: [number, number][]) =>
    pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");

  const head = (tip: [number, number], from: [number, number]) => {
    const [tx, ty] = tip;
    const ang = Math.atan2(ty - from[1], tx - from[0]);
    const s = 7;
    const p1 = [tx - s * Math.cos(ang - 0.42), ty - s * Math.sin(ang - 0.42)];
    const p2 = [tx - s * Math.cos(ang + 0.42), ty - s * Math.sin(ang + 0.42)];
    return `M${tx.toFixed(1)} ${ty.toFixed(1)} L${p1[0].toFixed(1)} ${p1[1].toFixed(1)} L${p2[0].toFixed(1)} ${p2[1].toFixed(1)} Z`;
  };

  const edges: PlacedEdge[] = attach.map(({ e, a, b, fromSide, toSide }, i) => {
    const toPort = ports.get(`${i}:to`)!;
    const s = point(a, fromSide, ports.get(`${i}:from`)!);
    const t = point(b, toSide, toPort);
    let pts: [number, number][];
    let labelAt: [number, number];
    const sameColumn = !fromSide.startsWith("main");

    if (!sameColumn) {
      // elbow in the gap: just after the source going forward, near the target going back
      const dir = fromSide === "mainEnd" ? 1 : -1;
      const mu = dir === 1 ? s[0] + gapMain * 0.3 : t[0] + gapMain * 0.55;
      pts = [s, [mu, s[1]], [mu, t[1]], t];
      labelAt = [(mu + t[0]) / 2, t[1]];
    } else {
      const mv = (s[1] + t[1]) / 2;
      pts = [s, [s[0], mv], [t[0], mv], t];
      labelAt = [t[0], (mv + t[1]) / 2];
    }

    const screen = pts.map(xy);
    const heads = [head(screen[screen.length - 1], screen[screen.length - 2])];
    if (e.duplex) heads.push(head(screen[0], screen[1]));

    let label: PlacedEdge["label"];
    if (e.label) {
      const [lx, ly] = xy(labelAt);
      // Between columns: above the final run (horizontal) or beside it (vertical).
      // Within a column the run is short and crosswise, so the axes swap.
      const beside = horizontal === sameColumn;
      // Ports left of centre label outward to the left so neighbours never collide.
      const leftward = !horizontal && !sameColumn && toPort < nodeCross / 2;
      label = !beside
        ? { x: lx, y: ly - 7, text: e.label, anchor: "middle" }
        : leftward
          ? { x: lx - 8, y: ly + 3, text: e.label, anchor: "end" }
          : { x: lx + 8, y: ly + 3, text: e.label, anchor: "start" };
    }

    return { key: `${e.from}-${e.to}`, d: fmt(screen), duplex: !!e.duplex, label, heads };
  });

  const nodes: PlacedNode[] = Array.from(uv.values()).map(({ node, u, v }) => {
    const [x, y] = xy([u, v]);
    return { ...node, x, y, w: horizontal ? nodeMain : nodeCross, h: horizontal ? nodeCross : nodeMain };
  });

  const [width, height] = horizontal ? [mainSize, crossSize] : [crossSize, mainSize];
  return { width, height, nodes, edges };
}
