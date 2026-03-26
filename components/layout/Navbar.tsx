import Link from "next/link";
import Container from "./Container";
import Button from "../ui/Button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/[0.04] bg-background/70 backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-[0.15em] uppercase text-foreground transition-opacity duration-300 hover:opacity-80">
          Yuna Studio
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[13px] font-medium text-muted-dark transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" className="text-xs px-5 py-2.5">
            Book a Session
          </Button>
        </div>
      </Container>
    </header>
  );
}
