"use client";

import SectionHeader from "./SectionHeader";

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
    title: "IT Specialist – Cloud & Security",
    company: "The Plus Group",
    location: "Vaughan, ON",
    period: "June 2025 – Present",
    highlights: [
      "Provide Tier 2–3 technical support in a hybrid Microsoft 365 environment across Windows endpoints, cloud services, and identity platforms.",
      "Administer Microsoft Entra ID including user provisioning, group management, role assignments, and Conditional Access policy enforcement.",
      "Deploy, configure, and manage endpoints using Intune and Atera, including device onboarding, compliance policies, and update management.",
      "Configure and monitor Microsoft Defender for Endpoint — investigating security alerts, performing threat analysis, and remediating compromised devices.",
      "Investigate and respond to phishing, spoofing, and suspicious email activity including message tracing and remediation actions.",
      "Perform endpoint hardening and security baseline enforcement; conduct stale user and device cleanup in Entra ID and Intune.",
      "Collaborate closely with the CTO on implementing IT policies, security controls, and operational improvements.",
    ],
  },
  {
    title: "ITS Student Lab Monitor & HyFlex Ambassador",
    company: "Seneca Polytechnic",
    location: "North York, ON",
    period: "Aug 2024 – Feb 2025",
    type: "6 months",
    highlights: [
      "Proactively monitored computer labs and HyFlex classrooms to ensure operational readiness.",
      "Resolved technical issues with AIOs, Crestron touch panels, AV gear, projectors, and screens.",
      "Monitored and responded to IT service requests via email and ServiceNow, escalating complex issues to senior technicians.",
      "Reimaged and deployed laptops; installed and configured classroom computers to institutional standards.",
    ],
  },
  {
    title: "Service Desk Analyst – Level 1 & Level 2",
    company: "Esri Canada",
    location: "Toronto, ON",
    period: "Sep 2023 – Apr 2024",
    type: "Co-op · 8 months",
    highlights: [
      "Provided tier 1 & 2 IT support across hardware and software platforms, ensuring alignment with ITIL practices.",
      "Managed incidents involving cloud technologies, network configurations, and MFA solutions (Google Authenticator, Okta, Microsoft Auth).",
      "Created and managed user accounts in Active Directory; performed access control based on company policies.",
      "Managed corporate laptop builds, reimaging, deployment processes, and mobile devices using MDM software.",
      "Conducted hardware asset tagging via SAP for streamlined inventory tracking.",
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
          subtitle="Career timeline in IT support, cloud administration, and security operations"
        />

        {/* Timeline — reduced left offset on phones */}
        <div className="relative pl-6 sm:pl-8 ml-2 sm:ml-4 timeline-line space-y-8 sm:space-y-10">
          {jobs.map((job, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-6 sm:-left-8 top-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-terminal-bg border-2 border-terminal-green shadow-lg shadow-terminal-green/20" />

              <div className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-4 sm:p-6 card-glow">
                {/* Header — stacks on phone, row on sm+ */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-terminal-green font-mono leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-terminal-cyan text-sm mt-0.5">
                      {job.company}
                      <span className="text-gray-500"> · {job.location}</span>
                    </p>
                  </div>
                  {/* Badges — wrap naturally */}
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <span className="text-xs font-mono text-gray-400 bg-terminal-bg/80 border border-terminal-green/10 rounded px-2 py-1 whitespace-nowrap">
                      {job.period}
                    </span>
                    {job.type && (
                      <span className="text-xs font-mono text-terminal-amber bg-terminal-amber/10 border border-terminal-amber/20 rounded px-2 py-1 whitespace-nowrap">
                        {job.type}
                      </span>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2">
                  {job.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <span className="text-terminal-green mt-0.5 shrink-0 font-mono text-xs">&gt;</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
