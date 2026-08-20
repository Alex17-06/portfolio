"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Job {
  badge: string;
  badgeColor: string;
  dateRail: string;
  title: string;
  company: string;
  location: string;
  period: string;
  mode: string;
  current?: boolean;
  summary: string;
  highlights: string[];
}

const jobs: Job[] = [
  {
    badge: "P+",
    badgeColor: "from-blue-500 to-sky-400",
    dateRail: "Present",
    title: "IT Specialist — Systems Administration & Cloud Security",
    company: "The Plus Group",
    location: "Vaughan, ON",
    period: "Jun 2025 – Present",
    mode: "On-site",
    current: true,
    summary:
      "Administering a hybrid Microsoft 365 environment across a multi-company organization, hardening identity and endpoints.",
    highlights: [
      "Provided Tier 2–3 technical support in a hybrid Microsoft 365 environment, supporting end users across Windows endpoints, cloud services, and identity platforms.",
      "Improved tenant security posture by raising the Microsoft Secure Score from 35% to 80% (a 45-point gain) by remediating identity, device, and data recommendations.",
      "Administered Microsoft Entra ID (Azure AD) including user provisioning, group management, role assignments, and Conditional Access policy enforcement.",
      "Managed Microsoft 365 services (Exchange Online, Teams, SharePoint, OneDrive), including mailbox issues, permissions, licensing, and service troubleshooting.",
      "Collaborated closely with the CTO on implementing IT policies, security controls, and operational improvements.",
      "Migrated on-premises server infrastructure to a fully cloud-based environment, improving scalability and system availability.",
      "Secured enterprise identity by managing Entra ID access controls including MFA, FIDO2, Conditional Access, RBAC, and security-group management.",
      "Led infrastructure upgrades, including modernization of on-premises network environments across multiple offices.",
      "Configured and maintained network infrastructure across multiple offices, including routers, switches, and firewalls, ensuring stable and secure connectivity.",
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
    badge: "S",
    badgeColor: "from-rose-500 to-red-400",
    dateRail: "2024 – 2025",
    title: "ITS Student Lab Monitor & HyFlex Ambassador",
    company: "Seneca Polytechnic",
    location: "North York, ON",
    period: "Aug 2024 – Feb 2025",
    mode: "On-site · 6 months",
    summary:
      "Supported computer labs and HyFlex classrooms, ensuring operational readiness and quick issue resolution.",
    highlights: [
      "Resolved technical issues with computers (AIOs), Crestron touch panels, AV gear, projectors, screens, and more.",
      "Managed inventory for IT equipment, ensuring accurate tracking and availability.",
      "Reimaged and deployed laptops for professors and students during the hardware sale.",
      "Installed and configured computers in classrooms, reimaged classroom computers, and teacher podiums to meet institutional standards.",
    ],
  },
  {
    badge: "E",
    badgeColor: "from-emerald-500 to-teal-400",
    dateRail: "2023 – 2024",
    title: "Service Desk Analyst — Level 1 & Level 2",
    company: "Esri Canada",
    location: "Toronto, ON",
    period: "Sep 2023 – Apr 2024",
    mode: "Co-op · 8 months",
    summary:
      "Delivered tier 1 & 2 IT support across hardware and software platforms, aligned with ITIL practices.",
    highlights: [
      "Provided tier 1 & 2 IT support across various hardware and software platforms, ensuring alignment with ITIL practices.",
      "Created and managed user accounts in Active Directory (AD) and performed access control based on company policies.",
      "Provided comprehensive IT orientations to all new hires, ensuring a smooth onboarding process.",
      "Successfully managed corporate laptop builds, mobile device reimaging, and deployment processes.",
      "Conducted hardware asset tagging and managed records through SAP.",
      "Worked closely with Dell for multiple part replacements, ensuring efficient and effective resolution of hardware issues through collaboration with external vendors.",
    ],
  },
];

const expStats = [
  { icon: "💼", value: "2+", label: "Years Experience" },
  { icon: "🏢", value: "3", label: "Organizations" },
  { icon: "🚀", value: "6", label: "Key Projects" },
];

const highlights = [
  { icon: "🔐", text: "Secured cloud identity and enterprise systems" },
  { icon: "🎯", text: "Detected and responded to complex threats" },
  { icon: "☁️", text: "Migrated infrastructure to the cloud" },
  { icon: "🤝", text: "Collaborated cross-functionally with the CTO" },
];

const strengths = [
  { name: "Identity & Access", level: 92 },
  { name: "Microsoft 365", level: 89 },
  { name: "Security Operations", level: 87 },
  { name: "Endpoint Management", level: 88 },
  { name: "Cloud & Infrastructure", level: 84 },
];

const tools = [
  "Entra ID", "Azure", "Intune", "Defender", "Exchange",
  "PowerShell", "ServiceNow", "Atera", "Windows Server",
];

function StrengthBar({ name, level }: { name: string; level: number }) {
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
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs text-slate-300">{name}</span>
        <span className="text-xs font-mono text-slate-500">{level}%</span>
      </div>
      <div className="bar-track">
        <div className="bar-fill" style={{ width: `${w}%` }} />
      </div>
    </div>
  );
}

