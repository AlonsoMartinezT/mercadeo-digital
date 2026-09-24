import type { Metadata } from "next";
import BandaCta from "@/components/BandaCta";
import Ciclo360 from "@/components/Ciclo360";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import { fases } from "@/data/md";

export const metadata: Metadata = {
  title: "Método MD 360",
  description: "Diagnóstico, idea y diseño, montaje, ejecución y medición: cinco fases que cierran con un entregable aprobado por ti.",
};

export default function Metodo() {
  return (
    <Pagina>
      <Portada
        etiqueta="Cómo trabajamos"
        titulo={<>Método MD <span className="text-turquesa">360</span></>}
        bajada="Cinco fases. Cada una cierra con un entregable que apruebas antes de avanzar. En los planes mensuales el ciclo se repite: medimos, ajustamos y volvemos a optimizar."
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/metodo", etiqueta: "Método 360" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <Ciclo360 oscuro={false} />
      </section>

      <section className="border-t border-borde bg-niebla/60">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-display text-3xl font-bold text-marino md:text-4xl">Fase por fase</h2>
          {/* Línea de tiempo: vertical en celular, horizontal desde lg */}
          <ol className="relative mt-10 grid gap-0 lg:grid-cols-5 lg:gap-6">
            <span className="absolute bottom-6 left-6 top-6 w-px bg-cobalto/25 lg:bottom-auto lg:left-6 lg:right-6 lg:top-6 lg:h-px lg:w-auto" aria-hidden="true" />
            {fases.map((f) => (
              <li key={f.n} className="aparece relative flex gap-5 pb-8 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-marino font-display text-lg font-bold text-turquesa ring-8 ring-niebla">
                  {f.n}
                </span>
                <div className="pt-1 lg:mt-6 lg:pt-0">
                  <h3 className="text-lg font-semibold text-marino">{f.nombre}</h3>
                  <p className="etiqueta mt-1 !text-[0.62rem] text-cobalto">{f.detalle}</p>
                  <p className="mt-3 text-sm text-pizarra">{f.texto}</p>
                  <p className="mt-4 inline-flex rounded-full bg-white px-3 py-1.5 text-xs font-medium text-marino ring-1 ring-borde">{f.entregable}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-20 md:grid-cols-3 md:gap-6">
        {[
          { t: "Si no se mide, no se entrega", d: "Todo proyecto tiene KPIs acordados desde el diagnóstico y un reporte al cierre." },
          { t: "Tú apruebas cada fase", d: "No avanzamos sin tu visto bueno. Sin sorpresas en el camino ni en la factura." },
          { t: "Mejora cada mes", d: "En los planes recurrentes optimizamos campañas, bots y procesos con base en datos." },
        ].map((x) => (
          <div key={x.t} className="rounded-[1.5rem] bg-marino p-6 text-white md:p-8">
            <h3 className="font-display text-xl font-semibold">{x.t}</h3>
            <p className="mt-3 text-hielo">{x.d}</p>
          </div>
        ))}
      </section>

      <BandaCta titulo="La fase 1 empieza con una conversación" />
    </Pagina>
  );
}
