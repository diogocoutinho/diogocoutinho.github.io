import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer({
  "en-US": () => import("../messages/en-US.json"),
  "pt-BR": () => import("../messages/pt-BR.json"),
});
