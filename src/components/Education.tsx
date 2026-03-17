"use client";

import SectionHeader from "./SectionHeader";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader command="cat /var/log/education.log" title="Education" />

        <div className="max-w-2xl 2xl:max-w-3xl mx-auto">
          <div className="bg-terminal-card/60 border border-terminal-green/10 rounded-lg p-5 sm:p-6 card-glow">
            <div className="flex flex-col xs:flex-row items-start gap-4">
              {/* Icon — hidden on xs to save space, visible from sm */}
              <div className="hidden xs:flex w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-terminal-green/10 border border-terminal-green/20 items-center justify-center text-2xl shrink-0">
                🎓
              </div>
              <div className="w-full min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-terminal-green font-mono leading-snug">
                  Computer Engineering Technology (ECT)
                </h3>
                <p className="text-terminal-cyan text-sm mb-1">Advanced Diploma</p>
                <p className="text-gray-400 text-sm">
                  Seneca Polytechnic (Newnham Campus) · North York, ON
                </p>
                <p className="text-gray-500 text-xs font-mono mt-2">May 2022 – April 2025</p>

                <div className="mt-4 pt-4 border-t border-terminal-green/10">
                  <p className="text-sm text-gray-500 font-mono mb-2">
                    <span className="text-terminal-green">$</span> ls coursework/
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Networking", "Cybersecurity", "Cloud Computing",
                      "System Administration", "Electronics", "Programming",
                      "Database Management",
                    ].map((c) => (
                      <span key={c} className="cyber-tag text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
