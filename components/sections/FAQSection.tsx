"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";

const faqs = [
  {
    question: "Quanto tempo leva para entregar um projeto?",
    answer:
      "Depende da complexidade. Landing pages e sites institucionais ficam prontos em 2 a 4 semanas. Sistemas web e plataformas mais robustas levam de 6 a 12 semanas. Em todos os casos, definimos o prazo no início e cumprimos — sem surpresas.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Seguimos a Metodologia Yuna: entendimento do negócio, planejamento com escopo e prazo definidos, desenvolvimento com validações contínuas e entrega. Você acompanha cada etapa e aprova antes de avançar. Sem caixa preta.",
  },
  {
    question: "Vocês trabalham com que tipo de negócio?",
    answer:
      "Trabalhamos com negócios que precisam de presença digital profissional — desde profissionais autônomos (médicos, advogados, consultores) até startups e empresas em crescimento que precisam de sistemas personalizados.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "Trabalhamos com pagamento parcelado ao longo do projeto: uma entrada no início, parcelas durante o desenvolvimento e o saldo na entrega final. Os detalhes são combinados de acordo com o escopo de cada projeto.",
  },
  {
    question: "Após a entrega, vocês oferecem suporte?",
    answer:
      "Sim. Oferecemos planos de manutenção e evolução contínua após a entrega. Suporte técnico, atualizações, otimizações e novas funcionalidades — continuamos ao seu lado depois do lançamento.",
  },
  {
    question: "O site será otimizado para SEO?",
    answer:
      "Todos os projetos são entregues com SEO técnico configurado: estrutura semântica, meta tags, Open Graph, performance e acessibilidade. Para estratégia de conteúdo e SEO avançado, oferecemos isso como serviço adicional.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors duration-200 hover:text-foreground cursor-pointer"
      >
        <span
          className={`text-base font-medium transition-colors duration-300 md:text-lg ${
            isOpen ? "text-foreground" : "text-foreground/70"
          }`}
        >
          {faq.question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? "border-accent/40 bg-accent/10 text-accent"
              : "border-white/[0.08] text-muted-dark"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm leading-relaxed text-muted-dark md:text-base md:leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 md:py-36">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          {/* Left — header */}
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                FAQ
              </span>
            </div>

            <h2 className="text-4xl font-extrabold leading-[1.08] md:text-5xl">
              Perguntas{" "}
              <span className="text-accent">frequentes.</span>
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-muted-dark md:text-base">
              Respondemos as dúvidas mais comuns antes da nossa conversa. Se
              tiver algo além disso, é só chamar.
            </p>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={0.1}>
            <div>
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
