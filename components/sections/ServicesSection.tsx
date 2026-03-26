"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../layout/Container";

/* ─── Data ──────────────────────────────────────────────────── */

const mainServices = [
  {
    number: "01",
    title: "Desenvolvimento Web",
    description:
      "Criamos sites modernos, rápidos e focados em resultado — do conceito à entrega.",
    items: [
      "Landing pages de alta conversão",
      "Sites institucionais",
      "Sites profissionais (médicos, advogados, etc.)",
    ],
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
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A8.966 8.966 0 0 1 3 12c0-1.264.26-2.466.732-3.558"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Sistemas Web",
    description:
      "Desenvolvemos sistemas personalizados para automatizar e escalar o seu negócio.",
    items: [
      "Plataformas e dashboards",
      "Sistemas internos (estoque, gestão, etc.)",
      "Aplicações web sob medida",
    ],
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
          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 16.5l-5.571-2.25m11.142 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25"
        />
      </svg>
    ),
  },
];

const supportService = {
  number: "03",
  title: "Manutenção e Evolução",
  description:
    "Continuamos evoluindo seu projeto após a entrega — sem abandono, sem surpresas.",
  items: [
    "Suporte técnico contínuo",
    "Melhorias e otimizações",
    "Novas funcionalidades",
  ],
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
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      />
    </svg>
  ),
};

const seoHighlight = {
  title: "SEO Estratégico",
  description:
    "Análise completa e otimização para crescimento orgânico. Seu produto encontrado pelas pessoas certas.",
  stats: [
    { value: "+300%", label: "Tráfego orgânico" },
    { value: "Top 3", label: "Posições Google" },
    { value: "24/7", label: "Monitoramento" },
  ],
};

/* ─── Animation ─────────────────────────────────────────────── */

const ease = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease },
  },
});

/* ─── Sub-components ────────────────────────────────────────── */

function ServiceCard({
  service,
  delay,
  featured = false,
}: {
  service: (typeof mainServices)[number];
  delay: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md transition-all duration-700 ease-out hover:border-white/[0.1] hover:bg-white/[0.04] hover:shadow-[0_8px_48px_rgba(255,77,141,0.06)] ${
        featured ? "p-8 md:p-10" : "p-7 md:p-9"
      }`}
      variants={fadeUp(delay)}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/[0.04] opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />

      {/* Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-surface text-accent transition-all duration-500 group-hover:border-accent/20 group-hover:shadow-[0_0_20px_rgba(255,77,141,0.08)] group-hover:scale-110">
          {service.icon}
        </div>
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-dark">
          {service.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-muted-dark md:text-base md:leading-relaxed">
        {service.description}
      </p>

      {/* Items */}
      <ul className="mt-6 space-y-3 border-t border-white/[0.04] pt-6">
        {service.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-sm text-muted transition-colors duration-300 group-hover:text-foreground/80"
          >
            <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60 transition-all duration-500 group-hover:bg-accent group-hover:shadow-[0_0_6px_rgba(255,77,141,0.4)]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SupportCard({ delay }: { delay: number }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md transition-all duration-700 ease-out hover:border-white/[0.1] hover:bg-white/[0.04] md:p-8"
      variants={fadeUp(delay)}
    >
      {/* Top row: icon + title + number */}
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-surface text-accent transition-all duration-500 group-hover:border-accent/20 group-hover:shadow-[0_0_20px_rgba(255,77,141,0.08)]  group-hover:scale-110">
          {supportService.icon}
        </div>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-dark">
            {supportService.number}
          </span>
          <h3 className="text-lg font-bold tracking-tight">
            {supportService.title}
          </h3>
        </div>
      </div>

      {/* Description + pills side-by-side on desktop */}
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
        <p className="text-sm leading-relaxed text-muted-dark md:max-w-md md:text-base md:leading-relaxed">
          {supportService.description}
        </p>

        <ul className="flex shrink-0 flex-wrap gap-3">
          {supportService.items.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/[0.06] bg-surface px-4 py-2 text-xs font-medium text-muted transition-all duration-500 group-hover:border-white/[0.1] group-hover:text-foreground/80"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function SEOHighlight({ delay }: { delay: number }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/[0.04] p-8 backdrop-blur-md transition-all duration-700 ease-out hover:border-accent/30 hover:bg-accent/[0.06] hover:shadow-[0_8px_48px_rgba(255,77,141,0.08)] md:p-10"
      variants={fadeUp(delay)}
    >
      {/* Accent glow */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.06] blur-[100px]" />

      <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-md">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.08] px-3.5 py-1.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-accent"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              Diferencial
            </span>
          </div>

          <h3 className="text-xl font-bold tracking-tight md:text-2xl">
            {seoHighlight.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted-dark md:text-base md:leading-relaxed">
            {seoHighlight.description}
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 md:gap-10">
          {seoHighlight.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-2xl font-bold text-accent md:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-muted-dark">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main section ──────────────────────────────────────────── */

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section
      ref={ref}
      id="services"
      className="relative overflow-hidden py-32 md:py-44"
    >
      {/* Subtle top line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.02] blur-[150px]" />

      <Container>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {/* Header */}
          <motion.div className="mb-16 max-w-2xl md:mb-24" variants={fadeUp(0)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Serviços
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-6xl">
              O que construímos <span className="text-accent">para você.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-dark md:text-lg">
              Da estratégia ao código, entregamos soluções digitais que resolvem
              problemas reais e geram resultado mensurável.
            </p>
          </motion.div>

          {/* Main services — 2-column */}
          <div className="grid gap-5 md:grid-cols-2">
            {mainServices.map((service, i) => (
              <ServiceCard
                key={service.number}
                service={service}
                delay={0.1 + i * 0.12}
                featured
              />
            ))}
          </div>

          {/* Support service — full width */}
          <SupportCard delay={0.35} />

          {/* SEO Highlight — full width accent */}
          <SEOHighlight delay={0.45} />
        </motion.div>
      </Container>
    </section>
  );
}
