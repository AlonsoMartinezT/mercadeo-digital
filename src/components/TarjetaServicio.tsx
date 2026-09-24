import Link from "next/link";
import Icono from "./Icono";
import type { Servicio } from "@/data/md";

export default function TarjetaServicio({ s }: { s: Servicio }) {
  return (
    <Link
      href={`/servicios/${s.slug}`}
      className="aparece group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-borde bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cobalto hover:shadow-xl hover:shadow-marino/10"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-niebla text-cobalto transition-colors group-hover:bg-marino group-hover:text-turquesa">
          <Icono nombre={s.slug} />
        </span>
        <span className="font-mono text-sm text-pizarra">{s.codigo}</span>
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-marino">{s.nombre}</h3>
      <p className="mt-2 text-pizarra">{s.resumen}</p>
      <p className="mt-6 border-t border-borde pt-4 text-sm">
        <span className="etiqueta block !text-[0.62rem] text-pizarra">Entregable</span>
        <span className="mt-1 block font-medium">{s.entregable}</span>
      </p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cobalto">
        Ver servicio
        <Icono nombre="flecha" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
