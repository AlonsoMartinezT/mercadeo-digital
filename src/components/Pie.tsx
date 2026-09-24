import Link from "next/link";
import Icono from "./Icono";
import Logo from "./Logo";
import { contacto, marca, navegacion, servicios, whatsappUrl } from "@/data/md";

const redes = [
  { url: contacto.instagram, nombre: "Instagram" },
  { url: contacto.linkedin, nombre: "LinkedIn" },
  { url: contacto.tiktok, nombre: "TikTok" },
].filter((r) => r.url);

export default function Pie() {
  return (
    <footer className="oscuro">
      <div className="reticula">
        {/* Celular: marca arriba, dos columnas de enlaces lado a lado y un botón de WhatsApp */}
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12 md:py-16">
          <div className="col-span-2 md:col-span-1">
            <Logo claro />
            <p className="mt-4 max-w-xs font-display text-xl font-semibold leading-snug md:mt-5 md:text-2xl">{marca.slogan}</p>
            <p className="mt-2 max-w-xs text-sm text-hielo md:mt-4">{marca.modalidad}</p>
          </div>
          <nav aria-label="Servicios">
            <p className="etiqueta text-turquesa">Servicios</p>
            <ul className="mt-3 space-y-2 text-sm md:mt-4 md:space-y-2.5">
              {servicios.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="text-hielo hover:text-white">
                    {s.nombre}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Secundaria">
            <p className="etiqueta text-turquesa">Empresa</p>
            <ul className="mt-3 space-y-2 text-sm md:mt-4 md:space-y-2.5">
              {navegacion.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-hielo hover:text-white">
                    {n.etiqueta}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contacto" className="text-hielo hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:col-span-1 md:border-0 md:bg-transparent md:p-0">
            <p className="etiqueta text-turquesa">Hablemos</p>
            <a
              href={whatsappUrl("Hola MD, quiero información.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-turquesa px-5 py-3 text-sm font-semibold text-abismo transition hover:bg-white md:mt-4 md:inline-flex"
            >
              <Icono nombre="whatsapp" className="h-5 w-5" />
              Escríbenos por WhatsApp
            </a>
            {(contacto.correo || redes.length > 0) && (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm md:block md:space-y-2.5">
                {contacto.correo && (
                  <li>
                    <a href={`mailto:${contacto.correo}`} className="inline-flex items-center gap-2 text-hielo hover:text-white">
                      <Icono nombre="correo" className="h-5 w-5" />
                      {contacto.correo}
                    </a>
                  </li>
                )}
                {redes.map((r) => (
                  <li key={r.nombre}>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-hielo hover:text-white">
                      {r.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-3 text-center text-xs text-hielo md:mt-4 md:text-left md:text-sm">{marca.respuesta}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5 text-center sm:flex-row sm:justify-between sm:text-left text-xs text-hielo">
            <p>© {new Date().getFullYear()} MD · Mercadeo Digital</p>
            <p>Tu dominio, tus cuentas, tus datos: siempre a tu nombre.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
