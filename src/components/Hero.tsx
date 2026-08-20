"use client";

import Image from "next/image";
import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

const features = [
  {
    icon: "🔐",
    title: "Identity & Access",
    items: ["Entra ID & Hybrid Identity", "Conditional Access & MFA", "FIDO2 · RBAC · Zero Trust"],
  },
  {
    icon: "🛡️",
    title: "Security Operations",
    items: ["Microsoft Defender", "Threat Investigation", "Incident Response"],
  },
  {
    icon: "☁️",
    title: "M365 Administration",
    items: ["Exchange · Teams · SharePoint", "Licensing & Mail Flow", "Intune Device Management"],
  },
  {
    icon: "⚡",
    title: "Endpoint & Automation",
    items: ["PowerShell + Graph", "AD → Entra Migration", "VDI & Modern Print"],
  },
];

const stats = [
  { end: 600, suffix: "+", label: "Users under Zero Trust", sub: "Conditional Access enforced" },
  { end: 250, label: "M365 users supported", sub: "across 6 companies" },
  { end: 200, suffix: "+", label: "Incidents contained", sub: "phishing · spoofing · fraud" },
  { end: 45, prefix: "+", suffix: " pts", label: "Secure Score gain", sub: "35% → 80%" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top: heading + graphic */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left copy */}
          <Reveal>
            <p className="label mb-6">Microsoft 365 &amp; Cloud Security</p>
            <h1 className="font-display font-extrabold text-white leading-[1.02] text-5xl sm:text-6xl 2xl:text-7xl mb-6">
              Securing Cloud.
              <br />
              <span className="h-grad">Protecting Identity.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Microsoft 365 &amp; Cloud Systems Administrator focused on hybrid
              Entra ID, Zero Trust Conditional Access, and endpoint security.
              Passionate about identity protection, threat response, and
              hardening cloud environments at scale.
            </p>
            <div className="flex flex-col xs:flex-row flex-wrap gap-3">
              <a href="#projects" className="btn-blue">
                View My Work <span aria-hidden="true">→</span>
              </a>
              <a href="/Alex_Philip_Resume.pdf" download className="btn-outline">
                Download Resume <span aria-hidden="true">↓</span>
              </a>
            </div>
          </Reveal>

          {/* Right graphic — holographic cloud/shield */}
          <Reveal delay={150}>
            <div className="relative">
              {/* soft glow behind */}
              <div
                className="absolute inset-0 blur-3xl opacity-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(47,107,255,0.4), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/hero-cloud.png"
                alt="Holographic cloud secured by a shield and lock, with cloud architecture, cloud security, threat detection, and risk mitigation callouts"
                width={1435}
                height={1096}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="relative w-full h-auto animate-float-slow"
              />
            </div>
          </Reveal>
        </div>

        {/* Feature row */}
        <Reveal delay={100} className="mt-14 lg:mt-20">
          <div className="card p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-brand-blue/10">
              {features.map((f) => (
                <div key={f.title} className="pt-6 sm:pt-0 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="icon-tile w-9 h-9 text-lg">{f.icon}</span>
                    <h3 className="font-display font-semibold text-white text-[0.95rem]">
                      {f.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {f.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-brand-light mt-1.5 w-1 h-1 rounded-full bg-brand-light shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Stats band */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="card p-5 sm:p-6 text-center h-full">
                <div className="font-display text-3xl sm:text-4xl font-extrabold h-grad">
                  <AnimatedCounter end={s.end} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs sm:text-sm text-slate-200 font-semibold">
                  {s.label}
                </div>
                <div className="text-[0.68rem] text-slate-500 mt-0.5">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
