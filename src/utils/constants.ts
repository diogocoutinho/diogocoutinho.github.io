import {
  ServerIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { ReactNode } from "react";

interface SkillCategory {
  title: string;
  icon: ReactNode;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: React.createElement(ServerIcon, { className: "w-6 h-6" }),
    skills: [
      "PHP",
      "Laravel",
      "Lumen",
      "Node.js",
      "Express.js",
      "AdonisJs",
      "RESTful APIs",
      "Microservices",
    ],
  },
  {
    title: "Frontend Development",
    icon: React.createElement(PaintBrushIcon, { className: "w-6 h-6" }),
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
    icon: React.createElement(CodeBracketIcon, { className: "w-6 h-6" }),
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
    icon: React.createElement(CircleStackIcon, { className: "w-6 h-6" }),
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

export const projects = [
  {
    title: "Kenny G. Almeida",
    description:
      "Site para a empresa Kenny G. Almeida, desenvolvido com Next.js, TypeScript e Tailwind CSS. Uma aplicação moderna e responsiva que apresenta minha trajetória profissional e projetos.",
    imageUrl: "/kenny.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "GitHub Pages",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/diogocoutinho/kennyalmeida.github.io",
    liveUrl: "https://kennygalmeida.com.br/",
  },
  {
    title: "GC Contabilidade Digital",
    description: "Website para a empresa GC Contabilidade Digital",
    imageUrl: "/gcdigicont.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/diogocoutinho/gcdigicont2",
    liveUrl: "https://gcdigicont.com.br/",
  },
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
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/diogocoutinho/diogocoutinho.github.io",
    liveUrl: "https://diogocoutinho.github.io",
  },
  {
    title: "Vue International Phone Input Component",
    description:
      "Um componente de entrada de telefone internacional para Vue.js, com suporte a vários países e formatos de entrada.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub Pages",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/diogocoutinho/vue-international-phone",
    liveUrl: "https://diogocoutinho.github.io/vue-international-phone/",
  },
];

export const experiences = [
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
  {
    company: "COPABO IND. E COM. LTDA",
    position: "Comprador",
    duration: "out de 2011 - nov de 2018 · 7 anos 2 meses",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    workMode: "Presencial",
    responsibilities: [
      "Desde 2009 na KORBRAS, iniciando como Almoxarife e exercendo funções auxiliares, tais como, prensagem de mangueiras hidráulicas. Após um curso de Técnicas de Vendas - SENAC/MG fui promovido à Auxiliar de Vendas, passando assim para o escritório. Praticando algumas funções em vendas, decidi mostrar meu conhecimento em T.I para ajudar ainda mais a empresa. Resolvi fazer um curso voltado ao que a empresa precisa e que também é de meu interesse, Redes. Apos as necessidades da empresa aumentarem, fui transferido para o setor de compras e ainda pratico o máximo possível meus conhecimentos em T.I. para auxiliar a empresa. E ainda busco muito mais conhecimento e profissionalismo.",
    ],
  },
  {
    company: "KORBRAS IND. E COM. LTDA",
    position: "Almoxarife",
    duration: "out de 2009 - out de 2011 · 2 anos 1 mês",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    workMode: "Presencial",
    responsibilities: [
      "Gestão de estoque",
      "Gestão de compras",
      "Gestão de fornecedores",
      "Gestão de compras",
    ],
  },
  {
    company: "Casa das Correias LTDA",
    position: "Auxiliar de Vendas",
    duration: "ago de 2007 - out de 2009 · 2 anos 3 meses",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    workMode: "Presencial",
    responsibilities: [
      "Gestão de estoque",
      "Gestão de compras",
      "Gestão de fornecedores",
    ],
  },
  {
    company: "AMAS",
    position: "Aprendiz de Atendimento",
    duration: "jul de 2004 - mai de 2006 · 1 ano 11 meses",
    location: "Belo Horizonte, Minas Gerais, Brasil",
    workMode: "Presencial",
    responsibilities: [
      "Aprendizado e desenvolvimento de habilidades em atendimento ao cliente",
      "Suporte ao time de atendimento",
      "Implementação de funcionalidades básicas",
    ],
  },
];

export const educations = [
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
