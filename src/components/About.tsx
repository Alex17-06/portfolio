"use client";

import SectionHeader from "./SectionHeader";
import SecureScoreGauge from "./SecureScoreGauge";
import Reveal from "./Reveal";

const facts = [
  { label: "Location", value: "Scarborough, ON" },
  { label: "Role", value: "Systems Admin & Cloud Security" },
  { label: "Employer", value: "The Plus Group" },
  { label: "Education", value: "Seneca Polytechnic — ECT" },
  { label: "Focus", value: "Entra ID · M365 · Defender" },
  { label: "Status", value: "Open to opportunities" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="About Me"
          title="Building security into"
          highlight="everything I do."
          subtitle="Microsoft 365 & Cloud Systems Administrator based in the Greater Toronto Area, securing hybrid environments across a multi-company organization."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Bio */}
          <Reveal className="lg:col-span-2">
            <div className="card h-full p-6 sm:p-8">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                Security is not just my profession,{" "}
                <span className="h-grad">it&apos;s my passion.</span>
              </h3>
              <p className="text-slate-400 leading-relaxed mb-4 text-sm sm:text-base">
                I&apos;m Alex Philip, a Microsoft 365 and cloud systems
                administrator with hands-on experience managing hybrid Microsoft
                Entra ID environments across a multi-company organization. I led
                the migration of corporate endpoints from on-premises Active
                Directory to Entra ID and designed Zero Trust Conditional Access
                architecture spanning MFA, named locations, and session controls.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                Currently at{" "}
                <span className="text-brand-light font-medium">
                  The Plus Group
                </span>
                , I administer M365 services for 250 users across 6 companies,
                raised the Microsoft Secure Score from 35% to 80%, and
                collaborate closely with the CTO on IT policies, security
                controls, and operational improvements.
              </p>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-3 mt-6 pt-6 border-t border-brand-blue/10">
                {facts.map((f) => (
                  <div key={f.label} className="flex items-center justify-between gap-3">
                    <span className="text-slate-500 text-xs font-mono uppercase tracking-wide shrink-0">
                      {f.label}
                    </span>
                    <span className="text-slate-200 text-xs sm:text-sm text-right font-medium">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Secure Score */}
          <Reveal delay={120}>
            <div className="card h-full p-6 sm:p-8 flex flex-col items-center justify-center">
              <p className="label mb-6 self-start">Tenant Hardening</p>
              <SecureScoreGauge />
              <p className="text-xs text-slate-500 text-center mt-5 leading-relaxed">
                Raised Microsoft Secure Score by remediating identity, device,
                and data recommendations across the tenant.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
