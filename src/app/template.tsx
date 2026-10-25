"use client";

import * as m from "motion/react-m";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

// False for the server render and the first client paint, so the initial HTML
// is fully visible (no LCP delay waiting on hydration). Flips after mount, so
// only client-side navigations animate.
let hasNavigated = false;

/**
 * A short fade-and-settle between routes. Keyed by pathname because Next only
 * re-mounts a root template when the top-level segment changes, and moving
 * between case studies (/work/a → /work/b) should animate too.
 */
export default function Template({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <m.div
      key={pathname}
      initial={hasNavigated ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
