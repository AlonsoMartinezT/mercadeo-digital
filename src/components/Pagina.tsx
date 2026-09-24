import { ViewTransition } from "react";

// Cada página entra con un fundido corto; el encabezado se queda quieto (ver globals.css).
export default function Pagina({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="pagina" exit="pagina" default="none">
      <main id="contenido">{children}</main>
    </ViewTransition>
  );
}
