"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { siteConfig } from "@/data/siteData";

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    detail: siteConfig.email,
  },
  {
    label: "GitHub",
    href: siteConfig.social.github,
    icon: Github,
    detail: siteConfig.social.github.replace("https://", ""),
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
    detail: siteConfig.social.linkedin.replace("https://", ""),
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Get in <span className="text-accent">Touch</span>
      </h2>
      <p className="mt-4 text-muted text-base sm:text-lg max-w-xl">
        I&apos;m currently open to new opportunities. Whether you have a question or
        just want to say hi, my inbox is always open.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contactLinks.map(({ label, href, icon: Icon, detail }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-3 p-5 rounded-xl border border-card-border bg-card hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent-glow"
          >
            <div className="flex items-center justify-between">
              <Icon size={22} className="text-accent" />
              <ArrowUpRight
                size={16}
                className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted mt-0.5 truncate">{detail}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Optional big CTA */}
      <div className="mt-12 text-center">
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium rounded-xl bg-accent text-white hover:bg-accent-light transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Say Hello
          <Mail size={18} />
        </a>
      </div>
    </SectionWrapper>
  );
}
