"use client";

import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader command="cat /var/log/education.log" title="Education" />

        <Reveal className="max-w-2xl 2xl:max-w-3xl mx-auto">
          <div className="holo-card p-6 sm:p-8">
            <div className="flex flex-col xs:flex-row items-start gap-4">
              <div className="hidden xs:flex w-14 h-14 rounded-xl bg-terminal-cyan/10 border border-terminal-cyan/20 items-center justify-center text-2xl shrink-0">
                🎓
              </div>
              <div className="w-full min-w-0">
                <h3 className="font-display text-base sm:text-lg font-semibold text-terminal-green leading-snug">
                  Computer Engineering Technology (ECT)
                </h3>
                <p className="text-terminal-cyan text-sm mb-1">
                  Advanced Diploma
                </p>
                <p className="text-slate-400 text-sm">
                  Seneca Polytechnic (Newnham Campus) · North York, ON
                </p>
                <p className="text-slate-500 text-xs font-mono mt-2">
                  May 2022 – April 2025
                </p>

                <div className="mt-4 pt-4 border-t border-slate-700/40">
                  <p className="text-sm text-slate-500 font-mono mb-2">
                    <span className="text-terminal-cyan">$</span> ls coursework/
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Networking", "Cybersecurity", "Cloud Computing",
                      "System Administration", "Electronics", "Programming",
                      "Database Management",
                    ].map((c) => (
                      <span key={c} className="cyber-tag text-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
