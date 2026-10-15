import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-ink px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Página não encontrada · Page not found</h2>
      <p className="text-muted mb-8 max-w-md">
        A página que você procura não existe ou foi movida.
      </p>
      <div className="flex gap-3">
        <Link href="/pt-BR" className="px-6 py-3 rounded-md bg-gold text-on-gold font-semibold">
          Voltar ao início
        </Link>
        <Link href="/en-US" className="px-6 py-3 rounded-md border border-line font-medium">
          English
        </Link>
      </div>
    </div>
  );
}
