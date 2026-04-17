"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center ml-6 md:ml-8 lg:ml-12">
              <Image
                src="/images/LOGOTIPO NEGRO ALP.png"
                alt="ALPCA Logo"
                width={300}
                height={300}
                className="h-28 md:h-28 lg:h-32 w-auto object-contain"
                priority
                unoptimized={true}
              />
            </Link>

            {/* Nav desktop */}
            <nav className="hidden md:flex gap-8 items-center">
              {navItems.map((item) => {
                const isActive = isActiveRoute(item.href);
                const isFacturador = item.href === "/facturador";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      isFacturador
                        ? `inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full border transition-colors ${
                            isActive
                              ? "bg-green-600 text-white border-green-600"
                              : "text-green-600 border-green-500 hover:bg-green-600 hover:text-white"
                          }`
                        : `text-sm font-medium pb-1 border-b-2 transition-colors ${
                            isActive ? "text-accent border-accent" : "text-slate-600 border-transparent hover:text-accent"
                          }`
                    }
                  >
                    {isFacturador && (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
                      </svg>
                    )}
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Botón CTA desktop + hamburguesa móvil */}
            <div className="flex items-center gap-3">
              <Link
                href="/contacto"
                className="hidden md:inline-flex bg-accent hover:bg-primary-light text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors shadow-sm"
              >
                Solicitar Asesoría
              </Link>

              {/* Botón hamburguesa — solo móvil */}
              <button
                id="mobile-menu-button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {/* Tres líneas animadas */}
                <span
                  className="block w-7 h-1 bg-slate-800 rounded-full transition-all duration-300"
                  style={{
                    transform: menuOpen ? "translateY(8px) rotate(45deg)" : "none",
                  }}
                />
                <span
                  className="block w-7 h-1 bg-slate-800 rounded-full my-1.5 transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1 }}
                />
                <span
                  className="block w-7 h-1 bg-slate-800 rounded-full transition-all duration-300"
                  style={{
                    transform: menuOpen ? "translateY(-8px) rotate(-45deg)" : "none",
                  }}
                />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Overlay oscuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menú desplegable móvil */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!menuOpen}
      >
        {/* Cabecera del drawer */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <span className="font-bold text-slate-800 text-lg">Menú</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col px-4 py-4 gap-1 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-slate-700 hover:bg-slate-50 hover:text-accent"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA al fondo del drawer */}
        <div className="px-6 py-6 border-t border-slate-100">
          <Link
            href="/contacto"
            className="block w-full text-center bg-accent hover:bg-primary-light text-white px-6 py-3 rounded-md text-sm font-semibold transition-colors shadow-sm"
          >
            Solicitar Asesoría
          </Link>
        </div>
      </div>
    </>
  );
}
