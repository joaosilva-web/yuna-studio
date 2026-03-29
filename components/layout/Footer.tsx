import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const socialLinks = [
  {
    href: "https://www.instagram.com/yunastudiohq/",
    label: "Instagram",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/yunastudiohq/",
    label: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const navLinks = [
  { href: "#method", label: "Método" },
  { href: "#services", label: "Serviços" },
  { href: "#work", label: "Trabalhos" },
  { href: "#contact", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-background-secondary">
      {/* Main footer content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="group flex items-center gap-3 w-fit">
              <Image
                src="/yuna-logo.svg"
                alt="Yuna Studio"
                width={28}
                height={28}
                className="transition-opacity duration-300 group-hover:opacity-70"
              />
              <span className="text-sm font-bold tracking-[0.18em] uppercase">
                Yuna Studio
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-muted-dark max-w-[220px]">
              Design e tecnologia com intenção. Construindo experiências que
              resistem ao tempo.
            </p>
          </div>

          {/* Navigation column */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-dark/60">
              Navegação
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted-dark transition-colors duration-300 hover:text-foreground w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social column */}
          <div className="flex flex-col gap-5">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-dark/60">
              Redes
            </span>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-muted-dark transition-colors duration-300 hover:text-foreground w-fit group"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-y-px">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <Container className="flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-[11px] text-muted-dark/50">
            &copy; {new Date().getFullYear()} Yuna Studio. Todos os direitos
            reservados.
          </p>
          <p className="text-[11px] tracking-[0.12em] uppercase text-muted-dark/40">
            Crafting Excellence
          </p>
        </Container>
      </div>
    </footer>
  );
}
