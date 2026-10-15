// Fonte única de conteúdo do portfólio e do currículo (site + PDF).
// Todo texto visível é bilíngue: { pt, en }.

export type Locale = "pt-BR" | "en-US";
export type L = { pt: string; en: string };

export const tr = (value: L, locale: string): string =>
  locale === "en-US" ? value.en : value.pt;

export const contact = {
  name: "Diogo Coutinho",
  email: "diogo.coutinho.ads@gmail.com",
  phone: "+55 31 99278-4329",
  phoneHref: "tel:+5531992784329",
  whatsapp: "https://wa.me/5531992784329",
  location: { pt: "Belo Horizonte, MG · Brasil (remoto)", en: "Belo Horizonte, Brazil (remote, UTC-3)" },
  linkedin: "https://www.linkedin.com/in/diogoccoutinho",
  github: "https://github.com/diogocoutinho",
  site: "https://diogocoutinho.github.io",
  agency: "https://easydevsolucoes.com.br",
};

export const hero = {
  badge: {
    pt: "Disponível: vagas Sênior/Tech Lead (remoto) e projetos sob demanda",
    en: "Available: Senior/Tech Lead roles (remote) and contract projects",
  },
  role: {
    pt: "Engenheiro de Software Full Stack Sênior & Tech Lead",
    en: "Senior Full Stack Software Engineer & Tech Lead",
  },
  stack: {
    pt: "Laravel · PHP · Python/FastAPI · Vue · React/Next.js · Node.js · AWS · IA aplicada",
    en: "Laravel · PHP · Python/FastAPI · Vue · React/Next.js · Node.js · AWS · Applied AI",
  },
  pitch: {
    pt: "Construo produtos web e SaaS que viram resultado de negócio: do back-end em Laravel e Python ao front-end em Vue/React, com integrações de IA (agentes, automações e servidores MCP). 7+ anos entregando software, liderança de time em scale-up e fundador da EasyDev.",
    en: "I build web products and SaaS that turn into business results: from Laravel and Python back-ends to Vue/React front-ends, with AI integrations (agents, automations and MCP servers). 7+ years shipping software, team lead at a scale-up and founder of EasyDev.",
  },
  ctaPrimary: { pt: "Vamos conversar", en: "Let's talk" },
  ctaSecondary: { pt: "Ver cases", en: "See case studies" },
  ctaCv: { pt: "Baixar currículo", en: "Download résumé" },
};

export const proofPoints: L[] = [
  { pt: "Liderou time de 4 a 5 devs na Onfly", en: "Led a 4–5 developer team at Onfly" },
  { pt: "Arquitetura e autenticação centralizada em fintech", en: "Architecture and centralised auth at a fintech" },
  { pt: "Produtos próprios com IA e MCP", en: "Own AI and MCP products" },
];

export const stats: { value: string; label: L }[] = [
  { value: "7+", label: { pt: "anos desenvolvendo software", en: "years building software" } },
  { value: "4–5", label: { pt: "devs liderados na Onfly", en: "developers led at Onfly" } },
  { value: "6", label: { pt: "produtos próprios em produção/beta", en: "own products in production/beta" } },
  { value: "20+", label: { pt: "pacotes open source (Arqel)", en: "open-source packages (Arqel)" } },
];

export const about: L[] = [
  {
    pt: "Sou engenheiro de software full stack com foco em back-end PHP/Laravel e Python/FastAPI, front-end Vue e React e infraestrutura na AWS. Desde 2018 desenvolvo plataformas de streaming, sistemas de gestão, SaaS B2B e aplicativos mobile — e desde 2021 também lidero pessoas: na Onfly (travel & expense tech) liderei um time de 4 a 5 desenvolvedores por quase 2 anos, conduzindo code review, 1:1s, distribuição de demandas e especificação de funcionalidades com PO e PM.",
    en: "I'm a full stack software engineer focused on PHP/Laravel and Python/FastAPI back-ends, Vue and React front-ends and AWS infrastructure. Since 2018 I've built streaming platforms, management systems, B2B SaaS and mobile apps — and since 2021 I've also led people: at Onfly (travel & expense tech) I led a team of 4–5 developers for almost 2 years, running code reviews, 1:1s, work allocation and feature specification with PO and PM.",
  },
  {
    pt: "Antes da tecnologia, passei mais de 10 anos em compras, vendas e estoque na indústria. Isso me dá algo que faz diferença em projeto: entendo o negócio por trás do código, falo a língua do cliente e priorizo o que gera retorno.",
    en: "Before tech, I spent 10+ years in purchasing, sales and inventory in industry. That gives me something that matters on every project: I understand the business behind the code, speak the client's language and prioritise what pays off.",
  },
  {
    pt: "Hoje uso IA de forma prática: construo agentes, automações e servidores MCP que conectam assistentes como Claude e ChatGPT a sistemas reais — e uso IA no meu fluxo de desenvolvimento, sempre com revisão, testes e responsabilidade de engenheiro sênior.",
    en: "Today I apply AI pragmatically: I build agents, automations and MCP servers that connect assistants like Claude and ChatGPT to real systems — and I use AI in my own workflow, always with the review, testing and ownership expected from a senior engineer.",
  },
];

