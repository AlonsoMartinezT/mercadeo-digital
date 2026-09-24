"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Icono from "./Icono";
import { segmentos, servicios, whatsappUrl } from "@/data/md";

// Solicitud de diagnóstico en 3 pasos. No guarda nada: arma el mensaje y abre WhatsApp.
const pasos = ["Tu negocio", "Qué necesitas", "Tus datos"];

export default function Diagnostico() {
  const [paso, setPaso] = useState(0);
  // Si viene de "Para quién", el tipo de negocio llega preseleccionado en ?negocio=
  const deUrl = useSearchParams().get("negocio") ?? "";
  const [negocio, setNegocio] = useState(segmentos.some((s) => s.id === deUrl) ? deUrl : "");
  const [elegidos, setElegidos] = useState<string[]>([]);
  const [enviado, setEnviado] = useState(false);

  const alternar = (slug: string) =>
    setElegidos((e) => (e.includes(slug) ? e.filter((x) => x !== slug) : [...e, slug]));

  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const seg = segmentos.find((s) => s.id === negocio);
    const texto = [
      "Hola MD, quiero solicitar un diagnóstico digital.",
      "",
      `Nombre: ${d.get("nombre")}`,
      `Negocio: ${d.get("empresa")}${seg ? ` (${seg.nombre})` : ""}`,
      d.get("ciudad") ? `Ciudad: ${d.get("ciudad")}` : "",
      elegidos.length ? `Me interesa: ${elegidos.map((s) => servicios.find((x) => x.slug === s)?.nombre).join(", ")}` : "",
      d.get("reto") ? `Mi reto principal: ${d.get("reto")}` : "",
    ]
      .filter((l, i) => l || i === 1)
      .join("\n");
    window.open(whatsappUrl(texto), "_blank", "noopener");
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-[1.75rem] border border-borde bg-white p-8 text-center md:p-12" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-turquesa/20 text-turquesa-2">
          <Icono nombre="check" className="h-7 w-7" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold text-marino">Tu mensaje está listo en WhatsApp</h2>
        <p className="mx-auto mt-3 max-w-md text-pizarra">Solo presiona enviar. Respondemos en menos de 24 horas hábiles para agendar tu diagnóstico.</p>
        <button type="button" onClick={() => { setEnviado(false); setPaso(0); }} className="mt-6 text-sm font-semibold text-cobalto hover:text-marino">
          Hacer otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} className="rounded-[1.75rem] border border-borde bg-white p-6 shadow-xl shadow-marino/5 md:p-10">
      <ol className="flex gap-2" aria-label="Pasos">
        {pasos.map((p, i) => (
          <li key={p} className="flex-1">
            <span className={`block h-1.5 rounded-full transition-colors ${i <= paso ? "bg-cobalto" : "bg-niebla"}`} />
            <span className={`etiqueta mt-2 block !text-[0.65rem] ${i === paso ? "text-marino" : "text-pizarra"}`} aria-current={i === paso ? "step" : undefined}>
              {i + 1}. {p}
            </span>
          </li>
        ))}
      </ol>

      <fieldset hidden={paso !== 0} className="mt-8">
        <legend className="font-display text-2xl font-bold text-marino">¿Qué tipo de negocio tienes?</legend>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {segmentos.map((s) => (
            <label key={s.id} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-borde p-4 transition hover:border-cobalto has-[:checked]:border-marino has-[:checked]:bg-niebla">
              <input type="radio" name="negocio" value={s.id} checked={negocio === s.id} onChange={() => setNegocio(s.id)} className="mt-1 accent-cobalto" />
              <span>
                <span className="block font-semibold">{s.nombre}</span>
                <span className="block text-sm text-pizarra">{s.perfil}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset hidden={paso !== 1} className="mt-8">
        <legend className="font-display text-2xl font-bold text-marino">¿Qué te gustaría resolver?</legend>
        <p className="mt-1 text-sm text-pizarra">Elige todo lo que aplique. Si no sabes, déjalo vacío: para eso es el diagnóstico.</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {servicios.map((s) => (
            <label key={s.slug} className="flex cursor-pointer items-start gap-3 rounded-2xl border border-borde p-4 transition hover:border-cobalto has-[:checked]:border-marino has-[:checked]:bg-niebla">
              <input type="checkbox" checked={elegidos.includes(s.slug)} onChange={() => alternar(s.slug)} className="mt-1 accent-cobalto" />
              <span>
                <span className="block font-semibold">{s.nombre}</span>
                <span className="block text-sm text-pizarra">{s.gancho}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset hidden={paso !== 2} className="mt-8">
        <legend className="font-display text-2xl font-bold text-marino">¿Cómo te contactamos?</legend>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium">Tu nombre</span>
            <input name="nombre" required={paso === 2} autoComplete="name" className="campo mt-1.5" />
          </label>
          <label className="block">
            <span className="text-sm font-medium">Nombre del negocio</span>
            <input name="empresa" required={paso === 2} autoComplete="organization" className="campo mt-1.5" />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">Ciudad <span className="text-pizarra">(opcional)</span></span>
            <input name="ciudad" autoComplete="address-level2" className="campo mt-1.5" />
          </label>
          <label className="block sm:col-span-2">
            <span className="text-sm font-medium">¿Cuál es tu reto principal hoy? <span className="text-pizarra">(opcional)</span></span>
            <textarea name="reto" rows={3} className="campo mt-1.5 resize-y" placeholder="Por ejemplo: no alcanzo a contestar todos los mensajes" />
          </label>
        </div>
      </fieldset>

      <div className="mt-8 flex items-center justify-between gap-3">
        {paso > 0 ? (
          <button type="button" onClick={() => setPaso(paso - 1)} className="rounded-full border border-borde px-5 py-3 text-sm font-semibold hover:border-marino">
            Atrás
          </button>
        ) : (
          <span />
        )}
        {paso < 2 ? (
          <button type="button" onClick={() => setPaso(paso + 1)} className="inline-flex items-center gap-2 rounded-full bg-marino px-6 py-3 text-sm font-semibold text-white hover:bg-cobalto">
            Continuar
            <Icono nombre="flecha" className="h-4 w-4" />
          </button>
        ) : (
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-cobalto px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cobalto/25 hover:bg-marino">
            <Icono nombre="whatsapp" className="h-5 w-5" />
            Enviar por WhatsApp
          </button>
        )}
      </div>
    </form>
  );
}
