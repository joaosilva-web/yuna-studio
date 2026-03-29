"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import { ease } from "@/lib/animations";

/* ─── Data ──────────────────────────────────────────────────── */

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Entendemos sua ideia, seus objetivos e o que você realmente precisa construir.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        aria-hidden="true"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Planejamento e Transparência",
    description:
      "Estruturamos o projeto com prazos, escopo e valores bem definidos, garantindo previsibilidade em cada etapa.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        aria-hidden="true"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Desenvolvimento e Entrega",
    description:
      "Construímos o projeto com você, validando cada etapa até a entrega final.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5"
        stroke="currentColor"
        aria-hidden="true"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
        />
      </svg>
    ),
  },
];

/* ─── Animation ─────────────────────────────────────────────── */

/* ─── Sub-components ────────────────────────────────────────── */

function ConnectorSegment({
  index,
  activeIndex,
}: {
  index: number;
  activeIndex: number | null;
}) {
  const isFilled = activeIndex !== null && activeIndex >= index;

  return (
    <div className="relative mx-auto my-1.5 h-8 w-px">
      <div className="h-full w-full bg-white/[0.06]" />
      <motion.div
        className="absolute inset-0 origin-top bg-gradient-to-b from-accent to-accent/40"
        animate={{ scaleY: isFilled ? 1 : 0 }}
        transition={{ duration: 0.5, ease }}
      />
    </div>
  );
}

function MethodStep({
  step,
  index,
  isActive,
  isLast,
  activeIndex,
  onHover,
}: {
  step: (typeof steps)[number];
  index: number;
  isActive: boolean;
  isLast: boolean;
  activeIndex: number | null;
  onHover: (i: number | null) => void;
}) {
  return (
    <div className="group" onMouseEnter={() => onHover(index)} onMouseLeave={() => onHover(null)}>
      <div className="flex gap-4">
        {/* Left column: icon */}
        <div className="flex flex-col items-center">
          <div
            className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 ${
              isActive
                ? "border-accent/50 bg-accent/10 shadow-[0_0_20px_rgba(255,77,141,0.15)]"
                : "border-white/[0.08] bg-surface"
            }`}
          >
            <span
              className={`transition-colors duration-500 ${
                isActive ? "text-accent" : "text-muted-dark"
              }`}
            >
              {step.icon}
            </span>
          </div>
        </div>

        {/* Right column: content */}
        <div className="flex-1 pt-1">
          <div className="flex items-baseline gap-3">
            <span
              className={`text-xs font-bold tracking-[0.15em] transition-colors duration-500 ${
                isActive ? "text-accent" : "text-muted-dark/60"
              }`}
            >
              {step.number}
            </span>
            <h3
              className={`text-xl font-bold tracking-tight transition-colors duration-500 md:text-2xl ${
                isActive ? "text-foreground" : "text-foreground/70"
              }`}
            >
              {step.title}
            </h3>
          </div>

          <p
            className={`mt-1.5 max-w-md text-[0.94rem] leading-relaxed transition-colors duration-500 ${
              isActive ? "text-muted" : "text-muted-dark"
            }`}
          >
            {step.description}
          </p>
        </div>
      </div>

      {/* Connector line between steps — outside the icon */}
      {!isLast && (
        <div className="flex">
          <div className="flex w-12 justify-center">
            <ConnectorSegment index={index} activeIndex={activeIndex} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */

export default function MethodSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-36" id="method">
      <Container>
        {/* Header */}
        <Reveal>
          <div className="mb-12 md:mb-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Método
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
              METODOLOGIA <span className="text-accent uppercase">YUNA</span>
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-dark md:text-lg">
              Um processo claro, colaborativo e sem surpresas — do entendimento
              à entrega final.
            </p>
          </div>
        </Reveal>

        {/* Grid: steps + image */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — steps with timeline */}
          <div>
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={0.1 + i * 0.12}>
                <MethodStep
                  step={step}
                  index={i}
                  isActive={activeStep === i}
                  isLast={i === steps.length - 1}
                  activeIndex={activeStep}
                  onHover={setActiveStep}
                />
              </Reveal>
            ))}
          </div>

          {/* Right — image with overlay */}
          <Reveal delay={0.35}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/images/method.png"
                alt="Método Yuna"
                width={800}
                height={900}
                className="h-full w-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent/80">
                  Yuna
                </span>
                <p className="mt-1 text-sm text-foreground/60">
                  Do entendimento à entrega, lado a lado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
