import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | ALPCA",
  description: "Comunícate con nuestros asesores corporativos en Ecuador. Estamos listos para resolver tus dudas legales, tributarias y societarias.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 text-center border-b-4 border-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Agenda tu <span className="text-accent underline decoration-4 underline-offset-4">Asesoría Inicial</span>
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
                      <p className="text-slate-400 text-sm">contacto@alpca.ec<br/>asesoria@alpca.ec</p>
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
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Nombre o Razón Social</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                      placeholder="Ej. Empresa S.A." 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all" 
                      placeholder="correo@empresa.com" 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Servicio de Interés</label>
                  <select 
                    id="service" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option>Constitución de SAS</option>
                    <option>Emisión de Firma Electrónica</option>
                    <option>Contabilidad e Impuestos SRI</option>
                    <option>Nómina y Legalizaciones MDT</option>
                    <option>Software Facturador Electrónico</option>
                    <option>Consultoría General</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">¿Cómo podemos ayudarte?</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none" 
                    placeholder="Cuéntanos brevemente sobre la situación de tu negocio..." 
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-accent hover:bg-primary text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg hover:shadow-xl group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Enviar Consulta
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
