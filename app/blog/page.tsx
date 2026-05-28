import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { getAllBlogPosts, getFeaturedPost } from "@/constants/blog-posts";

export const metadata: Metadata = {
  title: "IPTV Blog — Guides, Setup Tutorials & News | IPTV Canada",
  description:
    "Expert IPTV guides, setup tutorials, app reviews, troubleshooting tips, and industry news. Learn how to get the most out of your IPTV subscription in Canada.",
  keywords: [
    "IPTV blog",
    "IPTV Canada guide",
    "IPTV setup tutorial",
    "best IPTV apps",
    "IPTV troubleshooting",
    "IPTV vs cable",
    "how to fix IPTV buffering",
  ],
  openGraph: {
    title: "IPTV Blog — Guides, Setup Tutorials & News | IPTV Canada",
    description:
      "Expert IPTV guides, setup tutorials, app reviews, troubleshooting tips, and industry news for Canadian IPTV users.",
    url: "https://iptvsmartproviders.comblog",
    type: "website",
    siteName: "IPTV Canada",
    images: [
      {
        url: "/images/blog-og.png",
        width: 1200,
        height: 630,
        alt: "IPTV Canada Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Blog — Guides & Tutorials | IPTV Canada",
    description:
      "Expert IPTV guides, setup tutorials, app reviews and troubleshooting tips.",
  },
  alternates: {
    canonical: "https://iptvsmartproviders.com/blog",
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featured = getFeaturedPost();
  const otherPosts = allPosts.filter((p) => !p.featured);

  // BlogPosting schema for the listing page
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IPTV Canada Blog",
    description:
      "Expert guides, setup tutorials, app reviews, and troubleshooting tips for IPTV users in Canada.",
    url: "https://iptvsmartproviders.com/blog",
    publisher: {
      "@type": "Organization",
      name: "IPTV Canada",
      url: "https://iptvsmartproviders.com",
    },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://iptvsmartproviders.com/blog/${post.slug}`,
      author: {
        "@type": "Organization",
        name: "IPTV Canada",
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 mb-6">
            <BookOpen size={14} className="text-brand-blue" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[4px] text-brand-blue">
              IPTV Blog
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 leading-none">
            Guides, Tips & <span className="text-brand-blue">News</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Expert articles on IPTV setup, troubleshooting, app reviews, and
            everything you need to get the most out of your streaming experience
            in Canada.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-20">
          <Link href={`/blog/${featured.slug}`} className="block group">
            <article className="bg-gradient-to-br from-brand-dark to-slate-900 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl shadow-brand-blue/5 hover:shadow-brand-blue/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="bg-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tighter mb-4 group-hover:text-brand-blue transition-colors leading-tight">
                {featured.title}
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                {featured.excerpt}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-slate-500 text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {featured.readTime}
                  </span>
                  <time dateTime={featured.date}>
                    {new Date(featured.date).toLocaleDateString("en-CA", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>

                <span className="text-brand-blue font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </Link>
        </section>
      )}

      {/* Post Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-2xl font-black text-brand-dark tracking-tighter mb-10">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <article className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col flex-grow hover:shadow-xl hover:border-slate-200 transition-all duration-300">
                {/* Category & Meta */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full">
                    <Tag size={10} />
                    {post.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-brand-dark tracking-tight leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <time
                    dateTime={post.date}
                    className="text-xs font-semibold text-slate-400"
                  >
                    {new Date(post.date).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span className="text-brand-blue font-black text-[11px] uppercase tracking-widest flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}