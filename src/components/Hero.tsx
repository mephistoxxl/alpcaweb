import Link from "next/link";
import ContactForm from "./ContactForm";

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
            <div className="bg-white px-8 py-10 w-full max-w-md mx-auto lg:ml-auto lg:mr-0 rounded-2xl shadow-xl lg:shadow-none lg:rounded-none border border-slate-100 lg:border-none">
              <ContactForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
