"use client";

import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Section from "@/components/Section";
import { useScopedI18n, useCurrentLocale } from "@/locales/client";
import {
  about,
  aiExperience,
  contact,
  educations,
  experiences,
  hero,
  languages,
  projects,
  proofPoints,
  services,
  skillGroups,
  stats,
  tr,
} from "@/data/profile";
import { generatePDF } from "@/utils/generatePDF";
import { ArrowRight, Bot, Check, Code2, FileDown, Globe, Users } from "lucide-react";

const serviceIcons = { code: Code2, bot: Bot, users: Users, globe: Globe };

export default function Home() {
  const locale = useCurrentLocale();
  const t = useScopedI18n("sections");

  const featured = projects.filter((p) => p.featured);
  const products = projects.filter((p) => !p.featured && !p.client);
  const clients = projects.filter((p) => p.client);

  return (
    <>
      <main>
        {/* Hero */}
        <section id="hero" className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 lg:gap-16 items-center">
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-sm text-muted mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                {tr(hero.badge, locale)}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-ink">
                {tr(hero.role, locale)}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">{tr(hero.pitch, locale)}</p>

              <ul className="mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2">
                {proofPoints.map((p) => (
                  <li key={p.en} className="flex items-center gap-2 text-sm font-medium text-ink">
                    <Check className="w-4 h-4 text-accent" />
                    {tr(p, locale)}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-gold text-on-gold font-semibold hover:brightness-95 transition">
                  {tr(hero.ctaPrimary, locale)} <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-line bg-surface text-ink font-semibold hover:border-ink/40 transition-colors">
                  {tr(hero.ctaSecondary, locale)}
                </a>
                <button
                  onClick={() => generatePDF(locale)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-ink font-medium hover:text-accent transition-colors"
                >
                  <FileDown className="w-4 h-4" /> {tr(hero.ctaCv, locale)}
                </button>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-full lg:h-auto lg:aspect-[4/5] max-w-full rounded-xl overflow-hidden border border-line bg-surface">
                <Image src="/profile.jpeg" alt={contact.name} fill className="object-cover" priority />
              </div>
              <p className="hidden lg:block mt-4 text-sm text-muted">
                <span className="font-medium text-ink">{contact.name}</span> · {tr(contact.location, locale)}
              </p>
              <p className="hidden lg:block mt-1 text-xs text-muted">{tr(hero.stack, locale)}</p>
            </div>
          </div>

          {/* Números */}
          <dl className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-line divide-line md:divide-x">
            {stats.map((s) => (
              <div key={s.label.en} className="py-6 md:px-6 first:md:pl-0">
                <dt className="sr-only">{tr(s.label, locale)}</dt>
                <dd>
                  <span className="block font-display text-3xl md:text-4xl font-semibold text-ink tabular-nums">{s.value}</span>
                  <span className="block mt-1 text-sm text-muted">{tr(s.label, locale)}</span>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Sobre */}
        <Section id="about" title={t("about")}>
          <div className="grid gap-5 max-w-3xl">
            {about.map((p, i) => (
              <p key={i} className="text-lg text-ink/85 leading-relaxed">
                {tr(p, locale)}
              </p>
            ))}
          </div>
        </Section>

        {/* Serviços */}
        <Section id="services" title={t("services")} lead={t("servicesLead")}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <div key={s.title.en} className="border-t-2 border-ink pt-6 flex flex-col">
                  <Icon className="w-6 h-6 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-ink mb-2">{tr(s.title, locale)}</h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{tr(s.description, locale)}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ink/85">
                        <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                        {tr(b, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>

        {/* IA na prática */}
        <Section id="ai" title={t("ai")} lead={t("aiLead")}>
          <div className="grid md:grid-cols-2 gap-6">
            {aiExperience.map((item) => (
              <article key={item.title.en} className="bg-surface border border-line rounded-xl p-6 md:p-7 flex flex-col">
                <h3 className="text-lg font-semibold text-ink mb-2">{tr(item.title, locale)}</h3>
                <p className="text-[15px] text-ink/85 leading-relaxed mb-4">{tr(item.description, locale)}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-md border border-line bg-bg text-xs font-medium text-muted">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Cases */}
        <Section id="projects" title={t("projects")} lead={t("projectsLead")}>
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted mb-5">{t("productsTitle")}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} variant="featured" />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {products.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>

          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted mt-14 mb-5">{t("clientsTitle")}</h3>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {clients.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Experiência */}
        <Section id="experience" title={t("experience")}>
          <div className="border-t border-line">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company + experience.period.en} experience={experience} />
            ))}
          </div>
        </Section>

        {/* Stack, formação e idiomas */}
        <Section id="skills" title={t("skills")}>
          <dl className="border-t border-line">
            {skillGroups.map((group) => (
              <div key={group.title.en} className="grid md:grid-cols-[200px_minmax(0,1fr)] gap-2 md:gap-10 py-5 border-b border-line">
                <dt className="font-semibold text-ink">{tr(group.title, locale)}</dt>
                <dd className="text-[15px] text-ink/85 leading-relaxed">{group.skills.join(" · ")}</dd>
              </div>
            ))}
          </dl>

          <div id="education" className="grid md:grid-cols-2 gap-12 mt-16 scroll-mt-24">
            <div>
              <h3 className="text-xl font-semibold text-ink mb-5">{t("education")}</h3>
              <ul className="divide-y divide-line border-y border-line">
                {educations.map((e) => (
                  <li key={e.degree.en} className="py-4">
                    <p className="font-medium text-ink">{tr(e.degree, locale)}</p>
                    <p className="text-sm text-muted">
                      {e.institution} · <span className="tabular-nums">{e.period}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-ink mb-5">{t("languages")}</h3>
              <ul className="divide-y divide-line border-y border-line">
                {languages.map((l) => (
                  <li key={l.name.en} className="py-4 flex justify-between gap-4">
                    <span className="font-medium text-ink">{tr(l.name, locale)}</span>
                    <span className="text-sm text-muted text-right">{tr(l.level, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contato */}
        <Section id="contact" title={t("contact")} lead={t("contactLead")} className="pb-28">
          <Contact />
        </Section>
      </main>

      <Footer />
    </>
  );
}
