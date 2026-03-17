"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const navLinks = [
  { href: "#home", label: "~/home" },
  { href: "#about", label: "~/about" },
  { href: "#skills", label: "~/skills" },
  { href: "#experience", label: "~/experience" },
  { href: "#certifications", label: "~/certs" },
  { href: "#education", label: "~/edu" },
  { href: "#contact", label: "~/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;
    requestAnimationFrame(() => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
      ticking.current = false;
    });
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("nav-open");
    } else {
      document.body.classList.remove("nav-open");
    }
    return () => document.body.classList.remove("nav-open");
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu if screen resizes to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-green/20 shadow-lg shadow-terminal-green/5"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="font-mono text-terminal-green font-bold text-base sm:text-lg hover:text-glow transition-all min-h-[44px] flex items-center"
            >
              <span className="text-terminal-cyan">&gt;</span>&nbsp;alex_philip
              <span className="animate-cursor-blink">_</span>
            </a>

            {/* Desktop nav — hidden on mobile/tablet */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-mono rounded transition-all min-h-[44px] flex items-center ${
                    activeSection === link.href.replace("#", "")
                      ? "text-terminal-green bg-terminal-green/10"
                      : "text-gray-400 hover:text-terminal-green hover:bg-terminal-green/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger button — 44×44 touch target */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-terminal-green font-mono text-xl min-h-[44px] min-w-[44px] flex items-center justify-center rounded hover:bg-terminal-green/10 transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? "[×]" : "[≡]"}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-terminal-bg/98 backdrop-blur-md border-b border-terminal-green/20"
          >
            <div className="px-4 py-2 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-3 min-h-[44px] text-sm font-mono text-gray-400 hover:text-terminal-green hover:bg-terminal-green/5 rounded transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Backdrop overlay — tap outside to close menu on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
