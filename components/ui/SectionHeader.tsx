interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-20 ${centered ? "text-center" : ""}`}>
      {label && (
        <div className={`mb-5 flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-accent" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
            {label}
          </p>
        </div>
      )}
      <h2 className="text-3xl font-bold md:text-5xl lg:text-6xl">{title}</h2>
      {description && (
        <p className={`mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
