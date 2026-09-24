import Link from "next/link";
import Pagina from "@/components/Pagina";

export default function NoEncontrada() {
  return (
    <Pagina>
      <section className="oscuro reticula">
        <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-start justify-center px-5 py-24">
          <p className="etiqueta text-turquesa">Error 404</p>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">Esta página no está en modo digital.</h1>
          <p className="mt-5 max-w-lg text-hielo">La dirección no existe o cambió de lugar.</p>
          <Link href="/" className="mt-8 rounded-full bg-turquesa px-6 py-3.5 font-semibold text-abismo hover:bg-white">
            Volver al inicio
          </Link>
        </div>
      </section>
    </Pagina>
  );
}
