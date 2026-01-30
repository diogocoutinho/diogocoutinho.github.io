"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SkillCategory from "@/components/SkillCategory";
import Section from "@/components/Section";
import { useScopedI18n, useI18n } from "@/locales/client";
import {
  skillCategories,
  projects,
  educations,
  experiences,
} from "@/utils/constants";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const scopedT = useScopedI18n("HomePage");
  const t = useI18n();

  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 px-4">
          <div className="container mx-auto max-w-7xl px-4 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm mb-4 border border-blue-200 dark:border-blue-800"
              >
                {scopedT("hero.availableForHire")}
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {scopedT("hero.title")}
              </h1>

              <h2 className="text-2xl md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                {scopedT("hero.subtitle")}
              </h2>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {scopedT("hero.description")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link href="#projects" className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-lg hover:shadow-blue-500/25 active:scale-95">
                  {scopedT("hero.viewProjects")}
                </Link>
                <Link href="#contact" className="px-8 py-3.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95 border border-slate-200 dark:border-slate-700">
                  {scopedT("hero.contactMe")}
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 pt-6">
                <a href="https://github.com/diogocoutinho" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/diogoccoutinho" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:diogo.coutinho.ads@gmail.com" className="text-slate-400 hover:text-red-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex-1 relative"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
                  <Image
                    src="/profile.jpeg"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <div className="animate-bounce">
              <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <Section id="about" title={scopedT("About.title")}>
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-3xl shadow-lg border border-white/20">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{scopedT("About.p1")}</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{scopedT("About.p2")}</p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{scopedT("About.p3")}</p>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title={scopedT("Experience.title")}>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title={scopedT("Education.title")}>
          <div className="max-w-4xl mx-auto space-y-6">
            {educations.map((education, index) => (
              <EducationCard key={index} {...education} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title={scopedT("Skills.title")}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title={scopedT("Projects.title")}>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" title={t("Contact.title")} className="pb-32">
          <div className="max-w-5xl mx-auto">
            <Contact />
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
