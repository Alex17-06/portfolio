"use client";

import SectionHeader from "./SectionHeader";

interface Project {
  title: string;
  headline: string;
  description: string;
  icon: string;
  colorClass: string;
}

const projects: Project[] = [
  {
    title: "Hybrid AD to Entra ID Migration",
    headline: "Reduced reliance on on-premises infrastructure across 6 affiliated companies",
    description:
      "Migrated corporate endpoints from Active Directory domain join to Microsoft Entra ID, rebuilding laptops as Entra-joined devices and resolving post-migration duplicate-profile and authentication issues.",
    icon: "🔄",
    colorClass: "text-terminal-cyan",
  },
  {
    title: "Conditional Access & Zero Trust",
    headline: "Enforced Zero Trust access for 600+ users and service identities",
    description:
      "Designed and implemented an Entra Conditional Access architecture enforcing MFA, named/trusted locations, sign-in frequency, persistent-session controls, and VDI bypass groups, restricting access to sanctioned conditions and hardening identity security organization-wide.",
    icon: "🛡️",
    colorClass: "text-terminal-green",
  },
  {
    title: "Microsoft 365 Administration",
    headline: "Sustained M365 operations for 250 users across 6 companies",
    description:
      "Administered Exchange Online, Teams, SharePoint, and OneDrive across multiple business units, managing shared mailboxes, mail flow, licensing, and identity lifecycle.",
    icon: "☁️",
    colorClass: "text-terminal-cyan",
  },
  {
    title: "Cybersecurity Operations & Incident Response",
    headline: "Contained and investigated over 200 phishing, spoofing, and payroll-fraud incidents",
    description:
      "Used Microsoft Defender, Exchange Online message tracing, email-header analysis, and audit-log review, strengthening endpoint security and response.",
    icon: "🔍",
    colorClass: "text-terminal-amber",
  },
  {
    title: "Endpoint & Automation",
    headline: "Standardized Outlook email signatures organization-wide",
    description:
      "Deployed a PowerShell + Microsoft Graph solution through Intune, and provisioned/managed virtual desktops (VDI), Azure resources, VPN, and modern print services.",
    icon: "⚡",
    colorClass: "text-terminal-green",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="ls ~/projects --highlight"
          title="Key Projects"
          subtitle="High-impact initiatives in cloud migration, security, and automation"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-5 sm:p-6 card-glow group hover:border-terminal-green/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
                  {project.icon}
                </span>
                <h3 className={`font-mono text-sm font-semibold ${project.colorClass} leading-snug`}>
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-200 text-sm font-semibold mb-2 leading-snug">
                {project.headline}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
