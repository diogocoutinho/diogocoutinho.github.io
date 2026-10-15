"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { FileDown, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { generatePDF } from "@/utils/generatePDF";
import { useChangeLocale, useCurrentLocale, useScopedI18n } from "@/locales/client";
import { contact } from "@/data/profile";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const t = useScopedI18n("navigation");
  const otherLocale = currentLocale === "pt-BR" ? "en-US" : "pt-BR";

  // Lê o tema aplicado no <html> após a hidratação para evitar divergência com o HTML estático.
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];


  return (
    <nav
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-colors",
        isScrolled || isOpen ? "bg-bg/95 backdrop-blur border-b border-line" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-ink">
          {contact.name}
          <span className="text-gold">.</span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => changeLocale(otherLocale)}
            aria-label={otherLocale === "en-US" ? "English" : "Português"}
            className="px-2.5 py-1.5 text-xs font-semibold text-muted hover:text-ink rounded-md"
          >
            {otherLocale === "en-US" ? "EN" : "PT"}
          </button>
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 text-muted hover:text-ink rounded-md">
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => generatePDF(currentLocale)}
            className="hidden sm:inline-flex items-center gap-2 ml-2 px-4 py-2 rounded-md border border-ink/80 text-sm font-medium text-ink hover:bg-ink hover:text-bg transition-colors"
          >
            <FileDown className="h-4 w-4" />
            {t("cv")}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Menu" className="lg:hidden p-2 text-ink">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-line bg-bg px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-base text-ink border-b border-line"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false);
              generatePDF(currentLocale);
            }}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-ink text-bg font-medium"
          >
            <FileDown className="h-4 w-4" />
            {t("cv")}
          </button>
        </div>
      )}
    </nav>
  );
}
