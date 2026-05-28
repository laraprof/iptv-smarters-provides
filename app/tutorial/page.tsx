import { TutorialHero } from "@/components/sections/TutorialHero";
import { TutorialSetup } from "@/components/sections/TutorialSetup";
import { TutorialDeviceGrid } from "@/components/sections/TutorialDeviceGrid";
import { Troubleshooting } from "@/components/sections/Troubleshooting";
import { FAQ } from "@/components/sections/FAQ";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/safe-json-ld";

export const metadata: Metadata = {
  title: "IPTV Installation Guide — Setup Your Service Easily",
  description: "Step-by-step IPTV setup guide for Firestick, Android, iOS, Smart TV, and Windows. Follow our easy instructions to start watching in minutes.",
  keywords: ["IPTV setup guide", "how to install IPTV", "Firestick IPTV setup", "IPTV Smarters setup", "IPTV tutorial Canada"],
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

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(tutorialSchema) }}
      />
      <TutorialHero />
      <TutorialSetup />
      <TutorialDeviceGrid />
      <Troubleshooting />
      <FAQ />
    </main>
  );
}