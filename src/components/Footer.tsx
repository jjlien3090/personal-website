"use client";

import { Github, Linkedin, Heart } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted flex items-center gap-1">
          &copy; {currentYear} {siteConfig.name}. Built with{" "}
          <Heart size={12} className="text-red-400 fill-red-400" /> using
          Next.js & Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
