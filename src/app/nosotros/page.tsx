import type { Metadata } from "next";
import BandaCta from "@/components/BandaCta";
import Icono from "@/components/Icono";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import { areas, marca, nosotros, valores } from "@/data/md";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Quiénes somos, misión, visión, propósito y valores de MD Mercadeo Digital.",
};

export default function Nosotros() {
  return (
    <Pagina>
      <Portada
        etiqueta="Nosotros"
        titulo={<>No somos solo proveedores. <span className="text-turquesa">Somos tu socio digital.</span></>}
        bajada={nosotros.socio}
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/nosotros", etiqueta: "Nosotros" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="etiqueta text-cobalto">Quiénes somos</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-marino md:text-4xl">Vender más y trabajar menos, gracias a la tecnología</h2>
        </div>
        <div className="space-y-5 text-lg text-pizarra">
          <p>{nosotros.quienes}</p>
          <p className="flex items-start gap-3 rounded-2xl bg-niebla p-5 text-base">
            <Icono nombre="capas" className="mt-0.5 h-5 w-5 shrink-0 text-cobalto" />
            {marca.modalidad}
          </p>
        </div>
      </section>

      <section className="oscuro relative overflow-hidden">
        <div className="reticula absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-5 px-5 py-20 md:grid-cols-3">
          {[
            { t: "Misión", d: nosotros.mision, i: "rayo" },
            { t: "Visión", d: nosotros.vision, i: "consulting" },
            { t: "Propósito", d: nosotros.proposito, i: "ciclo" },
          ].map((x) => (
            <article key={x.t} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-turquesa/15 text-turquesa">
                <Icono nombre={x.i} />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold">{x.t}</h2>
              <p className="mt-3 text-hielo">{x.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20" aria-labelledby="valores-titulo">
        <p className="etiqueta text-cobalto">Valores</p>
        <h2 id="valores-titulo" className="mt-3 font-display text-3xl font-bold text-marino md:text-4xl">Lo que no negociamos</h2>
        <dl className="mt-10 grid gap-px overflow-hidden rounded-[1.5rem] border border-borde bg-borde sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((v, i) => (
            <div key={v.nombre} className="bg-white p-7">
              <dt className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-cobalto">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-lg font-semibold text-marino">{v.nombre}</span>
              </dt>
              <dd className="mt-2 text-pizarra">{v.texto}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="reticula-clara border-y border-borde bg-niebla" aria-labelledby="equipo-titulo">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="etiqueta text-cobalto">Cómo nos organizamos</p>
          <h2 id="equipo-titulo" className="mt-3 max-w-2xl font-display text-3xl font-bold text-marino md:text-4xl">Un solo equipo, cinco áreas, un solo contacto para ti</h2>
          <div className="mt-12 flex flex-col items-center">
            <div className="rounded-2xl bg-marino px-8 py-5 text-center text-white">
              <p className="font-semibold">{areas[0].nombre}</p>
              <p className="text-sm text-hielo">{areas[0].texto}</p>
            </div>
            <div className="h-8 w-px bg-cobalto/40" aria-hidden="true" />
            <div className="hidden h-px w-3/4 bg-cobalto/40 md:block" aria-hidden="true" />
            <ul className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-4">
              {areas.slice(1).map((a) => (
                <li key={a.nombre} className="relative rounded-2xl border border-borde bg-white px-5 py-5 text-center md:mt-8 md:before:absolute md:before:-top-8 md:before:left-1/2 md:before:h-8 md:before:w-px md:before:bg-cobalto/40">
                  <p className="font-semibold text-marino">{a.nombre}</p>
                  <p className="text-sm text-pizarra">{a.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <BandaCta titulo="Hablamos claro, sin tecnicismos" texto={marca.respuesta + " Cuéntanos de tu negocio y te decimos qué haríamos."} />
    </Pagina>
  );
}
