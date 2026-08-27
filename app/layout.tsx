import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { BrandedLoader } from "@/components/layout/branded-loader";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.product}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Omni Ledger",
    "POS Pakistan",
    "grocery POS",
    "pharmacy POS",
    "restaurant POS",
    "garments POS",
    "Hisaar Solutions",
    "Lahore",
  ],
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: site.url,
    siteName: site.name,
    title: `${site.name} · ${site.product}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.product}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
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
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-ink font-sans text-paper antialiased">
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-teal focus:px-4 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <BrandedLoader />
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
