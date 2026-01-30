"use client";

import Link from "next/link";
import { smoothScroll } from "@/utils/smoothScroll";
import { useCallback, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Sun,
  Moon,
  FileDown,
  Globe,
  Menu,
  X
} from "lucide-react";
import { generatePDF } from "@/utils/generatePDF";
import { useScopedI18n, useCurrentLocale, useChangeLocale } from "@/locales/client";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const locales = ["pt-BR", "en-US"] as const;

  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const scopedT = useScopedI18n("navigation");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      smoothScroll(targetId);
      setIsOpen(false);
    },
    []
  );

  const navLinks = [
    { href: "#about", label: scopedT("about"), id: "about" },
    { href: "#experience", label: scopedT("experience"), id: "experience" },
    { href: "#education", label: scopedT("education"), id: "education" },
    { href: "#skills", label: scopedT("skills"), id: "skills" },
    { href: "#projects", label: scopedT("projects"), id: "projects" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={clsx(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
          isScrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-lg mx-4" : "bg-transparent border-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            onClick={(e) => handleClick(e, "hero")}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            DC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleClick(e, link.id)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />

            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs font-bold">{currentLocale ? currentLocale.split('-')[0].toUpperCase() : 'PT'}</span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                  >
                    {locales.map((locale) => (
                      <button
                        key={locale}
                        onClick={() => {
                          setIsLangOpen(false);
                          changeLocale(locale);
                        }}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        {locale === "pt-BR" ? "Português" : "English"}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => generatePDF()}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <FileDown className="h-4 w-4" />
              <span>CV</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.id)}
                  className="block px-3 py-3 rounded-lg text-base font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-slate-200 dark:bg-slate-800 my-4" />
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => generatePDF()}
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Resume</span>
                </button>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center justify-center space-x-2 px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium"
                >
                  <Globe className="h-4 w-4" />
                  <span>{currentLocale === "pt-BR" ? "PT" : "EN"}</span>
                </button>
              </div>
              {isLangOpen && (
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => {
                        setIsLangOpen(false);
                        changeLocale(locale);
                        setIsOpen(false);
                      }}
                      className={clsx(
                        "py-2 rounded-lg text-sm border",
                        currentLocale === locale ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" : "border-slate-200 dark:border-slate-800"
                      )}
                    >
                      {locale === "pt-BR" ? "Português" : "English"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
