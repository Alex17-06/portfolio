import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        terminal: {
          green: "#00ff9c",
          darkgreen: "#00cc7a",
          cyan: "#22d3ee",
          amber: "#ffb300",
          red: "#ff3b6b",
          bg: "#050810",
          card: "#0b1020",
          border: "#1a2340",
        },
        // Cloud command-center palette
        cloud: {
          azure: "#3b82f6",
          sky: "#38bdf8",
          teal: "#2dd4bf",
          violet: "#8b5cf6",
          indigo: "#6366f1",
          deep: "#0a1230",
        },
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Source Code Pro"', "Consolas", "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-green": "0 0 20px rgba(0, 255, 156, 0.25)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
        "glow-azure": "0 0 24px rgba(59, 130, 246, 0.35)",
        "glow-violet": "0 0 24px rgba(139, 92, 246, 0.3)",
      },
      backgroundImage: {
        "cyber-grad":
          "linear-gradient(135deg, #050810 0%, #0a1230 50%, #050810 100%)",
        "azure-grad": "linear-gradient(135deg, #3b82f6, #22d3ee)",
        "teal-grad": "linear-gradient(135deg, #2dd4bf, #00ff9c)",
        "violet-grad": "linear-gradient(135deg, #8b5cf6, #6366f1)",
      },
      animation: {
        "cursor-blink": "blink 1s step-end infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
        "matrix-rain": "matrixRain 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-reverse": "spinReverse 24s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-ring": "pulseRing 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
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
          "0%, 100%": { boxShadow: "0 0 8px rgba(0, 255, 156, 0.25)" },
          "50%": { boxShadow: "0 0 28px rgba(34, 211, 238, 0.5)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        matrixRain: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
