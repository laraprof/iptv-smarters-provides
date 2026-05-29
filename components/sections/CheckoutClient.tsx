"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ShieldCheck, Zap, ArrowRight, Lock } from "lucide-react";
import { pricingData } from "@/constants/pricing";
import { siteConfig } from "@/config/site";

interface PricingPlan {
  duration: string;
  price: string;
  features: string[];
}

function CheckoutContent() {
  const searchParams = useSearchParams();

  // ── Whitelist URL params against known-good values ────────────────────────
  // Prevents URL injection: /checkout?plan=<script>alert(1)</script>
  const VALID_DEVICES = Object.keys(pricingData) as string[];
  const VALID_PLANS   = Array.from(
    new Set(Object.values(pricingData).flat().map((p) => p.duration))
  );

  const rawPlan    = searchParams.get("plan")    ?? "12 Month";
  const rawDevices = searchParams.get("devices") ?? "1 Device";

  const planName   = VALID_PLANS.includes(rawPlan)    ? rawPlan    : "12 Month";
  const devicesName = VALID_DEVICES.includes(rawDevices) ? rawDevices : "1 Device";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; whatsapp?: string }>({});

  // ── Sanitize plain text — strip tags ────────────────────────────────────
  const sanitize = (v: string) => v.replace(/<[^>]*>/g, "").trim();

  // Find the selected plan details
  const pricingMap = pricingData as Record<string, PricingPlan[]>;
  const selectedDevicesData = pricingMap[devicesName] || pricingMap["1 Device"];
  const selectedPlan = selectedDevicesData.find((p) => p.duration === planName) || selectedDevicesData[0];

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();

    const name     = sanitize(formData.name);
    const email    = sanitize(formData.email);
    const whatsapp = sanitize(formData.whatsapp);

    // ── Validate ────────────────────────────────────────────────────────────
    const errs: typeof errors = {};
    if (name.length < 2)                                              errs.name     = "Please enter your full name.";
    if (!/^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email))   errs.email    = "Please enter a valid email.";
    if (whatsapp.length < 7)                                          errs.whatsapp = "Please enter a valid phone number.";

    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});

    const message = `Hello IPTV Canada! 🇨🇦\n\nI would like to subscribe to the following plan:\n\n- Plan: ${planName}\n- Connection: ${devicesName}\n- Price: $${selectedPlan.price} CA\n\nMy Details:\n- Name: ${name}\n- Email: ${email}\n- WhatsApp: ${whatsapp}\n\nPlease provide payment instructions.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid lg:grid-cols-12 gap-12 items-start">
      {/* Left Column: Form */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 sm:p-12 shadow-xl shadow-slate-200/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-brand-dark tracking-tight">Secure Checkout</h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Direct WhatsApp Activation</p>
            </div>
          </div>

          <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className={`w-full bg-slate-50 border rounded-2xl px-6 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-400/10" : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/5"}`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <p className="text-xs text-red-500 font-semibold px-1 mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">WhatsApp Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  className={`w-full bg-slate-50 border rounded-2xl px-6 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.whatsapp ? "border-red-400 focus:border-red-400 focus:ring-red-400/10" : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/5"}`}
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                />
                {errors.whatsapp && <p className="text-xs text-red-500 font-semibold px-1 mt-1">{errors.whatsapp}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black text-brand-dark uppercase tracking-widest ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className={`w-full bg-slate-50 border rounded-2xl px-6 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 transition-all ${errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/10" : "border-slate-200 focus:border-brand-blue focus:ring-brand-blue/5"}`}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p className="text-xs text-red-500 font-semibold px-1 mt-1">{errors.email}</p>}
            </div>

            <div className="pt-4">
              <button 
                type="submit"
                className="w-full bg-brand-dark hover:bg-slate-900 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-xl shadow-slate-900/10 active:scale-[0.98]"
              >
                COMPLETE ORDER VIA WHATSAPP
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-4 font-bold uppercase tracking-widest">
                🚀 Instant Activation After Payment
              </p>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-slate-400">
               <ShieldCheck size={16} className="text-brand-blue" />
               <span className="text-[10px] font-black uppercase tracking-widest">Secure SSL</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               <Zap size={16} className="text-brand-blue" />
               <span className="text-[10px] font-black uppercase tracking-widest">Instant Setup</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
               <CheckCircle2 size={16} className="text-brand-blue" />
               <span className="text-[10px] font-black uppercase tracking-widest">Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Order Summary */}
      <div className="lg:col-span-5">
        <div className="bg-brand-dark rounded-[32px] p-8 sm:p-10 text-white sticky top-32 overflow-hidden border border-white/5 shadow-2xl">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 blur-3xl rounded-full" />
          
          <h3 className="text-xl font-black tracking-tight mb-8">Order Summary</h3>

          <div className="space-y-6">
            <div className="flex justify-between items-start pb-6 border-b border-white/10">
              <div>
                <p className="text-brand-blue text-[10px] font-black uppercase tracking-[2px] mb-1">Subscription Plan</p>
                <p className="text-xl font-black">{planName} Premium</p>
                <p className="text-slate-400 text-sm font-semibold mt-1">{devicesName} Connection</p>
              </div>
              <p className="text-2xl font-black">${selectedPlan.price} <span className="text-xs text-slate-500 uppercase tracking-widest">CA</span></p>
            </div>

            <div className="space-y-4 py-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-semibold">Subtotal</span>
                <span className="font-black">${selectedPlan.price}.00</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400 font-semibold">Setup Fee</span>
                <span className="text-brand-blue font-black uppercase tracking-widest text-[10px]">Free</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20 flex items-center justify-between">
              <span className="text-lg font-black">Total Due Today</span>
              <span className="text-3xl font-black text-brand-blue">${selectedPlan.price}.00</span>
            </div>
          </div>

          {/* Features List */}
          <div className="mt-10 space-y-3">
             {["25,000+ Live Channels", "120,000+ VODs (4K Quality)", "EPG & Catch-up Included", "No Contracts / Cancel Anytime"].map((feat, i) => (
               <div key={i} className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  {feat}
               </div>
             ))}
          </div>

          <Link href="/pricing" className="mt-10 flex items-center justify-center gap-2 text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
             <ArrowRight size={14} className="rotate-180" /> Change Plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export function CheckoutClient() {
  return (
    <section className="bg-[#f8fafc] pt-40 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div className="text-center py-20 text-slate-500 font-bold uppercase tracking-widest">Loading Order...</div>}>
          <CheckoutContent />
        </Suspense>
      </div>
    </section>
  );
}