export const services: { icon: "code" | "bot" | "users" | "globe"; title: L; description: L; bullets: L[] }[] = [
  {
    icon: "code",
    title: { pt: "Produtos SaaS e sistemas sob medida", en: "SaaS products & custom systems" },
    description: {
      pt: "Do MVP à evolução contínua: arquitetura, back-end, front-end, pagamentos e deploy.",
      en: "From MVP to continuous evolution: architecture, back-end, front-end, payments and deploy.",
    },
    bullets: [
      { pt: "Laravel, Vue/React, Inertia, Livewire", en: "Laravel, Vue/React, Inertia, Livewire" },
      { pt: "Pagamentos e recorrência com Stripe", en: "Payments and subscriptions with Stripe" },
      { pt: "APIs REST, filas, cache e multi-tenant", en: "REST APIs, queues, caching and multi-tenancy" },
    ],
  },
  {
    icon: "bot",
    title: { pt: "IA aplicada e automação", en: "Applied AI & automation" },
    description: {
      pt: "IA que resolve processo real, integrada aos sistemas que a empresa já usa.",
      en: "AI that solves real processes, integrated with the systems a company already uses.",
    },
    bullets: [
      { pt: "Servidores MCP para Claude/ChatGPT", en: "MCP servers for Claude/ChatGPT" },
      { pt: "Agentes de atendimento (WhatsApp) e agendamento", en: "Customer-service (WhatsApp) and scheduling agents" },
      { pt: "Integração de LLMs, RAG e automações", en: "LLM integration, RAG and automations" },
    ],
  },
  {
    icon: "users",
    title: { pt: "Liderança técnica", en: "Technical leadership" },
    description: {
      pt: "Tech lead para times que precisam ganhar ritmo e qualidade sem perder previsibilidade.",
      en: "Tech lead for teams that need speed and quality without losing predictability.",
    },
    bullets: [
      { pt: "Code review, padrões e documentação", en: "Code review, standards and documentation" },
      { pt: "Especificação com PO/PM e planejamento", en: "Specification with PO/PM and planning" },
      { pt: "Mentoria e 1:1s com o time", en: "Mentoring and 1:1s with the team" },
    ],
  },
  {
    icon: "globe",
    title: { pt: "Sites de alta performance + SEO/GEO", en: "High-performance websites + SEO/GEO" },
    description: {
      pt: "Sites rápidos em Next.js, prontos para Google e para buscadores de IA, com métricas configuradas.",
      en: "Fast Next.js websites, ready for Google and AI search engines, with analytics set up.",
    },
    bullets: [
      { pt: "Next.js, Tailwind e hospedagem própria", en: "Next.js, Tailwind and self-hosting" },
      { pt: "GA4, Tag Manager e Meta Pixel", en: "GA4, Tag Manager and Meta Pixel" },
      { pt: "SEO técnico e presença local", en: "Technical SEO and local presence" },
    ],
  },
];

export type Project = {
  title: string;
  kind: L;
  summary: L;
  highlights: L[];
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  client?: boolean;
};

