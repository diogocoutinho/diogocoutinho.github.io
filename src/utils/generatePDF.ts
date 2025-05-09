import jsPDF from "jspdf";
import {
  skillCategories,
  experiences,
  educations,
  projects,
} from "@/utils/constants";

const getSectionContent = (
  sectionId: string
): { title: string; content: string[] } => {
  const section = document.getElementById(sectionId);
  if (!section) return { title: "", content: [] };

  const title = section.querySelector("h2")?.textContent?.trim() || "";

  // Tratamento especial para a seção de habilidades
  if (sectionId === "skills") {
    const content: string[] = [];

    skillCategories.forEach((category) => {
      if (category.skills.length > 0) {
        // Adiciona o título da categoria
        content.push(category.title);
        // Adiciona cada habilidade com bullet
        // category.skills.forEach((skill) => content.push(`• ${skill}`));
        content.push(category.skills.join(", "));
        // Adiciona espaço em branco entre categorias
        content.push("");
      }
    });

    return { title, content };
  }

  // Tratamento especial para a seção de experiência
  if (sectionId === "experience") {
    const content: string[] = [];

    experiences.forEach((experience) => {
      // Adiciona informações da experiência formatadas
      content.push(`Empresa: ${experience.company}`);
      content.push(`Cargo: ${experience.position}`);
      content.push(`Período: ${experience.duration}`);
      content.push(`Local: ${experience.location}`);
      content.push(`Modo de Trabalho: ${experience.workMode}`);
      content.push(""); // Espaço em branco

      if (experience.stacks && experience.stacks.length > 0) {
        content.push("Tecnologias utilizadas:");
        // experience.stacks.forEach((stack) => content.push(`• ${stack}`));
        content.push(experience.stacks.join(", "));
        content.push(""); // Espaço em branco
      }

      if (experience.responsibilities.length > 0) {
        content.push("Principais responsabilidades:");
        experience.responsibilities.forEach((resp) =>
          content.push(`• ${resp}`)
        );
      }

      content.push(""); // Espaço em branco entre experiências
    });

    return { title, content };
  }

  // Tratamento especial para a seção de educação
  if (sectionId === "education") {
    const content: string[] = [];

    educations.forEach((education) => {
      // Adiciona informações da educação formatadas
      content.push(`Instituição: ${education.institution}`);
      content.push(`Curso: ${education.degree}`);
      content.push(`Período: ${education.duration}`);
      content.push(`Local: ${education.location}`);
      if (education.description) {
        content.push(""); // Espaço em branco
        content.push("Descrição:");
        content.push(education.description);
      }
      content.push(""); // Espaço em branco entre formações
    });

    return { title, content };
  }

  // Tratamento especial para a seção de projetos
  if (sectionId === "projects") {
    const content: string[] = [];

    projects.forEach((project) => {
      content.push(`Título: ${project.title}`);
      content.push(`Descrição: ${project.description}`);
      if (project.technologies.length > 0) {
        content.push("Tecnologias utilizadas:");
        // project.technologies.forEach((tech) => content.push(`• ${tech}`));
        content.push(project.technologies.join(", "));
      }
      content.push(""); // Espaço em branco entre projetos
    });

    return { title, content };
  }

  // Para outras seções, mantém o comportamento original
  const content = Array.from(section.querySelectorAll("p, li, h3, h4"))
    .map((el) => {
      const text = el.textContent?.trim() || "";
      if (
        el.tagName.toLowerCase() === "h3" ||
        el.tagName.toLowerCase() === "h4"
      ) {
        return `• ${text}`;
      }
      return text;
    })
    .filter((text) => text.length > 0);

  return { title, content };
};

