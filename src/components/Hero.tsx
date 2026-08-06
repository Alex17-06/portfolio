"use client";

import { useEffect, useState, useMemo } from "react";
import TypingEffect from "./TypingEffect";

const PARTICLE_LABELS = [
  "0", "1", "{}", "//", "=>", "&&", "ssh", "apt",
  "sudo", "nmap", ">>", "0x", "tcp", "dns", "ssl",
  "vpn", "iam", "mfa", "aes", "rsa",
];

// Deterministic — no Math.random() (prevents SSR hydration mismatch)
function seededPositions(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 37 + 13) % 100,
    top: (i * 53 + 7) % 100,
    duration: 15 + (i % 7) * 3,
    delay: (i % 5) * 2,
  }));
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const particles = useMemo(() => seededPositions(PARTICLE_LABELS.length), []);

  useEffect(() => { setLoaded(true); }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute text-terminal-green/10 font-mono text-xs select-none hidden sm:block"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {PARTICLE_LABELS[i]}
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className={`w-full max-w-3xl 2xl:max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Terminal window */}
        <div className="bg-terminal-card/80 backdrop-blur-sm border border-terminal-green/20 rounded-lg overflow-hidden shadow-2xl shadow-terminal-green/5">
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-terminal-bg/90 border-b border-terminal-green/10">
            <div className="w-3 h-3 rounded-full bg-terminal-red/80" />
            <div className="w-3 h-3 rounded-full bg-terminal-amber/80" />
            <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
            <span className="ml-3 text-xs font-mono text-gray-500 truncate">
              alex@m365-admin:~
            </span>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-8 2xl:p-12 text-left font-mono">
            <p className="text-gray-500 text-xs sm:text-sm mb-2">
              <span className="text-terminal-green">$</span> cat /etc/profile
            </p>
            <h1 className="text-3xl sm:text-5xl 2xl:text-6xl font-bold text-terminal-green text-glow mb-3 sm:mb-4">
              Alex Philip
            </h1>
            <div className="text-base sm:text-xl 2xl:text-2xl text-terminal-cyan mb-5 sm:mb-6 min-h-[1.75rem]">
              <TypingEffect
                texts={[
                  "Microsoft 365 & Cloud Systems Administrator",
                  "Azure Entra ID & Zero Trust Architect",
                  "Hybrid Identity & Conditional Access",
                  "Endpoint Security & Defender Specialist",
                  "Cybersecurity Incident Response",
                ]}
                speed={60}
                deleteSpeed={30}
                pauseTime={2500}
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-2xl">
              <span className="text-terminal-green">$</span> echo $SUMMARY
              <br />
              <span className="text-gray-300 mt-2 block">
                Microsoft 365 and cloud systems administrator with hands-on
                experience managing hybrid Microsoft Entra ID environments
                across a multi-company organization. Led endpoint migration
                from on-premises AD to Entra ID and designed Zero Trust
                Conditional Access architecture for 600+ users.
              </span>
            </p>

            {/* CTA buttons — full-width on tiny phones, auto on larger */}
            <div className="flex flex-col xs:flex-row flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-terminal-green/10 border border-terminal-green/40 text-terminal-green font-mono text-sm rounded hover:bg-terminal-green/20 hover:border-terminal-green/60 transition-all min-h-[44px]"
              >
                <span>&gt;</span> initialize_contact()
              </a>
              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-terminal-cyan/5 border border-terminal-cyan/30 text-terminal-cyan font-mono text-sm rounded hover:bg-terminal-cyan/15 hover:border-terminal-cyan/50 transition-all min-h-[44px]"
              >
                <span>&gt;</span> view_experience()
              </a>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-10 sm:mt-12 text-center animate-bounce">
          <a
            href="#about"
            className="text-terminal-green/40 font-mono text-sm hover:text-terminal-green/70 transition-colors min-h-[44px] inline-flex items-center"
          >
            ↓ scroll_down ↓
          </a>
        </div>
      </div>
    </section>
  );
}
