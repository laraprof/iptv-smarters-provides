"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",               href: "/" },
  { label: "Pricing",            href: "/pricing" },
  { label: "Installation Guide", href: "/tutorial" },
  { label: "Reseller",           href: "/reseller" },
  { label: "Blog",               href: "/blog" },
  { label: "DMCA Notice",        href: "/dmca" },
  { label: "Contact Us",         href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[68px] flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          {/* Shield / play icon */}
          <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full group-hover:scale-105 transition-transform duration-300">
              <path d="M30,20 C10,20 10,80 30,80 L70,80 C90,80 90,20 70,20 Z" className="fill-brand-blue" />
              <path d="M45,35 L65,50 L45,65 Z" fill="white" />
              <path d="M35,45 Q50,30 65,45 T35,55" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" className="opacity-40" />
            </svg>
          </div>

          {/* Wordmark */}
          <div className="flex flex-col leading-none">
            <span className="text-[22px] font-[900] text-brand-blue tracking-tighter leading-none">IPTV</span>
            <span className="text-[9px] font-bold tracking-[3px] uppercase text-slate-700 mt-0.5">Canada</span>
          </div>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden lg:flex items-center gap-1 list-none flex-1 justify-center">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-3 py-2 text-[13.5px] font-semibold tracking-tight rounded-md transition-colors duration-150 ${
                    isActive
                      ? "text-brand-blue"
                      : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-brand-blue rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href={siteConfig.trialUrl}
            className="hidden sm:inline-flex items-center bg-brand-blue hover:bg-blue-700 text-white text-[13px] font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-brand-blue/20 active:scale-95 whitespace-nowrap"
          >
            Get Free Trial
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`lg:hidden fixed inset-0 top-[68px] bg-white z-40 transition-transform duration-400 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-0.5">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-2 border-b border-slate-50 text-[15px] font-semibold transition-colors group ${
                    isActive ? "text-brand-blue" : "text-slate-800 hover:text-brand-blue"
                  }`}
                >
                  {item.label}
                  <ChevronRight
                    size={17}
                    className={`transition-colors ${isActive ? "text-brand-blue" : "text-slate-300 group-hover:text-brand-blue"}`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href={siteConfig.trialUrl}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full bg-brand-blue hover:bg-blue-700 text-white text-base font-bold py-4 rounded-2xl shadow-xl shadow-brand-blue/20 transition-all active:scale-95"
            >
              Get Free Trial
            </Link>
          </div>

          <div className="mt-auto py-10 text-center">
            <p className="text-slate-400 text-xs">24/7 Premium Canadian Support</p>
          </div>
        </div>
      </div>
    </header>
  );
}