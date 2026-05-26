import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react';

export default function Projects() {
  const projects = [
    { 
      title: "Platform Dashboard", 
      category: "SaaS / Fintech",
      desc: "Arquitectura escalable para procesamiento de datos financieros en tiempo real y dashboards analíticos.",
      icon: <Monitor size={48} strokeWidth={3} />,
      color: "bg-[#5C85FF]" 
    },
    { 
      title: "Omnichannel Commerce", 
      category: "E-Commerce",
      desc: "Infraestructura headless conectando inventarios físicos y plataformas de venta digitales.",
      icon: <Smartphone size={48} strokeWidth={3} color="black" />,
      color: "bg-[#D98BFF] text-black" 
    },
    { 
      title: "Logistics Optimizer", 
      category: "Operaciones",
      desc: "Algoritmos de rutas y tracking en tiempo real para flotas terrestres y aéreas.",
      icon: <Monitor size={48} strokeWidth={3} color="white" />,
      color: "bg-black text-white" 
    } 
  ];

  return (
    <section id="proyectos" className="py-24 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="font-display font-black text-6xl md:text-8xl text-black tracking-tighter max-w-2xl uppercase">
            Casos de <br/> Estudio
          </h2>
          <a href="#" className="inline-flex items-center gap-2 font-sans font-bold text-xl hover:bg-black hover:text-white border-4 border-transparent hover:border-black px-4 py-2 transition-colors uppercase tracking-wide group focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none">
            Ver Todos <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
          </a>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <div key={idx} className={`group flex flex-col h-full border-4 border-black shadow-[12px_12px_0_0_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#000] transition-all overflow-hidden relative bg-white`}>
              
              {/* Graphic Header */}
              <div className={`${proj.color} border-b-4 border-black p-8 relative overflow-hidden flex-shrink-0 min-h-[240px] flex items-center justify-center`}>
                <div className="font-display font-black text-9xl opacity-20 absolute -right-4 -bottom-8 mix-blend-overlay">
                  0{idx + 1}
                </div>
                {/* Abstract shape */}
                <div className="w-32 h-32 border-4 border-black bg-white group-hover:bg-gradient-to-r group-hover:from-[#5C85FF] group-hover:to-[#D98BFF] group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                   {proj.icon}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="p-8 flex flex-col flex-grow bg-white text-black">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-sans font-black uppercase tracking-widest text-sm bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] text-black border-2 border-black px-3 py-1">
                    {proj.category}
                  </span>
                </div>
                <h3 className="font-display font-black text-4xl mb-6 leading-tight uppercase">{proj.title}</h3>
                <p className="font-sans text-xl font-bold leading-relaxed mb-8 flex-grow">
                  {proj.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-2 font-display font-black uppercase text-lg tracking-widest border-t-4 border-black pt-6 group-hover:pl-4 transition-all">
                  Explorar Caso <span className="text-3xl leading-none text-[#5C85FF]">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
