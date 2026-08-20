import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alexphilip.ca"),
  title: "Alex Philip | Microsoft 365 & Cloud Systems Administrator",
  description:
    "Portfolio of Alex Philip — Microsoft 365 & Cloud Systems Administrator with expertise in Entra ID, Zero Trust, endpoint security, and incident response.",
  keywords: [
    "Microsoft 365 administrator",
    "Cloud systems administrator",
    "Azure Entra ID",
    "Zero Trust",
    "Conditional Access",
    "Microsoft Defender",
    "Intune",
    "cybersecurity",
    "Alex Philip",
    "IT portfolio",
  ],
  authors: [{ name: "Alex Philip" }],
  creator: "Alex Philip",
  alternates: {
    canonical: "https://www.alexphilip.ca",
  },
  openGraph: {
    title: "Alex Philip | Microsoft 365 & Cloud Systems Administrator",
    description:
      "Microsoft 365 & Cloud Systems Administrator with hands-on experience managing hybrid Entra ID environments and Zero Trust architecture.",
    url: "https://www.alexphilip.ca",
    siteName: "Alex Philip Portfolio",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Philip | Microsoft 365 & Cloud Systems Administrator",
    description:
      "Microsoft 365 & Cloud Systems Administrator — Entra ID, Zero Trust, Defender, and incident response.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      <body className="min-h-screen">
        <div className="sbd-bg" aria-hidden="true" />
        <div className="sbd-bg dot-grid" aria-hidden="true" style={{ opacity: 0.4 }} />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
