"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-lg shadow-lg p-6
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        border border-gray-200 dark:border-gray-700
        transition-all duration-300
        hover:shadow-xl dark:hover:shadow-gray-900/50
        ${className}
      `}
    >
      {children}
    </div>
  );
}
