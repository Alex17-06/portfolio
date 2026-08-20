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
        // SecureByDesign electric-blue system
        brand: {
          blue: "#2f6bff",
          bright: "#3b82f6",
          light: "#60a5fa",
          glow: "#4f8bff",
          cyan: "#38bdf8",
          teal: "#22d3ee",
        },
        ink: {
          950: "#05070f",
          900: "#070b16",
          850: "#0a1020",
          800: "#0b1120",
          card: "#0d1526",
          border: "#1c2740",
        },
      },
      fontFamily: {
        display: ['"Sora"', '"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"Fira Code"', '"Source Code Pro"', "Consolas", "monospace"],
      },
      boxShadow: {
        "glow-blue": "0 0 28px rgba(47, 107, 255, 0.35)",
        "glow-blue-lg": "0 0 60px rgba(47, 107, 255, 0.35)",
        "card-hover": "0 18px 50px rgba(3, 8, 24, 0.7)",
      },
      backgroundImage: {
        "blue-grad": "linear-gradient(135deg, #2f6bff, #60a5fa)",
        "blue-grad-br": "linear-gradient(120deg, #2563eb, #38bdf8)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 22s linear infinite",
        "spin-reverse": "spinReverse 30s linear infinite",
        "pulse-ring": "pulseRing 3.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "cursor-blink": "blink 1s step-end infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.85)", opacity: "0.6" },
          "100%": { transform: "scale(2)", opacity: "0" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
