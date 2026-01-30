"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionProps {
  id: string;
  children: ReactNode;
  title?: string;
  className?: string;
}

export default function Section({ id, children, title, className }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-16",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 inline-block pb-2">
              {title}
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-2 rounded-full" />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
