"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import SkillCategory from "@/components/SkillCategory";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import Section from "@/components/Section";
import { useScopedI18n } from "@/locales/client";

export default function Home() {
  const scopedT = useScopedI18n("HomePage");

  const projects = [
    {
      title: "Diogo Coutinho - Portfólio",
      description:
        "Meu portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS. Uma aplicação moderna e responsiva que apresenta minha trajetória profissional e projetos.",
      imageUrl: "/portfolio.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React",
        "GitHub Pages",
      ],
      githubUrl: "https://github.com/diogocoutinho/diogocoutinho.github.io",
      liveUrl: "https://diogocoutinho.github.io",
    },
    {
      title: "Vue International Phone Input Component",
      description:
        "Um componente de entrada de telefone internacional para Vue.js, com suporte a vários países e formatos de entrada.",
      technologies: ["Vue.js", "TypeScript", "Tailwind CSS", "GitHub Pages"],
      githubUrl: "https://github.com/diogocoutinho/vue-international-phone",
      liveUrl: "https://diogocoutinho.github.io/vue-international-phone/",
    },
  ];

  const experiences = [
    {
      company: "EASY DEV SOLUÇÕES DIGITAIS LTDA",
      position: "Desenvolvedor Full Stack",
      duration: "Set de 2018 - Até o momento",
      location: "Ibirité, Minas Gerais, Brasil",
      workMode: "Presencial",
      stacks: [
        "PHP",
        "Laravel",
        "Livewire",
        "ReactJs",
        "React Native",
        "Git",
        "Docker",
        "TypeSense",
        "Vue.js",
        "AngulaJs 1.5",
        "Java Android",
        "Objective-C iOS",
        "Nest.js",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices",
        "AWS",
        "Linux",
        "Shell Script",
        "Nginx",
        "MySQL",
        "PostgreSQL",
        "Redis",
        "MongoDB",
      ],
      responsibilities: [
        "Gestão de times de desenvolvimento",
        "Gestão de projetos",
        "Manutenção e desenvolvimento de código limpo",
        "Gerenciamento de Ambiente de desenvolvimento",
        "Documentação de Código",
        "Revisão de código da equipe",
        "Elaboração e especificação de novas funcionalidades",
        "Apoio aos demais times quando necessário no desenvolvimento de tarefas",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQF_Er9djinAdA/company-logo_100_100/B4DZaINOaZGcAY-/0/1746041890950?e=1752105600&v=beta&t=20u5Vgeu40xd_DBwdJBS6lQHN65-SSvjpfEgHM-c2Eo",
    },
    {
      company: "Ailu",
      position: "Desenvolvedor Full Stack",
      duration: "Nov de 2024 - mar de 2025 · 5 meses",
      location: "Ibirité, Minas Gerais, Brasil",
      workMode: "Remoto",
      stacks: [
        "PHP",
        "Laravel",
        "Livewire",
        "ReactJs",
        "React Native",
        "Git",
        "Docker",
        "MySql",
        "Redis",
        "TypeSense",
      ],
      responsibilities: [
        "Manutenção e desenvolvimento de código limpo",
        "Gerenciamento de Ambiente de desenvolvimento",
        "Documentação de Código",
        "Revisão de código da equipe",
        "Elaboração e especificação de novas funcionalidades",
        "Apoio aos demais times quando necessário no desenvolvimento de tarefas",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQH_gpjghYN2yw/company-logo_200_200/company-logo_200_200/0/1719320009271/somosailu_logo?e=1752105600&v=beta&t=aDreewUvedPCIzsZiVP073RutlNaoLvipsESF9BG8qQ",
    },
    {
      company: "For People",
      position: "Desenvolvedor Full Stack Pleno II",
      duration: "fev de 2024 - nov de 2024 · 10 meses",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      workMode: "Presencial",
      stacks: [
        "PHP",
        "Laravel",
        "ReactJs",
        "Flutter mobile",
        "Git",
        "Docker",
        "CI/CD",
        "MySql",
        "Redis",
      ],
      responsibilities: [
        "Manutenção e desenvolvimento de código limpo",
        "Gerenciamento de Ambiente de desenvolvimento",
        "Documentação de Código",
        "Revisão de código da equipe",
        "Elaboração e especificação de novas funcionalidades",
        "Apoio aos demais times quando necessário no desenvolvimento de tarefas",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQGILem4wxKbpw/company-logo_100_100/company-logo_100_100/0/1630594552638/for_people_softwares_logo?e=1751500800&v=beta&t=czXq_7RlRBWmjRjIZ64H8brCd2w5iDUlA_EjWkaFSRw",
    },
    {
      company: "Onfly",
      position: "Líder da equipe de desenvolvimento",
      duration: "dez de 2021 - out de 2023 · 1 ano 11 meses",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      workMode: "Híbrida",
      stacks: [
        "PHP",
        "Laravel",
        "Lumen",
        "Vue.js",
        "Flutter mobile",
        "Git",
        "Docker",
        "MySql",
        "Redis",
      ],
      responsibilities: [
        "Manutenção e desenvolvimento de código",
        "Gestão e distribuição de tarefas e Bugs para a equipe",
        "Documentação de Código",
        "Revisão de código da equipe",
        "Execução de reuniões 1-1",
        "Elaboração e especificação de novas funcionalidades junto ao PO e PM",
        "Apoio aos demais times quando necessário no desenvolvimento de tarefas",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQFHAF7AZsRvrw/company-logo_100_100/company-logo_100_100/0/1669900066411/onfly_logo?e=1751500800&v=beta&t=AmIKyLvvr3jsJk-qqzNHK7095sAporxXi0KF9K8k5Bo",
    },
    {
      company: "Codificar Sistemas",
      position: "Full Stack Engineer",
      duration: "nov de 2021 - dez de 2021 · 2 meses",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      workMode: "Híbrida",
      stacks: [
        "PHP",
        "Laravel",
        "Vue.js",
        "AngulaJs 1.5",
        "Java Android",
        "Objective-C iOS",
        "React-Native",
        "Git",
        "MySql",
        "Docker",
        "Redis",
      ],
      responsibilities: [
        "Manutenção e desenvolvimento de código para plataforma de Streaming",
        "Gestão de tarefas e Bugs",
        "Publicação de aplicativos iOS e Android",
        "Documentação de Código de Regras de Negócios",
        "Elaboração e especificação de novas funcionalidades junto ao cliente",
        "Apoio aos demais times quando necessário no desenvolvimento de tarefas em outros projetos",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQFJeEn5s_txZA/company-logo_100_100/company-logo_100_100/0/1662057594494/codificar_logo?e=1751500800&v=beta&t=mEMYGoDW2K3FXcxp35ztuXfqONsK13tMosErQwmPNuI",
    },
    {
      company: "Codificar Sistemas",
      position: "Desenvolvedor Full-Stack",
      duration: "out de 2019 - nov de 2021 · 2 anos 2 meses",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      workMode: "Presencial",
      stacks: [
        "PHP",
        "Laravel",
        "AngularJS 1.5",
        "Java Android",
        "Objective-C iOS",
        "Git",
        "MySql",
      ],
      responsibilities: [
        "Desenvolvimento da plataforma de Streaming",
        "Desenvolvimento de aplicativos mobile para Android e iOS",
        "Manutenção e evolução do sistema",
        "Implementação de novas funcionalidades",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQFJeEn5s_txZA/company-logo_100_100/company-logo_100_100/0/1662057594494/codificar_logo?e=1751500800&v=beta&t=mEMYGoDW2K3FXcxp35ztuXfqONsK13tMosErQwmPNuI",
    },
    {
      company: "Codificar Sistemas",
      position: "Estagiário de desenvolvimento",
      duration: "dez de 2018 - out de 2019 · 11 meses",
      location: "Belo Horizonte e Região, Brasil",
      workMode: "Presencial",
      stacks: ["PHP", "Laravel", "AngularJS 1.5", "Git"],
      responsibilities: [
        "Aprendizado e desenvolvimento de habilidades em programação",
        "Suporte ao time de desenvolvimento",
        "Implementação de funcionalidades básicas",
      ],
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQFJeEn5s_txZA/company-logo_100_100/company-logo_100_100/0/1662057594494/codificar_logo?e=1751500800&v=beta&t=mEMYGoDW2K3FXcxp35ztuXfqONsK13tMosErQwmPNuI",
    },
  ];

  const educations = [
    {
      institution: "Faculdade de Ciências Sociais Aplicadas de Belo Horizonte",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      duration: "2017 - 2019",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description:
        "Tecnólogo em Análise e Desenvolvimento de Sistemas, com ênfase em desenvolvimento de software e sistemas de informação.",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQFJcNanAbxHZg/company-logo_200_200/company-logo_200_200/0/1631373584863/facisabh_logo?e=1751500800&v=beta&t=U8b9SVRF14Hwiz1FCjvmPtayt3qgtOhcTN6cT-lRth4",
    },
    {
      institution: "SENAC MG",
      degree: "Infraestrutura de Redes a Cabo e Wireless",
      duration: "2013",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description:
        "Curso técnico focado em infraestrutura de redes, incluindo topologias, endereçamento IP, protocolos TCP/IP, cabeamento estruturado, redes wireless e configuração de equipamentos.",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1751500800&v=beta&t=zCHEgixhYsL1lfqbPDFXqvSHx8ebgmhuPDJbPcTtlpw",
    },
    {
      institution: "SENAC MG",
      degree: "Técnicas de Vendas",
      duration: "2011 - 2013",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description:
        "Curso focado em técnicas de vendas, evolução do consumidor, competências do vendedor e matemática comercial.",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEX6f-oCb07jQ/company-logo_100_100/company-logo_100_100/0/1669896560309/senacminas_logo?e=1751500800&v=beta&t=zCHEgixhYsL1lfqbPDFXqvSHx8ebgmhuPDJbPcTtlpw",
    },
    {
      institution: "S.O.S Computadores",
      degree: "Web Design e Design Gráfico",
      duration: "2010 - 2013",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description:
        "Formação em ferramentas de design como Photoshop, InDesign, Fireworks, Dreamweaver e desenvolvimento de identidade visual.",
    },
    {
      institution: "Escola Estadual Juscelino Kubitscheck",
      degree: "Ensino Médio",
      duration: "2006 - 2009",
      location: "Belo Horizonte, Minas Gerais, Brasil",
      description:
        "Ensino médio completo com participação em atividades extracurriculares como dança, teatro e música.",
    },
  ];

  const skillCategories = [
    {
      title: "Backend Development",
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        "PHP",
        "Laravel",
        "Lumen",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices",
      ],
    },
    {
      title: "Frontend Development",
      icon: <PaintBrushIcon className="w-6 h-6" />,
      skills: [
        "React",
        "Next.js",
        "Vue.js",
        "AngularJS",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "DevOps",
      icon: <CodeBracketIcon className="w-6 h-6" />,
      skills: [
        "Docker",
        "CI/CD",
        "Git",
        "GitHub Actions",
        "AWS",
        "Linux",
        "Shell Script",
        "Nginx",
      ],
    },
    {
      title: "Databases",
      icon: <CircleStackIcon className="w-6 h-6" />,
      skills: [
        "MySQL",
        "PostgreSQL",
        "Redis",
        "MongoDB",
        "SQL",
        "Database Design",
        "Query Optimization",
      ],
    },
  ];

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
