import type { Metadata } from "next";
import BandaCta from "@/components/BandaCta";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import TarjetaServicio from "@/components/TarjetaServicio";
import { servicios } from "@/data/md";

export const metadata: Metadata = {
  title: "Servicios",
  description: "MD Web, MD Bots, MD Social, MD Automatiza, MD Data y MD Consulting: seis unidades que se contratan por separado o en paquete.",
};

export default function Servicios() {
  return (
    <Pagina>
      <Portada
        etiqueta="Servicios · 6 unidades de negocio"
        titulo={<>Todo lo digital de tu negocio, <span className="text-turquesa">en un solo equipo</span></>}
        bajada="Cada unidad se contrata por separado o en paquete. Todas terminan en un entregable concreto y un reporte que puedes medir."
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/servicios", etiqueta: "Servicios" }]}
      />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <TarjetaServicio key={s.slug} s={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-8" aria-labelledby="tabla-titulo">
        <h2 id="tabla-titulo" className="font-display text-3xl font-bold text-marino md:text-4xl">Qué incluye cada unidad</h2>
        {/* Celular: tarjetas apiladas. Escritorio: tabla */}
        <ul className="mt-8 space-y-3 md:hidden">
          {servicios.map((s) => (
            <li key={s.slug} className="rounded-[1.25rem] border border-borde p-5">
              <p className="font-semibold text-marino">{s.nombre}</p>
              <p className="mt-2 text-sm text-pizarra">{s.incluye.join(", ")}</p>
              <p className="mt-3 text-sm font-medium"><span className="etiqueta block !text-[0.62rem] font-normal text-cobalto">Entregable principal</span>{s.entregable}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 hidden overflow-x-auto rounded-[1.25rem] border border-borde md:block">
          <table className="w-full text-left">
            <thead className="etiqueta bg-niebla text-pizarra">
              <tr>
                <th scope="col" className="px-5 py-4 font-normal">Unidad</th>
                <th scope="col" className="px-5 py-4 font-normal">Qué incluye</th>
                <th scope="col" className="px-5 py-4 font-normal">Entregable principal</th>
              </tr>
            </thead>
            <tbody>
              {servicios.map((s) => (
                <tr key={s.slug} className="border-t border-borde align-top">
                  <th scope="row" className="px-5 py-5 font-semibold text-marino">{s.nombre}</th>
                  <td className="px-5 py-5 text-pizarra">{s.incluye.join(", ")}</td>
                  <td className="px-5 py-5 font-medium">{s.entregable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <BandaCta titulo="¿No sabes cuál necesitas?" texto="Para eso es el diagnóstico: revisamos tu negocio y te decimos qué conviene hacer primero y qué puede esperar." />
    </Pagina>
  );
}
