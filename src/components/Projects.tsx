"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Project {
  title: string;
  category: string;
  icon: string;
  metric: string;
  featured?: boolean;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Hybrid AD → Entra ID Migration",
    category: "Cloud Migration",
    icon: "🔄",
    metric: "6 companies",
    featured: true,
    description:
      "Migrated corporate endpoints from on-prem Active Directory domain join to Microsoft Entra ID across 6 affiliated companies — rebuilding laptops as Entra-joined devices and resolving duplicate-profile and authentication issues.",
    tags: ["Entra ID", "Intune", "Autopilot", "Hybrid Identity"],
  },
  {
    title: "Conditional Access & Zero Trust",
    category: "Identity Security",
    icon: "🛡️",
    metric: "600+ users",
    featured: true,
    description:
      "Designed an Entra Conditional Access architecture enforcing MFA, named/trusted locations, sign-in frequency, persistent-session controls, and VDI bypass groups — hardening identity security organization-wide.",
    tags: ["Conditional Access", "MFA", "FIDO2", "RBAC"],
  },
  {
    title: "Microsoft 365 Administration",
    category: "Cloud Administration",
    icon: "☁️",
    metric: "250 users",
    description:
      "Administered Exchange Online, Teams, SharePoint, and OneDrive across multiple business units — managing shared mailboxes, mail flow, licensing, and identity lifecycle across 6 companies.",
    tags: ["Exchange", "Teams", "SharePoint", "Licensing"],
  },
  {
    title: "Cybersecurity Ops & Incident Response",
    category: "Security Operations",
    icon: "🔍",
    metric: "200+ incidents",
    description:
      "Investigated and contained over 200 phishing, spoofing, and payroll-fraud incidents using Microsoft Defender, Exchange Online message tracing, email-header analysis, and audit-log review.",
    tags: ["Defender", "Message Trace", "Audit Logs", "IR"],
  },
  {
    title: "Endpoint Signature Automation",
    category: "Automation",
    icon: "⚡",
    metric: "PowerShell + Graph",
    description:
      "Built a PowerShell + Microsoft Graph solution deployed through Intune to standardize Outlook email signatures org-wide, and provisioned VDI, Azure resources, VPN, and modern print services.",
    tags: ["PowerShell", "Graph API", "Intune", "VDI"],
  },
  {
    title: "Secure Score Hardening",
    category: "Security Operations",
    icon: "📈",
    metric: "+45 points",
    description:
      "Raised the tenant Microsoft Secure Score from 35% to 80% by remediating identity, device, and data recommendations and enforcing security baselines across the M365 environment.",
    tags: ["Secure Score", "Baselines", "Compliance"],
  },
];

const filters = [
  "All Projects",
  "Identity Security",
  "Cloud Migration",
  "Security Operations",
  "Cloud Administration",
  "Automation",
];

export default function Projects() {
  const [active, setActive] = useState("All Projects");

  const visible =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="My Projects"
          title="Projects That"
          highlight="Build Secure Futures."
          subtitle="A collection of cloud and security initiatives designed to solve real-world problems and strengthen security at every layer."
        />

        {/* Filter tabs */}
        <Reveal className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-tab ${active === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 80}>
              <div className="card h-full p-6 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="icon-tile w-12 h-12 text-2xl">{project.icon}</span>
                  {project.featured && (
                    <span className="text-[0.6rem] font-semibold px-2 py-1 rounded-md bg-emerald-500/12 border border-emerald-500/30 text-emerald-300">
                      FEATURED
                    </span>
                  )}
                </div>

                <p className="text-brand-light text-xs font-mono mb-1">
                  {project.category}
                </p>
                <h3 className="font-display font-semibold text-white text-base mb-2 leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-blue/10">
                  <span className="text-xs font-semibold text-brand-light">
                    {project.metric}
                  </span>
                  <span className="text-[0.7rem] font-mono text-slate-500">
                    Microsoft Stack
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
