"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface SkillCategory {
  category: string;
  icon: string;
  accent: string;
  bar: string;
  items: { name: string; level: number }[];
}

const skills: SkillCategory[] = [
  {
    category: "Identity & Access",
    icon: "🔐",
    accent: "text-terminal-green",
    bar: "linear-gradient(90deg, #00cc7a, #00ff9c)",
    items: [
      { name: "Microsoft Entra ID (Azure AD)", level: 92 },
      { name: "Conditional Access / Zero Trust", level: 90 },
      { name: "MFA / FIDO2 / RBAC", level: 90 },
      { name: "Hybrid Identity & AD", level: 88 },
      { name: "Okta", level: 75 },
    ],
  },
  {
    category: "Microsoft 365",
    icon: "☁️",
    accent: "text-terminal-cyan",
    bar: "linear-gradient(90deg, #22d3ee, #38bdf8)",
    items: [
      { name: "Exchange Online", level: 92 },
      { name: "Teams (incl. Teams Phone)", level: 88 },
      { name: "SharePoint / OneDrive", level: 88 },
      { name: "Licensing & Mail Flow", level: 85 },
      { name: "Intune / MDM / BYOD", level: 88 },
    ],
  },
  {
    category: "Security",
    icon: "🛡️",
    accent: "text-cloud-violet",
    bar: "linear-gradient(90deg, #8b5cf6, #6366f1)",
    items: [
      { name: "Microsoft Defender", level: 90 },
      { name: "Incident Response", level: 85 },
      { name: "Threat Investigation", level: 85 },
      { name: "Endpoint Hardening", level: 85 },
      { name: "Security Baselines", level: 82 },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "🌐",
    accent: "text-cloud-sky",
    bar: "linear-gradient(90deg, #3b82f6, #2dd4bf)",
    items: [
      { name: "Azure (VMs, Networking, VPN)", level: 85 },
      { name: "Windows Server 2016–2025", level: 85 },
      { name: "DNS / DHCP / TCP/IP", level: 85 },
      { name: "Firewalls / LAN / WAN", level: 82 },
      { name: "Universal Print / Azure Print", level: 80 },
    ],
  },
];

function SkillBar({
  name,
  level,
  bar,
}: {
  name: string;
  level: number;
  bar: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [w, setW] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setW(level);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="mb-3.5" ref={ref}>
      <div className="flex justify-between items-center mb-1.5 gap-2">
        <span className="text-xs sm:text-sm text-slate-300 font-mono truncate">
          {name}
        </span>
        <span className="text-xs text-slate-500 font-mono shrink-0">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-slate-800/60 rounded-full overflow-hidden border border-slate-700/40">
        <div
          className="h-full rounded-full transition-[width] duration-[1400ms] ease-out"
          style={{
            width: `${w}%`,
            background: bar,
            boxShadow: "0 0 10px rgba(34, 211, 238, 0.4)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="sudo apt list --installed"
          title="Technical Skills"
          subtitle="Core competencies across identity, M365, security, and cloud infrastructure"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 lg:gap-6">
          {skills.map((cat, i) => (
            <Reveal key={cat.category} delay={(i % 2) * 100}>
              <div className="holo-card h-full p-5 sm:p-6">
                <h3
                  className={`font-display font-semibold mb-5 flex items-center gap-2 text-sm sm:text-base ${cat.accent}`}
                >
                  <span className="text-lg">{cat.icon}</span>
                  {cat.category}
                </h3>
                {cat.items.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    bar={cat.bar}
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tag cloud */}
        <Reveal className="mt-12 text-center">
          <p className="font-mono text-sm text-slate-500 mb-4">
            <span className="text-terminal-cyan">$</span> grep -r
            &quot;additional_skills&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl 2xl:max-w-5xl mx-auto">
            {[
              "PowerShell", "Microsoft Graph", "JSON Reporting",
              "ServiceNow", "Salesforce", "Atera RMM", "ITIL Practices",
              "Windows 7/10/11", "macOS", "Linux", "iOS / Android",
              "Dell Hardware", "Imaging & Deployment", "VDI",
              "Crestron", "AV Systems",
            ].map((tag) => (
              <span key={tag} className="cyber-tag text-xs sm:text-sm">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
