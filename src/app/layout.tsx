import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import { GlossaryProvider } from "@/components/glossary/GlossaryProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// next/font descarga y auto-hospeda las familias en build: sin peticiones a
// Google en tiempo de ejecución y sin salto de fuente.
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexMoni — Tu vida está en dos países. Tu cuenta también.",
  description:
    "Cuenta europea en euros para enviar dinero a Latinoamérica. IBAN a tu nombre, transferencias SEPA y SWIFT, tarjeta Visa. Dinero electrónico emitido por ConnectPay UAB, licencia EMI n.º 24 del Banco de Lituania.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <GlossaryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </GlossaryProvider>
      </body>
    </html>
  );
}
