"use client";

import { useRef, useEffect } from "react";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import ArrowButton from "../ui/ArrowButton";
import { Mail, MessageCircle } from "lucide-react";
import Button from "../ui/Button";

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
  accent: {
    wrapper:
      "bg-accent text-text transition-all duration-700 ease-out hover:shadow-[0_4px_32px_rgba(255,77,141,0.15)] hover:-translate-y-0.5",
    description: "opacity-80",
  },
  outline: {
    wrapper:
      "border border-white/[0.08] bg-card backdrop-blur-md text-foreground transition-all duration-700 ease-out hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5",
    description: "text-muted-dark",
  },
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

          {cards.map((card) => {
            const styles = cardStyles[card.variant];
            return (
              <div
                key={card.title}
                className={`group rounded-2xl p-7 md:p-8 ${styles.wrapper}`}
              >
                <h3 className="text-lg font-bold tracking-tight">{card.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${styles.description}`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </Reveal>

        {/* Headline + arrow */}
        <Reveal delay={0.1} className="mt-20">
  <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-4xl font-extrabold uppercase leading-none md:text-6xl lg:text-7xl">
        Vamos tirar sua
        <br />
        <span className="italic text-accent">ideia do papel</span>
      </h2>

      {/* CTA BUTTONS */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* WhatsApp */}
        <a
          href="https://wa.me/5511993495934?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chamar no WhatsApp"
          className="w-full sm:w-auto"
        >
          <Button
            variant="primary"
            className="w-full sm:w-auto flex items-center gap-2"
            type="button"
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:animate-bounce" aria-hidden="true" />
            Chamar no WhatsApp
          </Button>
        </a>

        {/* Email */}
        <a
          href="mailto:contatoyunastudio@outlook.com"
          aria-label="Enviar email"
          className="w-full sm:w-auto"
        >
          <Button
            variant="secondary"
            className="w-full sm:w-auto flex items-center gap-2"
            type="button"
          >
            <Mail className="w-5 h-5 text-accent group-hover:animate-pulse" aria-hidden="true" />
            Enviar um email
          </Button>
        </a>
      </div>

      {/* TRUST TEXT */}
      <div className="mt-3 flex items-center gap-2 text-sm text-muted-dark">
        <span className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_2px_rgba(34,197,94,0.7)] animate-pulse" />
        Resposta rápida • Sem compromisso
      </div>
    </div>

    {/* RIGHT */}
    <ArrowButton href="#" label="Voltar ao início" />
    
  </div>
</Reveal>
      </Container>
    </section>
  );
}
