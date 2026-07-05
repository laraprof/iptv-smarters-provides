import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Download, Building2, Mail, Link as LinkIcon, FileText } from "lucide-react";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "Press & Media Kit | IPTV Canada",
  description: "Official press resources, media kit, logos, and brand guidelines for IPTV Canada.",
  robots: { index: true, follow: true },
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <Building2 size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">Press & Media</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Media <span className="text-brand-blue">Kit</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to write about IPTV Canada. Find our official brand assets, company boilerplate, and key statistics here.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Column */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-4">Company Boilerplate</h2>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-600 leading-relaxed">
                <p>
                  <strong>IPTV Canada</strong> is a leading provider of premium streaming television services across North America. 
                  Established to provide a reliable, cost-effective alternative to traditional cable, the company delivers over 25,000 live 
                  global channels and a vast video-on-demand library to thousands of subscribers. Utilizing advanced anti-freeze technology 
                  and geographically optimized servers, IPTV Canada ensures a seamless 4K streaming experience for live sports, news, and entertainment.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-4">Brand Assets</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-brand-blue transition-colors">
                  <div className="w-16 h-16 bg-brand-dark rounded-xl flex items-center justify-center mb-4">
                    <svg viewBox="0 0 100 100" className="w-8 h-8">
                      <path d="M30,20 C10,20 10,80 30,80 L70,80 C90,80 90,20 70,20 Z" className="fill-brand-blue" />
                      <path d="M45,35 L65,50 L45,65 Z" fill="white" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-brand-dark">Primary Logo</h3>
                  <p className="text-xs text-slate-500 mb-4">For use on light backgrounds</p>
                  <button className="text-brand-blue text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                    <Download size={14} /> Download SVG
                  </button>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center group hover:border-brand-blue transition-colors bg-slate-900">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                    <svg viewBox="0 0 100 100" className="w-8 h-8">
                      <path d="M30,20 C10,20 10,80 30,80 L70,80 C90,80 90,20 70,20 Z" className="fill-brand-blue" />
                      <path d="M45,35 L65,50 L45,65 Z" fill="white" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white">Light Logo</h3>
                  <p className="text-xs text-slate-400 mb-4">For use on dark backgrounds</p>
                  <button className="text-brand-blue text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                    <Download size={14} /> Download SVG
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-4">Key Statistics</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: "25,000+", label: "Live Channels" },
                  { value: "120,000+", label: "VOD Titles" },
                  { value: "99.9%", label: "Uptime" },
                  { value: "24/7", label: "Support" },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-brand-blue mb-1">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-brand-dark rounded-3xl p-8 text-white">
              <h3 className="font-black text-lg mb-6">Media Contact</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                For press inquiries, interviews, or to request a review account, please contact our media relations team.
              </p>
              <a href="mailto:support@iptvsmartproviders.com" className="flex items-center gap-3 text-brand-blue hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue">
                  <Mail size={16} className="text-brand-blue group-hover:text-white" />
                </div>
                <span className="font-bold">support@<br/>iptvsmartproviders.com</span>
              </a>
            </div>

            <div className="border border-slate-200 rounded-3xl p-8">
              <h3 className="font-black text-brand-dark text-lg mb-4">Linking Guidelines</h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                When linking to us online, please use our exact brand name "IPTV Canada" and link to our homepage.
              </p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600 break-all">
                <LinkIcon size={12} className="shrink-0 text-slate-400" />
                <span>https://iptvsmartproviders.com</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
