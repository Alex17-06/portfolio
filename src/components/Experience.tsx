"use client";

import { useEffect, useRef, useState } from "react";
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
      "Raised the Microsoft Secure Score from 35% to 80% by remediating identity, device, and data recommendations.",
      "Administered Entra ID — provisioning, groups, roles, and Conditional Access for 600+ users.",
      "Managed Exchange Online, Teams, SharePoint, and OneDrive across 6 companies (250 users).",
      "Configured Microsoft Defender for Endpoint; contained 200+ phishing, spoofing, and fraud incidents.",
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
      "Resolved issues with AIOs, Crestron touch panels, AV gear, projectors, and screens.",
      "Managed IT equipment inventory for accurate tracking and availability.",
      "Reimaged and deployed laptops for professors and students during the hardware sale.",
      "Installed and configured classroom computers and podiums to institutional standards.",
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
      "Created and managed user accounts in Active Directory and performed policy-based access control.",
      "Provided comprehensive IT orientations to all new hires for smooth onboarding.",
      "Managed corporate laptop builds, mobile device reimaging, and deployment processes.",
      "Conducted hardware asset tagging via SAP and coordinated Dell part replacements.",
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

const floatingLabels = [
  { title: "CLOUD SECURITY", pos: "top-[2%] left-[0%]" },
  { title: "THREAT DETECTION", pos: "top-[38%] left-[-6%]" },
  { title: "RISK MANAGEMENT", pos: "top-[6%] right-[-2%]" },
  { title: "SECURE ARCHITECTURE", pos: "bottom-[14%] right-[-4%]" },
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
    <div className="relative w-full max-w-[420px] mx-auto hidden md:block" aria-hidden="true">
      <svg viewBox="0 0 420 360" className="w-full h-auto">
        <defs>
          <linearGradient id="expShield" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8ec6ff" />
            <stop offset="1" stopColor="#2f6bff" />
          </linearGradient>
          <radialGradient id="expGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#4f8bff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#4f8bff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="expRing" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2f6bff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle cx="210" cy="150" r="130" fill="url(#expGlow)" opacity="0.4" />

        {/* Shield with person */}
        <g className="animate-float" style={{ transformOrigin: "210px 150px" }}>
          <path
            d="M210 40 L280 68 V150 C280 205 248 232 210 250 C172 232 140 205 140 150 V68 Z"
            fill="#0b1120"
            fillOpacity="0.5"
            stroke="url(#expShield)"
            strokeWidth="2.5"
          />
          {/* person */}
          <circle cx="210" cy="128" r="22" fill="none" stroke="url(#expShield)" strokeWidth="2.5" />
          <path
            d="M175 192 a35 32 0 0 1 70 0"
            fill="none"
            stroke="url(#expShield)"
            strokeWidth="2.5"
          />
        </g>

        {/* Podium rings */}
        <ellipse cx="210" cy="300" rx="150" ry="34" fill="none" stroke="url(#expRing)" strokeWidth="2" opacity="0.7" />
        <ellipse cx="210" cy="308" rx="105" ry="24" fill="none" stroke="url(#expRing)" strokeWidth="2" opacity="0.5" />
        <ellipse cx="210" cy="314" rx="62" ry="14" fill="none" stroke="url(#expRing)" strokeWidth="2" opacity="0.35" />
        {/* beam */}
        <rect x="205" y="250" width="10" height="60" fill="url(#expGlow)" opacity="0.5" />
      </svg>

      {floatingLabels.map((l) => (
        <div
          key={l.title}
          className={`absolute ${l.pos} card-flat px-3 py-2 flex items-center gap-2 animate-float`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-light shrink-0" />
          <span className="font-mono text-[0.58rem] tracking-wider text-brand-light font-semibold whitespace-nowrap">
            {l.title}
          </span>
        </div>
      ))}
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

        {/* CTA banner */}
        <Reveal className="mt-10">
          <div className="card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <span className="icon-tile w-12 h-12 text-xl hidden sm:flex shrink-0">🚀</span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Let&apos;s build a more secure future together.
                </h3>
                <p className="text-slate-400 text-sm mt-0.5">
                  I&apos;m always open to new opportunities and exciting projects.
                </p>
              </div>
            </div>
            <a href="#contact" className="btn-blue shrink-0">
              Get In Touch <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
