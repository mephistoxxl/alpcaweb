import { 
  Target, 
  Building, 
  HandCoins, 
  Receipt, 
  PieChart, 
  Briefcase,
  Rocket,
  FileKey,
  CreditCard
} from "lucide-react";

const services = [
  {
    title: "Planificación Tributaria",
    description: "Analizamos tu modelo de negocio bajo la normativa vigente (LORTI) para identificar legítimas economías de opción. Eliminamos cargas fiscales excesivas y mitigamos riesgos ante futuras auditorías preventivas del SRI.",
    icon: Target,
  },
  {
    title: "Superintendencia de Compañías",
    description: "Garantizamos la vigencia jurídica de tu sociedad. Ejecutamos la carga de balances bajo NIIF, nóminas de accionistas y cumplimiento de normativas de control anual para evitar inhabilitaciones y bloqueos societarios.",
    icon: Building,
  },
  {
    title: "Recuperación de IVA y Renta",
    description: "Transformamos tus créditos tributarios represados en liquidez real. Levantamos expedientes técnicos y defendemos tu derecho a la devolución (retenciones en exceso, exportadores, etc.) con eficiencia comprobada en el SRI.",
    icon: HandCoins,
  },
  {
    title: "Declaraciones y Anexos",
    description: "Tu riesgo de contingencia fiscal será nulo. Realizamos el cruce de comprobantes electrónicos, control de retenciones y liquidación mensual o anual de impuestos, incluyendo el meticuloso Anexo Transaccional (ATS).",
    icon: Receipt,
  },
  {
    title: "Contabilidad Integral Corporativa",
    description: "Tus datos financieros convertidos en herramientas de decisión gerencial. Gestionamos tu teneduría de libros, elaboramos Estados de Resultados Integrales y Flujos de Efectivo para demostrar tu rentabilidad real.",
    icon: PieChart,
  },
  {
    title: "Gestión Laboral (IESS / MDT)",
    description: "Aseguramos la relación obrero-patronal previniendo juicios costosos. Gestionamos roles de pago, cálculo de utilidades, actas de finiquito en el SUT y el cumplimiento estricto de aportes y planillas ante el Seguro Social.",
    icon: Briefcase,
  },
  {
    title: "Constitución de Empresas (SAS)",
    description: "Estructuramos tu arquitectura corporativa desde cero rápido y sin complicaciones. Creamos tu Sociedad por Acciones Simplificada blindando tu patrimonio personal y dándote luz verde ágil para operar legalmente.",
    icon: Rocket,
  },
  {
    title: "Firmas Electrónicas",
    description: "Autenticidad infalible para tus flujos digitales. Emitimos y certificamos tu firma electrónica válida (.p12 o Token) en tiempo récord, dejándote listo para facturar, gestionar aduanas o licitar en el SERCOP.",
    icon: FileKey,
  },
  {
    title: "Facturación Electrónica",
    description: "Tecnología al servicio de tu recaudación. Implementamos entornos inteligentes que te permiten emitir comprobantes, guías de remisión y notas de crédito de manera instántea y 100% alineada a las reglas del SRI.",
    icon: CreditCard,
  }
];

export default function ServicesGrid() {
  return (
    <section id="soluciones" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent tracking-widest uppercase mb-3">Servicios Tributarios y Contables Especializados</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Soluciones contables integrales para empresas, pymes y personas naturales en Ecuador</h3>
          <p className="text-slate-600">Reemplazamos tu carga administrativa tradicional por un servicio consultivo ágil frente a la compleja estructura fiscal del Ecuador (SRI, Municipios, SuperCías). Todo gestionado por expertos para tu total tranquilidad.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_2px_20px_rgb(0,0,0,0.03)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Decorative Accent Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0f172b] to-[#1e3a5f] flex items-center justify-center mb-6 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-[19px] font-bold text-primary mb-3 leading-snug">{service.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
