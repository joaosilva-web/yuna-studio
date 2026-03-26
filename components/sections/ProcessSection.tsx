"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../layout/Container";

/* ─── Data ──────────────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    title: "Escuta Ativa",
    subtitle: "Nós ouvimos e entendemos você",
    description:
      "Antes de qualquer linha de código, mergulhamos no seu universo. Entendemos suas dores, seus objetivos e a visão que você tem para o futuro do produto.",
    emotion: "Você está em boas mãos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Estratégia & Conceito",
    subtitle: "Guiamos e estruturamos sua ideia",
    description:
      "Transformamos insights em uma estratégia visual e técnica sólida. Cada decisão de design é intencional, cada fluxo é pensado para converter.",
    emotion: "Sua ideia ganha forma e direção.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Desenvolvimento",
    subtitle: "Construímos com você, passo a passo",
    description:
      "Engenharia de alta fidelidade com validações contínuas. Você acompanha cada evolução, aprova cada entrega, e participa de cada decisão importante.",
    emotion: "Transparência total, sem surpresas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entrega & Evolução",
    subtitle: "Entregamos e seguimos ao seu lado",
    description:
      "O lançamento é só o começo. Garantimos uma entrega impecável e continuamos evoluindo o produto com suporte dedicado e melhorias contínuas.",
    emotion: "O começo de uma parceria duradoura.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
];

/* ─── Animation helpers ─────────────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease,
    },
  }),
};

const lineDraw = {
  hidden: { scaleY: 0 },
  visible: (i: number) => ({
    scaleY: 1,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.6,
      ease,
    },
  }),
};

/* ─── Sub-components ────────────────────────────────────────── */

function ConnectorLine({ index }: { index: number }) {
  return (
    <motion.div
      className="absolute left-6 top-[4.5rem] -z-10 h-full w-px origin-top bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:left-1/2 md:-translate-x-1/2"
      variants={lineDraw}
      custom={index}
    />
  );
}

function StepNumber({ number }: { number: string }) {
  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-surface transition-all duration-700 group-hover:border-accent/40 group-hover:shadow-[0_0_28px_rgba(255,77,141,0.12)] md:h-16 md:w-16">
      <span className="text-sm font-bold tracking-wider text-accent transition-all duration-700 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(255,77,141,0.4)] md:text-base">
        {number}
      </span>
    </div>
  );
}

function ProcessStep({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[number];
  index: number;
  isLast: boolean;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="group relative pb-16 last:pb-0 md:pb-24"
      variants={fadeUp}
      custom={index}
    >
      {/* Connector line */}
      {!isLast && <ConnectorLine index={index} />}

      {/* Mobile: always left-aligned. Desktop: zigzag grid */}
      <div className="flex gap-5 md:hidden">
        <StepNumber number={step.number} />
        <StepContent step={step} />
      </div>

      {/* Desktop zigzag */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-10">
        {/* Left column */}
        {isLeft ? (
          <div className="text-right">
            <StepContent step={step} align="right" />
          </div>
        ) : (
          <div />
        )}

        {/* Center node */}
        <div className="flex justify-center">
          <StepNumber number={step.number} />
        </div>

        {/* Right column */}
        {!isLeft ? (
          <div>
            <StepContent step={step} align="left" />
          </div>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}

function StepContent({
  step,
  align = "left",
}: {
  step: (typeof steps)[number];
  align?: "left" | "right";
}) {
  const isRight = align === "right";

  return (
    <div className="flex-1 pt-1">
      {/* Icon + subtitle */}
      <div
        className={`mb-4 flex items-center gap-3 ${isRight ? "justify-end" : ""}`}
      >
        <span className="text-accent/70 transition-colors duration-500 group-hover:text-accent">
          {step.icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent/60 transition-colors duration-500 group-hover:text-accent">
          {step.subtitle}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold tracking-tight text-foreground/80 transition-colors duration-700 group-hover:text-foreground md:text-3xl">
        {step.title}
      </h3>

      {/* Description */}
      <p
        className={`mt-3 text-sm leading-relaxed text-muted-dark transition-colors duration-700 group-hover:text-muted md:text-base md:leading-relaxed ${
          isRight ? "ml-auto max-w-lg" : "max-w-lg"
        }`}
      >
        {step.description}
      </p>

      {/* Emotional tagline */}
      <p className="mt-5 text-sm italic text-muted-dark transition-colors duration-700 group-hover:text-accent/70">
        &ldquo;{step.emotion}&rdquo;
      </p>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} id="process" className="relative overflow-hidden py-32 md:py-44">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[600px] w-[600px] translate-x-1/3 rounded-full bg-accent/[0.03] blur-[150px]" />

      <Container>
        {/* Header */}
        <motion.div
          className="mb-20 max-w-2xl md:mb-28"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Processo
            </span>
          </div>

          <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
            Da sua visão à{" "}
            <span className="text-accent">realidade digital.</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-muted-dark md:text-lg">
            Cada etapa do nosso processo foi desenhada para que você se sinta
            seguro, acompanhado e confiante — do primeiro briefing até o
            lançamento e além.
          </p>
        </motion.div>

        {/* Timeline flow */}
        <motion.div
          className="relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, i) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={i}
              isLast={i === steps.length - 1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
