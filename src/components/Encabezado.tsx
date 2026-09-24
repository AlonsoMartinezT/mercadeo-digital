"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Icono from "./Icono";
import Logo from "./Logo";
import { navegacion } from "@/data/md";

export default function Encabezado() {
  const ruta = usePathname();
  const menu = useRef<HTMLDialogElement>(null);
  const activa = (href: string) => ruta === href || ruta.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-borde/80 bg-white/85 backdrop-blur-md" style={{ viewTransitionName: "encabezado" }}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-1 text-[15px] font-medium">
            {navegacion.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={activa(n.href) ? "page" : undefined}
                  className="rounded-full px-4 py-2 text-pizarra transition-colors hover:bg-niebla hover:text-marino aria-[current=page]:bg-marino aria-[current=page]:text-white"
                >
                  {n.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contacto"
            className="hidden items-center gap-2 rounded-full bg-cobalto px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cobalto/25 transition hover:bg-marino sm:inline-flex"
          >
            Diagnóstico digital
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => menu.current?.showModal()}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-borde text-marino lg:hidden"
            aria-label="Abrir menú"
            aria-haspopup="dialog"
          >
            <Icono nombre="menu" />
          </button>
        </div>
      </div>

      {/* Menú móvil: <dialog> modal atrapa el foco y se cierra con Esc */}
      <dialog
        ref={menu}
        aria-label="Menú"
        onClick={(e) => e.target === menu.current && menu.current?.close()}
        className="oscuro m-0 ml-auto h-dvh max-h-none w-[min(22rem,88vw)] max-w-none p-0 backdrop:bg-abismo/60 backdrop:backdrop-blur-sm"
      >
        <div className="reticula flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="etiqueta text-turquesa">Menú</span>
            <button type="button" onClick={() => menu.current?.close()} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20" aria-label="Cerrar menú">
              <Icono nombre="cerrar" />
            </button>
          </div>
          <ul className="mt-8 flex-1 space-y-1">
            {[{ href: "/", etiqueta: "Inicio" }, ...navegacion, { href: "/contacto", etiqueta: "Contacto" }].map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => menu.current?.close()}
                  aria-current={(n.href === "/" ? ruta === "/" : activa(n.href)) ? "page" : undefined}
                  className="block rounded-xl px-4 py-3 font-display text-2xl font-semibold text-white/80 hover:bg-white/5 hover:text-white aria-[current=page]:text-turquesa"
                >
                  {n.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contacto" onClick={() => menu.current?.close()} className="rounded-full bg-turquesa px-5 py-3.5 text-center font-semibold text-abismo">
            Solicitar diagnóstico
          </Link>
        </div>
      </dialog>
    </header>
  );
}
