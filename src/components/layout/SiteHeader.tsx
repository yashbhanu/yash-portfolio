import Link from "next/link";
import { site } from "@/content/site";
import type { PaletteItem } from "@/lib/palette";
import ThemeToggle from "@/components/ui/ThemeToggle";
import CommandMenu from "./CommandMenu";
import NavLinks from "./NavLinks";

export default function SiteHeader({ paletteItems }: { paletteItems: PaletteItem[] }) {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper">
      <div className="page flex flex-wrap items-center justify-between gap-x-6 py-2 md:flex-nowrap">
        <Link href="/" className="flex items-baseline py-1" aria-label={`${site.name}, home`}>
          <span className="font-serif text-[1.35rem] leading-none text-ink">
            {site.shortName}
            <span className="text-accent">.</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="order-last -mx-1 w-full border-t border-rule px-1 md:order-none md:mx-0 md:w-auto md:border-0 md:px-0">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <CommandMenu items={paletteItems} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
