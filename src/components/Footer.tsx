import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12 mb-8">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
              ALP C.A. <span className="text-accent underline decoration-2 underline-offset-4 font-normal">Soluciones & Servicios</span>
            </h2>
            <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
              Respaldo corporativo total. Nos encargamos de tu contabilidad, nómina y obligaciones societarias en Ecuador para que tu negocio opere sin riesgos.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer text-white shadow-sm" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer text-white shadow-sm" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:-translate-y-1 transition-all duration-300 cursor-pointer text-white shadow-sm" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    <path d="M16.2 14c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.2-.2.2-.4s-.1-.4-.2-.5c-.1-.2-.4-1-.6-1.4-.1-.3-.3-.3-.4-.3h-.4c-.1 0-.3.1-.5.2-.2.2-.8.8-.8 2 0 1.2.8 2.3.9 2.5.1.2 1.7 2.6 4.2 3.6.6.2 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.6-.6 1.8-1.2.2-.6.2-1.1.1-1.2-.2-.2-.4-.2-.6-.3z" />
                  </svg>
               </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="/sas" className="hover:text-accent transition-colors">Constitución de SAS</a></li>
              <li><a href="/firma-electronica" className="hover:text-accent transition-colors">Firma Electrónica</a></li>
              <li><a href="/servicios" className="hover:text-accent transition-colors">Auditoría y NIIF</a></li>
              <li><a href="/servicios" className="hover:text-accent transition-colors">Cumplimiento IESS/MDT</a></li>
              <li><a href="/facturador" className="hover:text-accent transition-colors">Facturador Electrónico</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Santo Domingo, Ecuador</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>0991116753</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>contacto@alpca.ec</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="text-center text-slate-500 text-sm flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} ALP Soluciones & Servicios C.A. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
             <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacidad</span>
             <span className="hover:text-slate-300 cursor-pointer transition-colors">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
