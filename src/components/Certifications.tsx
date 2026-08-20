"use client";

import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Cert {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  inProgress?: boolean;
}

const certifications: Cert[] = [
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "May 2025", badge: "☁️" },
  { name: "CompTIA Security+", issuer: "CompTIA", date: "Expected August 2026", badge: "🔒", inProgress: true },
  { name: "ISC2 Certified in Cybersecurity (CC)", issuer: "ISC2", date: "October 2024", badge: "🛡️" },
  { name: "Introduction to Cyber Security", issuer: "Cisco", date: "June 2023", badge: "🌐" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Certifications"
          title="Credentials That"
          highlight="Prove Expertise."
          subtitle="Industry-recognized certifications in cloud and cybersecurity."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 2) * 80}>
              <div className="card h-full p-5 sm:p-6 flex items-start gap-4">
                <span className="icon-tile w-12 h-12 text-2xl shrink-0">
                  {cert.badge}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-semibold text-white text-sm leading-snug">
                      {cert.name}
                    </h3>
                    {cert.inProgress && (
                      <span className="text-[0.55rem] font-semibold px-1.5 py-0.5 rounded bg-amber-500/12 border border-amber-500/30 text-amber-300 whitespace-nowrap">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs mt-1">{cert.issuer}</p>
                  <p className="text-slate-500 text-xs font-mono mt-1">
                    {cert.date}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education */}
        <Reveal className="max-w-4xl mx-auto mt-6" delay={100}>
          <div className="card p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <span className="icon-tile w-14 h-14 text-2xl shrink-0">🎓</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[0.6rem] font-semibold px-2 py-0.5 rounded-full bg-brand-blue/15 border border-brand-blue/30 text-brand-light">
                    EDUCATION
                  </span>
                </div>
                <h3 className="font-display font-semibold text-white text-base mt-2 leading-snug">
                  Computer Engineering Technology (ECT) — Advanced Diploma
                </h3>
                <p className="text-brand-light text-sm mt-0.5">
                  Seneca Polytechnic (Newnham Campus) · North York, ON
                </p>
                <p className="text-slate-500 text-xs font-mono mt-1">
                  May 2022 – April 2025
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Networking", "Cybersecurity", "Cloud Computing",
                    "System Administration", "Programming", "Database Management",
                  ].map((c) => (
                    <span key={c} className="chip">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
