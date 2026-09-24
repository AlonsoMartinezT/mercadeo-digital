"use client";

import { useState } from "react";
import { fases } from "@/data/md";

// Método MD 360: cinco fases en un anillo. Al elegir una fase se muestra su detalle.
const R = 150;
const C = 190;
const punto = (i: number) => {
  const a = (i / fases.length) * Math.PI * 2 - Math.PI / 2;
  return { x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
};

export default function Ciclo360({ oscuro = true }: { oscuro?: boolean }) {
  const [activa, setActiva] = useState(0);
  const f = fases[activa];
  const avance = ((activa + 1) / fases.length) * 2 * Math.PI * R;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,26rem)_1fr]">
      <div className="relative mx-auto w-full max-w-[26rem]">
        <svg viewBox="0 0 380 380" className="w-full" aria-hidden="true">
          <circle cx={C} cy={C} r={R} fill="none" stroke={oscuro ? "rgb(255 255 255 / .12)" : "#d9e0ec"} strokeWidth="2" strokeDasharray="4 8" />
          <circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="#14e0cf"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${avance} ${2 * Math.PI * R}`}
            transform={`rotate(-90 ${C} ${C})`}
            style={{ transition: "stroke-dasharray 500ms cubic-bezier(.2,.8,.2,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`font-display text-6xl font-bold ${oscuro ? "text-white" : "text-marino"}`}>360</span>
          <span className={`etiqueta mt-1 ${oscuro ? "text-hielo" : "text-pizarra"}`}>Método MD</span>
        </div>
        {fases.map((fase, i) => {
          const p = punto(i);
          const sel = i === activa;
          return (
            <button
              key={fase.n}
              type="button"
              onClick={() => setActiva(i)}
              aria-pressed={sel}
              aria-label={`Fase ${fase.n}: ${fase.nombre}`}
              className={`absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full font-display text-lg font-bold transition-all duration-300 ${
                sel
                  ? "scale-110 bg-turquesa text-abismo shadow-lg shadow-turquesa/40"
                  : i < activa
                    ? "bg-cobalto text-white"
                    : oscuro
                      ? "border border-white/20 bg-abismo text-white hover:border-turquesa"
                      : "border border-borde bg-white text-marino hover:border-cobalto"
              }`}
              style={{ left: `${(p.x / 380) * 100}%`, top: `${(p.y / 380) * 100}%` }}
            >
              {fase.n}
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        <p className={`etiqueta ${oscuro ? "text-turquesa" : "text-cobalto"}`}>Fase {f.n} de 5 · {f.detalle}</p>
        <h3 className="mt-3 font-display text-4xl font-bold md:text-5xl">{f.nombre}</h3>
        <p className={`mt-5 max-w-xl text-lg ${oscuro ? "text-hielo" : "text-pizarra"}`}>{f.texto}</p>
        <div className={`mt-8 inline-flex items-center gap-3 rounded-2xl px-5 py-4 ${oscuro ? "bg-white/5" : "bg-niebla"}`}>
          <span className="etiqueta text-pizarra">Entregable</span>
          <span className="font-semibold">{f.entregable}</span>
        </div>
        <div className="mt-8 flex gap-2">
          <button
            type="button"
            onClick={() => setActiva((activa + fases.length - 1) % fases.length)}
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${oscuro ? "border-white/20 hover:border-white" : "border-borde hover:border-marino"}`}
          >
            Anterior
          </button>
          <button
            type="button"
            onClick={() => setActiva((activa + 1) % fases.length)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${oscuro ? "bg-white text-abismo hover:bg-turquesa" : "bg-marino text-white hover:bg-cobalto"}`}
          >
            {activa === fases.length - 1 ? "Volver a empezar" : "Siguiente fase"}
          </button>
        </div>
      </div>
    </div>
  );
}
