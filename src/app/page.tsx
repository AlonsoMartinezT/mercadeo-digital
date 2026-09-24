import Link from "next/link";
import BandaCta from "@/components/BandaCta";
import Ciclo360 from "@/components/Ciclo360";
import Icono from "@/components/Icono";
import ModoDigital from "@/components/ModoDigital";
import Pagina from "@/components/Pagina";
import SelectorSegmento from "@/components/SelectorSegmento";
import TarjetaServicio from "@/components/TarjetaServicio";
import { diferenciadores, marca, paquetes, servicios } from "@/data/md";

export default function Inicio() {
  return (
    <Pagina>
      {/* Portada */}
      <section className="oscuro relative overflow-hidden">
        <div className="reticula absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-32 -top-48 h-[40rem] w-[40rem] rounded-full bg-cobalto/45 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-turquesa/15 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="etiqueta inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-hielo">
              <span className="latido h-2 w-2 rounded-full bg-turquesa" />
              Agencia de transformación digital
            </p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[1.02] tracking-tight text-balance md:text-7xl">
              Tu negocio, en <span className="text-turquesa">modo digital.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg text-hielo text-pretty">
              Web, bots con IA, redes, automatización, datos y consejería en un solo equipo. Para que vendas más, trabajes menos y cada peso invertido en lo digital tenga un retorno medible.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-turquesa px-7 py-4 font-semibold text-abismo transition hover:bg-white">
                Solicitar diagnóstico
                <Icono nombre="flecha" className="h-4 w-4" />
              </Link>
              <Link href="/servicios" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:border-white">
                Ver servicios
              </Link>
            </div>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-hielo">
              {["Todo en un solo equipo", "Resultados con KPIs", "Todo queda a tu nombre"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Icono nombre="check" className="h-4 w-4 text-turquesa" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <ModoDigital />
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 py-24" aria-labelledby="servicios-titulo">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="etiqueta text-cobalto">Seis unidades de negocio</p>
            <h2 id="servicios-titulo" className="mt-3 font-display text-4xl font-bold tracking-tight text-marino text-balance md:text-5xl">
              Menos proveedores. Menos tareas repetitivas. Más ventas.
            </h2>
          </div>
          <Link href="/paquetes" className="inline-flex items-center gap-2 font-semibold text-cobalto hover:text-marino">
            Ver paquetes
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <TarjetaServicio key={s.slug} s={s} />
          ))}
        </div>
      </section>

      {/* Método */}
      <section className="oscuro relative overflow-hidden" aria-labelledby="metodo-titulo">
        <div className="reticula absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
            <div>
              <p className="etiqueta text-turquesa">Método MD 360</p>
              <h2 id="metodo-titulo" className="mt-3 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
                Cinco fases. Cada una cierra con algo que apruebas.
              </h2>
            </div>
            <p className="text-lg text-hielo lg:pb-2">En los planes mensuales el ciclo se repite: medimos, ajustamos y volvemos a optimizar.</p>
          </div>
          <div className="mt-12 border-t border-white/10 pt-12">
            <Ciclo360 />
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="reticula-clara bg-niebla" aria-labelledby="quien-titulo">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="max-w-2xl">
            <p className="etiqueta text-cobalto">Para quién</p>
            <h2 id="quien-titulo" className="mt-3 font-display text-4xl font-bold tracking-tight text-marino text-balance md:text-5xl">
              Dinos qué negocio tienes y te decimos por dónde empezar.
            </h2>
          </div>
          <div className="mt-12">
            <SelectorSegmento />
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="mx-auto max-w-7xl px-5 py-24" aria-labelledby="porque-titulo">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="etiqueta text-cobalto">Por qué MD</p>
            <h2 id="porque-titulo" className="mt-3 font-display text-4xl font-bold tracking-tight text-marino text-balance md:text-5xl">
              No somos un proveedor más. Somos tu socio digital.
            </h2>
            <p className="mt-5 text-lg text-pizarra">Un solo equipo diseña tu presencia digital, automatiza tu operación y te dice con datos qué hacer después.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {diferenciadores.map((d, i) => (
              <li key={d.titulo} className="aparece rounded-[1.5rem] border border-borde p-7">
                <span className="font-mono text-sm text-cobalto">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold text-marino">{d.titulo}</h3>
                <p className="mt-2 text-pizarra">{d.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Paquetes (resumen) */}
      <section className="border-t border-borde bg-niebla/60" aria-labelledby="paquetes-titulo">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="max-w-2xl">
            <p className="etiqueta text-cobalto">Paquetes</p>
            <h2 id="paquetes-titulo" className="mt-3 font-display text-4xl font-bold tracking-tight text-marino md:text-5xl">
              Empieza con lo que necesitas hoy.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {paquetes.map((p) => (
              <Link
                key={p.id}
                href={`/paquetes#${p.id}`}
                className={`group rounded-[1.5rem] p-8 transition hover:-translate-y-1 ${p.destacado ? "oscuro shadow-xl shadow-marino/20" : "border border-borde bg-white hover:border-cobalto"}`}
              >
                <p className={`etiqueta ${p.destacado ? "text-turquesa" : "text-pizarra"}`}>{p.ideal}</p>
                <h3 className={`mt-3 font-display text-2xl font-bold ${p.destacado ? "" : "text-marino"}`}>{p.nombre}</h3>
                <p className={`mt-2 ${p.destacado ? "text-hielo" : "text-pizarra"}`}>{p.lema}</p>
                <div className="mt-6 flex gap-2">
                  {p.unidades.map((u) => (
                    <span key={u} className={`flex h-9 w-9 items-center justify-center rounded-xl ${p.destacado ? "bg-white/10 text-turquesa" : "bg-niebla text-cobalto"}`}>
                      <Icono nombre={u} className="h-4.5 w-4.5" />
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BandaCta titulo={marca.slogan} />
    </Pagina>
  );
}
