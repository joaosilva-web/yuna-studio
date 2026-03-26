"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../layout/Container";
import Button from "../ui/Button";

const FADE_MS = 800;

export default function HeroSection() {
  const [videoReady, setVideoReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Play in slow motion
    try {
      video.playbackRate = 0.5;
    } catch (e) {
      // ignore if not supported
    }

    // Fallback: if video is already playing, mark as ready
    if (video.readyState >= 3) setVideoReady(true);

    const handleTimeUpdate = () => {
      if (!videoReady && video.readyState >= 3) setVideoReady(true);
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;
      const nearEnd = remaining <= FADE_MS / 1000;
      const nearStart = video.currentTime < FADE_MS / 1000;

      if (nearEnd) setVisible(false);
      else if (nearStart) setVisible(true);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [videoReady]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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

      {/* Poster fallback — visible while video loads */}
      <div
        className={`absolute inset-0 bg-background transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/96 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 py-32">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Da ideia à produção. Sem dor de cabeça.
        </p>

        <h1 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl lg:text-6xl uppercase">
          O SEU NEGÓCIO
          <br />
          transformado em{" "}
          <span className="italic text-accent">produto digital.</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
          Projetamos e desenvolvemos produtos digitais com clareza, precisão e
          performance. Conectamos a imaginação à execução.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button variant="primary">Start a project</Button>
          <Button variant="secondary">View work</Button>
        </div>
      </Container>
    </section>
  );
}
