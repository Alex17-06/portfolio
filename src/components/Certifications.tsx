"use client";

import SectionHeader from "./SectionHeader";

interface Cert {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  colorClass: string;
}

const certifications: Cert[] = [
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "May 2025", badge: "☁️", colorClass: "text-terminal-cyan" },
  { name: "CompTIA Security+", issuer: "CompTIA", date: "Expected August 2026", badge: "🔒", colorClass: "text-terminal-green" },
  { name: "ISC2 CC (Certified in Cybersecurity)", issuer: "ISC2", date: "October 2024", badge: "🛡️", colorClass: "text-terminal-cyan" },
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
        {/* 1 col → 2 col on sm+ (4 certs) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-4 sm:p-5 card-glow group"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform shrink-0">
                  {cert.badge}
                </div>
                <div className="min-w-0">
                  <h3 className={`font-mono text-xs sm:text-sm font-semibold ${cert.colorClass} mb-1 leading-snug`}>
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{cert.issuer}</p>
                  <p className="text-gray-500 text-xs font-mono mt-1">⏱ {cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
