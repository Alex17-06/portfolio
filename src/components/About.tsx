"use client";

import SectionHeader from "./SectionHeader";

const highlights = [
  {
    icon: "🛡️",
    title: "Endpoint Security",
    desc: "Microsoft Defender configuration, threat analysis, and device compliance enforcement.",
  },
  {
    icon: "☁️",
    title: "Cloud Administration",
    desc: "Azure Entra ID, Microsoft 365, Conditional Access, and Intune device management.",
  },
  {
    icon: "🔐",
    title: "Identity & Access",
    desc: "User provisioning, MFA enforcement, role-based access, and sign-in risk monitoring.",
  },
  {
    icon: "🔍",
    title: "Threat Investigation",
    desc: "Phishing response, message tracing, security alert triage, and incident remediation.",
  },
];

const stats = [
  { label: "location", value: "Scarborough, ON" },
  { label: "current_role", value: "IT Specialist – Cloud & Security", cyan: true },
  { label: "employer", value: "The Plus Group" },
  { label: "education", value: "Seneca Polytechnic – ECT", cyan: true },
  { label: "certs", value: "Security+ · ISC2 CC · AZ-900" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="cat about.md"
          title="About Me"
          subtitle="Cloud & Security-focused IT Specialist based in the Greater Toronto Area"
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {/* Bio */}
          <div className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-5 sm:p-6 card-glow">
            <div className="font-mono text-sm text-gray-500 mb-4">
              <span className="text-terminal-green">$</span> whoami
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              I&apos;m Alex Philip, a Cloud &amp; Security-focused IT Specialist with
              hands-on experience administering Microsoft 365 and Azure Entra ID
              in hybrid environments. I specialize in endpoint security, identity
              and access management, and threat investigation using Microsoft
              Defender.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Currently at <span className="text-terminal-cyan">The Plus Group</span>,
              I provide Tier 2–3 support, manage Conditional Access policies,
              investigate security incidents, and collaborate closely with the CTO
              on implementing IT policies and security controls.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-5 sm:p-6 card-glow">
            <div className="font-mono text-sm text-gray-500 mb-4">
              <span className="text-terminal-green">$</span> cat /proc/stats
            </div>
            <div className="space-y-3">
              {stats.map((s, i) => (
                <div key={s.label}>
                  {/* Stack label/value on xs, side-by-side from sm */}
                  <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-0.5 xs:gap-2">
                    <span className="text-gray-400 font-mono text-xs sm:text-sm shrink-0">
                      {s.label}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm text-right break-words ${
                        s.cyan ? "text-terminal-cyan" : "text-terminal-green"
                      }`}
                    >
                      {s.value}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="h-px bg-terminal-green/10 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus areas — 1 col on phone, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-terminal-card/40 border border-terminal-green/10 rounded-lg p-5 card-glow text-center"
            >
              <div className="text-3xl mb-3">{h.icon}</div>
              <h3 className="text-terminal-green font-mono text-sm font-semibold mb-2">
                {h.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
