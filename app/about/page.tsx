import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "About IPTV Canada | 8+ Years of Streaming Excellence",
  description: "Learn more about IPTV Canada. For over 15 years, our team has been delivering premium 4K IPTV services with 24/7 local support across the nation.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "IPTV Canada",
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/logo.png`,
      description: "Canada's premier IPTV service provider offering 25,000+ live channels and 4K VOD content with 24/7 dedicated support.",
      foundingDate: "2010",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: siteConfig.whatsapp,
        email: siteConfig.supportEmail,
        areaServed: "CA",
        availableLanguage: ["English", "French"]
      }
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] pt-32 pb-24">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(aboutSchema) }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 text-brand-blue">
            <div className="w-2 h-2 rotate-45 bg-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px]">Our Story</span>
            <div className="w-2 h-2 rotate-45 bg-brand-blue" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-brand-dark tracking-tighter mb-6">
            Redefining Television in <span className="text-brand-blue">Canada</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-medium">
            For over 15 years, IPTV Canada has been at the forefront of digital entertainment, providing reliable, high-quality streaming solutions to thousands of households coast to coast.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-brand-dark tracking-tight">
              A Decade and a Half of Excellence
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We started with a simple mission: to make premium television accessible and affordable for every Canadian. Tired of overpriced cable packages and restrictive contracts, we built a network designed for the modern viewer.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today, we are proud to offer over 25,000 live channels and a massive VOD library of 120,000+ movies and series. But our technology is only half the story. Our true strength lies in our dedicated team based right here in Canada, ensuring you always have real people to help you out when you need it.
            </p>
            <div className="pt-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-dark text-sm uppercase tracking-widest mb-1">100% Satisfaction Guarantee</h4>
                  <p className="text-slate-500 text-sm">Tested and verified by thousands of active subscribers.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg text-center transform translate-y-8">
                <Users className="w-10 h-10 text-brand-blue mx-auto mb-4" />
                <h3 className="text-3xl font-black text-brand-dark mb-2">50K+</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Happy Viewers</p>
              </div>
              <div className="bg-brand-dark p-8 rounded-[32px] border border-slate-800 shadow-xl text-center">
                <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-3xl font-black text-white mb-2">4.9/5</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Average Rating</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-brand-blue p-8 rounded-[32px] shadow-xl text-center">
                <h3 className="text-4xl font-black text-white mb-2">8+</h3>
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-lg text-center transform -translate-y-8">
                <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="text-3xl font-black text-brand-dark mb-2">99.9%</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Server Uptime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-white rounded-[40px] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-slate-200/50">
          <h2 className="text-3xl font-black text-center text-brand-dark tracking-tight mb-12">
            Why Choose Our Team?
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Transparency</h3>
              <p className="text-slate-500 text-sm leading-relaxed">No hidden fees, no surprise price hikes, and absolutely no restrictive contracts. We earn your business every single month.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Star className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Quality First</h3>
              <p className="text-slate-500 text-sm leading-relaxed">We continually invest in our server infrastructure to ensure true 4K streaming without the frustrating buffering during peak hours.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-brand-blue" size={28} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-3">Local Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">When you reach out for help, you&apos;re talking to our Canadian support team who understands your needs and resolves issues instantly.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
