"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { WHATSAPP_URL } from "@/lib/config";

const FADE_MS = 800;

const spring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

const fastExit = {
  duration: 0.35,
  ease: [0.4, 0, 1, 1],
} as const;

const items = {
  eyebrow: {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
    initial: { opacity: 0, x: -32 },
  },
  title1: {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 32 },
    initial: { opacity: 0, y: 40 },
  },
  title2: {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -32 },
    initial: { opacity: 0, y: -40 },
  },
  accent: {
    enter: { opacity: 1, x: 0, filter: "blur(0px)" },
    exit: { opacity: 0, x: 24, filter: "blur(6px)" },
    initial: { opacity: 0, x: 28, filter: "blur(8px)" },
  },
  body: {
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 28 },
    initial: { opacity: 0, x: 32 },
  },
  buttons: {
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 16, scale: 0.97 },
    initial: { opacity: 0, y: 20, scale: 0.97 },
  },
};

const staggerDelays: Record<string, number> = {
  eyebrow: 0.2,
  title1: 0.25,
  title2: 0.35,
  accent: 0.45,
  body: 0.55,
  buttons: 0.65,
};

function AnimatedItem({
  name,
  children,
  isInView,
  hasEntered,
  className,
  style,
}: {
  name: keyof typeof items;
  children: React.ReactNode;
  isInView: boolean;
  hasEntered: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  const config = items[name];
  const delay = staggerDelays[name];

  const animate = isInView
    ? { ...config.enter, transition: { ...spring, delay } }
    : hasEntered
      ? { ...config.exit, transition: { ...fastExit } }
      : config.initial;

  return (
    <motion.div
      initial={config.initial}
      animate={animate}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [hasEntered, setHasEntered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, { amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const id = requestAnimationFrame(() => setHasEntered(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isInView]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.playbackRate = 0.5;
    } catch (e) {}

    if (video.readyState >= 3) {
      const id = requestAnimationFrame(() => setVideoReady(true));
      // ensure cleanup in case effect re-runs
      return () => cancelAnimationFrame(id);
    }

    const handleTimeUpdate = () => {
      if (!videoReady && video.readyState >= 3) setVideoReady(true);
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      if (remaining <= FADE_MS / 1000) setVisible(false);
      else if (video.currentTime < FADE_MS / 1000) setVisible(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoReady]);

  const shared = { isInView, hasEntered };

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero-poster.webp"
        onLoadedData={() => setVideoReady(true)}
        onCanPlayThrough={() => setVideoReady(true)}
        className="absolute inset-0 h-full w-full scale-110 object-cover"
        style={{
          opacity: videoReady ? (visible ? 0.5 : 0) : 0,
          transition: `opacity ${FADE_MS}ms ease-in-out`,
        }}
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Poster fallback */}
      <div
        className={`absolute inset-0 bg-background transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 py-32">
        {/* Eyebrow — ← esquerda */}
        <AnimatedItem name="eyebrow" {...shared}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Da ideia à produção. Sem dor de cabeça.
          </p>
        </AnimatedItem>

        <h1 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl lg:text-6xl uppercase">
          {/* Line 1 — ↑ baixo */}
          <span className="block overflow-hidden">
            <AnimatedItem name="title1" {...shared}>
              <span className="block">O SEU NEGÓCIO</span>
            </AnimatedItem>
          </span>

          {/* Line 2 — ↓ cima */}
          <span className="block overflow-hidden">
            <AnimatedItem name="title2" {...shared}>
              <span className="block">
                transformado em {/* Accent — → direita + blur */}
                <AnimatedItem
                  name="accent"
                  {...shared}
                  style={{ display: "inline-block" }}
                >
                  <span className="italic text-accent">produto digital.</span>
                </AnimatedItem>
              </span>
            </AnimatedItem>
          </span>
        </h1>

        {/* Body — → direita */}
        <AnimatedItem name="body" {...shared}>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Projetamos e desenvolvemos produtos digitais com clareza, precisão e
            performance. Conectamos a imaginação à execução.
          </p>
        </AnimatedItem>

        {/* Buttons — ↑ baixo + scale */}
        <AnimatedItem name="buttons" {...shared}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">Começar meu projeto</Button>
            </a>
            <a href="#work">
              <Button variant="secondary">Conheça nosso trabalho</Button>
            </a>
          </div>
        </AnimatedItem>
      </Container>
    </section>
  );
}
