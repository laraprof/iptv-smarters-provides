"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

// WhatsApp SVG icon (official brand colour)
function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M16 2C8.268 2 2 8.268 2 16c0 2.47.648 4.788 1.782 6.8L2 30l7.394-1.737A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
        fill="#25D366"
      />
      <path
        d="M22.5 19.85c-.3.84-1.49 1.54-2.44 1.74-.65.13-1.5.24-4.36-1.04-3.66-1.6-6.02-5.3-6.2-5.55-.17-.25-1.44-1.92-1.44-3.66 0-1.74.91-2.6 1.23-2.96.3-.33.66-.42.88-.42.22 0 .44 0 .63.01.2.01.48-.08.75.57.3.68 1.01 2.47 1.1 2.65.09.18.15.39.03.63-.11.24-.17.39-.33.6-.17.21-.35.47-.5.63-.17.17-.34.35-.15.69.2.34.87 1.43 1.87 2.32 1.28 1.14 2.36 1.49 2.7 1.66.33.17.53.14.73-.08.2-.23.86-.99 1.09-1.33.22-.34.44-.28.74-.17.3.12 1.9.9 2.23 1.06.33.17.55.25.63.39.09.14.09.8-.21 1.64Z"
        fill="#fff"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  const phoneRaw = siteConfig.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    "Hello! I'm interested in your IPTV Canada subscription. Can you help me choose a plan?"
  );
  const href = `https://wa.me/${phoneRaw}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        className={`
          hidden sm:flex bg-white text-slate-800 text-xs font-black px-4 py-2 rounded-full shadow-lg border border-slate-100 
          whitespace-nowrap transition-all duration-300
          ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}
        `}
      >
        Chat with us on WhatsApp
      </span>

      {/* Button */}
      <div className="relative flex-shrink-0">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 animation-delay-300" />

        <div
          className="
            relative w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/40
            flex items-center justify-center
            transition-all duration-300
            group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#25D366]/50
            active:scale-95
          "
        >
          <WhatsAppIcon size={28} />
        </div>
      </div>
    </a>
  );
}
