import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Rate limit store (replace with Upstash Redis in production) ──────────────
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;

function getRateLimitKey(req: NextRequest): string {
  // Prefer CF-Connecting-IP (Cloudflare) → x-forwarded-for → x-real-ip
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// ─── Middleware ────────────────────────────────────────────────────────────────
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ── Rate limiting on sensitive routes ───────────────────────────────────────
  const sensitiveRoutes = ["/contact", "/checkout", "/reseller", "/api/"];
  if (sensitiveRoutes.some((r) => pathname.startsWith(r))) {
    const key = getRateLimitKey(request);
    if (isRateLimited(key)) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "Retry-After":  "60",
          "Content-Type": "text/plain",
        },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?|ttf|otf|eot)).*)",
  ],
};