import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, XCircle, Tv, Smartphone, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "Best IPTV Apps for Canada in 2026 — Ranked & Compared",
  description:
    "Compare the best IPTV apps for Canada: TiviMate, IPTV Smarters Pro, GSE Smart IPTV, and Perfect Player. Full pros/cons and setup guide for Firestick, Android TV, and iOS.",
  keywords: [
    "best iptv app canada",
    "iptv smarters pro canada",
    "tivimate canada",
    "gse smart iptv",
    "iptv apps firestick",
    "best iptv player android tv",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Best IPTV Apps for Canada 2026 — TiviMate vs Smarters Pro vs GSE",
    description: "Full comparison of the best IPTV apps for Canadian subscribers. Find the right app for your device.",
    url: `${siteConfig.url}/iptv-apps`,
    siteName: "IPTV Canada",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/iptv-apps`,
  },
};

const apps = [
  {
    rank: 1,
    name: "TiviMate Premium",
    badge: "🏆 Best Overall",
    tagline: "The closest thing to a real cable box experience.",
    platforms: ["Android TV", "Amazon Firestick"],
    rating: 4.9,
    price: "~$5/year",
    pros: [
      "Cable-TV-style grid EPG guide",
      "Multi-panel layout (watch + browse simultaneously)",
      "Recording to external USB",
      "Auto-update channels",
      "Parental controls",
      "Custom channel groups",
      "Catch-up TV support",
    ],
    cons: [
      "Android TV / Firestick only",
      "Requires paid companion app for full features",
      "No iOS support",
    ],
    bestFor: "Firestick and Android TV users who want the best grid-guide experience",
    setupUrl: "/blog/install-activate-tivimate-on-android-tv",
    highlight: true,
  },
  {
    rank: 2,
    name: "IPTV Smarters Pro",
    badge: "⚡ Most Compatible",
    tagline: "The most widely supported IPTV player on the market.",
    platforms: ["iOS", "Android", "Android TV", "Firestick", "Web"],
    rating: 4.7,
    price: "Free / ~$5 (Pro)",
    pros: [
      "Works on virtually every device",
      "Multi-screen support (watch 4 channels at once)",
      "VPN integration support",
      "External player support (MX Player, VLC)",
      "Clean, modern UI",
      "Series & movies separated from live TV",
    ],
    cons: [
      "Free version has ads",
      "EPG can lag on large M3U lists",
      "Less polished than TiviMate on TV",
    ],
    bestFor: "Users on multiple devices including iOS who need one app everywhere",
    setupUrl: "/blog/how-to-install-iptv-smarters-pro-on-firestick-google-android-tv",
    highlight: false,
  },
  {
    rank: 3,
    name: "GSE Smart IPTV",
    badge: "📱 Best for iOS",
    tagline: "The top-rated IPTV player for Apple devices.",
    platforms: ["iOS", "macOS", "Apple TV", "Android"],
    rating: 4.6,
    price: "~$3 one-time",
    pros: [
      "Best IPTV app for iPhone and iPad",
      "Works on Apple TV natively",
      "Excellent EPG display",
      "Supports M3U + Xtream Codes",
      "PiP (Picture-in-Picture) on iOS",
      "One-time purchase, no subscription",
    ],
    cons: [
      "UI can feel dated on TV",
      "Less powerful than TiviMate on Firestick",
      "Occasional crashes with very large lists",
    ],
    bestFor: "iPhone, iPad, and Apple TV users who want native iOS performance",
    setupUrl: null,
    highlight: false,
  },
  {
    rank: 4,
    name: "Perfect Player IPTV",
    badge: "🎯 Best Free Option",
    tagline: "A fully-featured free IPTV player for Android.",
    platforms: ["Android", "Android TV", "Firestick"],
    rating: 4.4,
    price: "Free",
    pros: [
      "100% free, no ads",
      "Lightweight and fast",
      "Good EPG support",
      "Customizable interface",
      "Works on older Firestick models",
    ],
    cons: [
      "No iOS support",
      "Less active development",
      "UI less polished than TiviMate",
      "No recording feature",
    ],
    bestFor: "Budget-conscious users or those with older Android TV devices",
    setupUrl: null,
    highlight: false,
  },
];

export default function IptvAppsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Best IPTV Apps Canada", item: `${siteConfig.url}/iptv-apps` },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2E5496]/10 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <li><Link href="/" className="hover:text-[#2E5496] transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-slate-400">IPTV Apps</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 mb-6 text-[#2E5496]">
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
            <span className="text-[10px] font-black uppercase tracking-[4px]">Updated for 2026</span>
            <div className="w-2 h-2 rotate-45 bg-[#2E5496]" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-tight max-w-3xl">
            Best IPTV Apps for Canada in <span className="text-[#2E5496]">2026</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
            We tested TiviMate, IPTV Smarters Pro, GSE Smart IPTV, and Perfect Player with Canadian servers.
            Here&apos;s our honest verdict — ranked by performance, not sponsorship.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-[#1B2A4A] tracking-tight mb-8">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-xl">App</th>
                  <th className="text-left px-4 py-3 font-bold">Platforms</th>
                  <th className="text-left px-4 py-3 font-bold">Rating</th>
                  <th className="text-left px-4 py-3 font-bold">Price</th>
                  <th className="text-left px-4 py-3 font-bold rounded-tr-xl">Best For</th>
                </tr>
              </thead>
              <tbody>
                {apps.map((app, i) => (
                  <tr key={app.name} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 font-bold text-[#1B2A4A]">
                      {app.highlight && <span className="text-yellow-500 mr-1">★</span>}
                      {app.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{app.platforms.join(", ")}</td>
                    <td className="px-4 py-3">
                      <span className="flex items-center gap-1 text-yellow-500 font-bold">
                        <Star size={13} fill="currentColor" />
                        {app.rating}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{app.price}</td>
                    <td className="px-4 py-3 text-slate-600 text-xs">{app.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* App Details */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {apps.map((app) => (
            <div
              key={app.name}
              id={`app-${app.rank}`}
              className={`rounded-3xl border p-8 sm:p-10 ${app.highlight ? "border-[#2E5496]/30 bg-slate-50 shadow-xl shadow-slate-200/50" : "border-slate-100 bg-white"}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#2E5496] mb-2 block">{app.badge}</span>
                  <h2 className="text-2xl font-black text-[#1B2A4A] tracking-tight">
                    #{app.rank} {app.name}
                  </h2>
                  <p className="text-slate-500 font-medium mt-1">{app.tagline}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} fill="#EAB308" className="text-yellow-500" />
                  <span className="font-black text-[#1B2A4A] text-lg">{app.rating}</span>
                  <span className="text-slate-400 text-sm">/5.0</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {app.platforms.map((p) => (
                  <span key={p} className="text-[10px] font-bold uppercase tracking-wide bg-[#2E5496]/10 text-[#2E5496] px-2.5 py-1 rounded-full">
                    {p}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-black text-[#1B2A4A] text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-green-500" /> Pros
                  </h3>
                  <ul className="space-y-2">
                    {app.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-green-500 mt-0.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-black text-[#1B2A4A] text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                    <XCircle size={14} className="text-red-400" /> Cons
                  </h3>
                  <ul className="space-y-2">
                    {app.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                        <XCircle size={14} className="text-red-400 mt-0.5 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {app.setupUrl && (
                <div className="mt-6">
                  <Link
                    href={app.setupUrl}
                    className="inline-flex items-center gap-2 text-[#2E5496] font-black text-sm hover:underline"
                  >
                    View Setup Guide →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1B2A4A]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white tracking-tight mb-4">
            Ready to Pick Your App & Start Streaming?
          </h2>
          <p className="text-slate-400 mb-8">
            All apps above work perfectly with IPTV Canada&apos;s servers. Start with a free 24-hour trial — no credit card.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/free-trial"
              className="bg-[#2E5496] hover:bg-blue-700 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#2E5496]/30"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-black text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all border border-white/10"
            >
              View IPTV Canada Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
