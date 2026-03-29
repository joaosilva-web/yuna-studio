"use client";

import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import ArrowButton from "../ui/ArrowButton";
import { WHATSAPP_URL } from "@/lib/config";

const values = [
  {
    title: "Clareza acima de tudo",
    description:
      "Cada decisão é explicada. Cada etapa é validada. Você nunca fica no escuro sobre o que está sendo construído.",
  },
  {
    title: "Código que dura",
    description:
      "Não entregamos soluções temporárias. Arquitetura pensada para escalar, manter e evoluir ao longo do tempo.",
  },
  {
    title: "Parceria, não fornecimento",
    description:
      "Tratamos cada projeto como se fosse o nosso próprio negócio. O seu sucesso é o nosso resultado.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.03] blur-[160px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — text */}
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Sobre
                </span>
              </div>

              <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
                Feito por quem{" "}
                <span className="text-accent">vive o digital.</span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-dark md:text-lg">
                A Yuna Studio nasceu da insatisfação com o mercado de
                desenvolvimento: projetos atrasados, comunicação falha e
                entregas que não refletem a visão do cliente.
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-dark md:text-lg">
                Criamos um estúdio onde tecnologia e estratégia andam juntas —
                com um processo co-criativo que coloca o cliente no centro de
                cada decisão. Do primeiro briefing ao lançamento, e além.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-3 text-sm font-medium text-accent transition-opacity duration-300 hover:opacity-70">
                  Conversar com a equipe
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    aria-hidden="true"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right — values */}
          <div className="flex flex-col gap-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={0.1 + i * 0.1}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04] md:p-7">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 group-hover:shadow-[0_0_8px_rgba(255,77,141,0.6)]" />
                    <h3 className="text-base font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-dark">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
