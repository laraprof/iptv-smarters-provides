import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV on Firestick Canada 2026 — Complete Setup Guide",
  description:
    "Install IPTV on your Amazon Firestick in Canada. Step-by-step guide to setting up IPTV Smarters Pro or TiviMate on Firestick 4K. Works with Canadian channels and sports.",
  keywords: [
    "iptv firestick canada",
    "how to install iptv on firestick canada",
    "best iptv for firestick canada",
    "iptv smarters firestick canada",
    "firestick iptv setup canada 2026",
    "tivimate firestick canada",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "IPTV on Firestick Canada — Step-by-Step Setup Guide 2026",
    description: "Install IPTV on Amazon Firestick in Canada. Works with all Canadian channels and sports.",
    url: `${siteConfig.url}/iptv-firestick-canada`,
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "article",
  },
  alternates: {
    canonical: `${siteConfig.url}/iptv-firestick-canada`,
  },
};

const steps = [
  {
    title: "Enable Apps from Unknown Sources on Firestick",
    description:
      "Go to Settings → My Fire TV → Developer Options → Apps from Unknown Sources → Enable. This allows you to install IPTV Smarters Pro which is sideloaded.",
    warning: null,
  },
  {
    title: "Install the Downloader App",
    description:
      "Search for 'Downloader' in the Firestick app store (by AFTVnews) and install it. This is the easiest way to sideload APK files on Firestick.",
    warning: null,
  },
  {
    title: "Download IPTV Smarters Pro APK",
    description:
      "Open Downloader and enter the URL for the IPTV Smarters Pro APK. Alternatively, search for 'IPTV Smarters' directly in the Amazon App Store — it may appear there depending on your region.",
    warning: "Make sure to download from the official IPTV Smarters website to avoid modified APKs.",
  },
  {
    title: "Install and Open IPTV Smarters Pro",
    description:
      "After the download completes, click Install. Once installed, open IPTV Smarters Pro. Accept any permissions it requests.",
    warning: null,
  },
  {
    title: "Add Your IPTV Canada Playlist",
    description:
      "When IPTV Smarters Pro opens, choose 'Add User'. Select 'Xtream Codes API' and enter the server URL, username, and password provided by IPTV Canada when you purchased your subscription.",
    warning: null,
  },
  {
    title: "Browse Channels and Start Streaming",
    description:
      "After adding your account, the app will load all your channels, VOD, and series. Navigate to 'Live TV' to find Canadian channels like CBC, CTV, TSN, and Sportsnet.",
    warning: null,
  },
];

export default function IptvFirestickCanadaPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install IPTV on Amazon Firestick in Canada",
    description:
      "Step-by-step guide to setting up IPTV Smarters Pro on Amazon Firestick for Canadian subscribers.",
    totalTime: "PT15M",
    supply: [
      { "@type": "HowToSupply", name: "Amazon Firestick (any model)" },
      { "@type": "HowToSupply", name: "IPTV Canada subscription or free trial" },
      { "@type": "HowToSupply", name: "Wi-Fi internet connection (minimum 10 Mbps)" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Downloader app by AFTVnews" },
      { "@type": "HowToTool", name: "IPTV Smarters Pro APK" },
    ],
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "IPTV Firestick Canada",
        item: `${siteConfig.url}/iptv-firestick-canada`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2E5496]/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <li>
                <Link href="/" className="hover:text-[#2E5496] transition-colors">Home</Link>
              </li>
              <li>/</li>
              <li className="text-slate-400">IPTV Firestick Canada</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
            <span className="text-[10px] font-black uppercase tracking-[4px] text-[#2E5496]">Complete Setup Guide 2026</span>
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-tight">
            IPTV on Firestick Canada:<br />
            <span className="text-[#2E5496]">Step-by-Step 2026</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium mb-8">
            Learn how to install and set up IPTV on your Amazon Firestick in Canada. Works with
            Firestick Lite, Firestick 4K, and Fire TV Cube. Setup takes under 15 minutes.
          </p>
          <div className="flex flex-wrap gap-6 text-xs font-bold text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" /> Works on all Firestick models</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-green-400" /> Canadian channels included</span>
            <span className="flex items-center gap-1.5"><Zap size={14} className="text-yellow-400" /> Under 15 minutes setup</span>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-[#1B2A4A] mb-6">What You Need Before Starting</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "📺", label: "Amazon Firestick", note: "Any model: Lite, 4K, 4K Max, or Fire TV Cube" },
              { icon: "📶", label: "Internet Connection", note: "Minimum 10 Mbps for HD. 25 Mbps for 4K" },
              { icon: "🔑", label: "IPTV Canada Subscription", note: "Or a free 24-hour trial — no credit card needed" },
            ].map(({ icon, label, note }) => (
              <div key={label} className="bg-white border border-slate-100 rounded-xl p-4">
                <div className="text-2xl mb-2">{icon}</div>
                <div className="font-black text-[#1B2A4A] text-sm">{label}</div>
                <div className="text-slate-500 text-xs mt-1">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-[#1B2A4A] tracking-tight mb-12">
            How to Install IPTV on Firestick — Step by Step
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#2E5496] text-white font-black flex items-center justify-center shrink-0 text-sm">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-[#1B2A4A] mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  {step.warning && (
                    <div className="mt-3 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                      <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                      <span className="text-amber-700 text-xs font-semibold">{step.warning}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2A4A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Need an IPTV Service for Your Firestick?
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            IPTV Canada is optimized for Firestick with dedicated servers for Canadian subscribers.
            Try it free for 24 hours — no credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/free-trial"
              className="bg-[#2E5496] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#2E5496]/30"
            >
              Start Free Trial
            </Link>
            <Link
              href="/iptv-apps"
              className="bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all border border-white/10"
            >
              Compare IPTV Apps
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
