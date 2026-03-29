"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Wrench, TrendingUp } from "lucide-react";
import type { Project } from "./data";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!project) return;

    setActiveImage(0);
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e0e]"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Fechar projeto"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-black/60 text-muted-dark backdrop-blur-sm transition-colors duration-200 hover:border-white/20 hover:text-foreground cursor-pointer"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            {/* Scroll area */}
            <div className="overflow-y-auto overscroll-contain">
              {/* Gallery */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface">
                <AnimatePresence mode="wait">
                  {(() => {
                    const images = project.gallery?.length ? project.gallery : [project.image];
                    const src = images[activeImage] || images[0];
                    if (!src) return null;
                    return (
                      <motion.div
                        key={activeImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={src}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>

                {/* Gradient bottom */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e0e0e] to-transparent" />

                {/* Gallery dots */}
                {(project.gallery?.length ?? 0) > 1 && (
                  <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {project.gallery!.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        aria-label={`Ver imagem ${i + 1}`}
                        aria-current={i === activeImage ? "true" : undefined}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          i === activeImage
                            ? "w-6 bg-accent"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-8 p-7 md:p-10">
                {/* Header */}
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-dark md:text-base">
                    {project.description}
                  </p>
                </div>

                {/* Problem / Solution / Result */}
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { label: "Problema", text: project.problem, icon: <Zap className="h-4 w-4 text-accent" /> },
                    { label: "Solução", text: project.solution, icon: <Wrench className="h-4 w-4 text-accent" /> },
                    { label: "Resultado", text: project.result, icon: <TrendingUp className="h-4 w-4 text-accent" /> },
                  ].map((block) => (
                    <div
                      key={block.label}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
                    >
                      <div className="mb-3 flex items-center gap-2">
                        {block.icon}
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
                          {block.label}
                        </span>
                      </div>
                      <p className="text-[13px] leading-relaxed text-muted-dark">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <span className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-muted-dark">
                    Tecnologias
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
