"use client";

import { Experience, tr } from "@/data/profile";
import { useCurrentLocale } from "@/locales/client";

// Linha do tempo: período à esquerda, conteúdo à direita (empilha no celular).
export default function ExperienceCard({ experience }: { experience: Experience }) {
  const locale = useCurrentLocale();
  const { company, position, period, location, summary, bullets, stacks } = experience;

  return (
    <article className="grid md:grid-cols-[200px_minmax(0,1fr)] gap-2 md:gap-10 py-8 border-b border-line last:border-b-0">
      <div className="text-sm text-muted md:pt-1">
        <p className="font-medium text-ink/80 tabular-nums">{tr(period, locale)}</p>
        <p>{tr(location, locale)}</p>
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-semibold text-ink">{tr(position, locale)}</h3>
        <p className="text-base font-medium text-accent mb-3">{company}</p>
        {summary && <p className="text-sm text-muted mb-3">{tr(summary, locale)}</p>}
        <ul className="space-y-2 mb-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-[15px] text-ink/85 leading-relaxed">
              <span className="mt-2.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
              {tr(b, locale)}
            </li>
          ))}
        </ul>
        {stacks && stacks.length > 0 && <p className="text-xs text-muted leading-relaxed">{stacks.join(" · ")}</p>}
      </div>
    </article>
  );
}
