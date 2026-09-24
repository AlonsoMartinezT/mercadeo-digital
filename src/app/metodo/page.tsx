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
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {fases.map((f) => (
              <li key={f.n} className="aparece relative rounded-[1.5rem] border border-borde bg-white p-6">
                <span className="font-display text-5xl font-bold text-niebla [-webkit-text-stroke:1.5px_var(--color-cobalto)]">{f.n}</span>
                <h3 className="mt-4 font-semibold text-marino">{f.nombre}</h3>
                <p className="etiqueta mt-1 !text-[0.62rem] text-cobalto">{f.detalle}</p>
                <p className="mt-3 text-sm text-pizarra">{f.texto}</p>
                <p className="mt-4 border-t border-borde pt-3 text-sm font-medium">{f.entregable}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 md:grid-cols-3">
        {[
          { t: "Si no se mide, no se entrega", d: "Todo proyecto tiene KPIs acordados desde el diagnóstico y un reporte al cierre." },
          { t: "Tú apruebas cada fase", d: "No avanzamos sin tu visto bueno. Sin sorpresas en el camino ni en la factura." },
          { t: "Mejora cada mes", d: "En los planes recurrentes optimizamos campañas, bots y procesos con base en datos." },
        ].map((x) => (
          <div key={x.t} className="rounded-[1.5rem] bg-marino p-8 text-white">
            <h3 className="font-display text-xl font-semibold">{x.t}</h3>
            <p className="mt-3 text-hielo">{x.d}</p>
          </div>
        ))}
      </section>

      <BandaCta titulo="La fase 1 empieza con una conversación" />
    </Pagina>
  );
}
