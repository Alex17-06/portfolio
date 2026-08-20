export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-blue/10 py-10 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="footShield" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#2f6bff" />
                </linearGradient>
              </defs>
              <path d="M17 3 L29 8 V17 C29 24 24 28.5 17 31 C10 28.5 5 24 5 17 V8 Z" fill="url(#footShield)" fillOpacity="0.18" stroke="url(#footShield)" strokeWidth="1.8" />
              <path d="M12 17 L15.5 20.5 L22 13.5" fill="none" stroke="url(#footShield)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-sm">Alex Philip</span>
              <span className="font-mono text-[0.58rem] tracking-[0.18em] text-brand-light/70 uppercase mt-0.5">
                Cloud &amp; Security
              </span>
            </div>
          </div>

          {/* Quote */}
          <p className="text-slate-500 text-sm text-center max-w-md">
            <span className="text-brand-light">&ldquo;</span>
            Security is not just a profession, it&apos;s my passion.
            <span className="text-brand-light">&rdquo;</span>
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a href="mailto:alexphilip2121@gmail.com" className="text-slate-500 hover:text-brand-light text-sm transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/alex-philip-b9aa1a270" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-light text-sm transition-colors">LinkedIn</a>
            <a href="/Alex_Philip_Resume.pdf" download className="text-slate-500 hover:text-brand-light text-sm transition-colors">Resume</a>
          </div>
        </div>

        <div className="section-divider my-6" />
        <p className="text-slate-600 text-xs text-center">
          &copy; {year} Alex Philip · Built with Next.js &amp; Tailwind CSS · Secured with 🔒
        </p>
      </div>
    </footer>
  );
}
