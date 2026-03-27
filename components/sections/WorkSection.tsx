"use client";

import Image from "next/image";
import Reveal from "../ui/Reveal";
import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

const projects = [
  {
    title: "RetroFuture v.1",
    subtitle: "E-Commerce Architecture",
    image: "/images/work-1.svg",
  },
  {
    title: "Lumina Labs",
    subtitle: "Brand Experience",
    image: "/images/work-2.svg",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeader label="Portfolio" title="SELECTED WORK" />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i + 1) * 0.1}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-500 hover:border-white/[0.12] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-7">
                <h3 className="text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-wider text-muted-dark">
                  {project.subtitle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
