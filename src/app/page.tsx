import { about } from "@/content/about";
import { site } from "@/content/site";
import { getLatestPost } from "@/lib/latest-post";
import { getWriting } from "@/lib/writing";
import Masthead from "@/components/sections/Masthead";
import WorkSection from "@/components/sections/WorkSection";
import AboutSection from "@/components/sections/AboutSection";
import Changelog from "@/components/sections/Changelog";
import WritingToc from "@/components/sections/WritingToc";
import ContactSection from "@/components/sections/ContactSection";

// The status bar's latest post comes from the Medium feed; refresh daily.
export const revalidate = 86400;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: site.location.city, addressCountry: "IN" },
  knowsAbout: about.stack.flatMap((g) => g.items),
  ...(site.worksFor && { worksFor: { "@type": "Organization", name: site.worksFor } }),
  alumniOf: site.education.map((name) => ({ "@type": "CollegeOrUniversity", name })),
  sameAs: site.socials.filter((s) => s.id !== "email").map((s) => s.href),
};

export default async function Home() {
  const latest = await getLatestPost();
  const writing = getWriting();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Masthead latest={latest} />
      <WorkSection />
      <AboutSection />
      <Changelog />
      <WritingToc entries={writing.slice(0, 3)} total={writing.length} />
      <ContactSection />
    </>
  );
}
