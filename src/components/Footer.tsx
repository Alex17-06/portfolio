export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-terminal-cyan/10 py-10 px-4 mt-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-mono text-sm text-slate-500 mb-3">
          <span className="text-terminal-cyan">$</span> echo &quot;Thanks for
          visiting!&quot;
        </div>
        <p className="text-slate-600 text-xs font-mono">
          &copy; {year} Alex Philip &middot; Built with Next.js &amp; Tailwind
          CSS &middot; Secured with 🔒
        </p>
        <div className="flex justify-center gap-6 mt-5">
          <a
            href="mailto:alexphilip2121@gmail.com"
            className="text-slate-500 hover:text-terminal-cyan font-mono text-xs transition-colors"
          >
            [email]
          </a>
          <a
            href="https://www.linkedin.com/in/alex-philip-b9aa1a270"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-terminal-cyan font-mono text-xs transition-colors"
          >
            [linkedin]
          </a>
          <a
            href="https://github.com/alexphilip"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-terminal-green font-mono text-xs transition-colors"
          >
            [github]
          </a>
        </div>
      </div>
    </footer>
  );
}
