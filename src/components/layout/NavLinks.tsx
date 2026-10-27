"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/sections";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-4 sm:gap-6">
      {nav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="group mono relative inline-flex h-9 items-center text-[0.8rem] sm:text-cap"
            >
              <span className={active ? "text-accent-ink" : "text-muted transition-colors group-hover:text-ink"}>
                /
              </span>
              <span className={active ? "text-ink" : "text-muted transition-colors group-hover:text-ink"}>
                {item.label}
              </span>
              <span
                aria-hidden
                className={`absolute inset-x-0 bottom-1 h-px origin-left bg-accent transition-transform duration-300 ease-out ${
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
