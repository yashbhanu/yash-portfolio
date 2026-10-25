import type { Metadata } from "next";
import { openGraph } from "@/lib/metadata";
import { getWriting } from "@/lib/writing";
import WritingToc from "@/components/sections/WritingToc";

export const metadata: Metadata = {
  title: "Writing",
  description: "Technical articles on Next.js, NestJS, Node.js, websockets and data visualisation.",
  alternates: { canonical: "/writing" },
  openGraph: openGraph("/writing"),
};

export default function WritingPage() {
  return (
    <div className="pb-section">
      <WritingToc entries={getWriting()} as="h1" />
    </div>
  );
}
