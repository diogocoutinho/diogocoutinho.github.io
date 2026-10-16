// Ajustes no export estático que o App Router não faz sozinho:
// - <html lang> correto em cada página de idioma (o layout raiz não conhece o locale);
// - index.html com redirecionamento sem JavaScript, canonical e hreflang.
import { readFileSync, writeFileSync } from "node:fs";

const SITE = "https://diogocoutinho.github.io";
const out = (file) => new URL(`../out/${file}`, import.meta.url);

for (const locale of ["pt-BR", "en-US"]) {
  const file = out(`${locale}.html`);
  const html = readFileSync(file, "utf8").replace(/<html lang="[^"]*"/, `<html lang="${locale}"`);
  writeFileSync(file, html);
}

const index = out("index.html");
const head = [
  `<meta http-equiv="refresh" content="0; url=/pt-BR">`,
  `<link rel="canonical" href="${SITE}/pt-BR">`,
  `<link rel="alternate" hreflang="pt-BR" href="${SITE}/pt-BR">`,
  `<link rel="alternate" hreflang="en-US" href="${SITE}/en-US">`,
  `<link rel="alternate" hreflang="x-default" href="${SITE}/pt-BR">`,
].join("");
writeFileSync(index, readFileSync(index, "utf8").replace("</head>", `${head}</head>`));

console.log("postbuild: lang e index.html ajustados");
