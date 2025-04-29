"use client";

import Link from "next/link";
import { smoothScroll } from "@/utils/smoothScroll";
import { useCallback, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  SunIcon,
  MoonIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { generatePDF } from "@/utils/generatePDF";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      smoothScroll(targetId);
      setIsOpen(false);
    },
    []
  );

  const handleDownloadPDF = async () => {
    await generatePDF();
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={(e) => handleClick(e, "hero")}
            className="text-xl font-bold text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
          >
            DC
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              onClick={(e) => handleClick(e, "about")}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Sobre
            </Link>
            <Link
              href="#experience"
              onClick={(e) => handleClick(e, "experience")}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Experiência
            </Link>
            <Link
              href="#education"
              onClick={(e) => handleClick(e, "education")}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Educação
            </Link>
            <Link
              href="#skills"
              onClick={(e) => handleClick(e, "skills")}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Habilidades
            </Link>
            <Link
              href="#projects"
              onClick={(e) => handleClick(e, "projects")}
              className="text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Projetos
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleDownloadPDF}
              className="p-2 rounded-lg text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300 hidden md:block"
              aria-label="Baixar currículo em PDF"
            >
              <DocumentArrowDownIcon className="h-6 w-6" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label={`Alternar para modo ${
                theme === "light" ? "escuro" : "claro"
              }`}
            >
              {theme === "light" ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </button>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white focus:outline-none transition-colors duration-300"
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
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="#about"
            onClick={(e) => handleClick(e, "about")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Sobre
          </Link>
          <Link
            href="#experience"
            onClick={(e) => handleClick(e, "experience")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Experiência
          </Link>
          <Link
            href="#education"
            onClick={(e) => handleClick(e, "education")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Educação
          </Link>
          <Link
            href="#skills"
            onClick={(e) => handleClick(e, "skills")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Habilidades
          </Link>
          <Link
            href="#projects"
            onClick={(e) => handleClick(e, "projects")}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            Projetos
          </Link>
          <button
            onClick={handleDownloadPDF}
            className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 hover:bg-gray-800 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Baixar currículo em PDF"
          >
            <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
            Baixar PDF
          </button>
        </div>
      </div>
    </nav>
  );
}
