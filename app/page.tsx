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

  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "1 Month IPTV Canada Plan",
      description: "1 Month IPTV subscription with 25,000+ channels and 4K quality.",
      offers: {
        "@type": "Offer",
        price: "19.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "3 Month IPTV Canada Plan",
      description: "3 Month IPTV subscription with 25,000+ channels and 4K quality.",
      offers: {
        "@type": "Offer",
        price: "29.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "6 Month IPTV Canada Plan",
      description: "6 Month IPTV subscription with 25,000+ channels and 4K quality.",
      offers: {
        "@type": "Offer",
        price: "49.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "12 Month IPTV Canada Plan",
      description: "12 Month IPTV subscription with 25,000+ channels and 4K quality.",
      offers: {
        "@type": "Offer",
        price: "79.00",
        priceCurrency: "CAD",
        availability: "https://schema.org/InStock",
      }
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IPTV Canada",
    url: "https://iptvsmartproviders.com",
    logo: "https://iptvsmartproviders.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "CA",
    }
  };

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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IPTV Canada",
    url: "https://iptvsmartproviders.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://iptvsmartproviders.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(productSchemas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(aggregateRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(websiteSchema) }} />
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