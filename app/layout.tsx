import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque, Chakra_Petch } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { BrandedLoader } from "@/components/layout/branded-loader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationGraph } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
  preload: true,
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
  preload: false,
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});
const logo = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-logo",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

const ogImage = {
  url: `${site.url}${site.ogImage}`,
  width: 1200,
  height: 630,
  alt: site.title,
  type: "image/png",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  formatDetection: { telephone: true, email: true, address: false },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05080F" },
    { media: "(prefers-color-scheme: light)", color: "#F4F0E6" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en-PK"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${logo.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen max-w-full overflow-x-clip bg-ink font-sans text-paper antialiased">
        <JsonLd data={organizationGraph()} />
        <Script id="hisaar-theme" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.add(t==='light'?'light':'dark');}catch(e){document.documentElement.classList.add('dark');}})();`}
        </Script>
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <BrandedLoader />
          <Header />
          <main id="content" className="min-w-0 max-w-full overflow-x-clip">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
