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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo claro />
            <p className="mt-5 max-w-xs font-display text-2xl font-semibold leading-snug">{marca.slogan}</p>
            <p className="mt-4 max-w-xs text-sm text-hielo">{marca.modalidad}</p>
          </div>
          <nav aria-label="Servicios">
            <p className="etiqueta text-turquesa">Servicios</p>
            <ul className="mt-4 space-y-2.5 text-sm">
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
            <p className="etiqueta text-turquesa">MD</p>
            <ul className="mt-4 space-y-2.5 text-sm">
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
          <div>
            <p className="etiqueta text-turquesa">Hablemos</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={whatsappUrl("Hola MD, quiero información.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-hielo hover:text-white">
                  <Icono nombre="whatsapp" className="h-5 w-5" />
                  WhatsApp {contacto.whatsapp ? "" : "(atendido por nuestro bot)"}
                </a>
              </li>
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
            <p className="mt-5 text-sm text-hielo">{marca.respuesta}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-6 text-xs text-hielo">
            <p>© {new Date().getFullYear()} MD · Mercadeo Digital</p>
            <p>Tu dominio, tus cuentas, tus datos: siempre a tu nombre.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
