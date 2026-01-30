import Link from "next/link";

export default function BemVindo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <main className="flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
          Bem-vindo
        </h1>
        <p className="max-w-md text-lg text-neutral-600">
          Esta é a área pública. Comece por aqui para explorar o sistema.
        </p>
        <Link
          href="/dashboard"
          className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Acessar área privada
        </Link>
      </main>
    </div>
  );
}
