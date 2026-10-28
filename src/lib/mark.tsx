import "server-only";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

const INK = "#141413";
const PAPER = "#f4f1ea";
const ACCENT = "#ff6a2b";

/**
 * The site mark: a serif "Y" with an accent full stop, set on an ink tile.
 * Ink rather than paper so it reads on both light and dark browser chrome.
 */
export async function renderMark(size: number, { rounded = true } = {}) {
  const serif = await readFile(path.join(process.cwd(), "src/assets/fonts/InstrumentSerif-Regular.ttf"));
  const u = size / 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: INK,
          borderRadius: rounded ? 12 * u : 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", marginTop: 6 * u }}>
          <span style={{ fontFamily: "Serif", fontSize: 60 * u, lineHeight: 1, color: PAPER }}>Y</span>
          <div
            style={{
              width: 9 * u,
              height: 9 * u,
              borderRadius: 9 * u,
              background: ACCENT,
              marginLeft: 1 * u,
              marginBottom: 9 * u,
            }}
          />
        </div>
      </div>
    ),
    {
      width: size,
      height: size,
      fonts: [{ name: "Serif", data: serif, style: "normal", weight: 400 }],
    },
  );
}
