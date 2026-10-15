"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Experience, tr } from "@/data/profile";
import { useCurrentLocale } from "@/locales/client";

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const locale = useCurrentLocale();
  const { company, position, period, location, summary, bullets, stacks } = experience;
  const initials = company
    .split(/[\s·]+/)
    .filter((w) => /^[A-Za-zÀ-ú]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
            {initials}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-3 gap-2">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tr(position, locale)}</h3>
              <p className="text-base font-medium text-blue-600 dark:text-blue-400">{company}</p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                <Calendar className="w-3.5 h-3.5 mr-1.5" />
                {tr(period, locale)}
              </span>
              <span className="flex items-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                {tr(location, locale)}
              </span>
            </div>
          </div>

          {summary && (
            <p className="text-sm italic text-slate-500 dark:text-slate-400 mb-3">{tr(summary, locale)}</p>
          )}

          <ul className="space-y-2 mb-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {tr(b, locale)}
              </li>
            ))}
          </ul>

          {stacks && stacks.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-900/50"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
