import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id: string;
  children: ReactNode;
  title?: string;
  lead?: string;
  className?: string;
}

export default function Section({ id, children, title, lead, className }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20 border-t border-line", className)}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <header className="mb-10 md:mb-12 max-w-2xl">
            <div className="h-0.5 w-10 bg-gold mb-5" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
            {lead && <p className="mt-3 text-base md:text-lg text-muted leading-relaxed">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
