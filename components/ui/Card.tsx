interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-card-border bg-card backdrop-blur-md p-7 ${
        hover
          ? "transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(255,77,141,0.06)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
