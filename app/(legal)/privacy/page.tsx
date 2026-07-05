import { Lock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IPTV Canada",
  description: "Learn how IPTV Canada protects and manages your personal data.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <Lock size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">Security & Trust</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Privacy <span className="text-brand-blue">Policy</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Your privacy is our priority. This policy explains how we collect, use, and protect 
            your information when you use our IPTV services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 mb-12">
            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              We collect information to provide better services to all our users. The types of information we collect include:
            </p>
            <ul className="space-y-4 mb-10">
               {[
                 { title: "Account Information", desc: "When you purchase a subscription, we collect your email address and payment details via secure third-party processors." },
                 { title: "Usage Data", desc: "We may collect information about how you access and use the service, such as device type and connection logs." },
                 { title: "Customer Support", desc: "Records of your communications with our support team to help resolve any issues you may encounter." }
               ].map((item, i) => (
                 <li key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
                    <h4 className="font-black text-brand-dark mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                 </li>
               ))}
            </ul>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">How We Use Your Information</h2>
            <div className="space-y-4 text-slate-600 font-medium mb-10">
              <p>To provide, maintain, and improve our services.</p>
              <p>To process your transactions and send related information, including confirmations and invoices.</p>
              <p>To send technical notices, updates, security alerts, and support messages.</p>
              <p>To respond to your comments, questions, and requests and provide customer service.</p>
            </div>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Security</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We use industry-standard encryption for all data transmissions.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            
            <div className="bg-brand-dark rounded-2xl p-8 text-white inline-block">
              <p className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-2">Support Email</p>
              <p className="text-xl font-bold">support@iptvsmartproviders.com</p>
            </div>
            
            <p className="mt-12 text-xs text-slate-400 font-bold uppercase tracking-widest">
              Last Updated: May 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
