import jsPDF from "jspdf";
import {
  aiExperience,
  contact,
  cvSummary,
  educations,
  experiences,
  hero,
  languages,
  projects,
  skillGroups,
  tr,
} from "@/data/profile";

// As fontes padrão do jsPDF só cobrem WinAnsi (cp1252): setas e outros símbolos viram lixo e quebram a largura da linha.
const WIN_ANSI_EXTRAS = "ŒœŠšŸŽžƒˆ˜–—‘’‚“”„†‡•…‰‹›€™";
const clean = (value: string) =>
  value
    .replace(/\s*→\s*/g, " / ")
    .split("")
    .filter((ch) => ch.charCodeAt(0) <= 0xff || WIN_ANSI_EXTRAS.includes(ch))
    .join("");

// Currículo em coluna única, sem tabelas nem ícones, para leitura por ATS (Gupy, Greenhouse, Lever...).
export const generatePDF = async (locale: string = "pt-BR") => {
  const en = locale === "en-US";
  const L = (pt: string, enText: string) => (en ? enText : pt);

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const width = pageWidth - margin * 2;
  let y = margin;

  const ensure = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  };

  const text = (value: string, size = 10, style: "normal" | "bold" | "italic" = "normal", color = 40, indent = 0) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
    doc.setTextColor(color, color, color);
    const lines = doc.splitTextToSize(clean(value), width - indent);
    const lineHeight = size * 0.45;
    ensure(lines.length * lineHeight);
    doc.text(lines, margin + indent, y);
    y += lines.length * lineHeight + 1;
  };

  const bullet = (value: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(40, 40, 40);
    const lines = doc.splitTextToSize(clean(value), width - 5);
    ensure(lines.length * 4.5);
    doc.text("•", margin + 1, y);
    doc.text(lines, margin + 5, y);
    y += lines.length * 4.5 + 0.8;
  };

  const heading = (title: string) => {
    ensure(14);
    y += 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(20, 60, 140);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.8;
    doc.setDrawColor(20, 60, 140);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 5;
  };

  // Cabeçalho
  text(contact.name, 20, "bold", 10);
  text(tr(hero.role, locale), 12, "bold", 60);
  text(
    [tr(contact.location, locale), contact.phone, contact.email].join("  |  "),
    9.5,
    "normal",
    60
  );
  text(
    [
      contact.linkedin.replace("https://www.", ""),
      contact.github.replace("https://", ""),
      contact.site.replace("https://", ""),
    ].join("  |  "),
    9.5,
    "normal",
    60
  );

  heading(L("Resumo profissional", "Professional summary"));
  text(tr(cvSummary, locale), 10);

  heading(L("Competências técnicas", "Technical skills"));
  skillGroups.forEach((group) => {
    text(`${tr(group.title, locale)}: ${group.skills.join(", ")}`, 10);
  });

  heading(L("Experiência com IA", "AI experience"));
  aiExperience.forEach((item) => {
    ensure(12);
    text(tr(item.title, locale), 10.5, "bold", 15);
    text(tr(item.description, locale), 9.5, "normal", 50);
    text(`${L("Ferramentas", "Tools")}: ${item.tools.join(", ")}`, 9, "normal", 90);
    y += 1.5;
  });

  heading(L("Experiência profissional", "Professional experience"));
  experiences.forEach((exp) => {
    ensure(18);
    text(`${tr(exp.position, locale)} — ${exp.company}`, 11, "bold", 15);
    text(`${tr(exp.period, locale)}  |  ${tr(exp.location, locale)}`, 9.5, "normal", 90);
    if (exp.summary) text(tr(exp.summary, locale), 9.5, "italic", 70);
    exp.bullets.forEach((b) => bullet(tr(b, locale)));
    if (exp.stacks?.length) text(`${L("Tecnologias", "Technologies")}: ${exp.stacks.join(", ")}`, 9, "normal", 90);
    y += 2.5;
  });

  heading(L("Projetos e produtos", "Projects and products"));
  const link = (url?: string) => (url ? `  (${url.replace(/^https?:\/\//, "").replace(/\/$/, "")})` : "");
  projects
    .filter((p) => !p.client)
    .forEach((p) => {
      ensure(12);
      text(`${p.title} — ${tr(p.kind, locale)}${link(p.liveUrl || p.githubUrl)}`, 10, "bold", 15);
      text(tr(p.summary, locale), 9.5, "normal", 50);
      text(`${L("Tecnologias", "Technologies")}: ${p.technologies.join(", ")}`, 9, "normal", 90);
      y += 1.5;
    });
  // Clientes em uma linha cada: o detalhe fica no site.
  text(L("Clientes", "Clients"), 10, "bold", 15);
  projects
    .filter((p) => p.client)
    .forEach((p) => bullet(`${p.title} — ${tr(p.kind, locale).replace(/^(Cliente|Client) · /, "")}${link(p.liveUrl)}`));
  y += 1.5;

  heading(L("Formação", "Education"));
  educations.forEach((e) => {
    text(`${tr(e.degree, locale)} — ${e.institution} (${e.period})`, 10);
  });

  heading(L("Idiomas", "Languages"));
  text(languages.map((l) => `${tr(l.name, locale)}: ${tr(l.level, locale)}`).join("  |  "), 10);

  doc.save(en ? "resume-diogo-coutinho-en.pdf" : "curriculo-diogo-coutinho.pdf");
};
