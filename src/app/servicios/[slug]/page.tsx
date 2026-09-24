import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BandaCta from "@/components/BandaCta";
import BotDemo from "@/components/BotDemo";
import Icono from "@/components/Icono";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import TableroDemo from "@/components/TableroDemo";
import TarjetaServicio from "@/components/TarjetaServicio";
import { paquetes, servicioPorSlug, servicios, whatsappUrl } from "@/data/md";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const s = servicioPorSlug((await params).slug);
  return s ? { title: s.nombre, description: s.resumen } : {};
}

export default async function DetalleServicio({ params }: PageProps<"/servicios/[slug]">) {
  const s = servicioPorSlug((await params).slug);
  if (!s) notFound();
  const otros = servicios.filter((x) => x.slug !== s.slug).slice(0, 3);
  const enPaquetes = paquetes.filter((p) => p.unidades.includes(s.slug));
  const demo = s.slug === "bots" ? <BotDemo /> : s.slug === "data" ? <TableroDemo /> : null;

  return (
    <Pagina>
      <Portada
        etiqueta={`Unidad ${s.codigo} · ${s.nombre}`}
        titulo={s.gancho}
        bajada={s.resumen}
        migas={[
          { href: "/", etiqueta: "Inicio" },
          { href: "/servicios", etiqueta: "Servicios" },
          { href: `/servicios/${s.slug}`, etiqueta: s.nombre },
        ]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contacto" className="inline-flex items-center gap-2 rounded-full bg-turquesa px-6 py-3.5 font-semibold text-abismo transition hover:bg-white">
            Solicitar diagnóstico
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
          <a
            href={whatsappUrl(`Hola MD, quiero información sobre ${s.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-semibold transition hover:border-white"
          >
            <Icono nombre="whatsapp" className="h-5 w-5" />
            Preguntar por WhatsApp
          </a>
        </div>
      </Portada>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="etiqueta text-cobalto">Qué incluye</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {s.incluye.map((i) => (
              <li key={i} className="flex items-center gap-3 rounded-2xl border border-borde px-5 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-turquesa/20 text-turquesa-2">
                  <Icono nombre="check" className="h-4 w-4" />
                </span>
                <span className="font-medium">{i}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] bg-marino p-7 text-white">
              <p className="etiqueta text-turquesa">Entregable principal</p>
              <p className="mt-3 font-display text-xl font-semibold">{s.entregable}</p>
            </div>
            <div className="rounded-[1.5rem] bg-niebla p-7">
              <p className="etiqueta text-cobalto">Ideal para</p>
              <p className="mt-3 text-pizarra">{s.paraQuien}</p>
            </div>
          </div>
        </div>

        <div className="lg:pt-10">{demo ?? <Pasos />}</div>
      </section>

      <section className="border-y border-borde bg-niebla/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <p className="etiqueta text-cobalto">Preguntas frecuentes</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-marino md:text-4xl">Lo que nos preguntan de {s.nombre}</h2>
            {enPaquetes.length > 0 && (
              <p className="mt-6 text-pizarra">
                También viene en{" "}
                {enPaquetes.map((p, i) => (
                  <span key={p.id}>
                    {i > 0 && (i === enPaquetes.length - 1 ? " y " : ", ")}
                    <Link href={`/paquetes#${p.id}`} className="font-semibold text-cobalto underline-offset-4 hover:underline">{p.nombre}</Link>
                  </span>
                ))}
                .
              </p>
            )}
          </div>
          <div className="divide-y divide-borde rounded-[1.5rem] border border-borde bg-white">
            {s.preguntas.map((q) => (
              <details key={q.p} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-marino">
                  {q.p}
                  <Icono nombre="mas" className="h-5 w-5 shrink-0 text-cobalto transition-transform group-open:rotate-45" />
                </summary>
                <p className="mt-3 text-pizarra">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-20" aria-labelledby="otros-titulo">
        <h2 id="otros-titulo" className="font-display text-3xl font-bold text-marino">Combínalo con</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otros.map((o) => (
            <TarjetaServicio key={o.slug} s={o} />
          ))}
        </div>
      </section>
      <BandaCta />
    </Pagina>
  );
}

// Para servicios sin demo interactiva: cómo se trabaja con el Método MD 360.
function Pasos() {
  const pasos = ["Diagnóstico de tu situación actual", "Propuesta con cotización desglosada", "Montaje e integración", "Lanzamiento y pruebas", "Medición y mejora mensual"];
  return (
    <div className="oscuro relative overflow-hidden rounded-[1.75rem] p-8">
      <div className="reticula absolute inset-0" aria-hidden="true" />
      <div className="relative">
        <p className="etiqueta text-turquesa">Cómo lo trabajamos</p>
        <ol className="mt-6 space-y-5">
          {pasos.map((p, i) => (
            <li key={p} className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 font-display font-bold text-turquesa">{i + 1}</span>
              <span className="font-medium">{p}</span>
            </li>
          ))}
        </ol>
        <Link href="/metodo" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-turquesa hover:text-white">
          Conoce el Método MD 360
          <Icono nombre="flecha" className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
