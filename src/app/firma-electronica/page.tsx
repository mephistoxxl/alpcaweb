import { FileKey2, FileSignature, Laptop, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firma Electrónica Válida en Ecuador | ALPCA",
  description: "Obtén tu firma electrónica certificada (ARCOTEL) para facturación electrónica, trámites en el SRI, SuperCías y contratos legales con la asesoría de ALPCA.",
};

const uses = [
  {
    title: "Facturación Electrónica (SRI)",
    description: "Obligatoria para la emisión de comprobantes electrónicos válidos ante el Servicio de Rentas Internas.",
    icon: Laptop,
  },
  {
    title: "Trámites Públicos",
    description: "Gestiones online en SRI, IESS, Registro Civil, Superintendencia de Compañías, SERCOP y Aduana del Ecuador (ECUAPASS).",
    icon: FileKey2,
  },
  {
    title: "Contratos y Gestión Legal",
    description: "Firma digital de actas, finiquitos, contratos laborales (MDT) y acuerdos mercantiles sin papeles ni notarías presenciales.",
    icon: FileSignature,
  },
  {
    title: "Cero Repudio",
    description: "Respaldo jurídico total según la Ley de Comercio Electrónico. Un documento firmado es inalterable y vinculante legalmente.",
    icon: ShieldCheck,
  },
];

export default function SignPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-900 border-b-4 border-accent">
        <div className="absolute inset-0 bg-[url('/images/firma_electronica_hero.png')] bg-cover bg-center opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-sm font-semibold mb-6">
             Autorizado por ARCOTEL
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Identidad Digital Segura y <span className="text-accent-light">Legal</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Ahorra tiempo y dinero evitando traslados físicos. Obtén tu certificado de Firma Electrónica (.p12 o Token) y realiza trámites o factura electrónicamente en todo Ecuador.
          </p>
          <div className="flex justify-center">
            <Link href="#contacto" className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl">
              Tramitar mi Firma Electrónica
            </Link>
          </div>
        </div>
      </section>

      {/* Uses and benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">La llave para tus negocios modernos</h2>
            <p className="text-slate-600 text-lg">
              Desde el 2022, la firma en el Ecuador ya no es opcional si deseas operar una empresa de forma ágil y normativa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {uses.map((use, i) => (
              <div key={i} className="flex gap-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-accent flex items-center justify-center">
                  <use.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{use.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {use.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 lg:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            <div className="md:w-1/2 text-white">
               <h2 className="text-3xl lg:text-4xl font-bold mb-6">Requisitos simples</h2>
               <p className="text-slate-300 mb-8">Nuestros analistas gestionan todo con las entidades certificadoras oficiales. Solo necesitamos información básica según el tipo de persona.</p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Persona Natural: Cédula, papeleta de votación y planilla de servicio básico.</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">RUC (Negocios): Adicional a lo anterior, copia actualizada del RUC.</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium">Persona Jurídica: Nombramiento del representante y estatutos de la empresa.</span>
                 </div>
               </div>
            </div>
            
            <div className="md:w-1/2 w-full bg-slate-900 rounded-2xl p-8 border border-slate-700">
               <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">Nuestros Tiempos</h3>
               <div className="flex gap-4 items-start mb-6">
                 <div className="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">1</div>
                 <div>
                   <h4 className="text-slate-200 font-semibold mb-1">Carga de Datos</h4>
                   <p className="text-slate-400 text-sm">Recopilamos tus requisitos en 5 minutos por WhatsApp o correo.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">2</div>
                 <div>
                   <h4 className="text-slate-200 font-semibold mb-1">Aprobación y Entrega</h4>
                   <p className="text-slate-400 text-sm">Validada tu identidad (video de seguridad), entregamos tu archivo `.p12` validado en menos de 24 horas.</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
