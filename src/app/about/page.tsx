import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import Changelog from "@/components/sections/Changelog";

export const metadata: Metadata = {
  title: "About",
  description: "Bio, stack and changelog of education and experience.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pb-section">
      <AboutSection as="h1" />
      <Changelog />
    </div>
  );
}
