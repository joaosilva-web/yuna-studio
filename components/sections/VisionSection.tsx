"use client";

import { useReveal } from "@/lib/useReveal";
import Container from "../layout/Container";

const pillars = [
  {
    title: "Velocidade",
    description: "Da ideia ao produto em tempo recorde, focado no essencial.",
  },
  {
    title: "Validação",
    description:
      "Cada etapa aprovada pelo cliente, garantindo alinhamento total.",
  },
  {
    title: "Escala",
    description:
      "Arquitetura preparada para crescer junto com o seu negócio.",
  },
];

export default function VisionSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-28 md:py-36">
      <Container>
        {/* Label */}
        <div data-reveal className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Visão
          </span>
        </div>

        {/* Headline */}
        <h2
          data-reveal
          data-reveal-delay="1"
          className="max-w-4xl text-4xl font-extrabold leading-[1.1] md:text-6xl lg:text-7xl"
        >
          Transformamos ideias em{" "}
          <span className="text-foreground/90">produtos digitais reais.</span>
        </h2>

        {/* Divider */}
        <div data-reveal data-reveal-delay="2" className="my-16 h-px w-full bg-white/[0.06] md:my-20" />

        {/* Pillars grid */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} data-reveal data-reveal-delay={`${i + 3}`} className="group">
              {/* Top bar */}
              <div className="mb-6 flex items-center gap-0">
                <span className="h-[3px] w-6 rounded-full bg-accent transition-all duration-500 group-hover:w-10" />
                <span className="h-px flex-1 bg-white/[0.06]" />
              </div>

              <h3 className="text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                {pillar.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-dark">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
