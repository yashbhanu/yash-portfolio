const dateFmt = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2024-05-26" → "26 May 2024" */
export const formatDate = (iso: string) => dateFmt.format(new Date(iso));

/** "2024-05" → "v2024.5"; null when the date is unknown. */
export function versionTag(start: string | null) {
  if (!start) return null;
  const [y, m] = start.split("-");
  return `v${y}${m ? `.${Number(m)}` : ""}`;
}

/** "2024-05" → "May 2024", "2024" → "2024" */
export function formatMonth(ym: string | null) {
  if (!ym) return null;
  const [y, m] = ym.split("-");
  if (!m) return y;
  return new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(Number(y), Number(m) - 1)),
  );
}

export const readingMinutes = (text: string, wpm = 220) =>
  Math.max(1, Math.ceil(text.trim().split(/\s+/).length / wpm));
