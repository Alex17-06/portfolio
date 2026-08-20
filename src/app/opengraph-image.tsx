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
            "radial-gradient(ellipse 80% 60% at 20% 0%, rgba(59,130,246,0.25), transparent 60%), radial-gradient(ellipse 70% 60% at 90% 100%, rgba(139,92,246,0.22), transparent 55%), #050810",
          fontFamily: "monospace",
        }}
      >
        {/* Terminal prompt */}
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#22d3ee",
            marginBottom: 24,
          }}
        >
          alex@m365-admin:~$ whoami
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            background: "linear-gradient(120deg, #22d3ee, #3b82f6, #00ff9c)",
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
                color: "#7dd3fc",
                padding: "12px 24px",
                border: "1px solid rgba(34,211,238,0.35)",
                borderRadius: 12,
                background: "rgba(34,211,238,0.08)",
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
            background: "linear-gradient(90deg, #22d3ee, #3b82f6, #8b5cf6, #00ff9c)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
