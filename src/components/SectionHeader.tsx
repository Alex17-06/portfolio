import Reveal from "./Reveal";

interface SectionHeaderProps {
  command: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  command,
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <Reveal className="mb-12 sm:mb-16 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-terminal-cyan/25 bg-terminal-cyan/5">
        <span className="w-1.5 h-1.5 rounded-full bg-terminal-cyan animate-pulse" />
        <p className="font-mono text-xs sm:text-sm text-terminal-cyan/80">
          {command}
        </p>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl 2xl:text-5xl font-bold mb-3">
        <span className="grad-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-6 max-w-[10rem] mx-auto" />
    </Reveal>
  );
}