function IdentityHologram() {
  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[760px] mx-auto lg:-my-8" aria-hidden="true">
      <div
        className="absolute inset-0 blur-3xl opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(47,107,255,0.4), transparent 62%)",
        }}
      />
      <Image
        src="/experience-shield.png"
        alt=""
        width={1449}
        height={1085}
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="relative w-full h-auto animate-float-slow"
      />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header: intro + hologram */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <SectionHeader
              label="My Experience"
              title="Experience That"
              highlight="Drives Security."
              subtitle="A journey of building secure systems, defending against threats, and delivering resilient cloud and security solutions that make an impact."
              align="left"
            />
            {/* Stat band */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              {expStats.map((s) => (
                <Reveal key={s.label}>
                  <div className="card p-3.5 sm:p-4 flex items-center gap-2.5">
                    <span className="icon-tile w-9 h-9 text-base shrink-0">{s.icon}</span>
                    <span className="flex flex-col">
                      <span className="font-display text-lg sm:text-xl font-extrabold h-grad">
                        {s.value}
                      </span>
                      <span className="text-[0.62rem] text-slate-500 leading-tight">
                        {s.label}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <IdentityHologram />
          </Reveal>
        </div>

        <p className="label mb-8">Experience Timeline</p>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Timeline with date rail */}
          <div className="lg:col-span-2">
            {jobs.map((job, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr] gap-3 sm:gap-4">
                  {/* Date rail */}
                  <div className="text-right pt-6 pr-1">
                    <span className="text-[0.68rem] sm:text-xs font-mono text-slate-500 leading-tight">
                      {job.dateRail}
                    </span>
                  </div>

                  {/* Line + node + card */}
                  <div
                    className={`relative pl-6 sm:pl-8 border-l border-brand-blue/20 ${
                      i === jobs.length - 1 ? "" : "pb-6"
                    }`}
                  >
                    <div className="absolute -left-[7px] top-7">
                      <span className="relative flex h-3.5 w-3.5">
                        {job.current && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-50" />
                        )}
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-ink-950 border-2 border-brand-blue" />
                      </span>
                    </div>

                    <div className="card p-5 sm:p-6">
                      <div className="flex items-start gap-4">
                        <span
                          className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${job.badgeColor} flex items-center justify-center font-display font-bold text-white text-sm shadow-lg`}
                        >
                          {job.badge}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-display font-semibold text-white text-[0.95rem] leading-snug">
                              {job.title}
                            </h3>
                            {job.current && (
                              <span className="text-[0.58rem] font-semibold px-2 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-light">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <p className="text-brand-light text-sm mt-0.5 font-medium">
                            {job.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-[0.7rem] text-slate-500 font-mono">
                            <span>📍 {job.location}</span>
                            <span>🗓 {job.period}</span>
                            <span className="text-brand-light/70">{job.mode}</span>
                          </div>
                        </div>
                        {/* Decorative arrow */}
                        <span
                          className="shrink-0 hidden sm:flex w-9 h-9 rounded-full border border-brand-blue/25 items-center justify-center text-brand-light/70"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
                        {job.summary}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {job.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                            <span className="text-brand-light mt-1.5 w-1 h-1 rounded-full bg-brand-light shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal>
              <div className="card p-6">
                <p className="label mb-4">Experience Highlights</p>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h.text} className="flex items-start gap-3">
                      <span className="icon-tile w-8 h-8 text-sm shrink-0">{h.icon}</span>
                      <span className="text-xs text-slate-300 leading-relaxed pt-1">
                        {h.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card p-6">
                <p className="label mb-4">Core Strengths</p>
                <div className="space-y-4">
                  {strengths.map((s) => (
                    <StrengthBar key={s.name} name={s.name} level={s.level} />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="card p-6">
                <p className="label mb-4">Tools &amp; Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
