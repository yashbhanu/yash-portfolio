import type { Metadata } from "next";
import { openGraph } from "@/lib/metadata";
import AboutSection from "@/components/sections/AboutSection";
import Changelog from "@/components/sections/Changelog";

export const metadata: Metadata = {
  title: "About",
  description: "Bio, stack and a changelog of experience.",
  alternates: { canonical: "/about" },
  openGraph: openGraph("/about"),
};

export default function AboutPage() {
  return (
    <div className="pb-section">
      <AboutSection as="h1" />
      <Changelog />
    </div>
  );
}
