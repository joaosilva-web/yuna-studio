"use client";

import { useReveal } from "@/lib/useReveal";
import Container from "../layout/Container";
import Card from "../ui/Card";

const pillars = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
    title: "Co-criação Estratégica",
    description:
      "Construção guiada diretamente com o cliente para alinhamento total.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
        />
      </svg>
    ),
    title: "ApproveFlow",
    description:
      "Nosso método exclusivo de validação real e contínua do produto.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    title: "Agilidade e Eficiência",
    description:
      "Entrega rápida e excelente relação custo-benefício para o negócio.",
  },
];

export default function DiferencialSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/[0.03] blur-[120px]" />

      <Container>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div data-reveal>
            <h2 className="text-4xl font-black leading-none text-accent md:text-6xl lg:text-7xl uppercase">
              Nosso
              <br />
              Diferencial
            </h2>

            <p className="mt-8 text-lg font-medium italic text-foreground/90 md:text-xl">
              Os pilares que sustentam a entrega da Yuna:
            </p>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-dark">
              Nossa abordagem combina co-criação estratégica e validação
              contínua para garantir que cada solução técnica esteja
              perfeitamente alinhada aos objetivos de negócio, focando em
              resultados ágeis e de alta qualidade.
            </p>

            {/* Featured card */}
            <div
              data-reveal
              data-reveal-delay="2"
              className="group relative mt-12 overflow-hidden rounded-2xl bg-accent p-8 transition-all duration-500 hover:shadow-[0_8px_48px_rgba(255,77,141,0.2)]"
            >
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 select-none text-7xl font-bold uppercase leading-none text-white/[0.08] md:text-8xl transition-transform duration-700 group-hover:scale-110">
                Yuna
              </span>

              <h3 className="relative text-sm font-extrabold uppercase tracking-widest text-background">
                Construção Guiada
              </h3>

              <p className="relative mt-4 max-w-sm text-sm leading-relaxed text-background/70">
                &ldquo;Estabelecemos um processo de co-criação estratégica
                diretamente com o cliente, garantindo que a visão do produto
                seja traduzida em excelência técnica.&rdquo;
              </p>

              <div className="relative mt-6 flex h-10 w-10 items-center justify-center">
                <a
                  href="#"
                  className="group mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-background/[0.12] transition-all duration-500 hover:scale-110 hover:border-background hover:shadow-[0_0_24px_rgba(255,77,141,0.15)]"
                >
                  <span className="relative flex h-10 w-10 items-center justify-center">
                    {/* Front arrow: moves outwards on hover (tangent) */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute z-10 h-5 w-5 text-background transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:text-foreground"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>

                    {/* Back arrow: fades in behind as front moves */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="absolute z-0 h-5 w-5 text-background opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right column — pillar cards */}
          <div className="flex flex-col gap-4 lg:pt-16">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                data-reveal
                data-reveal-delay={`${i + 1}`}
              >
                <Card className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-surface text-accent transition-all duration-500 group-hover:border-accent/20 group-hover:shadow-[0_0_16px_rgba(255,77,141,0.08)] group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-dark">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