export const projects: Project[] = [
  {
    title: "Social Hub · MCP",
    kind: { pt: "Produto SaaS próprio · IA", en: "Own SaaS product · AI" },
    summary: {
      pt: "Servidor MCP que permite a assistentes de IA (Claude, ChatGPT) operar redes sociais de ponta a ponta: publicar e agendar, responder com aprovação, medir e impulsionar.",
      en: "MCP server that lets AI assistants (Claude, ChatGPT) run social media end to end: publish and schedule, reply with approval, measure and boost.",
    },
    highlights: [
      { pt: "Facebook, Instagram, Threads, TikTok, LinkedIn, Meta Ads e WhatsApp Business", en: "Facebook, Instagram, Threads, TikTok, LinkedIn, Meta Ads and WhatsApp Business" },
      { pt: "Memória de marca por conta, modo agência com fluxo de aprovação", en: "Per-account brand memory, agency mode with approval workflow" },
      { pt: "Aprendizado por métricas: o que funciona em cada conta", en: "Metrics-driven learning: what works on each account" },
      { pt: "Em homologação no App Review da Meta", en: "Currently in Meta App Review" },
    ],
    technologies: ["MCP", "Node.js", "TypeScript", "Meta Graph API", "WhatsApp Cloud API", "OAuth"],
    featured: true,
  },
  {
    title: "EasyDev Hub",
    kind: { pt: "Sistema de gestão próprio · IA", en: "Own management system · AI" },
    summary: {
      pt: "Plataforma de gestão para agência de software: clientes, projetos, horas, propostas, cobranças recorrentes e portal do cliente — também operável por IA via conector MCP.",
      en: "Management platform for a software agency: clients, projects, time tracking, proposals, recurring billing and client portal — also operable by AI through an MCP connector.",
    },
    highlights: [
      { pt: "Cobrança com Stripe: recorrência e débito no cartão", en: "Stripe billing: subscriptions and card charges" },
      { pt: "Integração com Hostinger: custos, margem e infraestrutura", en: "Hostinger integration: costs, margin and infrastructure" },
      { pt: "Conector MCP para operar o negócio por linguagem natural", en: "MCP connector to run the business in natural language" },
    ],
    technologies: ["Laravel", "PHP", "Stripe", "MCP", "MySQL", "Docker"],
    liveUrl: "https://hub.easydevsolucoes.com.br",
    featured: true,
  },
  {
    title: "Arqel",
    kind: { pt: "Framework open source", en: "Open-source framework" },
    summary: {
      pt: "Framework de painéis administrativos para Laravel: painéis escritos em PHP e renderizados em React via Inertia. Publicado no Packagist, com documentação própria.",
      en: "Admin panel framework for Laravel: panels written in PHP and rendered in React via Inertia. Published on Packagist with its own documentation.",
    },
    highlights: [
      { pt: "20+ pacotes: tabelas, formulários, multi-tenant, auditoria, realtime, workflow", en: "20+ packages: tables, forms, multi-tenancy, audit, realtime, workflow" },
      { pt: "Módulos de IA e MCP nativos", en: "Native AI and MCP modules" },
      { pt: "Licença MIT", en: "MIT licensed" },
    ],
    technologies: ["Laravel", "PHP", "React", "Inertia.js", "TypeScript", "Packagist"],
    liveUrl: "https://arqel.dev",
    githubUrl: "https://github.com/arqel-dev",
    featured: true,
  },
  {
    title: "Liberi",
    kind: { pt: "Produto próprio · plataforma de leitura", en: "Own product · reading platform" },
    summary: {
      pt: "Plataforma social de leitura com plano gratuito e Plus, importação do Skoob e programa de criadores fundadores.",
      en: "Social reading platform with free and Plus plans, Skoob import and a founding creators programme.",
    },
    highlights: [
      { pt: "Produto em produção com cadastro aberto", en: "Live product with open sign-up" },
      { pt: "Importação de dados de outra plataforma (Skoob)", en: "Data import from another platform (Skoob)" },
    ],
    technologies: ["Laravel", "React", "API REST", "Hostinger"],
    liveUrl: "https://liberi.club",
  },
  {
    title: "DiAna ShowTrack",
    kind: { pt: "App mobile próprio", en: "Own mobile app" },
    summary: {
      pt: "App para acompanhar séries e filmes, publicado na Google Play e na App Store.",
      en: "App to track TV shows and movies, published on Google Play and the App Store.",
    },
    highlights: [
      { pt: "Publicação nas duas lojas (Android e iOS)", en: "Published on both stores (Android and iOS)" },
    ],
    technologies: ["React Native", "TypeScript", "API REST"],
    liveUrl: "https://diana-showtrack.vercel.app",
  },
  {
    title: "Vue International Phone",
    kind: { pt: "Open source · componente", en: "Open source · component" },
    summary: {
      pt: "Componente Vue.js de telefone internacional, com máscara e validação por país.",
      en: "Vue.js international phone input component, with per-country masks and validation.",
    },
    highlights: [{ pt: "Demo publicada com GitHub Pages", en: "Live demo on GitHub Pages" }],
    technologies: ["Vue.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/diogocoutinho/vue-international-phone",
    liveUrl: "https://diogocoutinho.github.io/vue-international-phone/",
  },
  {
    title: "EcoRise Soluções Ambientais",
    kind: { pt: "Cliente · soluções ambientais", en: "Client · environmental services" },
    summary: {
      pt: "Site e presença digital para empresa de soluções ambientais. Na proposta, o cliente navegou por três direções visuais completas, prototipadas com IA, antes de escolher.",
      en: "Website and digital presence for an environmental services company. In the proposal, the client browsed three complete visual directions, prototyped with AI, before choosing.",
    },
    highlights: [
      { pt: "Processo de proposta com protótipos navegáveis gerados com IA", en: "Proposal process with clickable AI-generated prototypes" },
      { pt: "Publicação, treinamento do cliente e Google Perfil da Empresa", en: "Launch, client training and Google Business Profile" },
    ],
    technologies: ["Claude", "Wix", "SEO local", "Google Business Profile"],
    imageUrl: "/ecorise.jpg",
    liveUrl: "https://www.ecorisesolucoesamb.com/",
    client: true,
  },
  {
    title: "Escaala Brasil",
    kind: { pt: "Cliente · construção modular", en: "Client · modular construction" },
    summary: {
      pt: "Migração do site de WordPress para Next.js com SEO, integração com Meta (Pixel e verificação de domínio) e Google (GTM e GA4), publicado na hospedagem do próprio cliente.",
      en: "Website migration from WordPress to Next.js with SEO, Meta (Pixel and domain verification) and Google (GTM and GA4) integration, deployed on the client's own hosting.",
    },
    highlights: [
      { pt: "Site estático rápido, sem dependência de plugins", en: "Fast static site, no plugin dependency" },
      { pt: "Rastreamento de campanhas configurado de ponta a ponta", en: "End-to-end campaign tracking set up" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GA4", "GTM", "Meta Pixel"],
    imageUrl: "/escaala.png",
    client: true,
    liveUrl: "https://escaalabrasil.com.br/",
  },
  {
    title: "GC Contabilidade Digital",
    kind: { pt: "Cliente · contabilidade", en: "Client · accounting firm" },
    summary: {
      pt: "Site institucional para escritório de contabilidade de Belo Horizonte, com deploy automatizado.",
      en: "Corporate website for a Belo Horizonte accounting firm, with automated deployment.",
    },
    highlights: [{ pt: "Deploy contínuo com GitHub Actions", en: "Continuous deployment with GitHub Actions" }],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    imageUrl: "/gcdigicont.png",
    client: true,
    liveUrl: "https://gcdigicont.com.br/",
  },
  {
    title: "Kenny G. Almeida",
    kind: { pt: "Cliente · site institucional", en: "Client · corporate website" },
    summary: {
      pt: "Site institucional responsivo, com hospedagem e manutenção pela EasyDev.",
      en: "Responsive corporate website, hosted and maintained by EasyDev.",
    },
    highlights: [{ pt: "Hospedagem e manutenção contínua", en: "Ongoing hosting and maintenance" }],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    imageUrl: "/kenny.png",
    client: true,
    liveUrl: "https://kennygalmeida.com.br/",
  },
];

export type Experience = {
  company: string;
  position: L;
  period: L;
  location: L;
  summary?: L;
  bullets: L[];
  stacks?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Poenatela",
    position: { pt: "Desenvolvedor Sênior", en: "Senior Developer" },
    period: { pt: "jul 2025 – atual", en: "Jul 2025 – present" },
    location: { pt: "Belo Horizonte, MG · presencial", en: "Belo Horizonte, Brazil · on-site" },
    summary: {
      pt: "Plataforma fintech de operações de crédito e recebíveis.",
      en: "Fintech platform for credit and receivables operations.",
    },
    bullets: [
      { pt: "Conduzo a migração de arquitetura da plataforma de Filament/Livewire para Laravel 12 + Inertia + React + TypeScript", en: "Leading the platform's architecture migration from Filament/Livewire to Laravel 12 + Inertia + React + TypeScript" },
      { pt: "Desenvolvimento do gateway de autenticação em Python + FastAPI que centraliza o login de todas as personas da plataforma e direciona cada usuário ao sistema certo conforme o seu perfil de acesso", en: "Building the Python + FastAPI authentication gateway that centralises sign-in for every persona on the platform and routes each user to the right system based on their access profile" },
      { pt: "Arquitetura serverless na AWS com API Gateway, Lambda, Cognito, SQS e S3, além de EC2, RDS e ElastiCache, com deploys automatizados via GitHub Actions", en: "Serverless architecture on AWS with API Gateway, Lambda, Cognito, SQS and S3, plus EC2, RDS and ElastiCache, with automated deployments via GitHub Actions" },
      { pt: "Autor da documentação técnica do produto (40+ documentos de arquitetura, domínio e casos de uso)", en: "Author of the product's technical documentation (40+ architecture, domain and use-case documents)" },
      { pt: "Levantamento de requisitos com o negócio, relatórios de KPIs e revisão de código do time", en: "Requirements gathering with the business, KPI reporting and team code review" },
    ],
    stacks: ["PHP", "Laravel 12", "Python", "FastAPI", "Inertia.js", "React", "TypeScript", "Vue.js", "PostgreSQL", "Redis", "AWS API Gateway", "AWS Lambda", "AWS Cognito", "AWS SQS", "AWS S3", "Docker", "GitHub Actions"],
  },
  {
    company: "EasyDev Soluções Digitais",
    position: { pt: "Fundador & Engenheiro de Software", en: "Founder & Software Engineer" },
    period: { pt: "set 2018 – atual (em paralelo)", en: "Sep 2018 – present (in parallel)" },
    location: { pt: "Ibirité, MG · remoto", en: "Ibirité, Brazil · remote" },
    summary: {
      pt: "Agência de software para pequenas e médias empresas: sites, sistemas sob medida, apps e IA aplicada.",
      en: "Software studio for small and mid-sized businesses: websites, custom systems, apps and applied AI.",
    },
    bullets: [
      { pt: "Criação de produtos próprios: Social Hub (MCP para redes sociais), EasyDev Hub (gestão + Stripe), Liberi, DiAna ShowTrack e o framework open source Arqel", en: "Built own products: Social Hub (MCP for social media), EasyDev Hub (management + Stripe), Liberi, DiAna ShowTrack and the open-source Arqel framework" },
      { pt: "Entrega de sites e sistemas para clientes de construção, contabilidade e serviços, com SEO, analytics e hospedagem gerenciada", en: "Delivered websites and systems for construction, accounting and services clients, with SEO, analytics and managed hosting" },
      { pt: "Desenho de ofertas de IA para PMEs: agente de atendimento no WhatsApp, agendamento inteligente e conectores MCP", en: "Designed AI offerings for SMBs: WhatsApp customer-service agent, smart scheduling and MCP connectors" },
      { pt: "Responsável de ponta a ponta: comercial, escopo, arquitetura, desenvolvimento, deploy e suporte", en: "End-to-end ownership: sales, scoping, architecture, development, deployment and support" },
    ],
    stacks: ["Laravel", "Livewire", "React", "Next.js", "React Native", "Node.js", "NestJS", "MCP", "Stripe", "Docker", "AWS", "MySQL", "PostgreSQL", "Redis"],
  },
  {
    company: "Ailu",
    position: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer" },
    period: { pt: "nov 2024 – mar 2025", en: "Nov 2024 – Mar 2025" },
    location: { pt: "Remoto", en: "Remote" },
    bullets: [
      { pt: "Desenvolvimento de funcionalidades web e mobile com Laravel, Livewire, React e React Native", en: "Built web and mobile features with Laravel, Livewire, React and React Native" },
      { pt: "Implementação de busca com Typesense e cache com Redis", en: "Implemented search with Typesense and caching with Redis" },
      { pt: "Code review e especificação de novas funcionalidades", en: "Code review and specification of new features" },
    ],
    stacks: ["Laravel", "Livewire", "React", "React Native", "MySQL", "Redis", "Typesense", "Docker"],
  },
  {
    company: "For People Softwares",
    position: { pt: "Desenvolvedor Full Stack Pleno II", en: "Full Stack Developer (Mid-level II)" },
    period: { pt: "fev 2024 – nov 2024", en: "Feb 2024 – Nov 2024" },
    location: { pt: "Belo Horizonte, MG · presencial", en: "Belo Horizonte, Brazil · on-site" },
    bullets: [
      { pt: "Desenvolvimento de sistemas web em Laravel e React e de apps em Flutter", en: "Built Laravel and React web systems and Flutter apps" },
      { pt: "Pipelines de CI/CD e ambientes com Docker", en: "CI/CD pipelines and Docker environments" },
      { pt: "Revisão de código e documentação técnica", en: "Code review and technical documentation" },
    ],
    stacks: ["Laravel", "React", "Flutter", "MySQL", "Redis", "Docker", "CI/CD"],
  },
  {
    company: "Onfly",
    position: { pt: "Líder do Time de Desenvolvimento", en: "Development Team Lead" },
    period: { pt: "dez 2021 – out 2023", en: "Dec 2021 – Oct 2023" },
    location: { pt: "Belo Horizonte, MG · híbrido", en: "Belo Horizonte, Brazil · hybrid" },
    summary: {
      pt: "Scale-up de viagens e despesas corporativas (travel & expense tech).",
      en: "Corporate travel & expense management scale-up.",
    },
    bullets: [
      { pt: "Liderança de um time de 4 a 5 desenvolvedores: cerimônias Scrum, distribuição de demandas e bugs, 1:1s e acompanhamento de carreira", en: "Led a team of 4–5 developers: Scrum ceremonies, work and bug allocation, 1:1s and career follow-up" },
      { pt: "Especificação de funcionalidades junto a PO e PM, traduzindo necessidades de negócio em entregas", en: "Specified features with PO and PM, turning business needs into deliverables" },
      { pt: "Revisão de código e padrões técnicos em plataforma Laravel/Lumen + Vue.js e app Flutter", en: "Code review and technical standards across a Laravel/Lumen + Vue.js platform and a Flutter app" },
      { pt: "Atuação hands-on no código e apoio a outros times em entregas críticas", en: "Hands-on coding and support to other teams on critical deliveries" },
    ],
    stacks: ["PHP", "Laravel", "Lumen", "Vue.js", "Flutter", "MySQL", "Redis", "Docker"],
  },
  {
    company: "Codificar Sistemas",
    position: { pt: "Estagiário → Desenvolvedor → Full Stack Engineer", en: "Intern → Developer → Full Stack Engineer" },
    period: { pt: "dez 2018 – dez 2021", en: "Dec 2018 – Dec 2021" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, Brazil" },
    summary: {
      pt: "Duas promoções em três anos.",
      en: "Promoted twice in three years.",
    },
    bullets: [
      { pt: "Desenvolvimento de plataforma de streaming (Laravel + AngularJS/Vue.js)", en: "Built a streaming platform (Laravel + AngularJS/Vue.js)" },
      { pt: "Desenvolvimento e publicação de apps nativos Android (Java) e iOS (Objective-C) e em React Native", en: "Built and published native Android (Java), iOS (Objective-C) and React Native apps" },
      { pt: "Levantamento de requisitos e especificação de funcionalidades direto com clientes", en: "Requirements gathering and feature specification directly with clients" },
    ],
    stacks: ["PHP", "Laravel", "AngularJS", "Vue.js", "Java (Android)", "Objective-C (iOS)", "React Native", "MySQL"],
  },
  {
    company: "Copabo · Korbras · Casa das Correias",
    position: { pt: "Comprador · Almoxarife · Auxiliar de Vendas", en: "Buyer · Warehouse Clerk · Sales Assistant" },
    period: { pt: "2007 – 2018", en: "2007 – 2018" },
    location: { pt: "Belo Horizonte, MG", en: "Belo Horizonte, Brazil" },
    summary: {
      pt: "Trajetória na indústria antes da tecnologia — a base da minha visão de negócio.",
      en: "Industry career before tech — the foundation of my business sense.",
    },
    bullets: [
      { pt: "Compras, negociação com fornecedores e gestão de estoque na indústria", en: "Purchasing, supplier negotiation and inventory management in industry" },
      { pt: "Vendas e atendimento a clientes B2B", en: "B2B sales and customer service" },
      { pt: "Apoio de TI interno, que motivou a transição de carreira para desenvolvimento", en: "Internal IT support, which sparked the career move into software" },
    ],
  },
];

export const skillGroups: { title: L; skills: string[] }[] = [
  {
    title: { pt: "Back-end", en: "Back-end" },
    skills: ["PHP 8", "Laravel", "Lumen", "Livewire", "Hyperf / Swoole", "Python", "FastAPI", "Node.js", "NestJS", "Express", "AdonisJS", "REST APIs", "Queues & Jobs", "Microservices"],
  },
  {
    title: { pt: "Front-end & Mobile", en: "Front-end & Mobile" },
    skills: ["TypeScript", "Vue.js", "React", "Next.js", "Inertia.js", "Tailwind CSS", "React Native", "Flutter"],
  },
  {
    title: { pt: "IA aplicada", en: "Applied AI" },
    skills: ["MCP (Model Context Protocol)", "Claude API", "OpenAI API", "AI Agents", "RAG", "Workflow automation", "AI-assisted development"],
  },
  {
    title: { pt: "Dados, Cloud & DevOps", en: "Data, Cloud & DevOps" },
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Typesense", "Docker", "CI/CD", "GitHub Actions", "AWS (API Gateway, Lambda, Cognito, SQS, S3, EC2, RDS)", "Serverless", "SSO / Centralized authentication", "Linux", "Nginx"],
  },
  {
    title: { pt: "Integrações & Produto", en: "Integrations & Product" },
    skills: ["Stripe", "Meta Graph API", "WhatsApp Cloud API", "GA4 / GTM", "Technical SEO", "Tech leadership", "Code review", "Scrum/Kanban", "Technical documentation"],
  },
];

export const educations: { institution: string; degree: L; period: string }[] = [
  {
    institution: "Faculdade de Ciências Sociais Aplicadas de Belo Horizonte (FACISA BH)",
    degree: { pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas", en: "Associate Degree in Systems Analysis and Development" },
    period: "2017 – 2019",
  },
  {
    institution: "SENAC MG",
    degree: { pt: "Infraestrutura de Redes Cabeadas e Wireless", en: "Wired and Wireless Network Infrastructure" },
    period: "2013",
  },
  {
    institution: "SENAC MG",
    degree: { pt: "Técnicas de Vendas", en: "Sales Techniques" },
    period: "2011 – 2013",
  },
  {
    institution: "S.O.S Computadores",
    degree: { pt: "Web Design e Design Gráfico", en: "Web Design and Graphic Design" },
    period: "2010 – 2013",
  },
];

export const languages: { name: L; level: L }[] = [
  { name: { pt: "Português", en: "Portuguese" }, level: { pt: "Nativo", en: "Native" } },
  { name: { pt: "Inglês", en: "English" }, level: { pt: "Intermediário (leitura técnica avançada)", en: "Intermediate (advanced technical reading)" } },
  { name: { pt: "Espanhol", en: "Spanish" }, level: { pt: "Básico", en: "Basic" } },
];

export const cvSummary: L = {
  pt: "Engenheiro de Software Full Stack Sênior com 7+ anos de experiência em PHP/Laravel, Python/FastAPI, Vue.js, React/Next.js, Node.js e AWS, incluindo 2 anos liderando um time de 4 a 5 desenvolvedores na Onfly. Fundador da EasyDev, onde construí produtos SaaS, sistemas sob medida e integrações de IA (agentes, automações e servidores MCP). Perfil hands-on, com visão de negócio construída em 10+ anos de compras e vendas na indústria.",
  en: "Senior Full Stack Software Engineer with 7+ years of experience in PHP/Laravel, Python/FastAPI, Vue.js, React/Next.js, Node.js and AWS, including 2 years leading a team of 4–5 developers at Onfly. Founder of EasyDev, where I built SaaS products, custom systems and AI integrations (agents, automations and MCP servers). Hands-on profile with business sense built over 10+ years in purchasing and sales in industry.",
};
