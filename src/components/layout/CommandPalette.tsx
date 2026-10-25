"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import type { PaletteItem } from "@/lib/palette";
import { toggleTheme } from "@/lib/theme";

const GROUPS: PaletteItem["group"][] = ["Go to", "Work", "Writing", "Actions", "Elsewhere"];

interface Props {
  items: PaletteItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onToast: (message: string) => void;
}

export default function CommandPalette({ items, open, onOpenChange, onToast }: Props) {
  const router = useRouter();

  const run = async (item: PaletteItem) => {
    onOpenChange(false);
    const { action } = item;
    if (action.type === "theme") toggleTheme();
    else if (action.type === "copy") {
      try {
        await navigator.clipboard.writeText(action.value);
        onToast(action.message);
      } catch {
        onToast(action.value);
      }
    } else if (action.external) window.open(action.href, "_blank", "noopener,noreferrer");
    else router.push(action.href);
  };

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      loop
      overlayClassName="fixed inset-0 z-50 [background:color-mix(in_srgb,var(--paper)_80%,transparent)]"
      contentClassName="fixed left-1/2 top-[12vh] z-50 w-[min(640px,calc(100vw-2rem))] -translate-x-1/2 border border-ink bg-paper shadow-[8px_8px_0_0_var(--rule)] focus:outline-none"
    >
      <div className="flex items-center gap-3 border-b border-rule px-4">
        <span aria-hidden className="mono text-accent-ink">
          ›
        </span>
        <Command.Input
          placeholder="Jump to a section, project or post…"
          className="h-14 w-full bg-transparent font-sans text-body text-ink placeholder:text-muted focus:outline-none"
        />
        <kbd className="label hidden shrink-0 sm:block">esc</kbd>
      </div>
      <Command.List className="max-h-[min(60vh,440px)] overflow-y-auto overscroll-contain p-2">
        <Command.Empty className="label px-3 py-8 text-center">No matches.</Command.Empty>
        {GROUPS.map((group) => (
          <Command.Group
            key={group}
            heading={group}
            className="[&_[cmdk-group-heading]]:label [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:pt-3"
          >
            {items
              .filter((i) => i.group === group)
              .map((item) => (
                <Command.Item
                  key={item.id}
                  value={`${item.label} ${item.id}`}
                  keywords={item.keywords}
                  onSelect={() => run(item)}
                  className="flex cursor-pointer items-baseline justify-between gap-4 px-3 py-2.5 text-ink data-[selected=true]:bg-ink data-[selected=true]:text-paper"
                >
                  <span className="truncate">{item.label}</span>
                  {item.hint && <span className="mono shrink-0 opacity-70">{item.hint}</span>}
                </Command.Item>
              ))}
          </Command.Group>
        ))}
      </Command.List>
      <div className="label flex justify-between gap-4 border-t border-rule px-4 py-2">
        <span>↑↓ navigate</span>
        <span>↵ open</span>
      </div>
    </Command.Dialog>
  );
}
