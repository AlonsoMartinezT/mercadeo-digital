"use client";

import { useEffect, useState } from "react";
import Icono from "./Icono";

// Firma de la marca: un interruptor que pasa el negocio de "modo manual" a "modo digital".
const tareas = [
  { manual: "Contestar WhatsApp uno por uno", digital: "Tu bot responde y agenda 24/7", icono: "bots" },
  { manual: "Pasar pedidos a mano a Excel", digital: "El pedido entra solo a tu CRM", icono: "automatiza" },
  { manual: "Publicar cuando hay tiempo", digital: "Calendario de contenido del mes", icono: "social" },
  { manual: "Adivinar qué funcionó", digital: "Tablero con tus KPIs en vivo", icono: "data" },
];

export default function ModoDigital() {
  const [digital, setDigital] = useState(false);

  // Se enciende solo una vez al cargar, salvo que la persona prefiera menos movimiento.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setDigital(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`relative rounded-[1.75rem] border p-5 shadow-2xl transition-colors duration-500 md:p-6 ${digital ? "border-white/15 bg-marino/80 shadow-cobalto/30" : "border-white/10 bg-white/[0.04] shadow-black/20"}`}>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="etiqueta text-hielo">Tu negocio hoy</p>
          <p className={`mt-1 font-display text-xl font-semibold transition-colors ${digital ? "text-turquesa" : "text-white/70"}`}>
            {digital ? "Modo digital" : "Modo manual"}
          </p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={digital}
          aria-label="Modo digital"
          onClick={() => setDigital((d) => !d)}
          className={`relative h-9 w-16 shrink-0 rounded-full transition-colors duration-300 ${digital ? "bg-turquesa" : "bg-white/20"}`}
        >
          <span className={`absolute top-1 left-1 h-7 w-7 rounded-full bg-white shadow transition-transform duration-300 ${digital ? "translate-x-7" : ""}`} />
        </button>
      </div>

      <ul className="mt-5 space-y-2.5" aria-live="polite">
        {tareas.map((t, i) => (
          <li
            key={t.icono}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-500 ${digital ? "bg-white/[0.07]" : "bg-white/[0.03]"}`}
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-500 ${digital ? "bg-turquesa/15 text-turquesa" : "bg-white/5 text-white/40"}`} style={{ transitionDelay: `${i * 90}ms` }}>
              <Icono nombre={digital ? t.icono : "mano"} className="h-5 w-5" />
            </span>
            <span className={`text-sm transition-colors duration-500 ${digital ? "text-white" : "text-white/55 line-through decoration-white/25"}`}>
              {digital ? t.digital : t.manual}
            </span>
            {digital && <Icono nombre="check" className="ml-auto h-4 w-4 shrink-0 text-turquesa" />}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-hielo">Toca el interruptor para comparar.</p>
    </div>
  );
}
