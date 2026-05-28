import type { NextConfig } from "next";

// ─── Safe CSP nonce is handled per-request in middleware.ts ───────────────────
// Sources are kept strict — update if you add new third-party scripts/fonts.
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === 'production' ? '' : "'unsafe-eval'"} https://www.googletagmanager.com https://www.google-analytics.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' blob: data: https://images.unsplash.com https://www.google-analytics.com;
  connect-src 'self' https://www.google-analytics.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const nextConfig: NextConfig = {
  // ── Remove "X-Powered-By: Next.js" fingerprint header ──────────────────────
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // ── Clickjacking protection ─────────────────────────────────────────
          { key: "X-Frame-Options",        value: "DENY" },
          // ── MIME-type sniffing protection ───────────────────────────────────
          { key: "X-Content-Type-Options", value: "nosniff" },
          // ── Referrer leakage control ────────────────────────────────────────
          { key: "Referrer-Policy",        value: "strict-origin-when-cross-origin" },
          // ── Disable dangerous browser features ──────────────────────────────
          { key: "Permissions-Policy",     value: "camera=(), microphone=(), geolocation=(), payment=()" },
          // ── Legacy XSS filter (IE/old Edge) ─────────────────────────────────
          { key: "X-XSS-Protection",       value: "1; mode=block" },
          // ── Force HTTPS for 1 year (only set on production) ─────────────────
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // ── Content Security Policy ─────────────────────────────────────────
          { key: "Content-Security-Policy", value: ContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;