import type { Metadata } from "next";
import { openGraph } from "@/lib/metadata";
import WorkSection from "@/components/sections/WorkSection";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects by Yash Bhanushali, with case studies and architecture notes.",
  alternates: { canonical: "/work" },
  openGraph: openGraph("/work"),
};

export default function WorkPage() {
  return (
    <div className="pb-section">
      <WorkSection as="h1" />
    </div>
  );
}
