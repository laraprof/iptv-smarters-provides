import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

export function ContactHero() {
  return (
    <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
          <MessageCircle size={14} className="text-brand-blue" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">Get In Touch</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
          How Can We <span className="text-brand-blue">Help You?</span>
        </h1>
        
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Have questions about your subscription, setup, or technical issues? 
          Our support team is available 24/7 to ensure you have the best IPTV experience in Canada.
        </p>

        {/* Contact Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">WhatsApp Support</h3>
            <p className="text-slate-400 text-xs font-semibold">Fastest response time</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Email Us</h3>
            <p className="text-slate-400 text-xs font-semibold">info@liveiptvstream.com</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center group hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
              <Clock size={24} />
            </div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Availability</h3>
            <p className="text-slate-400 text-xs font-semibold">24/7 Technical Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
