import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            DC
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="hover:text-blue-400 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#experience"
              className="hover:text-blue-400 transition-colors"
            >
              Experiência
            </Link>
            <Link
              href="#education"
              className="hover:text-blue-400 transition-colors"
            >
              Educação
            </Link>
            <Link
              href="#skills"
              className="hover:text-blue-400 transition-colors"
            >
              Habilidades
            </Link>
            <Link
              href="#projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projetos
            </Link>
            <Link
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
