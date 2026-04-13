import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          <Link href="/" className="flex items-center ml-4 md:ml-8 lg:ml-12">
            <Image 
              src="/images/LOGOTIPO NEGRO ALP.png" 
              alt="ALPCA Logo" 
              width={300} 
              height={300} 
              className="h-24 md:h-28 lg:h-32 w-auto object-contain" 
              priority
              unoptimized={true}
            />
          </Link>

          <nav className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Inicio</Link>
            <Link href="/sas" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">SAS</Link>
            <Link href="/firma-electronica" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Firma Electrónica</Link>
            <Link href="/servicios" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Servicios</Link>
            <Link href="/facturador" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Facturador</Link>
            <Link href="/contacto" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Contacto</Link>
          </nav>

          <div>
            <Link href="/contacto" className="bg-accent hover:bg-primary-light text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm">
              Solicitar Asesoría
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
