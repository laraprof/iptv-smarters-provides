import { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/constants/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iptvsmartproviders.com/";

  // Static routes
  const staticRoutes = [
    "",
    "/pricing",
    "/tutorial",
    "/reseller",
    "/blog",
    "/contact",
    "/apps",
    "/dmca",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog routes
  const blogPosts = getAllBlogPosts();
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
