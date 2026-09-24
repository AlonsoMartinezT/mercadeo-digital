"use client";

import Link from "next/link";
import { useState } from "react";
import Icono from "./Icono";
import { segmentos, servicioPorSlug } from "@/data/md";

// "¿Qué tipo de negocio tienes?" → dolor principal y servicio de entrada recomendado.
export default function SelectorSegmento() {
  const [id, setId] = useState(segmentos[1].id);
  const s = segmentos.find((x) => x.id === id)!;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
      <div role="radiogroup" aria-label="Tipo de negocio" className="grid gap-2">
        {segmentos.map((x) => (
          <button
            key={x.id}
            type="button"
            role="radio"
            aria-checked={x.id === id}
            onClick={() => setId(x.id)}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-borde bg-white px-5 py-4 text-left transition hover:border-cobalto aria-checked:border-marino aria-checked:bg-marino aria-checked:text-white"
          >
            <span>
              <span className="block font-semibold">{x.nombre}</span>
              <span className="block text-sm text-pizarra group-aria-checked:text-hielo">{x.perfil}</span>
            </span>
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-borde group-aria-checked:border-turquesa group-aria-checked:bg-turquesa">
              <Icono nombre="check" className="h-3.5 w-3.5 text-abismo opacity-0 group-aria-checked:opacity-100" />
            </span>
          </button>
        ))}
      </div>

      <div className="oscuro relative overflow-hidden rounded-[1.75rem]" aria-live="polite">
        <div className="reticula absolute inset-0" aria-hidden="true" />
        <div className="relative flex h-full flex-col p-8 md:p-10">
          <p className="etiqueta text-hielo">Lo que más te duele</p>
          <p className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">“{s.dolor}”</p>
          <div className="my-8 h-px bg-white/10" />
          <p className="etiqueta text-turquesa">Por dónde empezar</p>
          <p className="mt-3 text-2xl font-semibold">{s.entrada}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {s.servicios.map((slug) => {
              const sv = servicioPorSlug(slug)!;
              return (
                <Link key={slug} href={`/servicios/${slug}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-turquesa hover:text-abismo">
                  <Icono nombre={slug} className="h-4 w-4" />
                  {sv.nombre}
                </Link>
              );
            })}
          </div>
          <Link href={`/contacto?negocio=${s.id}`} className="mt-auto inline-flex items-center gap-2 self-start pt-10 font-semibold text-turquesa hover:text-white">
            Pedir diagnóstico para mi negocio
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
