import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page pb-section pt-section">
      <p className="label border-t border-ink pt-3">
        <span className="text-accent-ink">§404</span>
        <span className="ml-3">Erratum</span>
      </p>
      <h1 className="mt-10 font-serif text-display tracking-[-0.02em]">
        Not in this <span className="italic">edition.</span>
      </h1>
      <p className="mt-8 max-w-measure text-lead text-muted">
        The page you asked for doesn’t exist, or has moved. Press <kbd className="mono">⌘K</kbd> to search.
      </p>
      <Link href="/" className="label link mt-8 inline-block text-ink">
        ← Front page
      </Link>
    </section>
  );
}
