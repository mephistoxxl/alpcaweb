import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ALPCA | Asesoría Financiera, Contable y Tributaria en Ecuador",
  description: "Firma experta en servicios contables corporativos, auditoría, planificación tributaria (LORTI), declaraciones SRI, constitución de empresas SAS y asesoría laboral Ministerio de Trabajo (MDT) a nivel nacional en Ecuador.",
  keywords: [
    "asesoría financiera Ecuador", 
    "servicios contables", 
    "SRI Ecuador", 
    "Superintendencia de Compañías", 
    "creación de SAS Ecuador", 
    "firma electrónica Ecuador", 
    "facturación electrónica", 
    "IESS patronal", 
    "MDT", 
    "auditoría externa", 
    "declaración de impuestos SRI", 
    "ALPCA"
  ],
  openGraph: {
    title: "ALPCA Ecuador | Expertos en Contabilidad y Tributación",
    description: "Delega tu contabilidad, trámites en el SRI y nómina a expertos calificados. Nos especializamos en la normativa ecuatoriana para blindar tu negocio.",
    locale: "es_EC",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
