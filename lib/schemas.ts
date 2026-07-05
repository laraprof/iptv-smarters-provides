// 1. WebSite schema — goes on every page
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IPTV Canada",
    "url": "https://iptvsmartproviders.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://iptvsmartproviders.com/search?q={search_term_string}"
      },
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
    "logo": "https://iptvsmartproviders.com/images/logo.png",
    "description": "Canada's most reliable IPTV service. 25,000+ live channels, 120,000+ VODs, 4K streaming, 24/7 Canadian support.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": "English",
      "contactOption": "TollFree"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "sameAs": []
  }
}

// 3. Product/Service schema — homepage + pricing page
export function getServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IPTV Canada Subscription",
    "provider": {
      "@type": "Organization",
      "name": "IPTV Canada"
    },
    "areaServed": "CA",
    "description": "Premium IPTV subscription with 25,000+ live channels, 120,000+ VOD, 4K quality for Canadian viewers.",
    "offers": [
      {
        "@type": "Offer",
        "name": "1 Month Plan",
        "price": "19",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "3 Month Plan",
        "price": "29",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "6 Month Plan",
        "price": "49",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "price": "79",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1000",
      "bestRating": "5"
    }
  }
}

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

// 4. FAQPage schema — homepage FAQ section
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
