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
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "1 Month IPTV Canada Plan",
      description: "1 Month IPTV subscription with 25,000+ channels and 4K quality.",
      image: "https://iptvsmartproviders.com/logo.png",
      sku: "IPTV-1M",
      brand: {
        "@type": "Brand",
        name: "IPTV Canada"
      },
      offers: {
        "@type": "Offer",
        url: "https://iptvsmartproviders.com/pricing",
        price: "19.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "3 Month IPTV Canada Plan",
      description: "3 Month IPTV subscription with 25,000+ channels and 4K quality.",
      image: "https://iptvsmartproviders.com/logo.png",
      sku: "IPTV-3M",
      brand: {
        "@type": "Brand",
        name: "IPTV Canada"
      },
      offers: {
        "@type": "Offer",
        url: "https://iptvsmartproviders.com/pricing",
        price: "29.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "6 Month IPTV Canada Plan",
      description: "6 Month IPTV subscription with 25,000+ channels and 4K quality.",
      image: "https://iptvsmartproviders.com/logo.png",
      sku: "IPTV-6M",
      brand: {
        "@type": "Brand",
        name: "IPTV Canada"
      },
      offers: {
        "@type": "Offer",
        url: "https://iptvsmartproviders.com/pricing",
        price: "49.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "12 Month IPTV Canada Plan",
      description: "12 Month IPTV subscription with 25,000+ channels and 4K quality.",
      image: "https://iptvsmartproviders.com/logo.png",
      sku: "IPTV-12M",
      brand: {
        "@type": "Brand",
        name: "IPTV Canada"
      },
      offers: {
        "@type": "Offer",
        url: "https://iptvsmartproviders.com/pricing",
        price: "79.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2027-12-31",
        itemCondition: "https://schema.org/NewCondition"
      }
    }
  ];

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Canada Service",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "135",
      bestRating: "5",
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchemas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(aggregateRatingSchema) }} />
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