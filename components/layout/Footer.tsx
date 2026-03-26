import Link from "next/link";
import Container from "./Container";

const footerLinks = [
  { href: "#", label: "Our Method" },
  { href: "#", label: "Direct" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Products" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] bg-background-secondary py-12">
      <Container className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <p className="text-sm font-bold tracking-[0.15em] uppercase">
          Yuna Studio
        </p>

        <p className="text-xs text-muted-dark">
          &copy; {new Date().getFullYear()} Yuna Studio. Crafting Excellence.
        </p>

        <nav className="flex items-center gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-muted-dark transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
