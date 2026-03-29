"use client";

import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "CEO, RetroFuture",
    text: "A Yuna transformou completamente nossa presença digital. Em dois meses após o lançamento, nossa taxa de conversão aumentou 180%. O processo foi transparente do início ao fim — sem surpresas, sem retrabalho.",
    avatar: "MC",
  },
  {
    name: "Rafael Mendes",
    role: "Fundador, Gestão Smart",
    text: "O que me impressionou foi a clareza do processo. Cada etapa foi validada comigo antes de avançar. O sistema entregue automatizou processos que antes levavam horas — hoje rodam sozinhos.",
    avatar: "RM",
  },
  {
    name: "Ana Beatriz Lima",
    role: "Diretora, Lumina Labs",
    text: "Precisávamos transmitir credibilidade para investidores e a Yuna entendeu isso perfeitamente. A identidade digital que criaram gerou reconhecimento em premiações de design logo no primeiro mês.",
    avatar: "AL",
  },
];

function StarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-accent"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[150px]" />

      <Container>
        {/* Header */}
        <Reveal>
          <div className="mb-16 max-w-2xl md:mb-20">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Depoimentos
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
              Quem confiou,{" "}
              <span className="text-accent">aprovou.</span>
            </h2>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.12}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-700 hover:border-white/[0.1] hover:bg-white/[0.04] hover:shadow-[0_8px_48px_rgba(255,77,141,0.05)] md:p-8">
                {/* Stars */}
                <div>
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-[0.94rem] leading-relaxed text-muted-dark transition-colors duration-500 group-hover:text-muted">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/[0.04] pt-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-dark">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
