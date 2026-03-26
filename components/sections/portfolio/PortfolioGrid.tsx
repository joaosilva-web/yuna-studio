"use client";

import { motion } from "framer-motion";
import type { Project } from "./data";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {
  projects: Project[];
  expanded: boolean;
  onSelect: (project: Project) => void;
}

export default function PortfolioGrid({ projects, expanded, onSelect }: PortfolioGridProps) {
  if (projects.length === 0) return null;

  /* Collapsed: clean 2-col equal grid · Expanded: masonry staggered layout */
  const gridClass = expanded
    ? "columns-1 gap-5 space-y-5 sm:columns-2 lg:columns-3"
    : "grid grid-cols-1 gap-6 md:grid-cols-2";

  return (
    <motion.div
      className={gridClass}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      layout
    >
      {projects.map((project, i) => (
        <div key={project.id} className={expanded ? "break-inside-avoid" : ""}>
          <PortfolioCard
            project={project}
            index={i}
            uniform={!expanded}
            onClick={() => onSelect(project)}
          />
        </div>
      ))}
    </motion.div>
  );
}
