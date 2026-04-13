import { ArrowRight, RefreshCcw } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-10 lg:pt-16 pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 lg:items-start">
          
          <div className="lg:w-7/12 animate-fade-in-up mt-8 lg:mt-0 lg:pt-4">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6">
              Tu Socio Estratégico en <span className="text-primary">Asesoría Financiera</span> y Contable en Ecuador.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Control contable y tributario riguroso para la seguridad legal de tu empresa. Gestionamos tu cumplimiento corporativo ante el <strong className="text-primary font-semibold">SRI, SuperCías, IESS y MDT</strong>, optimizando la carga impositiva y previniendo multas. Te brindamos certezas operativas para que te enfoques exclusivamente en la rentabilidad de tu negocio en Ecuador.
            </p>
          </div>

          <div className="lg:w-5/12 w-full relative">
            {/* Formulario Copiado Exacto */}
            <div className="bg-white px-8 py-10 w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-2xl shadow-xl lg:shadow-none lg:rounded-none border border-slate-100 lg:border-none">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[15px] font-semibold text-[#482845]">Nombre*</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[15px] font-semibold text-[#482845]">Apellido*</label>
                    <input type="text" className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[15px] font-semibold text-[#482845]">Correo*</label>
                    <input type="email" className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[15px] font-semibold text-[#482845]">Teléfono*</label>
                    <input type="tel" className="w-full px-4 py-2.5 bg-[#e9e2e6] rounded-xl outline-none" />
                  </div>
                </div>

                <div className="space-y-1 mt-2">
                  <label className="text-[15px] font-semibold text-[#482845]">¿Qué tipo de servicios estás buscando?*</label>
                  <textarea rows={3} className="w-full px-4 py-3 bg-[#e9e2e6] rounded-xl outline-none resize-none"></textarea>
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input type="checkbox" className="mt-1 w-4 h-4 rounded border-gray-300 text-accent focus:ring-accent accent-accent" />
                  <p className="text-[11px] text-[#482845] leading-tight font-medium">
                    Al dar click en esta casilla, Ud. ofrece a ALP SOLUCIONES & SERVICIOS C.A., su consentimiento para que tratemos sus datos personales con la finalidad de ser contactado y atender su petición. Para conocer las condiciones relativas a la privacidad de sus datos personales, puede consultar nuestra Política de Privacidad <span className="text-[#fe6333] cursor-pointer">aquí</span>
                  </p>
                </div>

                {/* reCAPTCHA Mockup */}
                <div className="mt-6 p-4 border border-gray-200 rounded-[3px] bg-[#fdfdfd] flex border shadow-sm items-center justify-between w-full max-w-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 border-2 border-gray-300 rounded-[2px] bg-white"></div>
                    <span className="text-sm text-gray-700 font-medium">No soy un robot</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RefreshCcw className="w-6 h-6 text-[#1c3aa9] mb-1" />
                    <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                  </div>
                </div>

                <button type="button" className="w-full bg-[#fe6333] hover:bg-[#eb5b2f] text-white text-lg font-medium py-3 rounded-md transition-colors mt-6">
                  Enviar
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
