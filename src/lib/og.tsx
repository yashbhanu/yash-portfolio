import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const PAPER = "#f4f1ea";
const INK = "#141413";
const MUTED = "#5c5850";
const ACCENT = "#e8480e";

const font = (file: string) => readFile(path.join(process.cwd(), "src/assets/fonts", file));

interface OgProps {
  /** Mono kicker, e.g. "§01 — Case study". */
  kicker: string;
  title: string;
  /** Mono footer metadata, e.g. "Next.js · NestJS · MongoDB". */
  meta?: string;
}

/** Broadsheet-style social card shared by every route. */
export async function renderOg({ kicker, title, meta }: OgProps) {
  const [serif, serifItalic, mono] = await Promise.all([
    font("InstrumentSerif-Regular.ttf"),
    font("InstrumentSerif-Italic.ttf"),
    font("JetBrainsMono-Regular.ttf"),
  ]);
  const host = new URL(site.url).host;
  const titleSize = title.length > 60 ? 76 : title.length > 28 ? 96 : 156;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          color: INK,
          padding: "56px 64px",
          fontFamily: "Mono",
          backgroundImage: "linear-gradient(to bottom, #1414130d 1px, transparent 1px), linear-gradient(to right, #1414130d 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, letterSpacing: 1, color: MUTED }}>
          <span style={{ color: ACCENT }}>{kicker.toUpperCase()}</span>
          <span>{site.name.toUpperCase()}</span>
        </div>
        <div style={{ display: "flex", height: 4, background: INK, marginTop: 16 }} />
        <div style={{ display: "flex", height: 1, background: INK, marginTop: 4 }} />

        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontFamily: "Serif",
            fontSize: titleSize,
            lineHeight: 0.95,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", height: 1, background: INK }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 16,
            fontSize: 20,
            color: MUTED,
          }}
        >
          <span>{meta ?? site.role}</span>
          <div style={{ display: "flex", gap: 10 }}>
            <span>{host}</span>
            <span style={{ color: ACCENT }}>●</span>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Serif", data: serif, style: "normal", weight: 400 },
        { name: "Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
