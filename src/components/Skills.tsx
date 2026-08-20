"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Category {
  icon: string;
  title: string;
  items: string[];
  level: number;
  tier: string;
}

const categories: Category[] = [
  {
    icon: "🔐",
    title: "Identity & Access",
    items: [
      "Microsoft Entra ID (Azure AD)",
      "Conditional Access / Zero Trust",
      "MFA · FIDO2 · RBAC",
      "Hybrid Identity & Active Directory",
    ],
    level: 92,
    tier: "Expert",
  },
  {
    icon: "☁️",
    title: "Microsoft 365",
    items: [
      "Exchange Online & Mail Flow",
      "Teams (incl. Teams Phone)",
      "SharePoint & OneDrive",
      "Licensing & Identity Lifecycle",
    ],
    level: 89,
    tier: "Advanced",
  },
  {
    icon: "🛡️",
    title: "Security Operations",
    items: [
      "Microsoft Defender for Endpoint",
      "Threat Investigation & IR",
      "Endpoint Hardening",
      "Security Baselines",
    ],
    level: 87,
    tier: "Advanced",
  },
  {
    icon: "🌐",
    title: "Cloud & Infrastructure",
    items: [
      "Azure (VMs, Networking, VPN)",
      "Windows Server 2016–2025",
      "DNS · DHCP · TCP/IP · Firewalls",
      "Universal / Azure Print",
    ],
    level: 84,
    tier: "Advanced",
  },
  {
    icon: "⚡",
    title: "Automation & Scripting",
    items: [
      "PowerShell",
      "Microsoft Graph API",
      "JSON Reporting",
      "Workflow Automation",
    ],
    level: 82,
    tier: "Proficient",
  },
  {
    icon: "🔧",
    title: "Device & Endpoint Mgmt",
    items: [
      "Microsoft Intune / MDM",
      "Atera RMM",
      "Compliance & Config Profiles",
      "Imaging · BYOD · Autopilot",
    ],
    level: 88,
    tier: "Advanced",
  },
];

const tools = [
  { name: "Microsoft 365", icon: "☁️" },
  { name: "Azure", icon: "🔷" },
  { name: "Entra ID", icon: "🔐" },
  { name: "Intune", icon: "📱" },
  { name: "Defender", icon: "🛡️" },
  { name: "Exchange", icon: "📧" },
  { name: "PowerShell", icon: "⚡" },
  { name: "ServiceNow", icon: "🎫" },
  { name: "Atera", icon: "🖥️" },
  { name: "Windows Server", icon: "🪟" },
];

const approach = [
  { icon: "🔍", title: "Assess", desc: "Identify risks and understand the environment." },
  { icon: "📐", title: "Design", desc: "Architect secure solutions with best practices." },
  { icon: "⚙️", title: "Implement", desc: "Build and integrate security into every layer." },
  { icon: "📊", title: "Monitor", desc: "Continuously monitor, detect, and respond." },
  { icon: "📈", title: "Improve", desc: "Review, learn, and enhance security continuously." },
];

function CategoryCard({ cat, delay }: { cat: Category; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(cat.level);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [cat.level]);

  return (
    <Reveal delay={delay}>
      <div ref={ref} className="card h-full p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="icon-tile w-10 h-10 text-lg">{cat.icon}</span>
          <h3 className="font-display font-semibold text-white text-base">
            {cat.title}
          </h3>
        </div>
        <ul className="space-y-2 mb-5">
          {cat.items.map((it) => (
            <li key={it} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
              <span className="text-brand-light mt-1.5 w-1 h-1 rounded-full bg-brand-light shrink-0" />
              {it}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-medium text-brand-light">{cat.tier}</span>
          <span className="text-xs font-mono text-slate-500">{cat.level}%</span>
        </div>
        <div className="bar-track">
          <div className="bar-fill" style={{ width: `${w}%` }} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Technical Skills"
          title="Skills That"
          highlight="Strengthen Security."
          subtitle="A comprehensive toolkit of technologies, frameworks, and methodologies I use to build secure, resilient cloud environments."
        />

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} delay={(i % 3) * 80} />
          ))}
        </div>

        {/* Tools & Technologies */}
        <Reveal className="mt-14">
          <p className="label mb-6 justify-center text-center w-full">
            Tools &amp; Technologies
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
            {tools.map((t) => (
              <div key={t.name} className="tool-tile">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-[0.7rem] text-slate-400 text-center font-medium">
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* My Approach */}
        <Reveal className="mt-14">
          <div className="card p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-white mb-6">
              Security is a <span className="h-grad">mindset</span>, not a product.
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {approach.map((a, i) => (
                <div key={a.title} className="relative flex flex-col items-center text-center px-2">
                  <span className="icon-tile w-11 h-11 text-lg mb-3">{a.icon}</span>
                  <h4 className="font-display font-semibold text-white text-sm mb-1">
                    {a.title}
                  </h4>
                  <p className="text-[0.72rem] text-slate-500 leading-relaxed">
                    {a.desc}
                  </p>
                  {i < approach.length - 1 && (
                    <span className="hidden lg:block absolute -right-2 top-5 text-brand-light/40">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
