import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Philip | Cloud & Security Specialist",
  description:
    "Portfolio of Alex Philip — Cloud & Security-focused IT Specialist with expertise in Microsoft 365, Azure, endpoint security, and threat investigation.",
  keywords: [
    "cybersecurity",
    "cloud security",
    "Azure",
    "Microsoft 365",
    "IT specialist",
    "portfolio",
  ],
  authors: [{ name: "Alex Philip" }],
  openGraph: {
    title: "Alex Philip | Cloud & Security Specialist",
    description:
      "Cloud & Security-focused IT Specialist with hands-on experience in Microsoft 365, Azure Entra ID, and endpoint security.",
    type: "website",
  },
};

// Proper viewport — maximumScale:5 preserves pinch-to-zoom (WCAG 1.4.4)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scan-overlay grid-bg min-h-screen">
        <div className="matrix-bg" aria-hidden="true" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
