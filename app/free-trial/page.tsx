import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Play, Shield, Zap, Star, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "Try IPTV Canada Free — 24h Trial, No Credit Card",
  description:
    "Get a free 24-hour IPTV trial in Canada. Test 25,000+ live channels, 4K quality, and Canadian sports — no credit card required. Cancel anytime.",
  keywords: [
    "free iptv trial canada",
    "iptv free trial canada",
    "iptv trial no credit card",
    "free iptv canada",
    "iptv test canada",
    "24 hour iptv trial",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Try IPTV Canada Free — 24h Trial, No Credit Card",
    description:
      "Test 25,000+ live channels, Canadian sports, and 4K quality with a free 24-hour IPTV trial. No credit card needed.",
    url: `${siteConfig.url}/free-trial`,
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IPTV Trial Canada — 24h, No Credit Card",
    description: "Test 25,000+ channels free for 24 hours. No commitment.",
  },
  alternates: {
    canonical: `${siteConfig.url}/free-trial`,
  },
};

const faqs = [
  {
    question: "Do I need a credit card for the free trial?",
    answer:
      "No. Our 24-hour free trial requires no credit card or payment information of any kind. Simply contact us via WhatsApp or the form below and we'll activate your trial immediately.",
  },
  {
    question: "How long does the free trial last?",
    answer:
      "Your free trial gives you full access to all 25,000+ channels and the VOD library for 24 hours. This is enough time to thoroughly test the service during prime-time hours, live sports events, and HD streaming.",
  },
  {
    question: "What can I test during my trial?",
    answer:
      "Everything. Live Canadian channels (CBC, CTV, TSN, Sportsnet), international channels, sports events, movies, series, and 4K streams. We recommend testing during peak evening hours to see how the server handles load.",
  },
  {
    question: "Which devices are supported for the trial?",
    answer:
      "The trial works on all supported devices: Amazon Firestick, Android TV, Apple TV, iOS, Android smartphones, Smart TVs (Samsung/LG), and Windows/Mac via browser. We'll send you setup guides instantly.",
  },
  {
    question: "What happens after the trial ends?",
    answer:
      "After 24 hours, your access will pause automatically. There's no automatic charge. You can then choose a paid plan starting at $19 CAD/month — or simply walk away with no obligation.",
  },
  {
    question: "How do I activate my trial?",
    answer:
      "Click the 'Start Free Trial' button below and fill in your name and email. We'll send you your M3U URL and login credentials within minutes. No waiting — instant activation.",
  },
];

const trialFeatures = [
  "25,000+ live channels including all Canadian networks",
  "120,000+ VOD movies and TV series",
  "4K Ultra HD + HD + SD stream quality",
  "Canadian sports: TSN, Sportsnet, RDS, TVA Sports",
  "99.9% uptime — tested during peak hours",
  "Works on Firestick, Android TV, Apple TV, iOS, and more",
  "EPG (Electronic Program Guide) included",
  "No buffering guarantee or we extend your trial",
];

export default function FreeTrialPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Free Trial", item: `${siteConfig.url}/free-trial` },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2E5496]/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <li><Link href="/" className="hover:text-[#2E5496] transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-slate-400">Free Trial</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6 text-[#2E5496]">
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
            <span className="text-[10px] font-black uppercase tracking-[4px] text-[#2E5496]">No Credit Card Required</span>
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            Try IPTV Canada Free<br />
            <span className="text-[#2E5496]">24-Hour Trial</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Test all 25,000+ channels, Canadian sports, 4K streams, and our VOD library completely free for 24 hours.
            No credit card. No commitment. Cancel any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout?plan=Trial&devices=1 Device"
              className="inline-flex items-center justify-center gap-2 bg-[#2E5496] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-2xl shadow-[#2E5496]/30"
            >
              <Play size={16} fill="white" />
              Start Free Trial Now
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all border border-white/10"
            >
              View IPTV Canada Plans
            </Link>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-slate-400 text-xs font-bold">
            <span className="flex items-center gap-1.5"><Shield size={14} className="text-green-400" /> No credit card</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-400" /> Instant activation</span>
            <span className="flex items-center gap-1.5"><Star size={14} className="text-yellow-400" /> 4.9/5 rated</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" /> 50,000+ subscribers</span>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B2A4A] tracking-tight mb-4">
              Everything Included in Your Free Trial
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium">
              Your 24-hour trial is identical to our paid plans. Full access, no restrictions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {trialFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-100 rounded-xl p-4">
                <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B2A4A] tracking-tight mb-4">
              How to Get Your Free IPTV Trial in Canada
            </h2>
            <p className="text-slate-500 font-medium">Three steps, under 5 minutes.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Request Your Trial", desc: "Click 'Start Free Trial' and fill in your name and email address. No payment info required." },
              { step: "2", title: "Receive Credentials", desc: "We'll send your M3U playlist URL and login details instantly via email or WhatsApp." },
              { step: "3", title: "Start Streaming", desc: "Open your IPTV app (Smarters Pro, TiviMate, or GSE), enter your credentials, and enjoy." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-[#2E5496] text-white font-black text-xl flex items-center justify-center mx-auto mb-5">
                  {step}
                </div>
                <h3 className="font-black text-[#1B2A4A] mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/checkout?plan=Trial&devices=1 Device"
              className="inline-flex items-center gap-2 bg-[#2E5496] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#2E5496]/20"
            >
              Get My Free Trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#1B2A4A] tracking-tight mb-4">
              Free IPTV Trial — Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-[#2E5496] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-black text-[#1B2A4A] mb-2 text-sm">{faq.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">
              Still have questions? We reply in under 5 minutes.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#2E5496] text-[#2E5496] hover:bg-[#2E5496] hover:text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
