"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/data/siteData";

const categoryColors: Record<string, string> = {
  VLSI: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  FPGA: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  ISA: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Data Viz": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Featured <span className="text-accent">Projects</span>
      </h2>
      <p className="mt-4 text-muted text-base sm:text-lg max-w-2xl">
        From custom silicon to GPU-accelerated data pipelines — a selection of
        hardware and software projects I&apos;ve designed and built.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex flex-col h-full rounded-xl border border-card-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-accent-glow"
            >
              {/* Project visual header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/10 to-accent-light/5">
                {/* Abstract circuit-like pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-2 opacity-15 group-hover:opacity-25 transition-opacity duration-500">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded bg-accent"
                        style={{
                          opacity: 0.2 + ((i * 7) % 5) * 0.2,
                          transform: `rotate(${(i * 23) % 90}deg) scale(${0.6 + ((i * 3) % 4) * 0.15})`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${categoryColors[project.category] || "bg-accent/15 text-accent border-accent/30"}`}
                  >
                    {project.category}
                  </span>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech stack tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-skill-bg text-skill-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Details CTA */}
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  View Details
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
