"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const spring = { type: "spring", stiffness: 80, damping: 20 } as const;
const fastExit = { duration: 0.35, ease: [0.4, 0, 1, 1] } as const;

export default function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
  style,
}: {
  children?: React.ReactNode;
  delay?: number; // seconds
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.08 });
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const id = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isInView]);

  const animate = isInView
    ? { opacity: 1, y: 0, transition: { ...spring, delay } }
    : hasEntered
    ? { opacity: 0, y, transition: { ...fastExit } }
    : { opacity: 0, y };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={animate}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
