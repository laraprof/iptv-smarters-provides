import { Lock, Zap, MessageCircle, CreditCard, CheckCircle2, ShieldCheck, Info } from "lucide-react";
import Link from "next/link";

export function PricingFeatures() {
  const steps = [
    {
      id: 1,
      title: "Pick Your Plan",
      desc: "Choose 1, 3, 6 or 12 months with up to 4 devices."
    },
    {
      id: 2,
      title: "Pay by Interac",
      desc: "Secure Canadian e-Transfer — no credit card needed."
    },
    {
      id: 3,
      title: "Start Streaming",
      desc: "We email login after payment is confirmed."
    }
  ];

  const barFeatures = [
    { icon: <Lock size={16} />, text: "Interac e-Transfer accepted" },
    { icon: <Zap size={16} />, text: "Activation after payment confirmed" },
    { icon: <MessageCircle size={16} />, text: "Fast support on WhatsApp" },
    { icon: <CreditCard size={16} />, text: "Transparent pricing" }
  ];

  const whatYouGet = [
    "Live TV & major sports events",
    "Movies & Series (VOD)",
    "EPG (TV guide) with regular updates",
    "HD/4K where available",
    "Works on Android, Fire TV & Smart TV",
    "Plans for 1-4 devices"
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((step) => (
            <div key={step.id} className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 font-black">
                {step.id}
              </div>
              <h3 className="text-slate-900 font-black text-lg mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Stream smarter with IPTV Canada
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Fast setup, EPG updates, Interac e-Transfer, and WhatsApp support when you need it.
          </p>
        </div>

        {/* Feature Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {barFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 p-5 rounded-2xl">
              <div className="text-brand-blue">{feat.icon}</div>
              <span className="text-slate-700 font-bold text-sm tracking-tight">{feat.text}</span>
            </div>
          ))}
        </div>

        {/* Bottom Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What You Get */}
          <div className="bg-white border border-slate-100 p-10 rounded-[32px] shadow-sm">
            <h4 className="text-slate-900 font-black text-xl mb-8">What you get</h4>
            <div className="space-y-4">
              {whatYouGet.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span className="text-slate-600 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Free & Interac Note */}
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-green-500 border-y border-r border-slate-100 p-10 rounded-[32px] shadow-sm">
              <div className="flex items-start gap-4">
                <ShieldCheck className="text-green-500 mt-1" size={24} />
                <div>
                  <h4 className="text-slate-900 font-black text-xl mb-2">Risk-free to try</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Test the service first with our free 24-hour trial. Eligible 
                    purchases are covered by our refund policy.
                  </p>
                  <Link href="/refund-policy" className="text-brand-blue font-bold text-sm hover:underline flex items-center gap-1">
                    See refund policy
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-slate-50/50 border border-slate-200 border-dashed p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <Info className="text-slate-500 mt-1" size={20} />
                <div>
                  <h4 className="text-slate-900 font-black text-base mb-2">Paying by Interac?</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed">
                    Follow the checkout instructions carefully and <span className="font-bold italic">don&apos;t mention IPTV in the memo</span>. 
                    We&apos;ll email your account details right after payment is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
