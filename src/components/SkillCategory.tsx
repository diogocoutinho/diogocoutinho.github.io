"use client";

import { motion } from "framer-motion";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export default function SkillCategory({
  title,
  skills,
  icon,
}: SkillCategoryProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-2xl p-8 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 group h-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-blue-500 dark:text-blue-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110 p-3 bg-blue-50 dark:bg-slate-800 rounded-xl">
          {icon}
        </div>
        <h3
          id="category-title"
          className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300"
        >
          {title}
        </h3>
      </div>
      <div id="skills-list" className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
