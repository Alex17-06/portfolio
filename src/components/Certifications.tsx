"use client";

import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

interface Cert {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  colorClass: string;
  status?: "in-progress";
}

const certifications: Cert[] = [
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "May 2025", badge: "☁️", colorClass: "text-terminal-cyan" },
  { name: "CompTIA Security+", issuer: "CompTIA", date: "Expected August 2026", badge: "🔒", colorClass: "text-terminal-green", status: "in-progress" },
  { name: "ISC2 CC (Certified in Cybersecurity)", issuer: "ISC2", date: "October 2024", badge: "🛡️", colorClass: "text-cloud-violet" },
  { name: "Introduction to Cyber Security", issuer: "Cisco", date: "June 2023", badge: "🌐", colorClass: "text-terminal-amber" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          command="openssl x509 -text -noout"
          title="Certifications"
          subtitle="Industry-recognized credentials in cloud and cybersecurity"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 2) * 90}>
              <div className="holo-card h-full p-5 sm:p-6 group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform shrink-0">
                    {cert.badge}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3
                        className={`font-display text-sm font-semibold ${cert.colorClass} leading-snug`}
                      >
                        {cert.name}
                      </h3>
                      {cert.status === "in-progress" && (
                        <span className="font-mono text-[0.6rem] px-1.5 py-0.5 rounded bg-terminal-amber/10 border border-terminal-amber/30 text-terminal-amber whitespace-nowrap">
                          IN PROGRESS
                        </span>
                      )}
                    </div>
                    <p className="text-slate-400 text-xs mt-1">{cert.issuer}</p>
                    <p className="text-slate-500 text-xs font-mono mt-1">
                      ⏱ {cert.date}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
