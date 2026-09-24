import type { Metadata } from "next";
import Link from "next/link";
import BandaCta from "@/components/BandaCta";
import Icono from "@/components/Icono";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import { paquetes, servicioPorSlug, servicios } from "@/data/md";

export const metadata: Metadata = {
  title: "Paquetes",
  description: "Arranque Digital, Ventas 24/7 y Socio MD: paquetes integrales con cotización desglosada y sin costos ocultos.",
};

export default function Paquetes() {
  return (
    <Pagina>
      <Portada
        etiqueta="Paquetes · Precios transparentes y escalables"
        titulo={<>Tres formas de empezar. <span className="text-turquesa">Cero costos ocultos.</span></>}
        bajada="Cada paquete se cotiza desglosado según el tamaño de tu negocio, desde emprendedores hasta empresas medianas. También puedes contratar cada unidad por separado."
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/paquetes", etiqueta: "Paquetes" }]}
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {paquetes.map((p) => (
            <article
              key={p.id}
              id={p.id}
              className={`relative flex scroll-mt-28 flex-col rounded-[1.75rem] p-8 ${p.destacado ? "oscuro shadow-2xl shadow-marino/25 lg:-my-4 lg:py-12" : "border border-borde bg-white"}`}
            >
              {p.destacado && (
                <span className="etiqueta absolute -top-3 left-8 rounded-full bg-turquesa px-3 py-1 !text-[0.62rem] text-abismo">Recomendado</span>
              )}
              <p className={`etiqueta ${p.destacado ? "text-turquesa" : "text-cobalto"}`}>{p.ideal}</p>
              <h2 className={`mt-3 font-display text-3xl font-bold ${p.destacado ? "" : "text-marino"}`}>{p.nombre}</h2>
              <p className={`mt-2 ${p.destacado ? "text-hielo" : "text-pizarra"}`}>{p.lema}</p>

              <ul className="mt-8 space-y-3">
                {p.incluye.map((i) => (
                  <li key={i} className="flex gap-3">
                    <Icono nombre="check" className={`mt-0.5 h-5 w-5 shrink-0 ${p.destacado ? "text-turquesa" : "text-cobalto"}`} />
                    {i}
                  </li>
                ))}
              </ul>

              <div className={`mt-8 border-t pt-6 ${p.destacado ? "border-white/10" : "border-borde"}`}>
                <p className={`etiqueta !text-[0.62rem] ${p.destacado ? "text-hielo" : "text-pizarra"}`}>Unidades incluidas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.unidades.map((u) => (
                    <Link key={u} href={`/servicios/${u}`} className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${p.destacado ? "bg-white/10 hover:bg-turquesa hover:text-abismo" : "bg-niebla text-marino hover:bg-marino hover:text-white"}`}>
                      {servicioPorSlug(u)!.nombre}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <Link
                  href="/contacto"
                  className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold transition ${p.destacado ? "bg-turquesa text-abismo hover:bg-white" : "bg-marino text-white hover:bg-cobalto"}`}
                >
                  Cotizar {p.nombre}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8" aria-labelledby="comparar-titulo">
        <h2 id="comparar-titulo" className="font-display text-3xl font-bold text-marino md:text-4xl">Compara qué trae cada paquete</h2>
        {/* En celular la tabla cabe completa: columnas fijas, textos y márgenes más chicos */}
        <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-borde">
          <table className="w-full table-fixed text-left text-sm sm:text-base">
            <thead className="bg-niebla">
              <tr>
                <th scope="col" className="etiqueta w-[34%] px-3 py-3 font-normal text-pizarra sm:w-auto sm:px-5 sm:py-4">Unidad</th>
                {paquetes.map((p) => (
                  <th key={p.id} scope="col" className="px-1.5 py-3 text-center text-xs font-semibold leading-tight text-marino sm:px-5 sm:py-4 sm:text-base">{p.nombre}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {servicios.map((s) => (
                <tr key={s.slug} className="border-t border-borde">
                  <th scope="row" className="px-3 py-3 font-medium leading-tight sm:px-5 sm:py-4">
                    <span className="hidden sm:inline">MD </span>
                    {s.nombre.replace("MD ", "")}
                  </th>
                  {paquetes.map((p) => (
                    <td key={p.id} className="px-1.5 py-3 text-center sm:px-5 sm:py-4">
                      {p.unidades.includes(s.slug) ? (
                        <Icono nombre="check" className="mx-auto h-5 w-5 text-cobalto" />
                      ) : (
                        <span className="text-borde" aria-label="No incluido">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <BandaCta titulo="Tu cotización, desglosada y sin letras chiquitas" texto="Cuéntanos de tu negocio y te enviamos una propuesta por partes: sabrás exactamente qué pagas y por qué." />
    </Pagina>
  );
}
