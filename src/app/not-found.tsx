import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página não encontrada · Page not found</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        A página que você procura não existe ou foi movida.
      </p>
      <div className="flex gap-3">
        <Link href="/pt-BR" className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
          Voltar ao início
        </Link>
        <Link href="/en-US" className="px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 font-medium">
          English
        </Link>
      </div>
    </div>
  );
}
