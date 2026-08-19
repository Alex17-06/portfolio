"use client";

import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Project {
  title: string;
  headline: string;
  description: string;
  icon: string;
  metric: string;
  accent: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Hybrid AD → Entra ID Migration",
    headline: "Migrated endpoints off on-premises Active Directory",
    description:
      "Reduced reliance on on-prem infrastructure across 6 affiliated companies by migrating corporate endpoints from AD domain join to Microsoft Entra ID — rebuilding laptops as Entra-joined devices and resolving post-migration duplicate-profile and authentication issues.",
    icon: "🔄",
    metric: "6 companies",
    accent: "text-terminal-cyan",
    tags: ["Entra ID", "Intune", "Autopilot"],
  },
  {
    title: "Conditional Access & Zero Trust",
    headline: "Enforced Zero Trust access for 600+ identities",
    description:
      "Designed and implemented an Entra Conditional Access architecture enforcing MFA, named/trusted locations, sign-in frequency, persistent-session controls, and VDI bypass groups — restricting access to sanctioned conditions and hardening identity security organization-wide.",
    icon: "🛡️",
    metric: "600+ users",
    accent: "text-terminal-green",
    tags: ["Conditional Access", "MFA", "FIDO2"],
  },
  {
    title: "Microsoft 365 Administration",
    headline: "Sustained M365 operations for 250 users",
    description:
      "Administered Exchange Online, Teams, SharePoint, and OneDrive across multiple business units — managing shared mailboxes, mail flow, licensing, and identity lifecycle across 6 companies.",
    icon: "☁️",
    metric: "250 users",
    accent: "text-cloud-sky",
    tags: ["Exchange", "Teams", "SharePoint"],
  },
  {
    title: "Cybersecurity Ops & IR",
    headline: "Contained 200+ phishing & fraud incidents",
    description:
      "Investigated and contained over 200 phishing, spoofing, and payroll-fraud incidents using Microsoft Defender, Exchange Online message tracing, email-header analysis, and audit-log review — strengthening endpoint security and response.",
    icon: "🔍",
    metric: "200+ incidents",
    accent: "text-terminal-amber",
    tags: ["Defender", "Message Trace", "Audit Logs"],
  },
  {
    title: "Endpoint Signature Automation",
    headline: "Standardized Outlook signatures org-wide",
    description:
      "Built a PowerShell + Microsoft Graph solution deployed through Intune to standardize Outlook email signatures organization-wide, and provisioned/managed virtual desktops (VDI), Azure resources, VPN, and modern print services.",
    icon: "⚡",
    metric: "PowerShell + Graph",
    accent: "text-cloud-violet",
    tags: ["PowerShell", "Graph API", "Intune"],
  },
  {
    title: "Secure Score Hardening",
    headline: "Raised tenant Secure Score 35% → 80%",
    description:
      "Improved tenant security posture by a 45-point gain, remediating identity, device, and data recommendations across the Microsoft 365 environment and enforcing security baselines.",
    icon: "📈",
    metric: "+45 points",
    accent: "text-terminal-green",
    tags: ["Secure Score", "Baselines", "Compliance"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="ls ~/projects --highlight"
          title="Key Projects"
          subtitle="High-impact initiatives in cloud migration, identity security, and automation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 90}>
              <div className="holo-card h-full p-6 group flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-3xl group-hover:scale-110 transition-transform">
                    {project.icon}
                  </span>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-md border border-slate-700/50 bg-slate-800/50 ${project.accent}`}
                  >
                    {project.metric}
                  </span>
                </div>

                <h3
                  className={`font-display text-sm font-semibold mb-1.5 leading-snug ${project.accent}`}
                >
                  {project.title}
                </h3>
                <p className="text-slate-200 text-sm font-semibold mb-2 leading-snug">
                  {project.headline}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-700/40">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-700/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
