"use client";

import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  title?: string;
}

export default function Section({ id, children, title }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-9/6 pt-5 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-400">
          {title}
        </h2>
        <div className="prose dark:prose-invert max-w-none">{children}</div>
      </div>
    </section>
  );
}
