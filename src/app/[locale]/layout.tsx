
import * as React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { I18nProviderClient } from "@/locales/client";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

const SITE = "https://diogocoutinho.github.io";

const seo = {
  "pt-BR": {
    title: "Diogo Coutinho · Engenheiro de Software Full Stack Sênior & Tech Lead | Laravel, Vue, React, IA",
    description:
      "Engenheiro Full Stack Sênior com 7+ anos em PHP/Laravel, Python/FastAPI, Vue.js, React/Next.js e Node.js, ex-líder de time na Onfly e fundador da EasyDev. Sistemas, SaaS e IA aplicada (agentes, automações e MCP).",
  },
  "en-US": {
    title: "Diogo Coutinho · Senior Full Stack Software Engineer & Tech Lead | Laravel, Vue, React, AI",
    description:
      "Senior Full Stack Engineer with 7+ years in PHP/Laravel, Python/FastAPI, Vue.js, React/Next.js and Node.js, former team lead at Onfly and founder of EasyDev. Systems, SaaS and applied AI (agents, automations and MCP).",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = locale === "en-US" ? seo["en-US"] : seo["pt-BR"];
  return {
    metadataBase: new URL(SITE),
    title: content.title,
    description: content.description,
    keywords: [
      "Desenvolvedor Full Stack Sênior",
      "Senior Full Stack Engineer",
      "Laravel",
      "PHP",
      "Python",
      "FastAPI",
      "AWS",
      "Vue.js",
      "React",
      "Next.js",
      "Node.js",
      "Tech Lead",
      "MCP",
      "AI integration",
      "Belo Horizonte",
    ],
    alternates: {
      canonical: `/${locale}`,
      languages: { "pt-BR": "/pt-BR", "en-US": "/en-US" },
    },
    openGraph: {
      type: "profile",
      url: `${SITE}/${locale}`,
      title: content.title,
      description: content.description,
      locale: locale.replace("-", "_"),
      images: [{ url: "/profile.jpeg", width: 800, height: 800, alt: "Diogo Coutinho" }],
    },
    twitter: { card: "summary", title: content.title, description: content.description, images: ["/profile.jpeg"] },
  };
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diogo Coutinho",
  jobTitle: "Senior Full Stack Software Engineer",
  url: SITE,
  image: `${SITE}/profile.jpeg`,
  email: "mailto:diogo.coutinho.ads@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Belo Horizonte", addressRegion: "MG", addressCountry: "BR" },
  worksFor: { "@type": "Organization", name: "EasyDev Soluções Digitais", url: "https://easydevsolucoes.com.br" },
  alumniOf: "Faculdade de Ciências Sociais Aplicadas de Belo Horizonte",
  knowsAbout: ["Laravel", "PHP", "Python", "FastAPI", "AWS Lambda", "Vue.js", "React", "Next.js", "Node.js", "TypeScript", "Docker", "AWS", "Model Context Protocol", "AI agents"],
  sameAs: ["https://www.linkedin.com/in/diogoccoutinho", "https://github.com/diogocoutinho", "https://easydevsolucoes.com.br"],
};

export function generateStaticParams() {
  return [{ locale: "pt-BR" }, { locale: "en-US" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className={`scroll-smooth ${outfit.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen relative`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <I18nProviderClient locale={locale}>
        <Providers>
          <Navbar />
          <Background />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </Providers>
      </I18nProviderClient>
    </div>
  );
}
