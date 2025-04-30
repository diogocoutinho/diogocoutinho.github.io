"use client";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-900 dark:text-white text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Diogo Coutinho. Todos os direitos
            reservados.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/diogocoutinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/diogocoutinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
