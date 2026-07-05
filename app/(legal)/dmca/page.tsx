import { Shield } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Notice | IPTV Canada",
  description: "DMCA Notice and takedown policy for IPTV Canada services.",
  robots: { index: false, follow: false },
};

export default function DMCAPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <Shield size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">Legal Compliance</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            DMCA <span className="text-brand-blue">Notice</span>
          </h1>
          
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            We respect intellectual property rights and expect our users to do the same. 
            This page outlines our procedures for reporting alleged copyright infringement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-slate max-w-none">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 mb-12">
            <h2 className="text-2xl font-black text-brand-dark tracking-tight mb-6">Digital Millennium Copyright Act Notice</h2>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              IPTV Canada (&quot;Company&quot;) respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act of 1998, the text of which may be found on the U.S. Copyright Office website at http://www.copyright.gov/legislation/dmca.pdf, the Company will respond expeditiously to claims of copyright infringement committed using the IPTV Canada service and/or the IPTV Canada website (the &quot;Site&quot;) if such claims are reported to the Company&apos;s Designated Copyright Agent identified in the sample notice below.
            </p>
            
            <h3 className="text-xl font-black text-brand-dark tracking-tight mt-10 mb-4">How to File a Takedown Notice</h3>
            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
              If you are a copyright owner, authorized to act on behalf of one, or authorized to act under any exclusive right under copyright, please report alleged copyright infringements taking place on or through the Site by completing the following DMCA Notice of Alleged Infringement and delivering it to the Company&apos;s Designated Copyright Agent.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 mb-10">
              <p className="text-sm font-bold text-slate-800">Your notice must include the following:</p>
              <ul className="space-y-3">
                {[
                  "Identify the copyrighted work that you claim has been infringed.",
                  "Identify the material or link you claim is infringing (or the subject of infringing activity) and to which access is to be disabled.",
                  "Provide your company affiliation (if applicable), mailing address, telephone number, and, if available, email address.",
                  "Include both of the following statements in the body of the Notice: 'I hereby state that I have a good faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law' and 'I hereby state that the information in this Notice is accurate and, under penalty of perjury, that I am the owner, or authorized to act on behalf of the owner, of the copyright or of an exclusive right under the copyright that is allegedly infringed.'",
                  "Provide your full legal name and your electronic or physical signature."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                    <span className="w-5 h-5 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center shrink-0 font-bold text-[10px]">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="text-xl font-black text-brand-dark tracking-tight mb-4">Submit Your Claim</h3>
            <p className="text-slate-600 leading-relaxed mb-8 font-medium">
              Deliver this Notice, with all items completed, to the Company&apos;s Designated Copyright Agent at:
            </p>
            
            <div className="bg-brand-dark rounded-2xl p-8 text-white inline-block">
              <p className="font-black text-brand-blue uppercase tracking-widest text-[10px] mb-2">Email Address</p>
              <p className="text-xl font-bold">support@iptvsmartproviders.com</p>
            </div>
            
            <p className="mt-12 text-sm text-slate-400 italic">
              Note: IPTV Canada does not host any video files or media on its servers. We provide access to third-party streaming links and are not responsible for the content transmitted through these services.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
