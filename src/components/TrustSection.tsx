"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section id="lafirma" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Respaldo de confianza para tu negocio</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Sabemos lo desafiante que es hacer empresa en Ecuador. En <strong className="text-primary font-semibold">ALP Soluciones & Servicios C.A.</strong> brindamos asesoría clara y directa; dominamos los procesos normativos ante el SRI y la Superintendencia de Compañías. Nuestra experiencia resolviendo casos reales a nivel nacional garantiza la estabilidad tributaria y la tranquilidad operativa que tu negocio necesita.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="text-slate-700 font-medium">Asesoría bajo normativas internacionales (NIIF)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="text-slate-700 font-medium">Cumplimiento estricto con el SRI y SuperCías</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent" />
                <span className="text-slate-700 font-medium">Prevención total de contingencias Laborales (MDT)</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative min-h-[400px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Animated Glowing Orb Background */}
            <div className="absolute w-80 h-80 bg-accent/20 rounded-full blur-[80px] animate-pulse pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-lg lg:max-w-xl group">
                {/* Real Photography - Corporate Trust */}
                <div className="absolute inset-0 bg-accent rounded-3xl transform rotate-3 scale-[1.02] opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image 
                  src="/images/GettyImages-1480239160-1536x960.webp" 
                  alt="Servicios de Contabilidad y Dashboards"
                  width={600}
                  height={600}
                  className="relative z-10 w-full h-auto object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:-translate-y-2" 
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
