"use client";

import Link from "next/link";
import { smoothScroll } from "@/utils/smoothScroll";
import { useCallback, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  SunIcon,
  MoonIcon,
  DocumentArrowDownIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { generatePDF } from "@/utils/generatePDF";
import { useScopedI18n } from "@/locales/client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const locales = ["pt-BR", "en-US"];
  const [currentLocale, setCurrentLocale] = useState(locales[0]);
  console.log(currentLocale);
  const router = useRouter();

  const scopedT = useScopedI18n("navigation");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      smoothScroll(targetId);
      setIsOpen(false);
    },
    []
  );

  const handleDownloadPDF = () => {
    generatePDF();
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={(e) => handleClick(e, "hero")}
            className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            DC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#about"
              onClick={(e) => handleClick(e, "about")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {scopedT("about")}
            </Link>
            <Link
              href="#experience"
              onClick={(e) => handleClick(e, "experience")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {scopedT("experience")}
            </Link>
            <Link
              href="#education"
              onClick={(e) => handleClick(e, "education")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {scopedT("education")}
            </Link>
            <Link
              href="#skills"
              onClick={(e) => handleClick(e, "skills")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {scopedT("skills")}
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              {scopedT("projects")}
            </Link>
            <div className="relative">
              <button
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="Select language"
              >
                <GlobeAltIcon className="h-4 w-4 mr-1" />
                <span className="uppercase">{scopedT("currentLocale")}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white dark:bg-gray-900 rounded-md shadow-lg py-1 z-50">
                  {locales.map((locale) => (
                    <button
                      key={locale}
                      onClick={() => {
                        setIsLangOpen(false);
                        setCurrentLocale(locale);
                        router.push(`/${locale}`);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {locale.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-105"
              aria-label={`Alternar para modo ${
                theme === "light" ? "escuro" : "claro"
              }`}
            >
              {theme === "light" ? (
                <MoonIcon className="h-4 w-6" />
              ) : (
                <SunIcon className="h-4 w-6" />
              )}
            </button>
            <button
              onClick={handleDownloadPDF}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Baixar currículo em PDF"
            >
              <DocumentArrowDownIcon className="h-4 w-6" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="Baixar currículo em PDF"
            >
              <DocumentArrowDownIcon className="h-4 w-6" />
            </button>
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("about")}
          </Link>
          <Link
            href="#experience"
            onClick={(e) => handleClick(e, "experience")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("experience")}
          </Link>
          <Link
            href="#education"
            onClick={(e) => handleClick(e, "education")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("education")}
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleClick(e, "skills")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("skills")}
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("projects")}
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleClick(e, "contact")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            {scopedT("contact")}
          </Link>
          <div className="px-3 py-2">
            <div className="flex items-center space-x-2">
              <GlobeAltIcon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <div className="flex space-x-4">
                {locales.map((locale) => (
                  <button
                    key={locale}
                    onClick={() => {
                      setCurrentLocale(locale);
                      router.push(`/${locale}`);
                      setIsOpen(false);
                    }}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {locale.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={`Alternar para modo ${
              theme === "light" ? "escuro" : "claro"
            }`}
          >
            {theme === "light" ? (
              <MoonIcon className="h-5 w-5 mr-2" />
            ) : (
              <SunIcon className="h-5 w-5 mr-2" />
            )}
            {theme === "light" ? scopedT("darkMode") : scopedT("lightMode")}
          </button>
        </div>
      </div>
    </nav>
  );
}
