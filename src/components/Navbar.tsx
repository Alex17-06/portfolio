"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
];

function ShieldLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="navShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#60a5fa" />
          <stop offset="1" stopColor="#2f6bff" />
        </linearGradient>
      </defs>
      <path
        d="M17 3 L29 8 V17 C29 24 24 28.5 17 31 C10 28.5 5 24 5 17 V8 Z"
        fill="url(#navShield)"
        fillOpacity="0.18"
        stroke="url(#navShield)"
        strokeWidth="1.8"
      />
      <path
        d="M12 17 L15.5 20.5 L22 13.5"
        fill="none"
        stroke="url(#navShield)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 40);
      const sections = [...navLinks.map((l) => l.href.replace("#", "")), "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(sections[i]);
          break;
        }
      }
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", mobileOpen);
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink-950/85 backdrop-blur-xl border-b border-brand-blue/12 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5 min-h-[44px]">
              <ShieldLogo />
              <span className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base sm:text-lg">
                  Alex Philip
                </span>
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-brand-light/70 uppercase mt-0.5">
                  Cloud &amp; Security
                </span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all min-h-[40px] flex items-center ${
                    activeSection === link.href.replace("#", "")
                      ? "text-brand-light"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" className="btn-blue ml-3 !min-h-[42px] !py-2 !px-4 text-sm">
                Contact Me
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-brand-light min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-brand-blue/10 transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-ink-950/95 backdrop-blur-xl border-b border-brand-blue/12"
          >
            <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4.25rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 min-h-[46px] text-sm font-medium text-slate-300 hover:text-white hover:bg-brand-blue/8 rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-blue w-full mt-2"
              >
                Contact Me →
              </a>
              <a
                href="/Alex_Philip_Resume.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="btn-outline w-full mt-2"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
