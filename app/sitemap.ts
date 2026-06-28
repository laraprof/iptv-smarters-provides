import { MetadataRoute } from 'next'

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
  ]

  // Add blog posts dynamically — replace with your actual data source
  const blogSlugs = [
    'is-iptv-legal-in-canada',
    'best-iptv-canada',
    'how-to-get-iptv-in-canada',
    'iptv-from-canada',
    'iptv-canada-complete-guide-internet-television-2026',
    'install-activate-tivimate-on-android-tv',
    'iptv-epg-explained-2025-best-iptv-canada-services-tv-guide',
    'what-is-iptv-beginners-guide-canada',
    'iptv-vs-cable-difference-which-is-better-canadians',
    '10-best-iptv-canada-providers-ranked-reviewed',
    '10-best-iptv-canada-2026',
    'free-iptv-trial-how-to-test-iptv-service-before-buying',
    'how-to-watch-iptv-on-multiple-devices-guide',
  ]

  const blogRoutes = blogSlugs.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
