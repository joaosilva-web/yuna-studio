"use client";

import { useReveal } from "@/lib/useReveal";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const steps = [
  {
    number: "1",
    title: "Briefing",
    description: "Aligning on goals, scope, and vision with our.",
  },
  {
    number: "2",
    title: "Concept",
    description: "Rapid exploration of high-level visual directions.",
  },
  {
    number: "3",
    title: "Refinement",
    description: "Iterative polish on the selected design path.",
  },
  {
    number: "4",
    title: "Handover",
    description: "Deployment and comprehensive style guides.",
  },
];

export default function ProcessSection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="process" className="py-28 md:py-36">
      <Container>
        <div data-reveal>
          <SectionHeader
            centered
            title="Seamless Integration"
            description="Our four-step execution process ensures transparency and excellence at every milestone."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.number} data-reveal data-reveal-delay={`${i + 1}`}>
              <Card className="group">
                <span className="mb-4 block text-5xl font-bold text-white/[0.04] transition-colors duration-500 group-hover:text-accent/10">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-dark">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
