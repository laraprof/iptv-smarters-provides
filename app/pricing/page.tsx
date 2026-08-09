import { PricingHero } from "@/components/sections/PricingHero";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingFeatures } from "@/components/sections/PricingFeatures";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  // Layout template adds '| IPTV Canada' — no need to repeat it here
  title: "IPTV Subscription Plans Canada — 25,000+ Channels",
  description: "Affordable IPTV subscription plans for Canada. 4K quality, 25,000+ channels, and instant activation. No contracts, 24/7 Canadian support.",
  keywords: ["IPTV subscription Canada", "cheap IPTV Canada", "best IPTV 2026", "IPTV trial Canada", "monthly IPTV subscription"],
  alternates: {
    canonical: "https://iptvsmartproviders.com/pricing",
  },
  openGraph: {
    title: "IPTV Subscription Plans Canada — 25,000+ Channels | IPTV Canada",
    description: "Affordable IPTV subscription plans for Canada. 4K quality, 25,000+ channels, and instant activation. No contracts, 24/7 Canadian support.",
    url: "https://iptvsmartproviders.com/pricing",
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
    images: [{
      url: "https://iptvsmartproviders.com/og?title=IPTV%20Subscription%20Plans%20Canada",
      width: 1200,
      height: 630,
      alt: "IPTV Canada Subscription Plans — 25,000+ Channels",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Plans Canada — 25,000+ Channels",
    description: "Affordable IPTV subscription plans for Canada. 4K quality, 25,000+ channels, instant activation. No contracts.",
    images: ["https://iptvsmartproviders.com/og?title=IPTV%20Subscription%20Plans%20Canada"],
  },
};

export default function PricingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://iptvsmartproviders.com" },
    { name: "Pricing", url: "https://iptvsmartproviders.com/pricing" }
  ]);

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(getServiceSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <PricingHero />
      <div className="relative -mt-20 z-20">
        <Pricing />
      </div>
      <PricingFeatures />
      <Testimonials />
      <FAQ />
    </main>
  );
}