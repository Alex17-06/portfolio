import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Alex Philip — Microsoft 365 & Cloud Systems Administrator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 78% 8%, rgba(47,107,255,0.3), transparent 58%), radial-gradient(ellipse 70% 60% at 10% 100%, rgba(56,189,248,0.18), transparent 55%), #05070f",
          fontFamily: "sans-serif",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 4,
            color: "#4f8bff",
            marginBottom: 24,
          }}
        >
          MICROSOFT 365 &amp; CLOUD SECURITY
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            background: "linear-gradient(120deg, #3b82f6, #60a5fa, #38bdf8)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1.05,
          }}
        >
          Alex Philip
        </div>

        {/* Role */}
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#e2e8f0",
            marginTop: 16,
          }}
        >
          Microsoft 365 &amp; Cloud Systems Administrator
        </div>

        {/* Stat chips */}
        <div style={{ display: "flex", gap: 20, marginTop: 48 }}>
          {[
            "Entra ID",
            "Zero Trust",
            "Defender",
            "600+ users",
            "Secure Score 80%",
          ].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#93c5fd",
                padding: "12px 24px",
                border: "1px solid rgba(59,130,246,0.4)",
                borderRadius: 12,
                background: "rgba(47,107,255,0.1)",
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "linear-gradient(90deg, #2563eb, #3b82f6, #60a5fa, #38bdf8)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
