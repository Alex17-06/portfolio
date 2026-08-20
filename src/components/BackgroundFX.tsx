"use client";

/**
 * Subtle animated background: faint neon "data packets" streaming across,
 * plus a few slow drifting particles. Deterministic positions (no Math.random)
 * to avoid hydration mismatch. Hidden under prefers-reduced-motion via CSS.
 */

const streams = Array.from({ length: 7 }, (_, i) => ({
  top: 8 + i * 12.5,
  duration: 9 + (i % 4) * 3,
  delay: (i % 5) * 2.4,
  width: 90 + (i % 3) * 60,
  color: i % 2 === 0 ? "#38bdf8" : "#2f6bff",
}));

const particles = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61 + 7) % 100,
  top: (i * 37 + 13) % 100,
  size: i % 3 === 0 ? 3 : 2,
  duration: 6 + (i % 5) * 2,
  delay: (i % 6) * 1.5,
}));

export default function BackgroundFX() {
  return (
    <div className="bg-fx fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Horizontal data packets */}
      {streams.map((s, i) => (
        <span
          key={`s-${i}`}
          className="bg-fx-stream"
          style={{
            top: `${s.top}%`,
            width: `${s.width}px`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
            boxShadow: `0 0 8px ${s.color}`,
          }}
        />
      ))}

      {/* Drifting particles */}
      {particles.map((p, i) => (
        <span
          key={`p-${i}`}
          className="bg-fx-particle"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
