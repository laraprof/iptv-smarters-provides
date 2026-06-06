import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShoppingCart, Tv, Users, Film, Award, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-white pt-20 pb-15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Circular Collage Section */}
          <div className="relative order-2 lg:order-1 flex justify-center w-full px-4 sm:px-0 overflow-hidden">
            <div className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[450px] aspect-square">
              {/* The Circle Container */}
              <div className="absolute inset-0 rounded-full overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 border-4 border-white shadow-2xl">
                {/* Segment 1: Top Left */}
                <div className="bg-slate-200 relative overflow-hidden">
                   <Image 
                    src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400" 
                    alt="Family watching TV in a modern living room"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-w-7xl) 25vw, 225px"
                   />
                </div>
                {/* Segment 2: Top Right */}
                <div className="bg-slate-300 relative overflow-hidden">
                   <Image 
                    src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400" 
                    alt="Close up of a 4K TV screen showing a movie"
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 25vw, 225px"
                   />
                </div>
                {/* Segment 3: Bottom Left */}
                <div className="bg-slate-400 relative overflow-hidden">
                   <Image 
                    src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=400" 
                    alt="Sports fan cheering at a live game on TV"
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 25vw, 225px"
                   />
                </div>
                {/* Segment 4: Bottom Right */}
                <div className="bg-slate-500 relative overflow-hidden">
                   <Image 
                    src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?auto=format&fit=crop&q=80&w=400" 
                    alt="Home theater setup with high quality streaming"
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 25vw, 225px"
                   />
                </div>
              </div>

              {/* Center Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 xs:w-32 xs:h-32 sm:w-48 sm:h-48 rounded-full bg-brand-blue border-4 sm:border-[6px] border-white shadow-xl flex flex-col items-center justify-center text-white p-2 sm:p-4 text-center z-10 animate-pulse-slow">
                  <span className="text-xl xs:text-3xl sm:text-5xl font-black leading-none">8+</span>
                  <span className="text-[8px] xs:text-[10px] sm:text-sm font-bold uppercase tracking-wider mt-1">Years of Excellence</span>
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="absolute inset-[-10px] sm:inset-[-20px] border border-brand-blue/10 rounded-full animate-spin-slow" />
              <div className="absolute inset-[-20px] sm:inset-[-40px] border border-brand-blue/5 rounded-full animate-spin-slow-reverse" />
            </div>
          </div>

          {/* Text Content Section */}
          <div className="order-1 lg:order-2 w-full">
            <div className="flex items-center gap-2 mb-6">
              <Radio className="text-brand-blue" size={18} aria-hidden="true" />
              <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-brand-blue-dark">IPTV CANADA</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 sm:mb-8 tracking-tighter">
              Best IPTV Canada <br />
              <span className="text-brand-blue">Service In 2026</span>
            </h1>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed max-w-xl">
              Get instant access to over 25,000 live TV channels and a huge library of on-demand content. Watch in HD or 4K with fast, reliable Canadian IPTV subscription.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Interac e-Transfer",
                "Premium Service",
                "Reliable Streaming"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-blue" size={20} />
                  <span className="font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 text-sm mb-10 leading-relaxed max-w-xl">
              Enjoy live sports, news, movies, and shows from around the world. IPTV Canada offers premium streaming with 24/7 Canadian support and no long-term contracts. As Canada&apos;s premier IPTV provider, we deliver cutting-edge streaming technology with guaranteed 99.9% uptime.
            </p>

            <Link 
              href="/pricing"
              className="inline-flex items-center gap-3 bg-brand-blue hover:bg-blue-700 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-2xl shadow-brand-blue/30 active:scale-95 text-lg uppercase tracking-wider"
            >
              <ShoppingCart size={24} />
              Choose A Plan
            </Link>
          </div>
        </div>

        {/* Feature Grid Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 sm:mt-32">
          {[
            { icon: <Tv />, title: "25000+", subtitle: "FHD Channels", color: "text-blue-500" },
            { icon: <Users />, title: "5000+", subtitle: "Active Users", color: "text-brand-blue" },
            { icon: <Film />, title: "120000+", subtitle: "Movies/Series", color: "text-cyan-500" },
            { icon: <Award />, title: "1000+", subtitle: "Canadian Reviews", color: "text-blue-600" },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 group">
              <div className={`p-4 rounded-2xl bg-slate-50 ${item.color} group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-900 leading-tight">{item.title}</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
