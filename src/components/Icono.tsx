const trazos: Record<string, React.ReactNode> = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 8.5h18M6.5 6.25h.01M9 6.25h.01M7 12h6M7 15h10" />
    </>
  ),
  bots: (
    <>
      <path d="M5 5h14a2 2 0 012 2v8a2 2 0 01-2 2h-7l-4 3v-3H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </>
  ),
  social: (
    <>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
    </>
  ),
  automatiza: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h4a3 3 0 013 3v6M16 15l-2-2M16 15l2-2" />
    </>
  ),
  data: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  consulting: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  flecha: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  cerrar: <path d="M6 6l12 12M18 6L6 18" />,
  mas: <path d="M12 5v14M5 12h14" />,
  whatsapp: (
    <>
      <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4.1-1.1z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 01-1.8-1.8l.8-1-1-2z" />
    </>
  ),
  correo: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </>
  ),
  mano: <path d="M7 11V6.5a1.5 1.5 0 013 0V11m0-1V4.5a1.5 1.5 0 013 0V10m0 0V5.5a1.5 1.5 0 013 0V13c0 4-2.5 7-6 7-2.5 0-4-1.5-5.5-4L4 12.5a1.5 1.5 0 012.5-1.5L8 13" />,
  rayo: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  reloj: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  llave: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12l9-9M17 6l3 3M14.5 8.5l2 2" />
    </>
  ),
  ciclo: <path d="M20 12a8 8 0 01-14.3 4.9M4 12a8 8 0 0114.3-4.9M18.5 3v4.2h-4.2M5.5 21v-4.2h4.2" />,
  capas: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 16.5l9 5 9-5" />,
};

export default function Icono({ nombre, className = "h-6 w-6" }: { nombre: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {trazos[nombre]}
    </svg>
  );
}
