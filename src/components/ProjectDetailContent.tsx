"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/siteData";

const categoryColors: Record<string, string> = {
  VLSI: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  FPGA: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  ISA: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Data Viz": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

const categoryAccent: Record<string, string> = {
  VLSI: "from-rose-500/20 to-rose-400/5",
  FPGA: "from-amber-500/20 to-amber-400/5",
  ISA: "from-blue-500/20 to-blue-400/5",
  "Data Viz": "from-emerald-500/20 to-emerald-400/5",
};

export default function ProjectDetailContent({
  project,
}: {
  project: Project;
}) {
  const gradientClass =
    categoryAccent[project.category] || "from-accent/20 to-accent-light/5";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section
        className={`relative pt-24 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden`}
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-b ${gradientClass}`}
        />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-5xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Back to Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span
              className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${categoryColors[project.category] || "bg-accent/15 text-accent border-accent/30"}`}
            >
              {project.category}
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-muted max-w-3xl leading-relaxed">
              {project.overview}
            </p>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-lg bg-skill-bg text-skill-text border border-card-border"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8"
          >
            Key <span className="text-accent">Specifications</span>
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.specs.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-xl border border-card-border bg-card hover:border-accent/30 transition-colors"
              >
                <p className="text-xs text-muted font-medium uppercase tracking-wider">
                  {spec.label}
                </p>
                <p className="mt-1 text-sm font-bold">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8"
          >
            Performance <span className="text-accent">Highlights</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-card-border bg-card"
              >
                <Zap
                  size={16}
                  className="text-accent mt-0.5 shrink-0"
                />
                <span className="text-sm leading-relaxed">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-6 md:px-12 lg:px-24 py-12 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-8"
          >
            Module <span className="text-accent">Breakdown</span>
          </motion.h2>
          <div className="space-y-6">
            {project.modules.map((mod, i) => (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-card-border bg-card p-6 hover:border-accent/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-accent group-hover:shadow-md group-hover:shadow-accent/40 transition-shadow" />
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {mod.name}
                  </h3>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {mod.description}
                </p>
                <ul className="space-y-2">
                  {mod.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <ChevronRight
                        size={14}
                        className="text-accent mt-0.5 shrink-0"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom navigation */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-5xl mx-auto border-t border-card-border pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to All Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
