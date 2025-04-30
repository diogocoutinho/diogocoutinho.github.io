import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "./providers";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";

const inter = Inter({ subsets: ["latin"] });

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
  let { locale } = await params;

  if (!locale) {
    locale = "pt-BR";
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <I18nProviderClient locale={locale}>
          <Providers>{children}</Providers>
        </I18nProviderClient>
      </body>
    </html>
  );
}
