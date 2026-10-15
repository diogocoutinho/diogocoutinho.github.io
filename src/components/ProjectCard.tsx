"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import { Project, tr } from "@/data/profile";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

export default function ProjectCard({ project }: { project: Project }) {
  const locale = useCurrentLocale();
  const t = useScopedI18n("labels");
  const { title, kind, summary, highlights, technologies, imageUrl, liveUrl, githubUrl, featured } = project;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full"
    >
      {imageUrl ? (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      ) : (
        project.client && liveUrl && (
          <div className="h-48 flex items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-800 text-white px-6 text-center">
            <span className="text-lg font-semibold tracking-wide break-all">
              {new URL(liveUrl).hostname.replace(/^www\./, "")}
            </span>
          </div>
        )
      )}

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            {tr(kind, locale)}
          </span>
          {featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
              <Sparkles className="w-3 h-3" />
              {t("featured")}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>

        <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed">
          {tr(summary, locale)}
        </p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {tr(h, locale)}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800/80 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-5 pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {t("visit")}
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                {t("code")}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
