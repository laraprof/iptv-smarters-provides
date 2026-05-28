import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Devices } from "@/components/sections/Devices";
import { Steps } from "@/components/sections/Steps";
import { FAQ } from "@/components/sections/FAQ";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Sports } from "@/components/sections/Sports";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reseller } from "@/components/sections/Reseller";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import type { Metadata } from "next";
import { faqData } from "@/constants/faq";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV Canada — #1 Best IPTV Subscription Service 2026",
  description: "Experience premium IPTV in Canada with 25,000+ live channels, 120,000+ VODs, and 4K quality. Fast activation, local support, and no contracts.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IPTV Canada Subscription Plans",
    image: `${siteConfig.url}/logo.png`,
    description: "Premium IPTV subscription with 25,000+ live channels, 4K streaming, and 24/7 Canadian support.",
    brand: { "@type": "Brand", name: "IPTV Canada" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "130", 
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      lowPrice: "15.00",
      highPrice: "120.00",
      offerCount: "12",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(pricingSchema) }} />
      <Hero />
      <Sports />
      <Devices />
      <Pricing />
      <ComparisonSection />
      <Steps />
      <WhyChoose />
      <Testimonials />
      <Reseller />
      <FAQ />
    </>
  );
}