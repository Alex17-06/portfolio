"use client";

import SectionHeader from "./SectionHeader";
import SecureScoreGauge from "./SecureScoreGauge";
import StatsBand from "./StatsBand";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: "☁️",
    title: "M365 & Cloud Admin",
    desc: "Exchange Online, Teams, SharePoint, OneDrive administration across multi-company organizations.",
    accent: "text-terminal-cyan",
  },
  {
    icon: "🔐",
    title: "Identity & Zero Trust",
    desc: "Entra ID, Conditional Access, MFA, FIDO2, RBAC, and hybrid identity management for 600+ users.",
    accent: "text-terminal-green",
  },
  {
    icon: "🛡️",
    title: "Security Operations",
    desc: "Microsoft Defender, threat investigation, incident response, and endpoint hardening.",
    accent: "text-cloud-violet",
  },
  {
    icon: "🔧",
    title: "Infra & Automation",
    desc: "AD-to-Entra migration, PowerShell + Graph automation, Intune MDM, and network infrastructure.",
    accent: "text-terminal-amber",
  },
];

const stats = [
  { label: "location", value: "Scarborough, ON" },
  { label: "current_role", value: "Systems Admin & Cloud Security", cyan: true },
  { label: "employer", value: "The Plus Group" },
  { label: "education", value: "Seneca Polytechnic – ECT", cyan: true },
  { label: "certs", value: "AZ-900 · ISC2 CC · Security+ (in progress)" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="cat about.md"
          title="About Me"
          subtitle="Microsoft 365 & Cloud Systems Administrator based in the Greater Toronto Area"
        />

        {/* Impact metrics */}
        <div className="mb-10">
          <StatsBand />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Bio — spans 2 cols */}
          <Reveal className="lg:col-span-2">
            <div className="holo-card h-full p-6 sm:p-8">
              <div className="font-mono text-sm text-slate-500 mb-4">
                <span className="text-terminal-cyan">$</span> whoami
              </div>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I&apos;m Alex Philip, a Microsoft 365 and cloud systems
                administrator with hands-on experience managing hybrid Microsoft
                Entra ID environments across a multi-company organization. I led
                the migration of corporate endpoints from on-premises Active
                Directory to Entra ID and designed Zero Trust Conditional Access
                architecture spanning MFA, named locations, and session controls.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Currently at{" "}
                <span className="text-terminal-cyan">The Plus Group</span>, I
                administer M365 services for 250 users across 6 companies, raised
                the Microsoft Secure Score from 35% to 80%, and collaborate
                closely with the CTO on IT policies, security controls, and
                operational improvements.
              </p>

              {/* Stat readout */}
              <div className="mt-6 pt-6 border-t border-slate-700/40 space-y-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-0.5 xs:gap-2"
                  >
                    <span className="text-slate-500 font-mono text-xs sm:text-sm shrink-0">
                      <span className="text-terminal-cyan/60">▸</span> {s.label}
                    </span>
                    <span
                      className={`font-mono text-xs sm:text-sm text-right break-words ${
                        s.cyan ? "text-terminal-cyan" : "text-terminal-green"
                      }`}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Secure Score gauge */}
          <Reveal delay={120}>
            <div className="holo-card h-full p-6 sm:p-8 flex flex-col items-center justify-center">
              <div className="font-mono text-xs text-slate-500 mb-4 self-start">
                <span className="text-terminal-cyan">$</span> get-securescore
              </div>
              <SecureScoreGauge />
              <p className="text-xs text-slate-500 text-center mt-4 leading-relaxed">
                Remediated identity, device, and data recommendations to harden
                the tenant.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Focus areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 80}>
              <div className="holo-card h-full p-5 text-center group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {h.icon}
                </div>
                <h3
                  className={`font-display text-sm font-semibold mb-2 ${h.accent}`}
                >
                  {h.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {h.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
