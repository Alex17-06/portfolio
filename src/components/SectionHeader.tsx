import Reveal from "./Reveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <Reveal className={`mb-12 sm:mb-14 ${isCenter ? "text-center" : ""}`}>
      <p className={`label mb-4 ${isCenter ? "justify-center" : ""}`}>{label}</p>
      <h2 className="font-display text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white leading-tight">
        {title}
        {highlight && <span className="h-grad"> {highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-slate-400 mt-4 text-sm sm:text-base ${
            isCenter ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
