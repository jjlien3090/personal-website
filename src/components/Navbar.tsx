"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { siteConfig, navLinks } from "@/data/siteData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-nav-bg backdrop-blur-xl border-b border-card-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          {siteConfig.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-card transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume CTA */}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-colors"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-muted hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-nav-bg backdrop-blur-xl border-b border-card-border"
          >
            <div className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-base text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-lg bg-accent text-white hover:bg-accent-light transition-colors"
              >
                <Download size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
