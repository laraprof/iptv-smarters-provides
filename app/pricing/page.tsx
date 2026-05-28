import { PricingHero } from "@/components/sections/PricingHero";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingFeatures } from "@/components/sections/PricingFeatures";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans Canada — 25,000+ Channels",
  description: "Affordable IPTV subscription plans for Canada. 4K quality, 25,000+ channels, and instant activation. No contracts, 24/7 Canadian support.",
  keywords: ["IPTV subscription Canada", "cheap IPTV Canada", "best IPTV 2026", "IPTV trial Canada", "monthly IPTV subscription"],
};

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Subscription",
    "description": "High-quality IPTV subscription with 25,000+ channels.",
    "brand": {
      "@type": "Brand",
      "name": "IPTV Canada"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CAD",
      "lowPrice": "15.00",
      "highPrice": "150.00",
      "offerCount": "12"
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(pricingSchema) }}
      />
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