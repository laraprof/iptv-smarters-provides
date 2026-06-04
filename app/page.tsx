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
import { BlogPreview } from "@/components/sections/BlogPreview";
import type { Metadata } from "next";
import { faqData } from "@/constants/faq";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
  description: "Canada's most reliable IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    url: "https://iptvsmartproviders.com",
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
    images: [{
      url: "https://iptvsmartproviders.com/og?title=IPTV%20Canada%20%E2%80%94%20%231%20Premium%20IPTV%20Subscription%20in%20Canada%202026",
      width: 1200,
      height: 630,
      alt: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    images: ["https://iptvsmartproviders.com/og?title=IPTV%20Canada%20%E2%80%94%20%231%20Premium%20IPTV%20Subscription%20in%20Canada%202026"],
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
      <BlogPreview />
      <FAQ />
    </>
  );
}