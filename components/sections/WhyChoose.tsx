import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function WhyChoose() {
  return (
    <section className="relative py-24 overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fans-cheering.png"
          alt="fans cheering"
          fill
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <ShieldCheck className="text-brand-blue" size={18} />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">
            Why we&apos;re the #1 IPTV provider in Canada
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-12 tracking-tighter">
          Why Choose IPTV Canada?
        </h2>

        {/* Content Blocks */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto font-medium">
          <p>
            At IPTV Canada, we&apos;re recognized as the best IPTV in Canada, delivering premium streaming excellence for over 8 years. 
            Our IPTV service combines superior technology with unmatched reliability, featuring 99.9% guaranteed uptime 
            and zero-buffering streaming across all devices.
          </p>

          <p>
            What sets our IPTV provider apart is our commitment to legal compliance and customer satisfaction. 
            We operate fully within Canadian broadcasting regulations, ensuring your subscription is completely legitimate and secure. 
            Our advanced streaming infrastructure delivers crystal-clear 4K content without interruptions, 
            backed by our Canadian-based technical support team available 24/7.
          </p>

          <p>
            Our IPTV subscription includes industry-leading features: instant channel switching, comprehensive electronic program guide (EPG), 
            catch-up TV functionality, and multi-device streaming capabilities. Whether you&apos;re watching on Smart TV, 
            Android box, or mobile device, you&apos;ll experience the same premium quality that thousands of Canadian families trust daily.
          </p>

          <p className="text-white font-bold">
            We guarantee immediate activation, no long-term contracts, and transparent pricing with no hidden fees. 
            Join the growing community of satisfied customers who&apos;ve discovered why IPTV Canada remains 
            Canada&apos;s top-rated IPTV provider for reliability, quality, and customer service excellence.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <button className="px-10 py-5 bg-brand-blue text-white font-black text-xs uppercase tracking-widest rounded-xl hover:bg-brand-cyan hover:scale-105 transition-all duration-300 shadow-2xl shadow-brand-blue/30">
            Join The #1 Canadian IPTV Provider
          </button>
        </div>
      </div>
    </section>
  );
}
