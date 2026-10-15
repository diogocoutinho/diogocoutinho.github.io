"use client";

import Image from "next/image";
import clsx from "clsx";
import { ArrowUpRight, Github } from "lucide-react";
import { Project, tr } from "@/data/profile";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";

export default function ProjectCard({ project, variant = "default" }: { project: Project; variant?: "featured" | "default" }) {
  const locale = useCurrentLocale();
  const t = useScopedI18n("labels");
  const { title, kind, summary, highlights, technologies, imageUrl, liveUrl, githubUrl, client } = project;
  const featured = variant === "featured";

  return (
    <article className="bg-surface border border-line rounded-xl overflow-hidden flex flex-col h-full">
      {client && (
        <div className="relative h-44 overflow-hidden border-b border-line bg-bg">
          {imageUrl ? (
            <Image src={imageUrl} alt={title} fill className="object-cover object-top" />
          ) : (
            liveUrl && (
              <div className="h-full flex items-center justify-center bg-[#212121] px-6 text-center">
                <span className="font-display text-lg font-medium text-[#d4af37] break-all">
                  {new URL(liveUrl).hostname.replace(/^www\./, "")}
                </span>
              </div>
            )
          )}
        </div>
      )}

      <div className={clsx("flex flex-col flex-1", featured ? "p-7" : "p-6")}>
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-accent mb-2">{tr(kind, locale)}</p>
        <h3 className={clsx("font-semibold text-ink mb-3", featured ? "text-2xl" : "text-lg")}>{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{tr(summary, locale)}</p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5 flex-1">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2.5 text-sm text-ink/85 leading-relaxed">
                <span className="mt-2 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                {tr(h, locale)}
              </li>
            ))}
          </ul>
        )}

        <p className="text-xs text-muted leading-relaxed mb-5">{technologies.join(" · ")}</p>

        {(liveUrl || githubUrl) && (
          <div className="flex gap-5 pt-4 border-t border-line mt-auto text-sm font-medium">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink hover:text-accent">
                {t("visit")} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink hover:text-accent">
                <Github className="w-4 h-4" /> {t("code")}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
