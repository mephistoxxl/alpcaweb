import { Calculator, Scale, Briefcase, FileSearch, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios Contables y Legales Corporativos | ALPCA",
  description: "Protege a tu empresa en Ecuador con nuestros servicios de contabilidad (NIIF), auditoría tributaria, gestión de nómina (IESS/MDT) y representación legal corporativa.",
};

const services = [
  {
    title: "Contabilidad Integral (NIIF)",
    description: "Procesamos tu contabilidad de manera mensual garantizando el cumplimiento de las Normas Internacionales de Información Financiera.",
    features: ["Estados financieros", "Conciliación bancaria", "Libros mayores y diarios", "Emisión de balances para SuperCías"],
    icon: Calculator,
  },
  {
    title: "Planificación Tributaria (SRI)",
    description: "Minimiza tu carga fiscal dentro del marco legal ecuatoriano (LORTI). Nos encargamos de todas tus obligaciones tributarias.",
    features: ["Declaraciones de IVA (mensual/semestral)", "Declaración de Impuesto a la Renta", "Anexos Transaccionales (ATS)", "Gestión de devoluciones"],
    icon: FileSearch,
  },
  {
    title: "Gestión Laboral y Nómina",
    description: "Evita multas por incumplimiento laboral. Administramos el talento humano de tu empresa frente al IESS y Ministerio de Trabajo (MDT).",
    features: ["Roles de pago", "Avisos de entrada/salida (IESS)", "Contratos de trabajo y finiquitos", "Reglamentos internos"],
    icon: Briefcase,
  },
  {
    title: "Trámites y Defensa Societaria",
    description: "Asesoría legal corporativa completa. Mantenemos tus libros sociales al día y prevenimos que tu organización quede inactiva.",
    features: ["Transferencia de acciones", "Aumentos de capital", "Nombramientos empresariales", "Reactivación de compañías"],
    icon: Scale,
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Impactante */}
      <section className="bg-primary text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            Soluciones a la medida para mitigar riesgos <span className="text-accent underline decoration-4 underline-offset-4">tributarios y operativos</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            No permitas que las multas ahoguen la rentabilidad de tu negocio. Delega la carga administrativa a expertos y concéntrate en lo que mejor sabes hacer: <strong className="text-white">vender y crecer.</strong>
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-slate-100 flex flex-col h-full hover:border-accent hover:shadow-xl transition-all group">
                <div className="flex items-center gap-5 mb-6">
                  <div className="bg-blue-50 text-accent p-4 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                </div>
                
                <p className="text-slate-600 text-lg mb-8">
                  {service.description}
                </p>
                
                <div className="mt-auto">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">¿Qué incluye?</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2"></div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Confianza Prevención */}
      <section className="py-16 mb-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-10 flex flex-col lg:flex-row items-center gap-12 shadow-md">
            <div className="lg:w-1/3 flex justify-center">
               <ShieldAlert className="w-32 h-32 text-red-400 opacity-80" />
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-primary mb-4">El costo de la desactualización</h2>
              <p className="text-slate-600 text-lg mb-6">
                En Ecuador, incumplir fechas en el portal del SRI o cometer errores en la plataforma SUR (MDT) conlleva sanciones con salarios básicos, bloqueos en cuentas y hasta la disolución dictaminada por la SuperCías. 
              </p>
              <div className="bg-red-50 text-red-800 p-4 rounded-xl border border-red-100 font-medium">
                Con ALPCA, transfieres ese riesgo a nuestra firma contable especializada. Actuamos bajo auditoría continua.
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Boton Flotante o Bottom CTA */}
      <div className="flex justify-center pb-20">
         <Link href="#contacto" className="bg-primary hover:bg-primary-light text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl hover:shadow-primary/50 transition-all flex items-center gap-3 group">
            Cotizar Plan Contable
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
         </Link>
      </div>

    </div>
  );
}
