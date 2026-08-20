"use client";

import { useEffect, useState, useMemo } from "react";
import TypingEffect from "./TypingEffect";

const NODE_LABELS = [
  "Entra ID", "MFA", "Defender", "Intune", "Azure",
  "CA Policy", "FIDO2", "M365", "VPN", "RBAC",
  "SharePoint", "Exchange", "Zero Trust", "Graph",
];

// Deterministic positions — no Math.random() (prevents SSR hydration mismatch)
function seededNodes(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: (i * 37 + 11) % 100,
    top: (i * 53 + 9) % 100,
    duration: 6 + (i % 6) * 1.5,
    delay: (i % 5) * 0.8,
    size: i % 3 === 0 ? "text-sm" : "text-xs",
  }));
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const nodes = useMemo(() => seededNodes(NODE_LABELS.length), []);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28 overflow-hidden"
    >
      {/* Floating service nodes */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {nodes.map((n, i) => (
          <div
            key={i}
            className={`absolute font-mono ${n.size} text-terminal-cyan/10 select-none hidden sm:block animate-float`}
            style={{
              left: `${n.left}%`,
              top: `${n.top}%`,
              animationDuration: `${n.duration}s`,
              animationDelay: `${n.delay}s`,
            }}
          >
            {NODE_LABELS[i]}
          </div>
        ))}
      </div>

      {/* Orbiting rings — decorative HUD */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        <div className="w-[640px] h-[640px] rounded-full border border-terminal-cyan/5 animate-spin-slow" />
        <div className="absolute inset-0 m-auto w-[480px] h-[480px] rounded-full border border-cloud-violet/5 animate-spin-reverse" />
      </div>

      {/* Content */}
      <div
        className={`relative w-full max-w-4xl 2xl:max-w-6xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-terminal-green" />
            </span>
            <span className="font-mono text-xs text-slate-300">
              Available for cloud &amp; security roles
            </span>
          </div>
        </div>

        {/* HUD terminal panel */}
        <div className="holo-card hud-frame p-6 sm:p-10 2xl:p-14">
          <p className="font-mono text-xs sm:text-sm text-slate-500 mb-4">
            <span className="text-terminal-cyan">alex@m365-admin</span>
            <span className="text-slate-600">:~$</span> whoami
          </p>

          <h1 className="font-display text-4xl sm:text-6xl 2xl:text-7xl font-bold mb-4 leading-[1.05]">
            <span className="grad-text">Alex Philip</span>
          </h1>

          <div className="text-lg sm:text-2xl 2xl:text-3xl text-slate-200 font-medium mb-6 min-h-[2rem]">
            <span className="text-terminal-cyan">&gt;</span>{" "}
            <TypingEffect
              texts={[
                "Microsoft 365 & Cloud Systems Administrator",
                "Azure Entra ID & Zero Trust Architect",
                "Hybrid Identity & Conditional Access",
                "Endpoint Security & Defender Specialist",
                "Cybersecurity Incident Response",
              ]}
              speed={55}
              deleteSpeed={28}
              pauseTime={2400}
            />
          </div>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
            Microsoft 365 and cloud systems administrator managing hybrid{" "}
            <span className="text-terminal-cyan">Microsoft Entra ID</span>{" "}
            environments across a multi-company organization. Led endpoint
            migration from on-premises AD to Entra ID and designed{" "}
            <span className="text-terminal-green">Zero Trust</span> Conditional
            Access architecture for 600+ users.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              <span>&gt;</span> initialize_contact()
            </a>
            <a href="#projects" className="btn-ghost">
              <span>&gt;</span> view_projects()
            </a>
            <a
              href="/Alex_Philip_Resume.pdf"
              download
              className="btn-ghost"
            >
              <span>↓</span> download_resume()
            </a>
          </div>
        </div>

        {/* Quick tech strip */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Entra ID", "Conditional Access", "Defender", "Intune", "Azure", "PowerShell"].map(
            (t) => (
              <span key={t} className="cyber-tag">
                {t}
              </span>
            )
          )}
        </div>

        {/* Scroll cue */}
        <div className="mt-10 text-center animate-bounce">
          <a
            href="#about"
            className="text-terminal-cyan/40 font-mono text-sm hover:text-terminal-cyan/80 transition-colors min-h-[44px] inline-flex items-center"
          >
            ↓ scroll_down ↓
          </a>
        </div>
      </div>
    </section>
  );
}
