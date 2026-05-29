import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import { getAllBlogPosts } from "@/constants/blog-posts";

export function BlogPreview() {
  const allPosts = getAllBlogPosts();
  // Get latest 3 posts
  const recentPosts = allPosts.slice(0, 3);

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tighter mb-4">
              Latest From Our <span className="text-brand-blue">Blog</span>
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl">
              Stay updated with the latest IPTV tips, setup guides, and industry news in Canada.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-blue font-black uppercase tracking-widest text-xs hover:gap-4 transition-all"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <article className="bg-white border border-slate-100 rounded-2xl p-8 flex flex-col flex-grow hover:shadow-xl hover:border-slate-200 transition-all duration-300">
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
      </div>
    </section>
  );
}
