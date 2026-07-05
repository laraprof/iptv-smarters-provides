"use client";
import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { faqData } from "@/constants/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="bg-[#f8fafc] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="text-brand-blue" size={18} aria-hidden="true" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue-dark">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tighter">
            Discover Premium Canadian IPTV Service
          </h2>
        </div>

        {/* FAQ Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {faqData.slice(0, Math.ceil(faqData.length / 2)).map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md group"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                >
                  <span className="text-[13px] sm:text-[14px] font-black text-slate-800 tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === idx ? 'bg-brand-blue rotate-180' : 'bg-slate-50'}`}>
                    {openIndex === idx ? (
                      <Minus className="text-white" size={14} strokeWidth={3} />
                    ) : (
                      <Plus className="text-brand-blue" size={14} strokeWidth={3} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-slate-500 text-[13px] leading-relaxed border-t border-slate-50">
                    <p className="font-medium text-slate-700 mb-3">{faq.answer}</p>
                    {faq.longAnswer && <p>{faq.longAnswer}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {faqData.slice(Math.ceil(faqData.length / 2)).map((faq, idx) => {
              const actualIdx = idx + Math.ceil(faqData.length / 2);
              return (
                <div 
                  key={actualIdx} 
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md group"
                >
                  <button
                    onClick={() => toggleFAQ(actualIdx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="text-[13px] sm:text-[14px] font-black text-slate-800 tracking-tight leading-tight group-hover:text-brand-blue transition-colors">
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === actualIdx ? 'bg-brand-blue rotate-180' : 'bg-slate-50'}`}>
                      {openIndex === actualIdx ? (
                        <Minus className="text-white" size={14} strokeWidth={3} />
                      ) : (
                        <Plus className="text-brand-blue" size={14} strokeWidth={3} />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === actualIdx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2 text-slate-500 text-[13px] leading-relaxed border-t border-slate-50">
                      <p className="font-medium text-slate-700 mb-3">{faq.answer}</p>
                      {faq.longAnswer && <p>{faq.longAnswer}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6">Still have more questions? Don&apos;t hesitate to contact us.</p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-blue/20"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
