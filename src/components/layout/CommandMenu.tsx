"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import type { PaletteItem } from "@/lib/palette";
import { useToast } from "@/components/ui/Toast";

// cmdk + Radix only load the first time the palette is opened.
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

export default function CommandMenu({ items }: { items: PaletteItem[] }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isMac, setIsMac] = useState(true);
  const toast = useToast();

  const show = useCallback(() => {
    setLoaded(true);
    setOpen(true);
  }, []);

  useEffect(() => {
    setIsMac(/mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent));
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setLoaded(true);
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={show}
        onPointerEnter={() => setLoaded(true)}
        aria-label="Open command palette"
        aria-keyshortcuts="Meta+K Control+K"
        className="label flex h-9 items-center gap-1.5 border border-rule px-2 text-ink transition-colors hover:border-ink"
      >
        <kbd className="font-mono" suppressHydrationWarning>
          {isMac ? "⌘" : "Ctrl"}
        </kbd>
        <kbd className="font-mono">K</kbd>
      </button>
      {loaded && <CommandPalette items={items} open={open} onOpenChange={setOpen} onToast={toast} />}
    </>
  );
}
