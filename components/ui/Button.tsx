import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-[0_0_0_rgba(255,77,141,0)] hover:shadow-[0_0_32px_rgba(255,77,141,0.35)] hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "bg-white/[0.03] border border-white/10 text-foreground backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.03] active:scale-[0.98]",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium transition-all duration-300 ease-out cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
