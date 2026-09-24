import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import Encabezado from "@/components/Encabezado";
import Pie from "@/components/Pie";
import "./globals.css";

const poppins = Poppins({ variable: "--font-poppins", weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", weight: ["400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MD Mercadeo Digital · Tu negocio, en modo digital",
    template: "%s · MD Mercadeo Digital",
  },
  description:
    "Agencia de transformación digital: páginas web, bots con IA para WhatsApp, redes sociales, automatización, dashboards y consejería para que tu negocio venda más y trabaje menos.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${poppins.variable} ${mono.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col font-sans">
        <a href="#contenido" className="sr-only z-[60] rounded-full bg-cobalto px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Saltar al contenido
        </a>
        <Encabezado />
        <div className="flex-1">{children}</div>
        <Pie />
      </body>
    </html>
  );
}
