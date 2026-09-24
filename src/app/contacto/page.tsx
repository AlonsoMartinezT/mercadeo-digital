import type { Metadata } from "next";
import { Suspense } from "react";
import Diagnostico from "@/components/Diagnostico";
import Icono from "@/components/Icono";
import Pagina from "@/components/Pagina";
import Portada from "@/components/Portada";
import { contacto, fases, marca, whatsappUrl } from "@/data/md";

export const metadata: Metadata = {
  title: "Diagnóstico digital y contacto",
  description: "Solicita tu diagnóstico digital: revisamos tu sitio, redes, procesos y números y te decimos qué hacer primero.",
};

export default function Contacto() {
  return (
    <Pagina>
      <Portada
        etiqueta="Fase 1 · Diagnóstico"
        titulo={<>Empecemos por saber <span className="text-turquesa">dónde estás</span></>}
        bajada="Contesta tres preguntas rápidas y te preparamos el mensaje para WhatsApp. En el diagnóstico revisamos tu sitio, redes, procesos y números."
        migas={[{ href: "/", etiqueta: "Inicio" }, { href: "/contacto", etiqueta: "Contacto" }]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.6fr_1fr]">
        <Suspense>
          <Diagnostico />
        </Suspense>

        <aside className="space-y-4">
          <div className="rounded-[1.5rem] bg-niebla p-7">
            <p className="etiqueta text-cobalto">Qué recibes</p>
            <p className="mt-3 font-display text-xl font-semibold text-marino">{fases[0].entregable}</p>
            <p className="mt-2 text-pizarra">{fases[0].texto}</p>
          </div>
          <div className="rounded-[1.5rem] border border-borde p-7">
            <p className="etiqueta text-cobalto">Otros canales</p>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={whatsappUrl("Hola MD, quiero información.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-medium hover:text-cobalto">
                  <Icono nombre="whatsapp" className="h-5 w-5 text-cobalto" />
                  WhatsApp Business
                </a>
                <p className="ml-8 mt-1 text-sm text-pizarra">Lo atiende nuestro propio bot: pruébalo como demostración.</p>
              </li>
              {contacto.correo && (
                <li>
                  <a href={`mailto:${contacto.correo}`} className="flex items-center gap-3 font-medium hover:text-cobalto">
                    <Icono nombre="correo" className="h-5 w-5 text-cobalto" />
                    {contacto.correo}
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div className="rounded-[1.5rem] bg-marino p-7 text-white">
            <Icono nombre="reloj" className="h-6 w-6 text-turquesa" />
            <p className="mt-3 font-semibold">{marca.respuesta}</p>
            <p className="mt-2 text-sm text-hielo">{marca.modalidad}</p>
          </div>
        </aside>
      </section>
    </Pagina>
  );
}
