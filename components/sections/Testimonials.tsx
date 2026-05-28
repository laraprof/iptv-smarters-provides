"use client";
import { useState } from "react";
import Image from "next/image";
import { Trophy, Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import { testimonials } from "@/constants/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4 text-brand-blue-dark">
            <Trophy size={18} aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px]">
              Trusted by thousands of Canadians nationwide
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
            Customers Experience With IPTV Canada
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto relative group">
          <div className="bg-white border border-slate-100 rounded-[32px] shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="p-8 sm:p-12">
              {/* Card Top */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full">
                  <CheckCircle size={14} />
                  <span className="text-[10px] font-black uppercase tracking-wider">Verified Customer</span>
                </div>
                <span className="text-slate-600 text-xs font-medium">Reviewed • {testimonials[currentIndex].date}</span>
              </div>

              {/* Profile & Rating */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-blue/10 bg-brand-blue/5 flex items-center justify-center">
                   <span className="text-xl font-black text-brand-blue">
                     {testimonials[currentIndex].name.charAt(0)}
                   </span>
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg leading-tight">{testimonials[currentIndex].name}</p>
                  <p className="text-slate-500 text-sm font-medium mb-1">{testimonials[currentIndex].location}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium italic">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
            </div>

            {/* Slider Navigation Bar */}
            <div className="border-t border-slate-50 p-6 flex items-center justify-center gap-8">
              <button 
                onClick={prev}
                aria-label="Previous review"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>

              <div className="flex gap-2 items-center justify-center min-w-[100px]">
                <span className="text-sm font-black text-slate-800">
                  {currentIndex + 1}
                </span>
                <span className="text-sm font-bold text-slate-600">
                  / {testimonials.length}
                </span>
              </div>

              <button 
                onClick={next}
                aria-label="Next review"
                className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
