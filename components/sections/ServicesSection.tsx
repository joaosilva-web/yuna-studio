"use client";

import { useReveal } from "@/lib/useReveal";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import Card from "../ui/Card";

const services = [
  {
    icon: "✦",
    title: "Brand Identity",
    description:
      "Creating timeless visual languages that define market leaders and endure cultural shifts.",
    items: ["Logo & Visual Systems", "Brand Strategy", "Art Direction"],
  },
  {
    icon: "◈",
    title: "Product Design",
    description:
      "Translating complex workflows into intuitive, high-performance digital interfaces.",
    items: ["UX/UI Design", "Design Systems", "Prototyping"],
  },
  {
    icon: "◎",
    title: "Creative Dev",
    description:
      "Building pixel-perfect web experiences with a focus on motion and interaction design.",
    items: ["Interactive Dev", "Headless CMS", "Webgl. & Motion"],
  },
];

export default function ServicesSection() {
  const ref = useReveal();

  return (
    <section ref={ref} id="services" className="relative py-28 md:py-36">
      {/* Subtle top gradient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <Container>
        <div data-reveal>
          <SectionHeader
            label="What we do"
            title="SERVICES"
            description="We bridge the gap between artistic vision and technical precision through a three-pillar methodology."
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.title} data-reveal data-reveal-delay={`${i + 1}`}>
              <Card className="group flex h-full flex-col gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-surface text-lg transition-all duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_20px_rgba(255,77,141,0.1)]">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>

                <p className="text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="mt-auto space-y-2.5 border-t border-white/[0.04] pt-5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-dark transition-colors duration-300 group-hover:text-muted"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
