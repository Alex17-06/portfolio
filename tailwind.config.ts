import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // xs: small/older phones (iPhone SE, Galaxy A series)
      xs: "375px",
      // Tailwind defaults below
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // 3xl: large TVs and 4K monitors
      "3xl": "1920px",
    },
    extend: {
      colors: {
        terminal: {
          green: "#00ff41",
          darkgreen: "#00cc33",
          cyan: "#00e5ff",
          amber: "#ffb300",
          red: "#ff1744",
          bg: "#0a0a0a",
          card: "#111111",
          border: "#1a1a2e",
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Source Code Pro"', "Consolas", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        "matrix-rain": "matrixRain 20s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 65, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 65, 0.6)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        matrixRain: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
