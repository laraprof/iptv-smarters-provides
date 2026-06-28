import Image from "next/image";
import { Briefcase, ArrowRight } from "lucide-react";

export function Reseller() {
  const tags = ["IPTV Reseller", "Wholesale Pricing", "White Label", "Business Partner", "IPTV supplier"];

  return (
    <section className="bg-brand-dark py-24 overflow-hidden relative">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-brand-blue/5 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 mb-4 text-brand-blue">
            <Briefcase size={18} />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px]">IPTV Business</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
            IPTV Service Reseller Program
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-6">
              Start Your <span className="text-brand-blue">IPTV Business</span> in Canada Today
            </h3>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Become an IPTV reseller with our white-label solution. High-profit wholesale pricing, complete dealer 
              support, and instant IPTV provider access. Perfect IPTV franchise opportunity for Canadian IPTV 
              entrepreneurs looking to start their own streaming business.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 text-slate-300 text-[10px] font-bold uppercase tracking-wider rounded-full hover:bg-brand-blue/10 hover:border-brand-blue transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <button className="flex items-center gap-3 bg-brand-blue text-white px-10 py-5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-cyan hover:scale-105 transition-all shadow-xl shadow-brand-blue/20">
              Start IPTV Business <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <Image 
                src="/images/reseller-handshake.png" 
                alt="Start a profitable IPTV reseller business in Canada with our premium white-label IPTV provider program" 
                width={700} 
                height={700} 
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.2)]"
              />
            </div>
            
            {/* Background Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-brand-blue/10 rounded-full -z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] border border-brand-blue/5 rounded-full -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
