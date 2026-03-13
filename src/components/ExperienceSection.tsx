"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/data/siteData";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Work <span className="text-accent">Experience</span>
      </h2>

      <div className="mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-timeline-line md:left-1/2 md:-translate-x-px" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-2.5 top-1 w-[18px] h-[18px] rounded-full bg-background border-[3px] border-accent z-10 md:left-1/2 md:-translate-x-1/2 shadow-md shadow-accent/20" />

            {/* Content card */}
            <div
              className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:text-right" : ""
              }`}
            >
              <div className="p-5 rounded-xl bg-card border border-card-border hover:border-accent/30 transition-all group">
                <div className={`flex items-center gap-2 mb-1 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  <Briefcase size={14} className="text-accent" />
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-muted font-medium">{exp.company}</p>

                <ul
                  className={`mt-3 space-y-2 text-sm text-muted ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div
                  className={`mt-4 flex flex-wrap gap-1.5 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded-md bg-skill-bg text-skill-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
