"use client";

import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Job {
  title: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    title: "IT Specialist – Systems Administration & Cloud Security",
    company: "The Plus Group",
    location: "Vaughan, ON",
    period: "June 2025 – Present",
    highlights: [
      "Provided Tier 2–3 technical support in a hybrid Microsoft 365 environment, supporting end users across Windows endpoints, cloud services, and identity platforms.",
      "Improved tenant security posture by raising the Microsoft Secure Score from 35% to 80% (a 45-point gain) by remediating identity, device, and data recommendations.",
      "Administered Microsoft Entra ID (Azure AD) including user provisioning, group management, role assignments, and Conditional Access policy enforcement.",
      "Managed Microsoft 365 services (Exchange Online, Teams, SharePoint, OneDrive), including mailbox issues, permissions, licensing, and service troubleshooting.",
      "Collaborated closely with the CTO on implementing IT policies, security controls, and operational improvements.",
      "Migrated on-premises server infrastructure to a fully cloud-based environment, improving scalability and system availability.",
      "Secured enterprise identity by managing Entra ID access controls including MFA, FIDO2, Conditional Access, RBAC, and security-group management.",
      "Led infrastructure upgrades, including modernization of on-premises network environments across multiple offices.",
      "Configured and maintained network infrastructure across multiple offices, including routers, switches, and firewalls.",
      "Deployed, configured, and managed endpoints using Intune and Atera, including device onboarding, configuration profiles, compliance policies, and update management.",
      "Configured and monitored Microsoft Defender for Endpoint, investigated security alerts, performed threat analysis, and remediated compromised or non-compliant devices/users.",
      "Enforced MFA across the organization; performed resets, troubleshot authentication issues, and reviewed sign-in risk events.",
      "Investigated and responded to phishing, spoofing, and suspicious email activity, including message tracing, user education, and remediation actions.",
      "Dealt with VPN connectivity issues, network access problems, and identity-related sign-in failures in hybrid environments.",
      "Performed regular updates, system checks, and managed server infrastructure.",
      "Collaborated with DevOps teams to support development and deployment of custom internal tools and applications.",
    ],
  },
  {
    title: "Service Desk Analyst – Level 1 & Level 2",
    company: "Esri Canada",
    location: "Toronto, ON",
    period: "Sep 2023 – Apr 2024",
    type: "Co-op · 8 months",
    highlights: [
      "Provided tier 1 & 2 IT support across various hardware and software platforms, ensuring alignment with ITIL practices.",
      "Created and managed user accounts in Active Directory (AD) and performed access control based on company policies.",
      "Provided comprehensive IT orientations to all new hires, ensuring a smooth onboarding process.",
      "Successfully managed corporate laptop builds, mobile devices reimaging, and deployment processes.",
      "Conducted hardware asset tagging and managed records through SAP.",
      "Worked closely with Dell for multiple part replacements, ensuring efficient resolution of hardware issues through collaboration with external vendors.",
    ],
  },
  {
    title: "ITS Student Lab Monitor & HyFlex Ambassador",
    company: "Seneca Polytechnic",
    location: "North York, ON",
    period: "Aug 2024 – Feb 2025",
    type: "6 months",
    highlights: [
      "Resolved technical issues with computers (AIOs), Crestron touch panels, AV gear, projectors, and screens.",
      "Managed inventory for IT equipment, ensuring accurate tracking and availability.",
      "Reimaged and deployed laptops for professors and students during the hardware sale.",
      "Installed and configured computers in classrooms, reimaged classroom computers, and teacher podiums to meet institutional standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="git log --oneline --graph"
          title="Work Experience"
          subtitle="Career timeline in cloud administration, systems, and security operations"
        />

        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 timeline-line space-y-8 sm:space-y-10">
          {jobs.map((job, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative">
                {/* Pulsing node */}
                <div className="absolute -left-[1.85rem] sm:-left-[2.35rem] top-4">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-cyan opacity-40" />
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-terminal-bg border-2 border-terminal-cyan shadow-glow-cyan" />
                  </span>
                </div>

                <div className="holo-card p-5 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-base sm:text-lg font-semibold text-terminal-green leading-snug">
                        {job.title}
                      </h3>
                      <p className="text-terminal-cyan text-sm mt-1">
                        {job.company}
                        <span className="text-slate-500"> · {job.location}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      <span className="text-xs font-mono text-slate-400 bg-slate-800/60 border border-slate-700/50 rounded px-2 py-1 whitespace-nowrap">
                        {job.period}
                      </span>
                      {job.type && (
                        <span className="text-xs font-mono text-terminal-amber bg-terminal-amber/10 border border-terminal-amber/20 rounded px-2 py-1 whitespace-nowrap">
                          {job.type}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                      >
                        <span className="text-terminal-cyan mt-0.5 shrink-0 font-mono text-xs">
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
