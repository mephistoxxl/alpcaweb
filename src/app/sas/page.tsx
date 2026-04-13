import { Building, Coins, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creación de SAS en Ecuador | ALPCA",
  description: "Constituye tu Sociedad por Acciones Simplificadas (SAS) en Ecuador sin capital mínimo y de forma 100% digital con la asesoría legal de ALPCA.",
};

const benefits = [
  {
    title: "Sin Capital Mínimo",
    description: "No necesitas congelar $400 en un banco. Puedes iniciar tu empresa comercialmente desde $1 simbólico.",
    icon: Coins,
  },
  {
    title: "Trámite 100% Digital",
    description: "El proceso se realiza en línea ante la Superintendencia de Compañías sin necesidad de firmar engorrosas escrituras públicas.",
    icon: Zap,
  },
  {
    title: "Protección Patrimonial",
    description: "Tu responsabilidad se limita únicamente al monto aportado, resguardando tu patrimonio y finanzas personales frente a terceros.",
    icon: ShieldCheck,
  },
  {
    title: "Constitución Unipersonal",
    description: "Puedes ser el único dueño (accionista único) y a la vez el Representante Legal. No dependes de terceras personas para empezar.",
    icon: Building,
  },
];

export default function SASPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right rounded-bl-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
              Emprendimiento formal en Ecuador
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-primary tracking-tight mb-6">
              Constituye tu empresa <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">SAS</span> hoy mismo.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Las Sociedades por Acciones Simplificadas (SAS) son la mejor figura societaria para formalizar tu negocio en Ecuador. Deja la burocracia en nuestras manos y opera legalmente en tiempo récord.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-lg text-sm md:text-base font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Quiero constituir mi SAS
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">¿Por qué elegir una SAS?</h2>
            <p className="text-slate-600 text-lg">
              La Ley Orgánica de Emprendimiento e Innovación trae facilidades históricas para el crecimiento del ecosistema corporativo ecuatoriano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proceso ágil con ALPCA</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">Te acompañamos desde el borrador inicial hasta la entrega de tu RUC.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-8">
            <div className="relative pt-6">
              <div className="text-8xl leading-none font-black text-white/5 absolute top-0 left-4 z-0 pointer-events-none select-none">01</div>
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-accent-light">Perfilación Societaria</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Comprobamos la disponibilidad del nombre, evaluamos el objeto social a usar y definimos si habrá uno o varios accionistas.</p>
              </div>
            </div>
            
            <div className="relative pt-6">
              <div className="text-8xl leading-none font-black text-white/5 absolute top-0 left-4 z-0 pointer-events-none select-none">02</div>
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-accent-light">Planteamiento de Estatutos</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Redactamos el contrato de constitución de la empresa con las cláusulas necesarias para blindar tu negocio legalmente.</p>
              </div>
            </div>

            <div className="relative pt-6">
              <div className="text-8xl leading-none font-black text-white/5 absolute top-0 left-4 z-0 pointer-events-none select-none">03</div>
              <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3 text-accent-light">SuperCías y RUC</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Firmamos de manera electrónica y registramos todo en la Superintendencia de Compañías para finalmente activar el RUC ante el SRI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Dale estatus jurídico a tu sueño emprendedor</h2>
          <p className="text-lg text-slate-600 mb-10">Con una SAS podrás abrir cuentas bancarias empresariales, acceder a créditos, contratar personal y proyectar máxima confianza a tus clientes corporativos.</p>
          <Link href="#contacto" className="inline-flex bg-accent hover:bg-primary text-white px-8 py-3.5 rounded-lg font-semibold transition-colors shadow-md">
            Consultar Tarifas de Creación
          </Link>
        </div>
      </section>
    </div>
  );
}
