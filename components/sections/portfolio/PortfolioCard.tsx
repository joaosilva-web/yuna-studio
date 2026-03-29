"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "./data";

const heightMap: Partial<Record<Project["height"], string>> = {
  tall: "row-span-2",
};

const aspectMap = {
  tall: "aspect-[3/4]",
  medium: "aspect-[4/3]",
  short: "aspect-[16/10]",
} as const;

interface PortfolioCardProps {
  project: Project;
  index: number;
  uniform?: boolean;
  onClick: () => void;
}

export default function PortfolioCard({ project, index, uniform, onClick }: PortfolioCardProps) {
  return (
    <motion.div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] ${uniform ? "" : (heightMap[project.height] ?? "row-span-1")}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      layout
      onClick={onClick}
    >
      {/* Image */}
      <div className={`relative w-full overflow-hidden ${uniform ? "aspect-[4/3]" : aspectMap[project.height]}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/50" />

        {/* Glow on hover */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-accent/[0.08] to-transparent" />
        </div>
      </div>

      {/* Permanent bottom gradient with info */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-16">
        {/* Category pill */}
        <span className="mb-2 inline-block rounded-full border border-white/[0.1] bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent backdrop-blur-sm transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/10">
          {project.category}
        </span>

        <h3 className="text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-white md:text-xl">
          {project.title}
        </h3>

        {/* Expand hint */}
        <div className="mt-2 flex items-center gap-1.5">
          <span className="text-xs font-medium text-accent">
            Ver detalhes
          </span>
          <svg
            className="h-3 w-3 -translate-x-1 text-accent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </div>

      {/* Top-right border glow on hover */}
      <div className="pointer-events-none absolute -right-px -top-px h-20 w-20 rounded-bl-3xl opacity-0 shadow-[inset_0_0_20px_rgba(255,77,141,0.15)] transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
