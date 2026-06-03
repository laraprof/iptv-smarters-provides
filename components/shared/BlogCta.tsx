import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogCtaProps {
  /** Optional headline override */
  headline?: string;
}

/**
 * Inline CTA block that links to /pricing and /free-trial.
 * Drop this inside any blog post to build internal links with SEO anchor text.
 */
export function BlogCta({ headline = "Ready to Stream?" }: BlogCtaProps) {
  return (
    <div className="my-10 bg-gradient-to-br from-[#1B2A4A] to-slate-900 rounded-2xl p-7 sm:p-10 border border-white/5">
      <p className="text-[10px] font-black uppercase tracking-[4px] text-brand-blue mb-3">
        IPTV Canada
      </p>
      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
        {headline}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-lg">
        Get 25,000+ live channels, 120,000+ VODs, and 4K quality — starting at just{" "}
        <strong className="text-white">$19 CAD/month</strong>. No contract, instant activation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all shadow-lg shadow-brand-blue/20"
        >
          View IPTV Canada Plans
          <ArrowRight size={14} />
        </Link>
        <Link
          href="/free-trial"
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl transition-all border border-white/10"
        >
          Start Your Free Trial
        </Link>
      </div>
    </div>
  );
}
