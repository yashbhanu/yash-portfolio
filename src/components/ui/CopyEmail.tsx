"use client";

import { useState } from "react";
import { useToast } from "./Toast";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast("Email copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="label inline-flex h-11 shrink-0 items-center gap-2 border border-ink px-4 text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      {copied ? "Copied ✓" : "Copy"}
      <span className="sr-only"> email address</span>
    </button>
  );
}
