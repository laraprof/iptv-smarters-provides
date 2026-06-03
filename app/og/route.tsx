import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "IPTV Canada Blog";
  const date = searchParams.get("date") ?? "";

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1B2A4A 0%, #0f1a30 60%, #1B2A4A 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow circles */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(46, 84, 150, 0.25)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(46, 84, 150, 0.15)",
            filter: "blur(60px)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #2E5496, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 80px",
            height: "100%",
          }}
        >
          {/* Logo area */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#2E5496",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  borderLeft: "10px solid transparent",
                  borderRight: "0px solid transparent",
                  borderTop: "8px solid transparent",
                  borderBottom: "8px solid transparent",
                  borderLeftColor: "white",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: "900",
                  fontSize: "18px",
                  lineHeight: "1",
                }}
              >
                IPTV Canada
              </span>
              <span
                style={{
                  color: "#2E5496",
                  fontSize: "10px",
                  fontWeight: "700",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Blog
              </span>
            </div>
          </div>

          {/* Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  background: "#2E5496",
                  transform: "rotate(45deg)",
                }}
              />
              <span
                style={{
                  color: "#2E5496",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                IPTV Guide
              </span>
            </div>
            <h1
              style={{
                color: "white",
                fontSize: title.length > 60 ? "40px" : "52px",
                fontWeight: "900",
                lineHeight: "1.1",
                margin: "0",
                maxWidth: "900px",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "rgba(46, 84, 150, 0.3)",
                  borderRadius: "50%",
                  border: "2px solid rgba(46, 84, 150, 0.5)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "white", fontSize: "13px", fontWeight: "700" }}>
                  Alex Martin
                </span>
                <span style={{ color: "#64748b", fontSize: "11px" }}>
                  IPTV Specialist · {formattedDate || "IPTV Canada"}
                </span>
              </div>
            </div>
            <span
              style={{
                color: "#64748b",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              iptvsmartproviders.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
