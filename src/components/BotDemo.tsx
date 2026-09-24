"use client";

import { useEffect, useRef, useState } from "react";

// Conversación de ejemplo (guion fijo) para mostrar cómo responde y agenda un bot de MD.
type Mensaje = { de: "cliente" | "bot"; texto: string };

const guion: Mensaje[] = [
  { de: "cliente", texto: "Hola, ¿tienen citas para mañana?" },
  { de: "bot", texto: "¡Hola! 👋 Sí. Mañana tengo libre a las 10:00, 12:30 y 17:00. ¿Cuál te acomoda?" },
  { de: "cliente", texto: "La de las 5 porfa" },
  { de: "bot", texto: "Listo, te agendé mañana a las 17:00. ¿Me compartes tu nombre para la confirmación?" },
  { de: "cliente", texto: "Mariana" },
  { de: "bot", texto: "Gracias, Mariana. Te mandaré un recordatorio una hora antes. ¿Algo más en lo que te ayude?" },
];

export default function BotDemo() {
  const [visibles, setVisibles] = useState(1);
  const [escribiendo, setEscribiendo] = useState(false);
  const lista = useRef<HTMLDivElement>(null);
  const terminado = visibles >= guion.length;

  useEffect(() => {
    lista.current?.scrollTo({ top: lista.current.scrollHeight, behavior: "smooth" });
  }, [visibles, escribiendo]);

  const avanzar = () => {
    if (terminado) {
      setVisibles(1);
      return;
    }
    setEscribiendo(true);
    setTimeout(() => {
      setEscribiendo(false);
      setVisibles((v) => Math.min(v + 2, guion.length));
    }, 900);
  };

  return (
    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-borde bg-white shadow-2xl shadow-marino/15">
      <div className="flex items-center gap-3 bg-marino px-5 py-4 text-white">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-turquesa font-display font-bold text-abismo">B</span>
        <div className="leading-tight">
          <p className="font-semibold">Asistente de tu negocio</p>
          <p className="flex items-center gap-1.5 text-xs text-hielo">
            <span className="latido h-2 w-2 rounded-full bg-turquesa" /> En línea 24/7
          </p>
        </div>
      </div>
      <div ref={lista} className="reticula-clara h-80 space-y-3 overflow-y-auto bg-niebla p-4" aria-live="polite">
        {guion.slice(0, visibles).map((m, i) => (
          <p
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${m.de === "cliente" ? "ml-auto rounded-br-md bg-cobalto text-white" : "rounded-bl-md bg-white text-tinta shadow-sm"}`}
          >
            <span className="sr-only">{m.de === "cliente" ? "Cliente: " : "Bot: "}</span>
            {m.texto}
          </p>
        ))}
        {escribiendo && (
          <p className="flex w-16 gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3.5 shadow-sm" aria-label="El bot está escribiendo">
            <span className="punto-escribe h-1.5 w-1.5 rounded-full bg-pizarra" />
            <span className="punto-escribe h-1.5 w-1.5 rounded-full bg-pizarra" />
            <span className="punto-escribe h-1.5 w-1.5 rounded-full bg-pizarra" />
          </p>
        )}
      </div>
      <div className="border-t border-borde p-3">
        <button type="button" onClick={avanzar} disabled={escribiendo} className="w-full rounded-full bg-marino py-3 text-sm font-semibold text-white transition hover:bg-cobalto disabled:opacity-60">
          {terminado ? "Repetir conversación" : "Ver siguiente respuesta"}
        </button>
      </div>
      <p className="bg-white px-5 pb-4 text-center text-xs text-pizarra">Conversación de ejemplo</p>
    </div>
  );
}
