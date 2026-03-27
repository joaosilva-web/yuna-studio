"use client";

import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import { useRef, useEffect } from "react";

const cards = [
  {
    title: "Especialidade",
    description:
      "Elevamos seu projeto ao próximo nível de engenharia e design com nossa expertise tecnológica.",
    variant: "accent" as const,
  },
  {
    title: "Jornada Digital",
    description:
      "Estamos prontos para iniciar seu percurso digital com foco total em validação e escala.",
    variant: "outline" as const,
  },
  {
    title: "Protagonismo",
    description:
      "Convidamos líderes e visionários a assumirem o papel principal no futuro tecnológico.",
    variant: "outline" as const,
  },
  {
    title: "A Hora é Agora",
    description:
      "O momento de transformar sua visão em realidade é hoje. Vamos construir o futuro juntos.",
    variant: "accent" as const,
  },
];

const cardStyles = {
  accent:
    "bg-accent text-text transition-all duration-700 ease-out hover:shadow-[0_4px_32px_rgba(255,77,141,0.15)] hover:-translate-y-0.5",
  outline:
    "border border-white/[0.08] bg-card backdrop-blur-md text-foreground transition-all duration-700 ease-out hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5",
};

export default function CTASection() {
  
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    try {
      v.playbackRate = 0.6;
    } catch (e) {
      // ignore if not supported
    }
  }, []);

  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        {/* Bento grid */}
        <Reveal className="grid gap-4 md:grid-cols-3">
          {/* Left — video */}
          <div className="row-span-2 overflow-hidden rounded-2xl border border-white/[0.06]">
            <video
              ref={videoRef}
              className="h-full min-h-[280px] w-full object-cover bg-center"
              src="/images/work.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/work-3.png"
            />
          </div>

          {/* Top center — Especialidade */}
          <div
            className={`group rounded-2xl p-7 md:p-8 ${cardStyles[cards[0].variant]}`}
          >
            <h3 className="text-lg font-bold tracking-tight">
              {cards[0].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              {cards[0].description}
            </p>
          </div>

          {/* Top right — Jornada Digital */}
          <div
            className={`group rounded-2xl p-7 md:p-8 ${cardStyles[cards[1].variant]}`}
          >
            <h3 className="text-lg font-bold tracking-tight">
              {cards[1].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-dark">
              {cards[1].description}
            </p>
          </div>

          {/* Bottom center — Protagonismo */}
          <div
            className={`group rounded-2xl p-7 md:p-8 ${cardStyles[cards[2].variant]}`}
          >
            <h3 className="text-lg font-bold tracking-tight">
              {cards[2].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-dark">
              {cards[2].description}
            </p>
          </div>

          {/* Bottom right — A Hora é Agora */}
          <div
            className={`group rounded-2xl p-7 md:p-8 ${cardStyles[cards[3].variant]}`}
          >
            <h3 className="text-lg font-bold tracking-tight">
              {cards[3].title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              {cards[3].description}
            </p>
          </div>
        </Reveal>

        {/* Headline + arrow */}
        <Reveal delay={0.1} className="mt-20 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold uppercase leading-none md:text-6xl lg:text-7xl">
            Vamos tirar sua
            <br />
            <span className="italic text-accent">ideia do papel</span>
          </h2>

          <a
            href="#"
            className="group mb-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-500 hover:scale-110 hover:border-accent hover:shadow-[0_0_24px_rgba(255,77,141,0.15)]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center">
              {/* Front arrow: moves outwards on hover (tangent) */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="absolute z-10 h-5 w-5 text-foreground transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-3 group-hover:text-accent"
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
                className="absolute z-0 h-5 w-5 text-foreground opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
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
        </Reveal>
      </Container>
    </section>
  );
}
