"use client";

import * as m from "motion/react-m";
import { useEffect, type ReactNode } from "react";

// False for the server render and the first client paint, so the initial HTML
// is fully visible (no LCP delay waiting on hydration). Flips after mount, so
// only client-side navigations animate.
let hasNavigated = false;

/** Re-mounts on every navigation: a short fade-and-settle between routes. */
export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <m.div
      initial={hasNavigated ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
