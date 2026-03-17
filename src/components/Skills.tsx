"use client";

import SectionHeader from "./SectionHeader";

interface SkillCategory {
  category: string;
  icon: string;
  items: { name: string; level: number }[];
}

const skills: SkillCategory[] = [
  {
    category: "Cloud & Identity",
    icon: "☁️",
    items: [
      { name: "Azure Entra ID (Azure AD)", level: 90 },
      { name: "Microsoft 365 Admin", level: 92 },
      { name: "Conditional Access Policies", level: 85 },
      { name: "Intune / MDM", level: 88 },
      { name: "Exchange Online", level: 85 },
    ],
  },
  {
    category: "Security & Threat Mgmt",
    icon: "🛡️",
    items: [
      { name: "Microsoft Defender", level: 88 },
      { name: "MFA Enforcement", level: 90 },
      { name: "Phishing Investigation", level: 85 },
      { name: "Endpoint Hardening", level: 82 },
      { name: "Incident Response", level: 80 },
    ],
  },
  {
    category: "Networking & Infra",
    icon: "🌐",
    items: [
      { name: "DNS / DHCP / TCP/IP", level: 85 },
      { name: "VPN Troubleshooting", level: 82 },
      { name: "LAN/WAN Architecture", level: 78 },
      { name: "Active Directory", level: 88 },
      { name: "Hardware Diagnostics", level: 85 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "🔧",
    items: [
      { name: "ServiceNow (ITSM)", level: 88 },
      { name: "Atera RMM", level: 85 },
      { name: "VMware / Virtualization", level: 78 },
      { name: "Windows 10/11 Admin", level: 92 },
      { name: "SharePoint / OneDrive", level: 85 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1 gap-2">
        <span className="text-xs sm:text-sm text-gray-300 font-mono truncate">{name}</span>
        <span className="text-xs text-terminal-green font-mono shrink-0">{level}%</span>
      </div>
      <div className="h-1.5 bg-terminal-bg rounded-full overflow-hidden border border-terminal-green/10">
        <div
          className="h-full rounded-full"
          style={{
            width: `${level}%`,
            background: "linear-gradient(90deg, #00cc33, #00ff41)",
            boxShadow: "0 0 8px rgba(0, 255, 65, 0.4)",
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
          subtitle="Core competencies across cloud, security, and infrastructure domains"
        />

        {/* 1 col phone → 2 col tablet → 4 col on large monitors / TVs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-5 lg:gap-6">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-5 sm:p-6 card-glow"
            >
              <h3 className="font-mono text-terminal-cyan font-semibold mb-5 flex items-center gap-2 text-sm sm:text-base">
                <span>{cat.icon}</span>
                {cat.category}
              </h3>
              {cat.items.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div className="mt-10 text-center">
          <p className="font-mono text-sm text-gray-500 mb-4">
            <span className="text-terminal-green">$</span> grep -r &quot;additional_skills&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl 2xl:max-w-5xl mx-auto">
            {[
              "ITIL Practices", "Okta", "Salesforce", "SAP",
              "Google Authenticator", "GSuite", "Chrome OS", "macOS",
              "Linux", "iOS / Android", "Remote Access Tools", "Dell Hardware",
              "Imaging & Deployment", "BYOD", "AV Systems", "Crestron",
            ].map((tag) => (
              <span key={tag} className="cyber-tag text-xs sm:text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
