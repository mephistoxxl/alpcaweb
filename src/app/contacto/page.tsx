import { MapPin, Phone, Mail } from "lucide-react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | ALPCA",
  description: "Comunícate con nuestros asesores corporativos en Ecuador. Estamos listos para resolver tus dudas legales, tributarias y societarias.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white py-20 text-center border-b-4 border-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            <span className="block text-slate-100">Agenda tu</span>
            <span className="relative inline-block mt-3 pb-2 text-slate-100">
              Asesoría Inicial
              <svg
                aria-hidden="true"
                viewBox="0 0 340 28"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-3 left-0 h-5 w-full"
              >
                <path
                  d="M6 16 C 74 6, 160 6, 334 14"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="4.2"
                  strokeLinecap="round"
                  opacity="0.95"
                />
                <path
                  d="M8 22 C 102 14, 202 14, 332 18"
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light">
            Déjanos tus datos y un especialista corporativo se pondrá en contacto contigo en menos de 24 horas laborables.
          </p>
        </div>
      </section>

      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Left Side: Info */}
            <div className="lg:w-1/3 bg-primary p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-8 text-accent-light">Información Corporativa</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-1">Oficina Principal</h3>
                      <p className="text-slate-400 text-sm">Santo Domingo, Ecuador</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-1">Atención Nacional</h3>
                      <p className="text-slate-400 text-sm">0991116753<br/>Lunes a Viernes, 08:30 - 17:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-1">Email</h3>
                      <p className="text-slate-400 text-sm">alpcontadoresyauditores@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                 <p className="text-sm font-light text-slate-400">© {new Date().getFullYear()} ALP Soluciones & Servicios C.A. Todos los derechos reservados.</p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3 p-10 lg:p-16 bg-white">
              <h2 className="text-3xl font-bold text-primary mb-8">Déjanos un mensaje</h2>

              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
