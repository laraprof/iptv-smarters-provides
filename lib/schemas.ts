// 1. WebSite schema — goes on every page
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV Canada",
    "url": "https://iptvsmartproviders.com",
    "potentialAction": {
      "@type": "SearchAction",
      // Points to /blog?q= — the only search-like page on the site
      "target": "https://iptvsmartproviders.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
}

// 2. Organization schema — goes on homepage
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IPTV Canada",
    "url": "https://iptvsmartproviders.com",
    // Standardized to /logo.png — the file that actually exists in /public
    "logo": "https://iptvsmartproviders.com/logo.png",
    "description": "Canada's most reliable IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
    "telephone": "+1 (757) 957-5093",
    "email": "support@iptvsmartproviders.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1 (757) 957-5093",
      "contactType": "customer support",
      "areaServed": "CA",
      "availableLanguage": ["English", "French"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "sameAs": [
      "https://www.facebook.com/iptvcanada",
      "https://twitter.com/iptvcanada",
      "https://www.youtube.com/@iptvcanada"
    ]
  }
}

// 3. Product schema — homepage + pricing page
// NOTE: aggregateRating is only valid on Product (not Service) for Google rich results.
// Using @type Product unlocks Review Snippets in Google Search.
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "IPTV Canada Subscription",
    "brand": {
      "@type": "Brand",
      "name": "IPTV Canada"
    },
    "description": "Premium IPTV subscription with 25,000+ live channels, 120,000+ VOD, 4K quality for Canadian viewers.",
    "image": "https://iptvsmartproviders.com/images/logo.png",
    "url": "https://iptvsmartproviders.com",
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Month Plan",
        "price": "19",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "3 Month Plan",
        "price": "29",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "6 Month Plan",
        "price": "49",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      },
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "price": "79",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvsmartproviders.com/pricing",
        "priceValidUntil": "2027-12-31"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
}

// Alias kept for backward compatibility
export const getProductSchema = getServiceSchema;

// 3.5 Local Service schema — for city pages
export function getLocalServiceSchema(city: string, provinceCode: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `IPTV Service in ${city}, ${provinceCode}`,
    "provider": {
      "@type": "Organization",
      "name": "IPTV Canada",
      "url": "https://iptvsmartproviders.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": provinceCode
      }
    },
    "url": url,
    "description": `Premium IPTV subscription with 25,000+ live channels, 120,000+ VOD, 4K quality for viewers in ${city}, ${provinceCode}.`,
    "offers": [
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "price": "79",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    ]
  }
}

// 4. FAQPage schema — REMOVED from rich results by Google on May 7, 2026.
// Kept as QAPage for semantic value (no SERP feature, but still crawlable).
// Do NOT expect rich result treatment in Google Search for this type.
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}

// 5. BreadcrumbList — all inner pages
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// 6. BlogPosting schema — each blog article
export function getBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "url": post.url,
    "datePublished": post.datePublished,
    "dateModified": post.dateModified,
    "author": {
      "@type": "Person",
      "name": post.authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "IPTV Canada",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iptvsmartproviders.com/images/logo.png"
      }
    },
    "image": post.image,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    }
  }
}
