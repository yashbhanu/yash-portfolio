"use client";

import { useEffect, useState } from "react";

/** Wall-clock time in a fixed zone. Renders "--:--" until hydrated. */
export default function LiveClock({ timeZone, label }: { timeZone: string; label: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <time suppressHydrationWarning className="tabular-nums">
      {time ?? "--:--"} {label}
    </time>
  );
}
