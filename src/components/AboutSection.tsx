"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { aboutText, skills, Skill } from "@/data/siteData";

const categories = ["Hardware", "Languages", "Software", "Tools"] as const;

const categoryColors: Record<Skill["category"], string> = {
  Hardware: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  Languages: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Software: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Tools: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

const categoryDots: Record<Skill["category"], string> = {
  Hardware: "bg-rose-400",
  Languages: "bg-blue-400",
  Software: "bg-emerald-400",
  Tools: "bg-amber-400",
};

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        About <span className="text-accent">Me</span>
      </h2>

      <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed max-w-2xl whitespace-pre-line">
        {aboutText}
      </p>

      {/* Skills */}
      <div className="mt-14">
        <h3 className="text-lg font-semibold mb-6">Technical Skills</h3>
        <div className="space-y-6">
          {categories.map((cat) => (
            <div key={cat}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`w-2 h-2 rounded-full ${categoryDots[cat]}`} />
                <span className="text-sm font-medium text-muted">{cat}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === cat)
                  .map((skill, i) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className={`px-3 py-1.5 text-sm rounded-lg border ${categoryColors[cat]} transition-all hover:scale-105 cursor-default`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
