"use client";

import { useState } from "react";

// Tablero ilustrativo: los números son de ejemplo para mostrar cómo se ve un reporte de MD Data.
const vistas = {
  ventas: { etiqueta: "Ventas", serie: [32, 38, 35, 44, 49, 47, 58, 63, 61, 70, 76, 82], kpi: "Ventas por mes", sufijo: "" },
  leads: { etiqueta: "Leads", serie: [12, 15, 14, 19, 22, 21, 27, 30, 33, 31, 38, 42], kpi: "Prospectos nuevos", sufijo: "" },
  horas: { etiqueta: "Horas ahorradas", serie: [2, 4, 6, 9, 11, 14, 16, 19, 21, 24, 26, 29], kpi: "Horas por automatización", sufijo: " h" },
};
type Vista = keyof typeof vistas;
const meses = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export default function TableroDemo() {
  const [vista, setVista] = useState<Vista>("ventas");
  const v = vistas[vista];
  const max = Math.max(...v.serie);
  const puntos = v.serie.map((y, i) => `${(i / (v.serie.length - 1)) * 100},${100 - (y / max) * 88}`).join(" ");

  return (
    <div className="rounded-[1.75rem] border border-borde bg-white p-5 shadow-2xl shadow-marino/10 md:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="etiqueta text-pizarra">Tablero de ejemplo</p>
          <p className="mt-1 font-display text-xl font-semibold text-marino">{v.kpi}</p>
        </div>
        <div role="tablist" aria-label="Indicador" className="flex rounded-full bg-niebla p-1 text-sm">
          {(Object.keys(vistas) as Vista[]).map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={k === vista}
              onClick={() => setVista(k)}
              className="rounded-full px-3.5 py-1.5 font-medium text-pizarra transition aria-selected:bg-marino aria-selected:text-white"
            >
              {vistas[k].etiqueta}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { t: "Último mes", n: v.serie.at(-1) },
          { t: "Mes anterior", n: v.serie.at(-2) },
          { t: "Hace un año", n: v.serie[0] },
        ].map((k) => (
          <div key={k.t} className="rounded-2xl bg-niebla px-4 py-3">
            <p className="text-xs text-pizarra">{k.t}</p>
            <p className="font-display text-2xl font-bold text-marino tabular-nums">
              {k.n}
              {v.sufijo}
            </p>
          </div>
        ))}
      </div>

      <figure className="mt-6">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-48 w-full overflow-visible" role="img" aria-label={`${v.kpi} de enero a diciembre, datos de ejemplo`}>
          {[25, 50, 75].map((y) => (
            <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="#d9e0ec" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
          ))}
          <polygon points={`0,100 ${puntos} 100,100`} fill="url(#relleno)" />
          <polyline points={puntos} fill="none" stroke="#1946d1" strokeWidth="2.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          <defs>
            <linearGradient id="relleno" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#14e0cf" stopOpacity="0.35" />
              <stop offset="1" stopColor="#14e0cf" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mt-2 flex justify-between font-mono text-[0.65rem] text-pizarra" aria-hidden="true">
          {meses.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
        <figcaption className="mt-4 text-xs text-pizarra">Datos ilustrativos. Tu tablero se conecta a tus fuentes reales y se actualiza solo.</figcaption>
      </figure>
    </div>
  );
}
