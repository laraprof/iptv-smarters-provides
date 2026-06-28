import { TutorialHero } from "@/components/sections/TutorialHero";
import { TutorialSetup } from "@/components/sections/TutorialSetup";
import { TutorialDeviceGrid } from "@/components/sections/TutorialDeviceGrid";
import { Troubleshooting } from "@/components/sections/Troubleshooting";
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";

import { getBreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "IPTV Installation Guide — Setup Your Service Easily | IPTV Canada",
  description: "Step-by-step IPTV setup guide for Firestick, Android, iOS, Smart TV, and Windows. Follow our easy instructions to start watching in minutes.",
  keywords: ["IPTV setup guide", "how to install IPTV", "Firestick IPTV setup", "IPTV Smarters setup", "IPTV tutorial Canada"],
  alternates: {
    canonical: "https://iptvsmartproviders.com/tutorial",
  },
  openGraph: {
    title: "IPTV Installation Guide — Setup Your Service Easily",
    description: "Step-by-step IPTV setup guide for Firestick, Android, iOS, Smart TV, and Windows.",
    url: "https://iptvsmartproviders.com/tutorial",
  }
};

export default function TutorialPage() {
  const tutorialSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How to Set Up IPTV on Any Device",
    "description": "Comprehensive guide for installing and configuring IPTV services on various devices.",
    "author": {
      "@type": "Organization",
      "name": "IPTV Canada"
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://iptvsmartproviders.com" },
    { name: "Tutorial", url: "https://iptvsmartproviders.com/tutorial" }
  ]);

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(tutorialSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }} />
      <TutorialHero />
      <TutorialSetup />
      <TutorialDeviceGrid />
      <Troubleshooting />
      <FAQ />
    </main>
  );
}