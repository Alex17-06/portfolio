"use client";

/**
 * Holographic cloud + shield + lock with a glowing circuit podium.
 * Pure SVG/CSS — no external assets. Approximates the 3D render in the
 * design mockups with wireframe styling, gradients, and soft glows.
 */
export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none" aria-hidden="true">
      <svg viewBox="0 0 560 560" className="w-full h-auto">
        <defs>
          <linearGradient id="cloudStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7cc0ff" />
            <stop offset="1" stopColor="#2f6bff" />
          </linearGradient>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e40af" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0b1120" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="shieldStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#8ec6ff" />
            <stop offset="1" stopColor="#2f6bff" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#4f8bff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#4f8bff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2f6bff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#60a5fa" stopOpacity="0.9" />
            <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
          </linearGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter id="softLg" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        {/* Ambient core glow */}
        <circle cx="280" cy="250" r="200" fill="url(#coreGlow)" opacity="0.35" />

        {/* Cloud — layered wireframe */}
        <g className="animate-float-slow" style={{ transformOrigin: "280px 200px" }}>
          <path
            d="M170 235
               a58 58 0 0 1 12 -112
               a70 70 0 0 1 132 -18
               a55 55 0 0 1 62 40
               a48 48 0 0 1 -6 90
               Z"
            fill="url(#shieldFill)"
            stroke="url(#cloudStroke)"
            strokeWidth="2.5"
            opacity="0.95"
          />
          {/* cloud inner mesh lines */}
          <path
            d="M175 205 h190 M188 175 h150 M205 145 h120"
            stroke="#4f8bff"
            strokeWidth="1"
            opacity="0.35"
          />
          <path
            d="M230 120 v120 M280 112 v128 M330 120 v118"
            stroke="#4f8bff"
            strokeWidth="1"
            opacity="0.25"
          />
        </g>

        {/* Vertical beam */}
        <rect x="274" y="250" width="12" height="150" fill="url(#coreGlow)" opacity="0.5" filter="url(#soft)" />

        {/* Shield + lock */}
        <g className="animate-float" style={{ transformOrigin: "280px 250px" }}>
          <path
            d="M280 150
               L345 178
               V255
               C345 305 315 330 280 348
               C245 330 215 305 215 255
               V178
               Z"
            fill="url(#shieldFill)"
            stroke="url(#shieldStroke)"
            strokeWidth="3"
          />
          {/* shield sheen */}
          <path
            d="M280 150 L345 178 V255 C345 305 315 330 280 348 Z"
            fill="#2f6bff"
            opacity="0.08"
          />
          {/* lock body */}
          <rect x="256" y="240" width="48" height="42" rx="7" fill="#0b1120" stroke="url(#shieldStroke)" strokeWidth="2.5" />
          {/* lock shackle */}
          <path
            d="M266 240 v-12 a14 14 0 0 1 28 0 v12"
            fill="none"
            stroke="url(#shieldStroke)"
            strokeWidth="2.5"
          />
          {/* keyhole */}
          <circle cx="280" cy="256" r="6" fill="#60a5fa" />
          <rect x="277" y="258" width="6" height="14" rx="2" fill="#60a5fa" />
        </g>

        {/* Podium — concentric glowing ellipses */}
        <g>
          <ellipse cx="280" cy="415" rx="180" ry="42" fill="none" stroke="url(#ringGrad)" strokeWidth="2" opacity="0.7" />
          <ellipse cx="280" cy="425" rx="130" ry="30" fill="none" stroke="url(#ringGrad)" strokeWidth="2" opacity="0.55" />
          <ellipse cx="280" cy="432" rx="80" ry="18" fill="none" stroke="url(#ringGrad)" strokeWidth="2" opacity="0.4" />
          <ellipse cx="280" cy="415" rx="180" ry="42" fill="#2f6bff" opacity="0.05" filter="url(#softLg)" />
        </g>

        {/* Scatter circuit dots */}
        <g fill="#60a5fa">
          {[
            [120, 300], [440, 280], [150, 380], [420, 360],
            [95, 240], [470, 210], [200, 430], [360, 440],
          ].map(([x, y], i) => (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 2 === 0 ? 2.5 : 1.6}
              opacity={0.5}
              className="animate-pulse-soft"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </g>
      </svg>

      {/* Pulse rings behind */}
      <div className="absolute left-1/2 top-[74%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="block w-40 h-40 rounded-full border border-brand-blue/30 animate-pulse-ring" />
      </div>
    </div>
  );
}
