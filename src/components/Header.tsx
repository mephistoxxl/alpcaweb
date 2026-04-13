"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/sas", label: "SAS" },
  { href: "/firma-electronica", label: "Firma Electrónica" },
  { href: "/servicios", label: "Servicios" },
  { href: "/facturador", label: "Facturador" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
            {navItems.map((item) => {
              const isActive = isActiveRoute(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium pb-1 border-b-2 transition-colors ${isActive ? "text-accent border-accent" : "text-slate-600 border-transparent hover:text-accent"}`}
                >
                  {item.label}
                </Link>
              );
            })}
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
