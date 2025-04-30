import { createI18nServer } from "next-international/server";

export const { getStaticParams } = createI18nServer({
  "en-US": () => import("@/locales/en-US"),
  "pt-BR": () => import("@/locales/pt-BR"),
});
