export const smoothScroll = (targetId: string) => {
  // Verifica se estamos no navegador
  if (typeof window !== "undefined") {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Altura do navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
};
