"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../layout/Container";
import SectionHeader from "../../ui/SectionHeader";
import Reveal from "../../ui/Reveal";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioModal from "./PortfolioModal";
import { projects, type Project } from "./data";

const INITIAL_COUNT = 2;

export default function PortfolioSection() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const visibleProjects = expanded ? projects : projects.slice(0, INITIAL_COUNT);

  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <section id="work" className="relative overflow-hidden py-28 md:py-36">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-accent/[0.03] blur-[150px]" />

        <Container>
          <Reveal>
            <SectionHeader
              label="Portfólio"
              title="EXCELÊNCIA EM PROJETOS"
              description="Projetos reais que resolvem problemas reais. Do conceito à produção."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <PortfolioGrid projects={visibleProjects} expanded={expanded} onSelect={setSelected} />
          </Reveal>

          {/* Show more / less */}
          {projects.length > INITIAL_COUNT && (
            <Reveal delay={0.2} className="mt-14 flex justify-center">
              <motion.button
                onClick={() => setExpanded((v) => !v)}
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-500 hover:border-accent/30 hover:bg-accent/[0.06] hover:shadow-[0_0_32px_rgba(255,77,141,0.1)] cursor-pointer"
                layout
              >
                <span>{expanded ? "Ver menos" : "Ver mais projetos"}</span>
                <motion.svg
                  className="h-4 w-4 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
            </Reveal>
          )}
        </Container>
      </section>

      <PortfolioModal project={selected} onClose={handleClose} />
    </>
  );
}
