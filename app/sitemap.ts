import { MetadataRoute } from 'next'
import { cities } from '@/constants/city-pages'
import { getAllBlogPosts } from '@/constants/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iptvsmartproviders.com'
  
  const staticRoutes = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/free-trial`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/tutorial`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/reseller`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/channels`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/apps`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/press`, changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  // Add blog posts dynamically
  const blogPosts = getAllBlogPosts();
  const blogSlugs = blogPosts.map(post => post.slug);

  const blogRoutes = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const cityRoutes = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes, ...cityRoutes]
}
