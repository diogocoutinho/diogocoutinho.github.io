"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";


interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  workMode: string;
  stacks?: string[];
  responsibilities: string[];
  logoUrl?: string;
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  workMode,
  stacks,
  responsibilities,
  logoUrl,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 md:p-8 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <Building2 className="w-24 h-24 text-blue-500" />
      </div>

      <div className="flex flex-col md:flex-row gap-6 relative z-10">
        {logoUrl ? (
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 bg-white">
              <Image
                src={logoUrl}
                alt={`${company} logo`}
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        ) : (
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 relative rounded-xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-slate-400" />
            </div>
          </div>
        )}

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {position}
              </h3>
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                {company}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                {duration}
              </div>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800/50 px-3 py-1 rounded-full">
                <MapPin className="w-4 h-4 mr-2" />
                {location} ({workMode})
              </div>
            </div>
          </div>

          {stacks && stacks.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {stacks.map((stack) => (
                  <span
                    key={stack}
                    className="px-3 py-1 text-xs font-semibold bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 rounded-full border border-blue-100 dark:border-blue-900/50"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
              Principais responsabilidades
            </h4>
            <ul className="space-y-2">
              {responsibilities.map((responsibility, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
