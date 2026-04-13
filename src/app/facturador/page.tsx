import { Cloud, Smartphone, Zap, Receipt, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facturador Electrónico Autorizado SRI | ALPCA",
  description: "Sistema de facturación electrónica en Ecuador. Cumple con el SRI de forma rápida, segura y 100% en la nube desde cualquier dispositivo.",
};

const features = [
  {
    title: "100% en la Nube",
    description: "No requiere instalación. Accede desde tu celular, tablet o computadora con conexión a internet y factura 24/7.",
    icon: Cloud,
  },
  {
    title: "Autorización SRI en Tiempo Real",
    description: "El sistema se conecta directo con el SRI. Una vez que generas el comprobante, se autoriza y envía al mail del cliente al instante.",
    icon: Zap,
  },
  {
    title: "Control de Clientes e Inventario",
    description: "Guarda tu catálogo de productos, servicios y base de datos de clientes para autocompletar la factura en 2 clicks.",
    icon: Receipt,
  },
  {
    title: "Diseño Adaptable (Mobile-First)",
    description: "La interfaz gráfica está optimizada para que puedas emitir facturas en la calle, ideal para vendedores y repartidores.",
    icon: Smartphone,
  },
];

export default function BillerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 border-b-8 border-accent pt-20 pb-32 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-accent/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Sistema Actualizado (Offline / Online) SRI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
            Revoluciona tu forma de <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">Facturar</span>
          </h1>
          <p className="text-xl text-slate-300 md:w-2/3 mx-auto leading-relaxed mb-10">
            Olvídate de los blocs de notas y los sistemas lentos. Emite facturas electrónicas válidas por el SRI en segundos, reduciendo errores y ahorrando papel.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="#contacto" className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-lg text-lg font-bold transition-all shadow-xl hover:shadow-accent/40 flex items-center gap-2 group">
              Solicitar un Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-slate-50 relative -mt-10 rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-primary mb-4">Todo lo que necesitas para tu ciclo de ingresos</h2>
             <p className="text-slate-600 text-lg">El sistema es amigable e intuitivo, pensado para emprendedores, no para programadores.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {features.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-6 hover:shadow-md transition-shadow">
                <div className="bg-blue-50 text-accent p-4 rounded-xl h-fit">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Financieros */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary to-slate-900 rounded-3xl p-10 md:p-16 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Elige la eficiencia corporativa</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Según las regulaciones del SRI en Ecuador, la facturación electrónica es obligatoria. No cumplir con esto puede llevar a clausuras. Haz de la tecnología tu mejor aliado operativo.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                  <span>Cero costos de imprenta (blocs físicos).</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                  <span>Cero bodegas o carpetas para archivadores.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-light flex-shrink-0" />
                  <span>Tus facturas nunca se pierden, se respaldan en servidores cloud.</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center">
                 <h3 className="text-primary font-bold text-2xl mb-2">Plan Inicial</h3>
                 <div className="text-5xl font-black text-accent mb-4">$X <span className="text-lg text-slate-500 font-normal">/ anual</span></div>
                 <p className="text-slate-600 text-sm mb-8 font-medium">Contacta a nuestro equipo para armar el paquete que se ajuste al volumen de tu empresa.</p>
                 <Link href="#contacto" className="block w-full bg-slate-900 hover:bg-primary text-white py-3 rounded-lg font-bold transition-colors">
                   Cotizar Sistema
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
