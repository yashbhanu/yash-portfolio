import type { ReactNode } from "react";

/**
 * Marks missing content during `next dev` so gaps are obvious while filling in
 * the content layer. Renders nothing in production builds.
 */
export default function DevTodo({ children }: { children: ReactNode }) {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <p className="mono my-4 border border-dashed border-accent px-3 py-2 text-accent-ink">
      TODO(yash): {children}
    </p>
  );
}
