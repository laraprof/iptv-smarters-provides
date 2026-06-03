import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/constants/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvsmartproviders.com";

  // High-priority static pages (priority 1.0 / 0.9)
  const primaryRoutes = [
    { url: `${baseUrl}`,                          priority: 1.0, changeFrequency: "weekly"  as const },
    { url: `${baseUrl}/pricing`,                  priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/free-trial`,               priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/iptv-apps`,                priority: 0.9,  changeFrequency: "weekly" as const },
    { url: `${baseUrl}/iptv-firestick-canada`,    priority: 0.9,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`,                     priority: 0.85, changeFrequency: "daily"   as const },
    { url: `${baseUrl}/tutorial`,                 priority: 0.8,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`,                  priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/about`,                    priority: 0.75, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/reseller`,                 priority: 0.7,  changeFrequency: "monthly" as const },
    { url: `${baseUrl}/dmca`,                     priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/privacy`,                  priority: 0.3,  changeFrequency: "yearly"  as const },
    { url: `${baseUrl}/terms`,                    priority: 0.3,  changeFrequency: "yearly"  as const },
  ].map((r) => ({ ...r, lastModified: new Date() }));

  // Blog posts — dynamic, from content directory
  const blogPosts = getAllBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...primaryRoutes, ...blogRoutes];
}
