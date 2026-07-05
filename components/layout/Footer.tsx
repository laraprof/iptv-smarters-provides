import Link from "next/link";
import { siteConfig } from "@/config/site";
import {  MessageCircle, Mail, MapPin, ShieldCheck, Zap } from "lucide-react";
import { cities } from "@/constants/city-pages";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 text-sm relative overflow-hidden">
      {/* Decorative Gradient Top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-6">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-blue/20 blur-lg rounded-full group-hover:bg-brand-blue/40 transition-all" />
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  <path d="M30,20 C10,20 10,80 30,80 L70,80 C90,80 90,20 70,20 Z" className="fill-brand-blue" />
                  <path d="M45,35 L65,50 L45,65 Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter">IPTV</span>
                <span className="text-[10px] font-bold tracking-[4px] uppercase text-brand-blue -mt-0.5">Canada</span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Elevate your home entertainment with Canada&apos;s most reliable IPTV network. 
              Enjoy 25,000+ live channels and a massive VOD library in stunning 4K quality.
            </p>


          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-xs uppercase tracking-[3px] mb-8">Navigation</h3>
            <ul className="space-y-4">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-500 hover:text-brand-blue transition-colors font-semibold flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/channels" 
                  className="text-slate-500 hover:text-brand-blue transition-colors font-semibold flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                  Channel List
                </Link>
              </li>
              <li>
                <Link 
                  href="/apps" 
                  className="text-slate-500 hover:text-brand-blue transition-colors font-semibold flex items-center gap-2 group"
                >
                  <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                  IPTV Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-xs uppercase tracking-[3px] mb-8">Support</h3>
            <ul className="space-y-4">
              {[
                { label: "Contact Us", href: "/contact" },
                { label: "Installation Guide", href: "/tutorial" },
                { label: "Press & Media", href: "/press" },
                { label: "DMCA Notice", href: "/dmca" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-slate-500 hover:text-brand-blue transition-colors font-semibold flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3.5: Cities We Serve */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-black text-xs uppercase tracking-[3px] mb-8">Cities</h3>
            <ul className="space-y-4">
              {cities.slice(0, 5).map((city) => (
                <li key={city.slug}>
                  <Link 
                    href={`/${city.slug}`} 
                    className="text-slate-500 hover:text-brand-blue transition-colors font-semibold flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-brand-blue transition-colors" />
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Features */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <ShieldCheck size={40} className="text-brand-blue" />
               </div>
               <h4 className="text-white font-black text-xs uppercase tracking-widest mb-4">Official Contact</h4>
               <div className="space-y-4">
                  <a href={`mailto:${siteConfig.supportEmail}`} className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors">
                    <Mail size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <span className="font-semibold text-sm break-all">{siteConfig.supportEmail}</span>
                  </a>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Zap size={16} className="text-brand-blue" />
                    <span className="font-semibold italic text-xs uppercase tracking-widest">24/7 Canadian Support</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap gap-2">
               {["Amazon Fire TV", "Android TV", "Apple TV", "Smart TV"].map((device) => (
                 <span key={device} className="text-[10px] font-black uppercase tracking-tighter px-3 py-1.5 rounded-lg bg-slate-800 text-slate-500 border border-slate-700/50">
                    {device}
                 </span>
               ))}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] font-semibold text-slate-600">
            © {new Date().getFullYear()} <span className="text-slate-400">IPTV Canada</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {["Interac", "Visa", "Mastercard", "Crypto"].map((payment) => (
              <div key={payment} className="bg-white/5 px-3 py-1 rounded-md border border-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}