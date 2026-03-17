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
    <div className="mb-12 text-center">
      <p className="font-mono text-sm text-terminal-green/60 mb-2">
        <span className="text-terminal-green">$</span> {command}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="section-divider mt-6 max-w-xs mx-auto" />
    </div>
  );
}
