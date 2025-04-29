import jsPDF from "jspdf";

const getSectionContent = (
  sectionId: string
): { title: string; content: string[] } => {
  const section = document.getElementById(sectionId);
  if (!section) return { title: "", content: [] };

  const title = section.querySelector("h2")?.textContent?.trim() || "";

  // Tratamento especial para a seção de experiência
  if (sectionId === "experience") {
    const experienceItems = section.querySelectorAll(".bg-gray-800");
    const content: string[] = [];

    experienceItems.forEach((item) => {
      const position = item.querySelector("h3")?.textContent?.trim() || "";
      const company =
        item.querySelector("p.text-gray-400")?.textContent?.trim() || "";
      const details =
        item
          .querySelector(".flex.flex-wrap.gap-2.text-sm.text-gray-400")
          ?.textContent?.trim() || "";

      // Extrai as stacks corretamente usando o ID específico
      const stacks = Array.from(item.querySelectorAll("#stacks span"))
        .map((span) => span.textContent?.trim())
        .filter(Boolean);

      // Extrai as responsabilidades
      const responsibilities = Array.from(
        item.querySelectorAll("ul.list-disc li")
      )
        .map((li) => li.textContent?.trim())
        .filter(Boolean);

      // Adiciona informações da experiência formatadas
      content.push(`Empresa: ${company}`);
      content.push(`Cargo: ${position}`);
      content.push(`Detalhes: ${details}`);
      content.push(""); // Espaço em branco

      if (stacks.length > 0) {
        content.push("Stacks:");
        stacks.forEach((stack) => content.push(`• ${stack}`));
        content.push(""); // Espaço em branco
      }

      if (responsibilities.length > 0) {
        content.push("Responsabilidades:");
        responsibilities.forEach((resp) => content.push(`• ${resp}`));
      }

      content.push(""); // Espaço em branco entre experiências
    });

    return { title, content };
  }

  // Tratamento especial para a seção de educação
  if (sectionId === "education") {
    const educationItems = section.querySelectorAll("div.flex-grow");
    const content: string[] = [];

    educationItems.forEach((item) => {
      const institution =
        item.querySelector("#institution")?.textContent?.trim() || "";
      const degree = item.querySelector("#degree")?.textContent?.trim() || "";
      const duration =
        item.querySelector("#duration")?.textContent?.trim() || "";
      const location =
        item.querySelector("#location")?.textContent?.trim() || "";
      const description =
        item.querySelector("#description")?.textContent?.trim() || "";

      // Adiciona informações da educação formatadas
      content.push(`Instituição: ${institution}`);
      content.push(`Curso: ${degree}`);
      content.push(`Período: ${duration}`);
      content.push(`Local: ${location}`);
      if (description) {
        content.push(""); // Espaço em branco
        content.push("Descrição:");
        content.push(description);
      }
      content.push(""); // Espaço em branco entre formações
    });

    return { title, content };
  }

  // Tratamento especial para a seção de habilidades
  if (sectionId === "skills") {
    const skillCategories = section.querySelectorAll(".bg-gray-800");
    const content: string[] = [];

    skillCategories.forEach((category) => {
      const title =
        category.querySelector("#category-title")?.textContent?.trim() || "";
      const skills = Array.from(category.querySelectorAll("#skills-list span"))
        .map((span) => span.textContent?.trim())
        .filter(Boolean);

      // Adiciona informações das habilidades formatadas
      content.push(title);
      skills.forEach((skill) => content.push(`• ${skill}`));
      content.push(""); // Espaço em branco entre categorias
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
    ".flex.items-start.space-x-4"
  );
  const contactInfo: { [key: string]: string } = {};

  contactItems.forEach((item) => {
    const label =
      item.querySelector(".text-sm.font-medium")?.textContent?.trim() || "";
    const value =
      item.querySelector("a, p.text-gray-900")?.textContent?.trim() || "";

    if (label.toLowerCase().includes("email")) {
      contactInfo.email = value;
    } else if (label.toLowerCase().includes("telefone")) {
      contactInfo.phone = value;
    } else if (label.toLowerCase().includes("localização")) {
      contactInfo.location = value;
    }
  });

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
