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
  metadataBase: new URL('https://iptvsmartproviders.com'),
  title: {
    default: 'IPTV Canada — #1 Premium IPTV Subscription in Canada 2026',
    template: '%s | IPTV Canada'
  },
  description: "Canada's most reliable IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
  keywords: ['IPTV Canada', 'best IPTV Canada', 'IPTV subscription Canada', 'Canadian IPTV', 'IPTV 4K Canada'],
  authors: [{ name: 'IPTV Canada' }],
  creator: 'IPTV Canada',
  publisher: 'IPTV Canada',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://iptvsmartproviders.com',
    siteName: 'IPTV Canada',
    title: 'IPTV Canada | 2026 Best IPTV Service With 24h Free Trial',
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    images: [{
      url: '/og?title=IPTV Canada | 2026 Best IPTV Service With 24h Free Trial',
      width: 1200,
      height: 630,
      alt: 'IPTV Canada — Best IPTV Service 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPTV Canada | 2026 Best IPTV Service With 24h Free Trial',
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    images: ['/og?title=IPTV Canada | 2026 Best IPTV Service With 24h Free Trial'],
  },
  alternates: {
    canonical: 'https://iptvsmartproviders.com',
    languages: {
      'en-CA': 'https://iptvsmartproviders.com',
      'en-US': 'https://iptvsmartproviders.com',
    },
  },
  verification: {
    google: 'SMZClMu8s-8zwzfMQ1wok7x8ddHLyLhO4xVm_9XN8Fg',
    other: {
      'msvalidate.01': 'C599E88324F1BF23B219798A653D00D7',
    }
  }
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
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
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
