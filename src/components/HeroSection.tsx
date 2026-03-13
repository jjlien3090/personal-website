"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-light/15 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-center max-w-3xl"
      >
        {/* Greeting pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-card-border bg-card/50 backdrop-blur-sm text-sm text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </h1>
        <p className="mt-2 text-xl sm:text-2xl font-medium text-muted">
          {siteConfig.role}
        </p>
        <p className="mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
          {siteConfig.tagline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25"
          >
            View My Work
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl border border-card-border text-foreground hover:bg-card transition-all"
          >
            Get in Touch
            <Send size={16} />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
