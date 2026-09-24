import Link from "next/link";
import Icono from "./Icono";
import { whatsappUrl } from "@/data/md";

export default function BandaCta({
  titulo = "¿Listo para poner tu negocio en modo digital?",
  texto = "Empieza con un diagnóstico: revisamos dónde estás, qué te está costando clientes y qué conviene hacer primero.",
}: {
  titulo?: string;
  texto?: string;
}) {
  return (
    <section className="px-5 py-20">
      <div className="oscuro relative mx-auto max-w-7xl overflow-hidden rounded-[2rem]">
        <div className="reticula absolute inset-0" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-turquesa/25 blur-3xl" aria-hidden="true" />
        <div className="relative grid items-center gap-8 px-8 py-14 md:grid-cols-[1.5fr_1fr] md:px-14">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight text-balance md:text-4xl">{titulo}</h2>
            <p className="mt-4 max-w-xl text-hielo">{texto}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-turquesa px-6 py-3.5 font-semibold text-abismo transition hover:bg-white">
              Solicitar diagnóstico
              <Icono nombre="flecha" className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl("Hola MD, quiero información sobre sus servicios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold transition hover:border-white"
            >
              <Icono nombre="whatsapp" className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
