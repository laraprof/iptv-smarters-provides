import { MetadataRoute } from 'next'
import { cities } from '@/constants/city-pages'
import { getAllBlogPosts } from '@/constants/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://iptvsmartproviders.com'
  const today = new Date().toISOString()

  const staticRoutes = [
    { url: baseUrl,                         changeFrequency: 'weekly'  as const, priority: 1.0, lastModified: today },
    { url: `${baseUrl}/pricing`,            changeFrequency: 'weekly'  as const, priority: 0.9, lastModified: today },
    { url: `${baseUrl}/free-trial`,         changeFrequency: 'monthly' as const, priority: 0.9, lastModified: today },
    { url: `${baseUrl}/tutorial`,           changeFrequency: 'monthly' as const, priority: 0.8, lastModified: today },
    { url: `${baseUrl}/blog`,               changeFrequency: 'daily'   as const, priority: 0.8, lastModified: today },
    { url: `${baseUrl}/reseller`,           changeFrequency: 'monthly' as const, priority: 0.7, lastModified: today },
    { url: `${baseUrl}/channels`,           changeFrequency: 'monthly' as const, priority: 0.7, lastModified: today },
    { url: `${baseUrl}/apps`,               changeFrequency: 'monthly' as const, priority: 0.7, lastModified: today },
    { url: `${baseUrl}/about`,              changeFrequency: 'monthly' as const, priority: 0.5, lastModified: today },
    { url: `${baseUrl}/contact`,            changeFrequency: 'monthly' as const, priority: 0.5, lastModified: today },
    { url: `${baseUrl}/press`,              changeFrequency: 'monthly' as const, priority: 0.5, lastModified: today },
    { url: `${baseUrl}/iptv-apps`,          changeFrequency: 'monthly' as const, priority: 0.7, lastModified: today },
    { url: `${baseUrl}/iptv-firestick-canada`, changeFrequency: 'monthly' as const, priority: 0.8, lastModified: today },
  ]

  // Add blog posts dynamically with their publish date as lastModified
  const blogPosts = getAllBlogPosts();

  const blogRoutes = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    lastModified: post.date ? new Date(post.date).toISOString() : today,
  }))

  const cityRoutes = cities.map(city => ({
    url: `${baseUrl}/${city.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    lastModified: today,
  }))

  return [...staticRoutes, ...blogRoutes, ...cityRoutes]
}
