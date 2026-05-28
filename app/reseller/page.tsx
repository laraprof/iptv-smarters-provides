import { ResellerHero } from "@/components/sections/ResellerHero";
import { ResellerStart } from "@/components/sections/ResellerStart";
import { ResellerDetails } from "@/components/sections/ResellerDetails";
import { ResellerPricing } from "@/components/sections/ResellerPricing";
import { Reseller } from "@/components/sections/Reseller";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV Reseller Program Canada — Start Your Business Today",
  description: "Join the #1 IPTV reseller program in Canada. Get a professional panel, 25,000+ channels, and high-profit margins with our stable credits system.",
  keywords: ["IPTV reseller Canada", "IPTV panel reseller", "start IPTV business", "IPTV credits buy", "best IPTV reseller panel"],
};

export default function ResellerPage() {
  // LocalBusiness / Service Schema
  const resellerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IPTV Reseller Program",
    "description": "Professional IPTV reseller panel with 25,000+ channels for the Canadian market.",
    "provider": {
      "@type": "Organization",
      "name": "IPTV Canada"
    },
    "areaServed": "Canada"
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(resellerSchema) }}
      />
      <ResellerHero />
      <ResellerStart />
      <ResellerDetails />
      <ResellerPricing />
      <Reseller />
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black text-brand-dark tracking-tight mb-4">Why Partner With Us?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide the highest quality streams and the most stable panel in the Canadian market.</p>
        </div>
      </div>
      <Testimonials />
      <FAQ />
    </main>
  );
}
