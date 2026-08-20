"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Job {
  badge: string;
  badgeColor: string;
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
    title: "IT Specialist — Systems Administration & Cloud Security",
    company: "The Plus Group",
    location: "Vaughan, ON",
    period: "Jun 2025 – Present",
    mode: "On-site",
    current: true,
    summary:
      "Administering a hybrid Microsoft 365 environment across a multi-company organization, hardening identity and endpoints.",
    highlights: [
      "Raised the Microsoft Secure Score from 35% to 80% by remediating identity, device, and data recommendations.",
      "Administered Entra ID — provisioning, groups, roles, and Conditional Access enforcement for 600+ users.",
      "Managed Exchange Online, Teams, SharePoint, and OneDrive across 6 companies (250 users).",
      "Migrated on-premises server infrastructure to a fully cloud-based environment.",
      "Configured Microsoft Defender for Endpoint; investigated and contained 200+ phishing/spoofing/fraud incidents.",
      "Deployed and managed endpoints via Intune and Atera; enforced MFA, FIDO2, and RBAC organization-wide.",
    ],
  },
  {
    badge: "E",
    badgeColor: "from-emerald-500 to-teal-400",
    title: "Service Desk Analyst — Level 1 & Level 2",
    company: "Esri Canada",
    location: "Toronto, ON",
    period: "Sep 2023 – Apr 2024",
    mode: "Co-op · 8 months",
    summary:
      "Delivered tier 1 & 2 IT support across hardware and software platforms, aligned with ITIL practices.",
    highlights: [
      "Created and managed user accounts in Active Directory and performed policy-based access control.",
      "Provided comprehensive IT orientations to all new hires for smooth onboarding.",
      "Managed corporate laptop builds, mobile device reimaging, and deployment processes.",
      "Conducted hardware asset tagging via SAP and coordinated Dell part replacements.",
    ],
  },
  {
    badge: "S",
    badgeColor: "from-indigo-500 to-purple-400",
    title: "ITS Student Lab Monitor & HyFlex Ambassador",
    company: "Seneca Polytechnic",
    location: "North York, ON",
    period: "Aug 2024 – Feb 2025",
    mode: "6 months",
    summary:
      "Supported computer labs and HyFlex classrooms, ensuring operational readiness and quick issue resolution.",
    highlights: [
      "Resolved issues with AIOs, Crestron touch panels, AV gear, projectors, and screens.",
      "Managed IT equipment inventory for accurate tracking and availability.",
      "Reimaged and deployed laptops for professors and students during the hardware sale.",
      "Installed and configured classroom computers and podiums to institutional standards.",
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

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="My Experience"
          title="Experience That"
          highlight="Drives Security."
          subtitle="A journey of building secure systems, defending against threats, and delivering resilient cloud and security solutions."
        />

        {/* Stat band */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl">
          {expStats.map((s) => (
            <Reveal key={s.label}>
              <div className="card p-4 sm:p-5 flex items-center gap-3">
                <span className="text-2xl">{s.icon}</span>
                <span className="flex flex-col">
                  <span className="font-display text-xl sm:text-2xl font-extrabold h-grad">
                    {s.value}
                  </span>
                  <span className="text-[0.68rem] text-slate-500">{s.label}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-6 sm:pl-8 ml-2 timeline-line space-y-6">
              {jobs.map((job, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="relative">
                    <div className="absolute -left-[1.7rem] sm:-left-[2.2rem] top-6">
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
                              <span className="text-[0.6rem] font-semibold px-2 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-light">
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
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal>
              <div className="card p-6">
                <p className="label mb-4">Highlights</p>
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
                <p className="label mb-4">Tools &amp; Tech</p>
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
