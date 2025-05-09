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
import { useScopedI18n } from "@/locales/client";
import {
  skillCategories,
  projects,
  educations,
  experiences,
} from "@/utils/constants";

export default function Home() {
  const scopedT = useScopedI18n("HomePage");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-900 dark:text-gray-300 pt-16">
        {/* Hero Section */}
        <Section id="hero">
          <div className="flex flex-col items-center text-center bg-white dark:bg-gray-900">
            <div className="w-32 h-32 relative mb-6 rounded-full overflow-hidden ring-4 ring-blue-500">
              <Image
                src="/profile.jpeg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {scopedT("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 dark:text-gray-300 mb-8">
              {scopedT("hero.subtitle")}
            </p>
          </div>
          <Contact />
        </Section>

        {/* About Section */}
        <Section id="about" title={scopedT("About.title")}>
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2> */}
          <div className="max-w-4xl mx-auto text-lg text-gray-900 dark:text-gray-300">
            <p className="mb-4">{scopedT("About.p1")}</p>
            <p className="mb-4">{scopedT("About.p2")}</p>
            <p className="mb-4">{scopedT("About.p3")}</p>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title={scopedT("Experience.title")}>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title={scopedT("Education.title")}>
          <div className="max-w-4xl mx-auto space-y-8">
            {educations.map((education, index) => (
              <EducationCard key={index} {...education} />
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title={scopedT("Skills.title")}>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto bg-white dark:bg-gray-900">
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
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
