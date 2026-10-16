"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import ptBR from "./pt-BR";
import enUS from "./en-US";

// Dicionários carregados de forma síncrona para que o export estático já traga o conteúdo no HTML.
const dictionaries = { "pt-BR": ptBR, "en-US": enUS } as const;

export type AppLocale = keyof typeof dictionaries;
type Dictionary = (typeof dictionaries)["pt-BR"];

const LocaleContext = createContext<AppLocale>("pt-BR");

export function I18nProviderClient({ locale, children }: { locale: string; children: ReactNode }) {
  const value: AppLocale = locale === "en-US" ? "en-US" : "pt-BR";
  // Mantém o <html lang> certo ao trocar de idioma pela navegação do próprio site.
  useEffect(() => {
    document.documentElement.lang = value;
  }, [value]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export const useCurrentLocale = () => useContext(LocaleContext);

export function useScopedI18n<S extends keyof Dictionary>(scope: S) {
  const locale = useCurrentLocale();
  return (key: keyof Dictionary[S]) => dictionaries[locale][scope][key as never] as string;
}

export function useChangeLocale() {
  const router = useRouter();
  return useCallback((locale: AppLocale) => router.push(`/${locale}`), [router]);
}
