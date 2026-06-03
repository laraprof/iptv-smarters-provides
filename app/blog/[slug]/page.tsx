import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { getAllBlogPosts, getBlogPost } from "@/constants/blog-posts";
import Image from "next/image";
import { safeJsonLd } from "@/lib/safe-json-ld";
import { AuthorBio } from "@/components/shared/AuthorBio";
import { BlogCta } from "@/components/shared/BlogCta";

export const revalidate = 3600; // revalidate every hour

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  // Dynamic OG image generated per-post via /og route
  const ogImageUrl = `https://iptvsmartproviders.com/og?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}`;

  return {
    // Layout template appends "| IPTV Canada" — page title should NOT include it
    title: post.title,
    description: post.excerpt,
    robots: { index: true, follow: true },
    keywords: [
      post.category.toLowerCase(),
      "IPTV Canada",
      "IPTV guide",
      ...post.title.toLowerCase().split(" ").filter((w) => w.length > 3),
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://iptvsmartproviders.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      siteName: "IPTV Canada",
      authors: ["Alex Martin"],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `https://iptvsmartproviders.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // BlogPosting JSON-LD schema — named human author for E-E-A-T
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `https://iptvsmartproviders.com/blog/${slug}`,
    image: `https://iptvsmartproviders.com/og?title=${encodeURIComponent(post.title)}&date=${encodeURIComponent(post.date)}`,
    author: {
      "@type": "Person",
      name: "Alex Martin",
      jobTitle: "IPTV Specialist",
      url: "https://iptvsmartproviders.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "IPTV Canada",
      url: "https://iptvsmartproviders.com",
      logo: { "@type": "ImageObject", url: "https://iptvsmartproviders.com/images/logo.png" },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://iptvsmartproviders.com/blog/${slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "en-CA",
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://iptvsmartproviders.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://iptvsmartproviders.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://iptvsmartproviders.com/blog/${slug}` },
    ],
  };

  const renderContent = (content: string) => {
    const parseInlineMarkdown = (text: string) => {
      // Split by links [text](url) and bold **text**
      const parts = text.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g);
      return parts.map((part, index) => {
        if (!part) return null;
        
        // Check for link [text](url)
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          const isExternal = linkMatch[2].startsWith('http');
          return (
            <Link 
              key={index} 
              href={linkMatch[2]} 
              className="text-brand-blue font-bold hover:underline transition-all"
              {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {linkMatch[1]}
            </Link>
          );
        }
        
        // Check for bold **text**
        const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
        if (boldMatch) {
          return <strong key={index} className="text-brand-dark font-black">{boldMatch[1]}</strong>;
        }
        
        return part;
      });
    };

    const lines = content.trim().split("\n");
    const elements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];
    let tableHeader: string[] = [];

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={`table-${elements.length}`} className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  {tableHeader.map((cell, i) => (
                    <th key={i} className="text-left px-4 py-3 font-bold text-brand-dark border border-slate-200">{parseInlineMarkdown(cell.trim())}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-slate-600 border border-slate-200">{parseInlineMarkdown(cell.trim())}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        tableHeader = [];
        inTable = false;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
        const cells = line.split("|").filter((c) => c.trim() !== "");
        if (!inTable) {
          inTable = true;
          tableHeader = cells;
        } else if (cells.every((c) => /^[-\s:]+$/.test(c.trim()))) {
          continue;
        } else {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (line.trim() === "") {
        continue;
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-black text-brand-dark tracking-tight mt-12 mb-4">{parseInlineMarkdown(line.replace("## ", ""))}</h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-black text-brand-dark tracking-tight mt-8 mb-3">{parseInlineMarkdown(line.replace("### ", ""))}</h3>
        );
      } else if (line.startsWith("- **")) {
        const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) {
          elements.push(
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed ml-4 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
              <span><strong className="text-brand-dark">{parseInlineMarkdown(match[1])}:</strong> {parseInlineMarkdown(match[2])}</span>
            </li>
          );
        }
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed ml-4 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 shrink-0" />
            <span>{parseInlineMarkdown(line.replace("- ", ""))}</span>
          </li>
        );
      } else if (line.trim().startsWith("![")) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          elements.push(
            <div key={i} className="relative w-full aspect-video my-8 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <Image 
                src={match[2]} 
                alt={match[1] || "IPTV Canada Blog Image"}
                fill
                className="object-cover"
                sizes="(max-w-4xl) 100vw, 800px"
              />
            </div>
          );
        }
      } else if (/^\d+\.\s/.test(line.trim())) {
        const match = line.match(/^(\d+)\.\s(.+)$/);
        if (match) {
          elements.push(
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed ml-4 mb-2">
              <span className="bg-brand-blue text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center mt-0.5 shrink-0">{match[1]}</span>
              <span>{parseInlineMarkdown(match[2])}</span>
            </li>
          );
        }
      } else {
        elements.push(
          <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">{parseInlineMarkdown(line)}</p>
        );
      }
    }

    flushTable();
    return elements;
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="bg-brand-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <li><Link href="/" className="hover:text-brand-blue transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-brand-blue transition-colors">Blog</Link></li>
              <li>/</li>
              <li className="text-slate-400 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 bg-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              <Tag size={10} />
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-slate-500 text-xs font-semibold">
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-CA", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </header>

        {/* BlogCta — internal linking to /pricing and /free-trial */}
        <BlogCta headline="Ready to Try IPTV Canada?" />

        {/* Author Bio — E-E-A-T signal */}
        <AuthorBio />

        {/* Internal Links: Related Articles */}
        {relatedPosts.length > 0 && (
          <nav aria-label="Related articles" className="mt-16 pt-8 border-t border-slate-100">
            <h2 className="text-xl font-black text-brand-dark tracking-tighter mb-6">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md hover:border-slate-200 transition-all group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue">{rp.category}</span>
                  <h3 className="text-sm font-black text-brand-dark tracking-tight mt-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </nav>
        )}
    </main>
  );
}
