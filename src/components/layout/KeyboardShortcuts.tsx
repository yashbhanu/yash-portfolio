"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { colophon, shortcuts } from "@/content/sections";
import { site } from "@/content/site";
import { OPEN_SHORTCUTS_EVENT } from "@/lib/events";
import { toggleTheme } from "@/lib/theme";

const isTyping = (el: EventTarget | null) =>
  el instanceof HTMLElement && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName));

let greeted = false;

/** Printed once for anyone who opens devtools. */
function greet() {
  if (greeted) return;
  greeted = true;
  console.log(
    `%c${site.name}%c ${colophon.version}\n\n%cSet in ${colophon.type.map((t) => t.name).join(", ")}.\nSource: ${site.sourceRepo}\nPress ? for keyboard shortcuts.`,
    "font: 400 28px 'Instrument Serif', Georgia, serif",
    "font: 12px ui-monospace, monospace; color: #e8480e",
    "font: 12px ui-monospace, monospace; line-height: 1.6",
  );
}

export default function KeyboardShortcuts() {
  const router = useRouter();
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    greet();
    let pendingG = 0;

    const open = () => dialog.current?.showModal();
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      // the command palette owns the keyboard while it is open
      if (document.querySelector("[cmdk-dialog]")) return;

      if (e.key === "?") {
        e.preventDefault();
        if (dialog.current?.open) dialog.current.close();
        else open();
        return;
      }
      if (dialog.current?.open) return;

      if (pendingG && Date.now() - pendingG < 1200) {
        pendingG = 0;
        const target = shortcuts.goto.find((s) => s.keys === `g ${e.key.toLowerCase()}`);
        if (target) {
          e.preventDefault();
          router.push(target.href);
        }
        return;
      }
      if (e.key === "g") pendingG = Date.now();
      else if (e.key === "t") toggleTheme();
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener(OPEN_SHORTCUTS_EVENT, open);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener(OPEN_SHORTCUTS_EVENT, open);
    };
  }, [router]);

  const Row = ({ keys, label }: { keys: string; label: string }) => (
    <li className="flex items-baseline justify-between gap-6 border-b border-rule py-2">
      <span>{label}</span>
      <span className="flex gap-1">
        {keys.split(" ").map((k) => (
          <kbd key={k} className="mono min-w-[1.6rem] border border-ink px-1.5 text-center">
            {k}
          </kbd>
        ))}
      </span>
    </li>
  );

  return (
    <dialog
      ref={dialog}
      aria-labelledby="shortcuts-title"
      className="m-auto w-[min(560px,calc(100vw-2rem))] border border-ink bg-paper p-0 text-ink shadow-[8px_8px_0_0_var(--rule)] backdrop:[background:color-mix(in_srgb,var(--paper)_80%,transparent)]"
      onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
    >
      <div className="flex items-baseline justify-between border-b border-ink bg-ink px-4 py-2 text-paper">
        <h2 id="shortcuts-title" className="label text-paper">
          Key to this edition
        </h2>
        <form method="dialog">
          <button className="label text-paper hover:text-accent" aria-label="Close shortcuts">
            esc
          </button>
        </form>
      </div>
      <div className="grid gap-x-8 gap-y-6 p-4 sm:grid-cols-2">
        <section>
          <h3 className="label mb-1">Go to</h3>
          <ul>
            {shortcuts.goto.map((s) => (
              <Row key={s.keys} {...s} />
            ))}
          </ul>
        </section>
        <section>
          <h3 className="label mb-1">Actions</h3>
          <ul>
            {shortcuts.actions.map((s) => (
              <Row key={s.keys} {...s} />
            ))}
          </ul>
        </section>
      </div>
    </dialog>
  );
}
