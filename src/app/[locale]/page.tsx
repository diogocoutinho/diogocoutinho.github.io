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
  contact,
  educations,
  experiences,
  hero,
  languages,
  projects,
  services,
  skillGroups,
  stats,
  tr,
} from "@/data/profile";
import { generatePDF } from "@/utils/generatePDF";
import { motion } from "framer-motion";
import { ArrowDown, Bot, Code2, FileDown, Github, Globe, Linkedin, Mail, Users, GraduationCap, Languages } from "lucide-react";

const serviceIcons = {
  code: Code2,
  bot: Bot,
  users: Users,
  globe: Globe,
};

export default function Home() {
  const locale = useCurrentLocale();
  const t = useScopedI18n("sections");

  return (
    <>
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 font-medium text-sm border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {tr(hero.badge, locale)}
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {contact.name}
              </h1>

              <h2 className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {tr(hero.role, locale)}
              </h2>

              <p className="text-sm md:text-base font-mono text-slate-500 dark:text-slate-400">{hero.stack}</p>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {tr(hero.pitch, locale)}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a href="#contact" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
                  {tr(hero.ctaPrimary, locale)}
                </a>
                <a href="#projects" className="px-8 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95 border border-slate-200 dark:border-slate-700">
                  {tr(hero.ctaSecondary, locale)}
                </a>
                <button
                  onClick={() => generatePDF(locale)}
                  className="px-6 py-3.5 rounded-full text-slate-700 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FileDown className="w-5 h-5" />
                  {tr(hero.ctaCv, locale)}
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-4">
                <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={`mailto:${contact.email}`} aria-label="E-mail" className="text-slate-400 hover:text-red-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex-1 relative"
            >
              <div className="relative w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image src="/profile.jpeg" alt={contact.name} fill className="object-cover" priority />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
            <ArrowDown className="w-6 h-6 text-slate-400" />
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 -mt-8 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.value + s.label.en} className="glass-card rounded-2xl p-5 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
                <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1">{tr(s.label, locale)}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <Section id="about" title={t("about")}>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl space-y-5">
            {about.map((p, i) => (
              <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                {tr(p, locale)}
              </p>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section id="services" title={t("services")}>
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto -mt-8 mb-12">{t("servicesLead")}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = serviceIcons[s.icon];
              return (
                <div key={s.title.en} className="glass-card rounded-2xl p-6 flex flex-col">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{tr(s.title, locale)}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{tr(s.description, locale)}</p>
                  <ul className="space-y-1.5 mt-auto">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                        <span className="text-blue-500">✓</span>
                        {tr(b, locale)}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title={t("projects")}>
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto -mt-8 mb-12">{t("projectsLead")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title={t("experience")}>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company + experience.period.en} experience={experience} />
            ))}
          </div>
        </Section>

        {/* Skills + Education */}
        <Section id="skills" title={t("skills")}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillGroups.map((group) => (
              <div key={group.title.en} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{tr(group.title, locale)}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Languages className="w-5 h-5 text-blue-500" /> {t("languages")}
              </h3>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li key={l.name.en} className="flex justify-between gap-4 text-sm">
                    <span className="font-medium text-slate-900 dark:text-white">{tr(l.name, locale)}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-right">{tr(l.level, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="education" className="max-w-6xl mx-auto mt-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-500" /> {t("education")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {educations.map((e) => (
                <div key={e.degree.en} className="glass-card rounded-2xl p-5">
                  <p className="font-semibold text-slate-900 dark:text-white">{tr(e.degree, locale)}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {e.institution} · {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t("contact")} className="pb-32">
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto -mt-8 mb-12">{t("contactLead")}</p>
          <div className="max-w-6xl mx-auto">
            <Contact />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
