export interface DeviceData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;          // emoji icon
  description: string;
  setupSteps: { title: string; detail: string }[];
  pros: string[];
  compatibleApps: string[];
  keywords: string[];
}

export const devices: DeviceData[] = [
  {
    slug: "iptv-smart-tv",
    name: "IPTV on Smart TV",
    shortName: "Smart TV",
    icon: "📺",
    description: "Stream 25,000+ live Canadian channels directly on your Samsung, LG, or Sony Smart TV — no extra hardware needed.",
    setupSteps: [
      { title: "Open your Smart TV App Store", detail: "Navigate to the Samsung Galaxy Store, LG Content Store, or Google Play (Sony/Android TV)." },
      { title: "Search for IPTV Smarters Pro", detail: "Install IPTV Smarters Pro — it's available on all major Smart TV platforms." },
      { title: "Enter your credentials", detail: "Open the app and enter your Xtream Codes API or M3U URL provided after purchase." },
      { title: "Start streaming", detail: "Browse 25,000+ channels in your fully personalized Electronic Program Guide (EPG)." },
    ],
    pros: ["No extra hardware required", "4K & HDR support on compatible TVs", "Works on Samsung (Tizen), LG (WebOS), Sony (Android TV)", "Full EPG guide with catch-up"],
    compatibleApps: ["IPTV Smarters Pro", "TiviMate (Android TV only)", "Perfect Player"],
    keywords: ["iptv smart tv canada", "smart tv iptv setup", "samsung iptv canada", "lg iptv canada", "best iptv app for smart tv"],
  },
  {
    slug: "iptv-android",
    name: "IPTV on Android",
    shortName: "Android",
    icon: "🤖",
    description: "Turn any Android phone, tablet, or box into the ultimate Canadian streaming powerhouse with our IPTV service.",
    setupSteps: [
      { title: "Open Google Play Store", detail: "On your Android phone, tablet, or Android TV Box, open the Google Play Store." },
      { title: "Install TiviMate or Smarters Pro", detail: "Search for and install TiviMate Premium or IPTV Smarters Pro — both are excellent." },
      { title: "Add your playlist", detail: "Open the app and add your M3U URL or Xtream Codes details from your welcome email." },
      { title: "Configure EPG and enjoy", detail: "Set up your Electronic Program Guide to see what's on now, next, and upcoming." },
    ],
    pros: ["Works on ALL Android devices", "Supports TiviMate (the best IPTV app)", "Easy sideloading for unsupported apps", "Parental controls available"],
    compatibleApps: ["TiviMate", "IPTV Smarters Pro", "GSE Smart IPTV", "Kodi"],
    keywords: ["iptv android canada", "android iptv setup", "best iptv app android canada", "iptv android box canada"],
  },
  {
    slug: "iptv-apple-tv",
    name: "IPTV on Apple TV",
    shortName: "Apple TV",
    icon: "🍎",
    description: "Get premium Canadian IPTV streaming on your Apple TV 4K with smooth 4K HDR playback and a sleek interface.",
    setupSteps: [
      { title: "Open the Apple TV App Store", detail: "From your Apple TV home screen, open the App Store." },
      { title: "Download IPTV Smarters Pro", detail: "Search for IPTV Smarters Pro and download it — it's the top-rated IPTV app on tvOS." },
      { title: "Sign in with your credentials", detail: "Launch the app, select 'Add a Playlist', and enter your M3U URL or Xtream Codes API credentials." },
      { title: "Start watching in 4K", detail: "Your 25,000+ channels will load instantly. Pair with AirPlay to cast to multiple screens." },
    ],
    pros: ["Supports Apple TV 4K HDR streaming", "Works alongside Apple TV+ seamlessly", "IPTV Smarters Pro available on App Store", "Siri Remote compatible navigation"],
    compatibleApps: ["IPTV Smarters Pro", "GSE Smart IPTV", "Flex IPTV"],
    keywords: ["iptv apple tv canada", "apple tv iptv setup", "best iptv app apple tv", "iptv tvos canada"],
  },
];

export function getDeviceBySlug(slug: string): DeviceData | undefined {
  return devices.find((d) => d.slug === slug);
}
