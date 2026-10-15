"use client";

import { Github, Linkedin } from "lucide-react";
import { useScopedI18n } from "@/locales/client";

export default function Footer() {
  const t = useScopedI18n("labels");
  return (
    <footer className="relative z-10 py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Diogo Coutinho · {t("rights")}
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/diogocoutinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/diogoccoutinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
