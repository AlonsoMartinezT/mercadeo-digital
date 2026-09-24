import type { Metadata } from "next";
import BandaCta from "@/components/BandaCta";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import SelectorSegmento from "@/components/SelectorSegmento";
import { segmentos } from "@/data/md";

export const metadata: Metadata = {
  title: "Para quién",
  description: "Emprendedores, pymes de servicios, comercios, empresas en crecimiento y marcas personales: el servicio de entrada para cada uno.",
};

export default function ParaQuien() {
  return (
    <Pagina>
      <Portada
        etiqueta="Para quién trabajamos"
        titulo={<>Que ningún negocio se quede atrás <span className="text-turquesa">por falta de tecnología</span></>}
        bajada="Trabajamos con negocios de todos los tamaños. Elige el tuyo y te mostramos el dolor más común y por dónde conviene empezar."
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/para-quien", etiqueta: "Para quién" }]}
      />
      <section className="mx-auto max-w-7xl px-5 py-20">
        <SelectorSegmento />
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-8" aria-labelledby="resumen-titulo">
        <h2 id="resumen-titulo" className="font-display text-3xl font-bold text-marino md:text-4xl">De un vistazo</h2>
        <div className="mt-8 overflow-x-auto rounded-[1.25rem] border border-borde">
          <table className="w-full min-w-[720px] text-left">
            <thead className="etiqueta bg-niebla text-pizarra">
              <tr>
                <th scope="col" className="px-5 py-4 font-normal">Segmento</th>
                <th scope="col" className="px-5 py-4 font-normal">Perfil</th>
                <th scope="col" className="px-5 py-4 font-normal">Dolor principal</th>
                <th scope="col" className="px-5 py-4 font-normal">Servicio de entrada</th>
              </tr>
            </thead>
            <tbody>
              {segmentos.map((s) => (
                <tr key={s.id} className="border-t border-borde">
                  <th scope="row" className="px-5 py-4 font-semibold text-marino">{s.nombre}</th>
                  <td className="px-5 py-4 text-pizarra">{s.perfil}</td>
                  <td className="px-5 py-4 text-pizarra">{s.dolor}</td>
                  <td className="px-5 py-4 font-medium">{s.entrada}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <BandaCta />
    </Pagina>
  );
}
