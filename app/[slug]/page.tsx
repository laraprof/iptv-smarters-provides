import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, MonitorPlay, Zap, ShieldCheck, HelpCircle, Plus, Minus } from "lucide-react";
import { cities, getCityBySlug } from "@/constants/city-pages";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";
import { getLocalServiceSchema, getFAQSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { FAQ } from "@/components/sections/FAQ"; // We will also render global FAQ or create a local one. Let's create a local FAQ component inline.

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  
  if (!city) return {};

  const title = `IPTV ${city.name} | Best Canadian IPTV Service 2026`;
  const description = `Looking for the best IPTV service in ${city.name}, ${city.province}? Stream 25,000+ channels, live sports (${city.team}), and movies in 4K. Buffer-free on ${city.isp.join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      `iptv ${city.name.toLowerCase()}`,
      `best iptv ${city.name.toLowerCase()}`,
      `iptv ${city.provinceCode.toLowerCase()}`,
      `canadian iptv ${city.name.toLowerCase()}`,
      "iptv subscription canada"
    ],
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${slug}`,
      siteName: "IPTV Canada",
      locale: "en_CA",
      type: "website",
    },
    alternates: {
      canonical: `${siteConfig.url}/${slug}`,
    },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const localServiceSchema = getLocalServiceSchema(city.name, city.provinceCode, `${siteConfig.url}/${slug}`);
  const faqSchema = city.faqs ? getFAQSchema(city.faqs) : null;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.url },
    { name: `IPTV ${city.name}`, url: `${siteConfig.url}/${slug}` },
  ]);

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(localServiceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
              <MapPin size={14} className="text-brand-blue" />
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">
                Serving {city.name}, {city.provinceCode}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
              Best IPTV Service in <br className="hidden sm:block" />
              <span className="text-brand-blue">{city.name}, {city.province}</span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Cut the cord in {city.name} with Canada&apos;s most reliable premium IPTV network. 
              Enjoy 25,000+ live channels, local {city.province} news, and live sports featuring the {city.team} in stunning 4K.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/pricing" 
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/20"
              >
                View Subscription Plans
              </Link>
              <Link 
                href="/free-trial" 
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                Get 24H Free Trial
              </Link>
            </div>
          </div>

          {/* Quick Stats/Trust Signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/5">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                <MonitorPlay className="text-brand-blue" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-black tracking-tight">25,000+ Channels</h3>
                <p className="text-slate-500 text-xs font-semibold">Including local {city.name} stations</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                <Zap className="text-brand-blue" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-black tracking-tight">Optimized for {city.name}</h3>
                <p className="text-slate-500 text-xs font-semibold">Works perfectly on {city.isp[0]} & {city.isp[1]}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-brand-blue" size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-white font-black tracking-tight">Anti-Buffer Tech</h3>
                <p className="text-slate-500 text-xs font-semibold">Smooth 4K streaming guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-3xl font-black text-brand-dark tracking-tighter mb-8">
              Why Choose Our IPTV Service in {city.name}?
            </h2>
            
            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-brand-dark">
              {city.content?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 p-6 bg-brand-blue/5 rounded-2xl border border-brand-blue/10 flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div>
                <h3 className="text-lg font-black text-brand-dark mb-2">Need help setting up your device?</h3>
                <p className="text-sm text-slate-600 font-medium">We support Firestick, Android TV, Apple TV, and Smart TVs.</p>
              </div>
              <Link 
                href="/tutorial" 
                className="shrink-0 px-6 py-3 bg-brand-dark text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue transition-colors"
              >
                View Setup Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local FAQ Section */}
      {city.faqs && city.faqs.length > 0 && (
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <HelpCircle className="text-brand-blue" size={18} />
                <span className="text-[10px] font-black uppercase tracking-[4px] text-brand-dark">Local Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tighter">
                {city.name} IPTV FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {city.faqs.map((faq, idx) => (
                <details 
                  key={idx} 
                  className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="font-black text-brand-dark text-sm sm:text-base group-open:text-brand-blue transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-200 group-open:border-brand-blue group-open:bg-brand-blue transition-colors">
                      <Plus size={14} className="text-brand-dark group-open:hidden" />
                      <Minus size={14} className="text-white hidden group-open:block" />
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-slate-600 text-sm leading-relaxed border-t border-slate-100/50">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
