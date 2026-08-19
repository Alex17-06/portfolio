"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Animated semicircular gauge showing the Microsoft Secure Score
 * improvement from 35% to 80%. Animates when scrolled into view.
 */
export default function SecureScoreGauge() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0); // 0 → 1
  const started = useRef(false);

  const START = 35;
  const END = 80;
  const current = Math.round(START + (END - START) * progress);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (prefersReduced) {
        setProgress(1);
        return;
      }

      const duration = 1800;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setProgress(eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Semicircle arc geometry
  const radius = 80;
  const circumference = Math.PI * radius; // half circle
  const scoreFraction = current / 100;
  const dashOffset = circumference * (1 - scoreFraction);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative w-[220px] h-[130px]">
        <svg
          viewBox="0 0 200 120"
          className="w-full h-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3b6b" />
              <stop offset="50%" stopColor="#ffb300" />
              <stop offset="100%" stopColor="#00ff9c" />
            </linearGradient>
          </defs>

          {/* Track */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="rgba(148,163,184,0.15)"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Progress */}
          <path
            d="M 20 110 A 80 80 0 0 1 180 110"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ filter: "drop-shadow(0 0 6px rgba(0,255,156,0.4))" }}
          />
        </svg>

        {/* Center readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <span className="font-display text-4xl font-bold grad-text-teal">
            {current}%
          </span>
          <span className="text-[0.65rem] font-mono text-slate-500 uppercase tracking-wider">
            Secure Score
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 font-mono text-xs">
        <span className="text-terminal-red/80">from 35%</span>
        <span className="text-slate-500">→</span>
        <span className="text-terminal-green">80%</span>
        <span className="ml-1 px-2 py-0.5 rounded bg-terminal-green/10 border border-terminal-green/30 text-terminal-green">
          +45 pts
        </span>
      </div>
    </div>
  );
}
