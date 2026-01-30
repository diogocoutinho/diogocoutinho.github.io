import Link from "next/link";
import * as React from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Diogo Coutinho - Desenvolvedor Full Stack",
  description:
    "Portfólio e currículo de Diogo Coutinho, desenvolvedor Full Stack",
};

export function generateStaticParams() {
  return getStaticParams();
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
