import Link from "next/link";

type Miga = { href: string; etiqueta: string };

// Encabezado de página interior: fondo azul profundo con retícula.
export default function Portada({
  etiqueta,
  titulo,
  bajada,
  migas,
  children,
}: {
  etiqueta: string;
  titulo: React.ReactNode;
  bajada?: string;
  migas: Miga[];
  children?: React.ReactNode;
}) {
  return (
    <section className="oscuro relative overflow-hidden">
      <div className="reticula absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-cobalto/40 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-10 md:pb-24">
        <nav aria-label="Migas de pan">
          <ol className="etiqueta flex flex-wrap gap-2 text-hielo">
            {migas.map((m, i) => (
              <li key={m.href} className="flex gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {i === migas.length - 1 ? (
                  <span aria-current="page" className="text-white">{m.etiqueta}</span>
                ) : (
                  <Link href={m.href} className="hover:text-white">{m.etiqueta}</Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className="etiqueta mt-12 text-turquesa">{etiqueta}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance md:text-6xl">{titulo}</h1>
        {bajada && <p className="mt-6 max-w-2xl text-lg text-hielo text-pretty">{bajada}</p>}
        {children}
      </div>
    </section>
  );
}
