const arrowPath = "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25";

type Variant = "default" | "on-accent";

const variantStyles: Record<Variant, { wrapper: string; arrow: string }> = {
  default: {
    wrapper:
      "border-white/[0.12] hover:border-accent hover:shadow-[0_0_24px_rgba(255,77,141,0.15)]",
    arrow: "text-foreground group-hover:text-accent",
  },
  "on-accent": {
    wrapper:
      "border-background/[0.12] hover:border-background hover:shadow-[0_0_24px_rgba(255,77,141,0.15)]",
    arrow: "text-background group-hover:text-foreground",
  },
};

export default function ArrowButton({
  href,
  variant = "default",
}: {
  href: string;
  variant?: Variant;
}) {
  const { wrapper, arrow } = variantStyles[variant];

  return (
    <a
      href={href}
      className={`group mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border transition-all duration-500 hover:scale-110 ${wrapper}`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute z-10 h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 ${arrow}`}
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={arrowPath} />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={`absolute z-0 h-5 w-5 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 ${arrow}`}
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={arrowPath} />
        </svg>
      </span>
    </a>
  );
}
