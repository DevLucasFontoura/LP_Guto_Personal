import Link from "next/link";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 px-6 py-4">
        <nav className="flex items-center gap-4">
          <Link href="/" className="text-sm text-neutral-600 hover:text-neutral-900">
            Voltar ao início
          </Link>
          <span className="text-neutral-400">|</span>
          <span className="text-sm font-medium text-neutral-900">Área privada</span>
        </nav>
      </header>
      {children}
    </div>
  );
}
