import Image from "next/image";
import Link from "next/link";

interface AuthorBioProps {
  /** Optional variant: "full" (detailed card) or "compact" (inline) */
  variant?: "full" | "compact";
}

export function AuthorBio({ variant = "full" }: AuthorBioProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-brand-blue/20 flex-shrink-0">
          <Image
            src="/images/author-alex-martin.webp"
            alt="Alex Martin — IPTV Specialist"
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-xs font-black text-brand-dark">Alex Martin</p>
          <p className="text-[10px] text-slate-400 font-semibold">IPTV Specialist · 8 years experience</p>
        </div>
      </div>
    );
  }

  return (
    <aside
      aria-label="About the author"
      className="mt-16 border-t border-slate-100 pt-10"
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8">
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-blue/20 flex-shrink-0">
          <Image
            src="/images/author-alex-martin.webp"
            alt="Alex Martin — IPTV Specialist"
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-base font-black text-brand-dark">Alex Martin</h3>
            <span className="text-[10px] font-black uppercase tracking-widest bg-brand-blue/10 text-brand-blue px-2.5 py-1 rounded-full">
              IPTV Specialist
            </span>
          </div>
          <p className="text-xs text-slate-400 font-semibold mb-3">
            8 years experience · Canadian streaming technology expert
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Alex Martin has spent 8 years testing, reviewing, and writing about IPTV
            services across North America. He specializes in Canadian streaming infrastructure,
            EPG technology, and helping consumers cut the cord without sacrificing quality.
            You can learn more on the{" "}
            <Link href="/about" className="text-brand-blue font-bold hover:underline">
              About IPTV Canada
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </aside>
  );
}
