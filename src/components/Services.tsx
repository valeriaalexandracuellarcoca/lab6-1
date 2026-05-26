import { ArrowRight, Code2, Cpu, Smartphone } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Desarrollo Cloud Nativo",
      description: "Arquitecturas de microservicios construidas para escalar elásticamente y optimizar costos operativos.",
      icon: Cpu,
      color: "bg-[#5C85FF]",
      textColor: "text-black"
    },
    {
      title: "Plataformas Web",
      description: "SPAs y SSR de altísimo rendimiento, enfocadas en métricas Core Web Vitals y conversión total.",
      icon: Code2,
      color: "bg-[#D98BFF]",
      textColor: "text-black"
    },
    {
      title: "Ecosistemas Móviles",
      description: "Apps nativas e híbridas diseñadas con principios UX rigurosos para retención de usuarios.",
      icon: Smartphone,
      color: "bg-black",
      textColor: "text-white"
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white border-b-4 border-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-3xl">
             <h2 className="font-display font-black text-6xl md:text-8xl mb-8 text-black tracking-tighter uppercase break-words">
                Servicios
             </h2>
             <p className="font-sans text-2xl font-bold text-black leading-relaxed border-l-8 border-[#5C85FF] pl-6">
               Soluciones modulares que evolucionan sincronizadas con tu modelo de negocio.
             </p>
          </div>
          
          <div className="shrink-0">
             <a href="#contacto" className="inline-flex items-center gap-3 font-sans font-black text-xl uppercase tracking-wide text-black hover:bg-black hover:text-[#D98BFF] border-4 border-transparent hover:border-black px-6 py-4 transition-colors group focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none">
               Agendar Consultoría <ArrowRight className="group-hover:translate-x-1 transition-transform" strokeWidth={4} />
             </a>
          </div>
        </div>
          
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon: Icon, color, textColor }: any) {
  return (
    <div className={`bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#5C85FF] transition-all group flex flex-col h-full`}>
      <div className={`w-24 h-24 shrink-0 border-4 border-black flex items-center justify-center mb-8 ${color} group-hover:-rotate-6 transition-transform`}>
        <Icon size={48} strokeWidth={3} className={textColor} />
      </div>
      <h3 className="font-display font-black text-black text-3xl md:text-4xl mb-6 leading-tight uppercase">{title}</h3>
      <p className="font-sans text-black text-xl font-bold leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}
