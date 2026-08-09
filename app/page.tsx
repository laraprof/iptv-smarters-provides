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
import { getServiceSchema, getFAQSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "IPTV Canada — #1 Premium IPTV Subscription in Canada 2026",
  description: "Canada's most reliable IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "IPTV Canada | 2026 Best IPTV Service With 24h Free Trial",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    url: "https://iptvsmartproviders.com",
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
    images: [{
      url: "https://iptvsmartproviders.com/og?title=IPTV%20Canada%20%E2%80%94%20%231%20Premium%20IPTV%20Subscription%20in%20Canada%202026",
      width: 1200,
      height: 630,
      alt: "IPTV Canada | 2026  Best IPTV Service With 24h Free Trial",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Canada | 2026 Best IPTV Service With 24h Free Trial",
    description: "Canada's most reliable IPTV service. 25k+ channels, 4K streaming, 24/7 support.",
    images: ["https://iptvsmartproviders.com/og?title=IPTV%20Canada%20%E2%80%94%20%231%20Premium%20IPTV%20Subscription%20in%20Canada%202026"],
  },
};

export default function Home() {
  return (
    <>
      {/* Product schema with AggregateRating — enables Review Snippets in Google */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(getServiceSchema()) }} />
      {/* QAPage for FAQ content — FAQPage rich results were retired May 7, 2026 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(getFAQSchema(faqData)) }} />
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