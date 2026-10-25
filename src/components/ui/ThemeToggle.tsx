"use client";

import { useEffect, useState } from "react";
import { currentTheme, toggleTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const sync = () => setTheme(currentTheme());
    sync();
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", sync);
    window.addEventListener("themechange", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("themechange", sync);
    };
  }, []);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme ? `Switch to ${next} theme` : "Toggle theme"}
      className="label flex h-9 items-center gap-2 px-1 text-ink transition-colors hover:text-accent-ink"
    >
      <span
        aria-hidden
        className="relative inline-block h-3 w-3 rounded-full border border-current"
        style={{
          background: "linear-gradient(90deg, currentColor 50%, transparent 50%)",
        }}
      />
      <span className="hidden sm:inline" suppressHydrationWarning>
        {theme ?? "theme"}
      </span>
    </button>
  );
}
