import type { Metadata, Viewport } from "next";
import "./globals.css";
import { fontVariables } from "./fonts";
import { site } from "@/content/site";
import { getPaletteItems } from "@/lib/palette";
import { themeInitScript } from "@/lib/theme";
import Providers from "@/components/ui/Providers";
import { ToastProvider } from "@/components/ui/Toast";
import SiteHeader from "@/components/layout/SiteHeader";
import Colophon from "@/components/layout/Colophon";
import KeyboardShortcuts from "@/components/layout/KeyboardShortcuts";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.role}`, template: `%s — ${site.name}` },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/", types: { "application/rss+xml": "/writing/feed.xml" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: "/",
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <noscript>
          <style>{`[data-reveal]{transform:none!important;opacity:1!important}`}</style>
        </noscript>
      </head>
      <body id="top" className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="label sr-only z-50 bg-ink px-3 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Providers>
          <ToastProvider>
            <SiteHeader paletteItems={getPaletteItems()} />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Colophon />
            <KeyboardShortcuts />
          </ToastProvider>
        </Providers>
      </body>
    </html>
  );
}
