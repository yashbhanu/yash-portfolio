"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

/** Re-mounts on every navigation: a short fade-and-settle between routes. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
