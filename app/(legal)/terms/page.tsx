import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | IPTV Canada",
  description: "Terms and conditions for using IPTV Canada services and website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <FileText size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">Agreement</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Terms of <span className="text-brand-blue">Service</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Please read these terms carefully before using our service. By accessing IPTV Canada, 
            you agree to be bound by these terms and conditions.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 mb-12">
            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">2. Description of Service</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
              IPTV Canada provides access to subscription-based streaming content. We do not host any media files. We act as a middleman between the content source and the end-user. Service availability may vary based on your location and internet connection.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">3. Use License</h2>
            <div className="space-y-4 text-slate-600 font-medium mb-10">
              <p>Permission is granted to temporarily download one copy of the materials on IPTV Canada&apos;s website for personal, non-commercial transitory viewing only.</p>
              <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display;</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">4. Subscription and Payments</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
              Subscriptions are billed in advance. All payments are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time, with notice provided to active subscribers.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">5. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
              In no event shall IPTV Canada or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on IPTV Canada&apos;s website.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">6. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed mb-10 font-medium">
              These terms and conditions are governed by and construed in accordance with the laws of Canada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              If you have any questions about these Terms, please contact us at:
            </p>
            
            <div className="bg-brand-dark rounded-2xl p-8 text-white inline-block">
              <p className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-2">Legal Department</p>
              <p className="text-xl font-bold">info@liveiptvstream.com</p>
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
