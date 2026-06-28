import Image from "next/image";
import { Video, Clock, Trophy, ChevronRight } from "lucide-react";

export function Sports() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="text-left">
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6">
              Never Miss Your <span className="text-brand-blue">Favorite Game</span> Again
            </h2>
            
            <p className="text-slate-500 text-base sm:text-lg mb-12 max-w-xl leading-relaxed">
              Experience every thrilling moment with our premium sports streaming. 
              From NHL playoffs to NFL championships, enjoy crystal-clear 4K coverage 
              of all major Canadian and international sports events.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 text-brand-blue">
                  <Video size={20} />
                </div>
                <h3 className="font-black text-slate-900 text-sm mb-2">Live HD Streams</h3>
                <p className="text-slate-500 text-[11px] leading-tight">Crystal clear 4K quality for every game</p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 text-brand-blue">
                  <Clock size={20} />
                </div>
                <h3 className="font-black text-slate-900 text-sm mb-2">24/7 Coverage</h3>
                <p className="text-slate-500 text-[11px] leading-tight">Around the clock sports entertainment</p>
              </div>

              <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-4 text-brand-blue">
                  <Trophy size={20} />
                </div>
                <h3 className="font-black text-slate-900 text-sm mb-2">All Major Leagues</h3>
                <p className="text-slate-500 text-[11px] leading-tight">NHL, NFL, NBA, MLB and more</p>
              </div>
            </div>

            {/* Price Card */}
            <div className="bg-slate-50/50 border border-slate-100 p-8 rounded-3xl inline-flex flex-col sm:flex-row items-center gap-8">
              <div>
                <h4 className="font-black text-slate-900 text-lg mb-1">Start Watching Today</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-brand-blue">$19</span>
                  <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">CAD/month</span>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-blue/20">
                View All Plans <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Side: Image Collage */}
          <div className="relative">
            <div className="relative z-10 scale-110">
              <Image 
                src="/images/sports-collage.png" 
                alt="Live NHL, NBA, and international sports streaming available on the best IPTV Canada service" 
                width={800} 
                height={800} 
                className="w-full h-auto drop-shadow-2xl"
              />
              {/* Floating "LIVE 4K" Badge */}
              <div className="absolute top-[15%] right-[5%] bg-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-slate-100 animate-bounce">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-black text-slate-900 tracking-tighter">LIVE 4K</span>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/5 rounded-full blur-[100px] -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
