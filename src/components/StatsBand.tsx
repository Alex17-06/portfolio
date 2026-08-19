"use client";

import AnimatedCounter from "./AnimatedCounter";
import Reveal from "./Reveal";

interface Stat {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: string;
  accent: string; // tailwind text color class
}

const stats: Stat[] = [
  {
    end: 600,
    suffix: "+",
    label: "Users under Zero Trust",
    sublabel: "Conditional Access enforced",
    icon: "🔐",
    accent: "text-terminal-green",
  },
  {
    end: 250,
    label: "M365 users supported",
    sublabel: "across 6 companies",
    icon: "☁️",
    accent: "text-terminal-cyan",
  },
  {
    end: 200,
    suffix: "+",
    label: "Incidents contained",
    sublabel: "phishing, spoofing, fraud",
    icon: "🛡️",
    accent: "text-cloud-violet",
  },
  {
    end: 45,
    prefix: "+",
    suffix: " pts",
    label: "Secure Score gain",
    sublabel: "35% → 80%",
    icon: "📈",
    accent: "text-terminal-amber",
  },
];

export default function StatsBand() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 90}>
          <div className="holo-card h-full p-5 sm:p-6 text-center">
            <div className="text-2xl sm:text-3xl mb-2">{s.icon}</div>
            <div
              className={`font-display text-3xl sm:text-4xl font-bold ${s.accent}`}
            >
              <AnimatedCounter
                end={s.end}
                prefix={s.prefix}
                suffix={s.suffix}
              />
            </div>
            <div className="mt-2 text-xs sm:text-sm text-slate-200 font-semibold leading-snug">
              {s.label}
            </div>
            <div className="text-[0.7rem] text-slate-500 font-mono mt-0.5">
              {s.sublabel}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