const getContactInfo = (): {
  email: string;
  phone: string;
  location: string;
} => {
  const contactSection = document.getElementById("contact");
  if (!contactSection) return { email: "", phone: "", location: "" };

  // Procura pelos elementos de contato dentro da seção
  const contactItems = contactSection.querySelectorAll(
    ".flex.items-center.space-x-4"
  );
  const contactInfo: { [key: string]: string } = {};

  contactItems.forEach((item) => {
    // Procura pelo texto do label
    const label =
      item.querySelector(".text-sm.font-medium")?.textContent?.trim() || "";

    // Procura pelo valor, que pode estar em um link ou parágrafo
    const valueElement = item.querySelector("a.text-lg, p.text-lg");
    const value = valueElement?.textContent?.trim() || "";

    // Identifica o tipo de informação baseado no label
    if (label.toLowerCase().includes("email")) {
      contactInfo.email = value;
    } else if (
      label.toLowerCase().includes("telefone") ||
      label.toLowerCase().includes("phone")
    ) {
      contactInfo.phone = value;
    } else if (
      label.toLowerCase().includes("localização") ||
      label.toLowerCase().includes("location")
    ) {
      contactInfo.location = value;
    }
  });

  // Log para debug
  console.log("Contact info extracted:", contactInfo);

  return {
    email: contactInfo.email || "",
    phone: contactInfo.phone || "",
    location: contactInfo.location || "",
  };
};

const addSectionTitle = (
  doc: jsPDF,
  title: string,
  y: number,
  margin: number
): number => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(title, margin, y);
  return y + 8;
};

const addContent = (
  doc: jsPDF,
  content: string[],
  y: number,
  margin: number,
  pageWidth: number,
  pageHeight: number,
  sectionId?: string
): number => {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(51, 51, 51);

  const lineHeight = 5;
  const minSpaceForNextSection = 20;

  for (const text of content) {
    // Tratamento especial para a seção de experiência
    if (sectionId === "experience") {
      if (text.startsWith("Empresa:")) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
      } else if (text.startsWith("Cargo:") || text.startsWith("Período:")) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
      } else if (text.startsWith("Responsabilidades:")) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        y += 3; // Espaço extra antes das responsabilidades
      } else if (text.startsWith("•")) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(51, 51, 51);
      } else if (text === "") {
        y += 5; // Espaço extra entre experiências
        continue;
      }
    }

    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin);
    const neededHeight = lines.length * lineHeight;

    if (y + neededHeight > pageHeight - margin - minSpaceForNextSection) {
      doc.addPage();
      y = margin;
    }

    doc.text(lines, margin, y);
    y += neededHeight + 3;
  }

  return y + 5;
};

const addDivider = (
  doc: jsPDF,
  y: number,
  margin: number,
  pageWidth: number,
  pageHeight: number
): number => {
  if (y + 15 > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }

  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  return y + 8;
};

const checkPageBreak = (
  doc: jsPDF,
  y: number,
  margin: number,
  pageHeight: number,
  neededSpace: number
): number => {
  if (y + neededSpace > pageHeight - margin) {
    doc.addPage();
    return margin;
  }
  return y;
};

export const generatePDF = async () => {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 25;
    let y = margin;

    // Configurações do documento
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    const heroTitle =
      document.querySelector("#hero h1")?.textContent?.trim() || "";

    y = checkPageBreak(doc, y, margin, pageHeight, 20);
    doc.text(heroTitle, pageWidth / 2, y, { align: "center" });
    y += 12;

    // Informações de contato
    const contactInfo = getContactInfo();
    const contactLines = [
      contactInfo.email,
      contactInfo.phone,
      contactInfo.location,
    ].filter(Boolean);

    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 51, 51);

    y = checkPageBreak(doc, y, margin, pageHeight, contactLines.length * 5 + 5);

    // Adiciona cada linha de contato separadamente
    contactLines.forEach((line, index) => {
      doc.text(line, pageWidth / 2, y + index * 5, { align: "center" });
    });
    y += contactLines.length * 5 + 8;

    // Seções do currículo
    const sections = ["about", "experience", "education", "skills", "projects"];

    for (let i = 0; i < sections.length; i++) {
      const sectionId = sections[i];
      const { title, content } = getSectionContent(sectionId);
      if (!title && content.length === 0) continue;

      if (i > 0) {
        y = addDivider(doc, y, margin, pageWidth, pageHeight);
      }

      y = checkPageBreak(doc, y, margin, pageHeight, 20);
      y = addSectionTitle(doc, title, y, margin);

      y = addContent(doc, content, y, margin, pageWidth, pageHeight, sectionId);
    }

    // Adiciona data de geração
    const today = new Date();
    const formattedDate = today.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    y = checkPageBreak(doc, y, margin, pageHeight, 15);
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Gerado em ${formattedDate}`,
      pageWidth - margin,
      pageHeight - 10,
      { align: "right" }
    );

    doc.save("curriculo-diogo-coutinho.pdf");
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
  }
};
