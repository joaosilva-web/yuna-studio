"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Archetype",
    description:
      "We dig deep into the brand's soul to uncover the unique archetype that will define its digital voice.",
  },
  {
    number: "02",
    title: "Visual Narrative",
    description:
      "Translating strategy into a cohesive mood, color theory, and typographic hierarchy that tells a story.",
  },
  {
    number: "03",
    title: "Precision Engineering",
    description:
      "Developing with a focus on performance, accessibility, and high-fidelity micro-interactions.",
  },
];

export default function MethodSection() {
  const ref = useReveal();

  return (
    <section ref={ref} className="py-28 md:py-36">
      <Container>
        <div data-reveal>
          <SectionHeader label="Philosophy" title="The Yuna Method" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Steps */}
          <div className="space-y-10">
            {steps.map((step, i) => (
              <div key={step.number} data-reveal data-reveal-delay={`${i + 1}`} className="group flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-surface text-sm font-bold text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_16px_rgba(255,77,141,0.12)]">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div data-reveal data-reveal-delay="2" className="overflow-hidden rounded-2xl border border-white/[0.06]">
            <Image
              src="/images/method.svg"
              alt="The Yuna Method"
              width={800}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
