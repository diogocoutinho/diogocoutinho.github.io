"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import EducationCard from "@/components/EducationCard";
import Footer from "@/components/ui/Footer";
import Contact from "@/components/ui/Contact";
import SkillCategory from "@/components/SkillCategory";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
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
      title: "API de Gerenciamento de Tarefas",
      description:
        "API RESTful desenvolvida com Laravel para gerenciamento de tarefas, incluindo autenticação, CRUD de tarefas e relacionamentos entre usuários e tarefas.",
      imageUrl: "/task-manager.png",
      technologies: ["Laravel", "PHP", "MySQL", "REST API", "JWT"],
      githubUrl: "https://github.com/diogocoutinho/task-manager-api",
      liveUrl: null,
    },
    {
      title: "Sistema de Agendamento",
      description:
        "Sistema de agendamento desenvolvido com React e Node.js, permitindo agendamentos online, gerenciamento de horários e notificações.",
      imageUrl: "/scheduling.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/diogocoutinho/scheduling-system",
      liveUrl: null,
    },
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de e-commerce completa com carrinho de compras, pagamentos integrados e painel administrativo.",
      imageUrl: "/ecommerce.png",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "Docker"],
      githubUrl: "https://github.com/diogocoutinho/ecommerce-platform",
      liveUrl: null,
    },
  ];

  const experiences = [
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

  const handleContactSubmit = (data: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center text-center">
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
              Diogo Coutinho
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Desenvolvedor Full Stack
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/diogocoutinho"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/diogoccoutinho"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sobre Mim</h2>
          <div className="max-w-2xl mx-auto text-lg text-gray-300">
            <p className="mb-4">
              Desenvolvedor Full Stack com experiência em desenvolvimento web e
              mobile. Especializado em criar soluções escaláveis e eficientes
              utilizando tecnologias modernas.
            </p>
            <p className="mb-4">
              Atualmente trabalho como Desenvolvedor Full Stack Freelancer, onde
              lidero o desenvolvimento de aplicações web e mobile, utilizando
              React, Node.js e outras tecnologias modernas.
            </p>
            <p>
              Minha experiência inclui desenvolvimento de sistemas de gestão,
              plataformas de e-commerce e aplicações mobile, sempre focando na
              qualidade do código e na experiência do usuário.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Experiência</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Educação</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {educations.map((education, index) => (
              <EducationCard key={index} {...education} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Habilidades</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Contato</h2>
          <Contact onSubmit={handleContactSubmit} />
        </section>
      </main>

      <Footer />
    </>
  );
}
