import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IPTV Canada | 2026 Best IPTV Service With 24h Free Trial",
    template: "%s | IPTV Canada"
  },
  description: "Discover the best Canadian IPTV service for premium entertainment. Stream your favorite shows and movies in stunning 4K quality.",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: siteConfig.verification.google,
    other: {
      "msvalidate.01": siteConfig.verification.bing,
    },
  },
  openGraph: {
    title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    url: "https://iptvsmartproviders.com",
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IPTV Canada",
              "url": "https://iptvsmartproviders.com",
              "logo": "https://iptvsmartproviders.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": siteConfig.whatsapp,
                "contactType": "customer service",
                "areaServed": "CA",
                "availableLanguage": ["English", "French"]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "IPTV Canada",
              "url": "https://iptvsmartproviders.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://iptvsmartproviders.com/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <Navbar />
        <main className="pt-[68px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        </body>
    </html>
  );
}
