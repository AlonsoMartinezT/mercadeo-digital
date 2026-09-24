import Link from "next/link";

// Monograma MD: la M en trazo continuo y la D como un "botón de encendido" turquesa.
export function Monograma({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect width="48" height="48" rx="12" fill="#0b1f4d" />
      <path d="M9 33V15l7.5 11L24 15v18" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29.5 15h1.5a9 9 0 010 18h-1.5z" fill="none" stroke="#14e0cf" strokeWidth="4" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MD Mercadeo Digital, inicio">
      <Monograma />
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight ${claro ? "text-white" : "text-marino"}`}>MD</span>
        <span className={`etiqueta block !text-[0.62rem] ${claro ? "text-hielo" : "text-pizarra"}`}>Mercadeo Digital</span>
      </span>
    </Link>
  );
}
