"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, School } from "lucide-react";

interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string;
  logoUrl?: string;
}

export default function EducationCard({
  institution,
  degree,
  duration,
  location,
  description,
  logoUrl,
}: EducationProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
    >
      {logoUrl ? (
        <div className="flex-shrink-0">
          <div className="w-16 h-16 relative rounded-xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 bg-white">
            <Image
              src={logoUrl}
              alt={`${institution} logo`}
              fill
              className="object-contain p-1"
            />
          </div>
        </div>
      ) : (
        <div className="flex-shrink-0">
          <div className="w-16 h-16 relative rounded-xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <School className="w-8 h-8 text-slate-400" />
          </div>
        </div>
      )}

      <div className="flex-grow space-y-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {institution}
            </h3>
            <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
              {degree}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1.5" />
              {duration}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5" />
              {location}
            </div>
          </div>
        </div>

        {description && (
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
