import type { Metadata } from "next";
import { site } from "@/content/site";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

/**
 * A page-level `openGraph` replaces the parent's wholesale, so every page
 * re-declares the shared fields through this helper. Routes with their own
 * opengraph-image file pass `image: false` and let the file supply it.
 */
export function openGraph(url: string, extra: OpenGraph = {}, image = true): OpenGraph {
  return {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url,
    ...(image && { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.role}` }] }),
    ...extra,
  } as OpenGraph;
}
