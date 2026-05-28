"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { devices, pricingData } from "@/constants/pricing";

export function Pricing() {
  const [activeTab, setActiveTab] = useState(devices[0]);

  return (
    <section id="pricing" className="bg-[#f8fafc] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rotate-45 bg-brand-blue" aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-[4px] text-brand-blue-dark">Pricing</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
          IPTV Subscription Plans Canada
        </h2>
        
        <p className="text-slate-500 text-sm max-w-3xl mx-auto mb-12">
          Choose your ideal IPTV Canada plan with 25,000+ live channels, 4K streaming, and instant activation – all plans include Canadian support with no contracts required.
        </p>

        {/* Tabs Container */}
        <div className="flex justify-center mb-16">
          <div className="bg-[#1a1f26] inline-flex p-1.5 rounded-2xl shadow-2xl w-full max-w-2xl border border-white/5">
            {devices.map((device) => (
              <button
                key={device}
                onClick={() => setActiveTab(device)}
                className={`flex-1 py-3.5 text-[11px] sm:text-[13px] font-black uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  activeTab === device 
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/30" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {device}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingData[activeTab as keyof typeof pricingData].map((plan, idx) => (
            <div 
              key={idx} 
              className="relative group h-full"
            >
              {/* Animated Background Glow (Only on Hover) */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-cyan-500 rounded-[30px] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
              
              <div className="relative h-full bg-[#0f172a] rounded-[28px] overflow-hidden flex flex-col border border-white/5 transition-all duration-500 group-hover:border-transparent group-hover:bg-[#0f172a]/95 backdrop-blur-xl">
                
                {/* Popular Badge (Optional for 12 Month) */}
                {plan.duration === "12 Month" && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-bl-2xl">
                      Best Value
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="pt-12 pb-8 px-8 text-center">
                  <h3 className="text-3xl font-black text-white tracking-tight mb-2 group-hover:text-brand-blue transition-colors duration-300">
                    {plan.duration}
                  </h3>
                  <div className="flex items-center justify-center gap-1.5 opacity-50">
                    <div className="h-px w-8 bg-white" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-[2px]">Premium Plan</span>
                    <div className="h-px w-8 bg-white" />
                  </div>
                </div>

                {/* Price Display */}
                <div className="pb-10 px-8 text-center">
                  <div className="inline-flex items-baseline gap-1 relative">
                    <span className="text-sm font-black text-brand-blue uppercase align-top mr-1">$</span>
                    <span className="text-6xl font-black text-white tracking-tighter transition-transform duration-500 group-hover:scale-110 block">
                      {plan.price}
                    </span>
                    <div className="flex flex-col items-start -ml-1">
                      <span className="text-xs font-black text-brand-blue uppercase leading-none">CA</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase leading-none mt-1">/Period</span>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="px-8 pb-10 flex-1 space-y-4">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 group/feat">
                      <div className="w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 group-hover/feat:bg-brand-blue group-hover/feat:scale-110 transition-all duration-300">
                        <Check className="text-brand-blue group-hover/feat:text-white" size={10} strokeWidth={4} />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 group-hover/feat:text-slate-100 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="p-8 pt-0">
                  <Link 
                    href={`/checkout?plan=${encodeURIComponent(plan.duration)}&devices=${encodeURIComponent(activeTab)}`}
                    className="w-full bg-slate-800/50 hover:bg-brand-blue text-white font-black text-[11px] tracking-widest py-4.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 border border-white/5 hover:border-transparent group-hover:shadow-lg group-hover:shadow-brand-blue/30 active:scale-95"
                  >
                    GET STARTED <Plus size={14} strokeWidth={3} className="group-hover:rotate-90 transition-transform duration-300" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
