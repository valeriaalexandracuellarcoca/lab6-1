import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white border-b-4 border-black py-20 lg:py-32 relative overflow-hidden">
      {/* Heavy grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0zOS0zOUgxdjM4aDM4eiIgZmlsbD0iI2Q0ZDRkNCIvPjwvc3ZnPg==')] z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[6px_6px_0_0_#000] mb-12 font-sans font-bold text-sm tracking-wide uppercase">
          <span className="w-3 h-3 border-2 border-black bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] motion-safe:animate-pulse"></span>
          Ingeniería de Software
        </div>

        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[10rem] tracking-tighter leading-[0.9] mb-10 max-w-5xl uppercase">
          <span className="text-black inline-block bg-white px-4 border-4 border-black shadow-[8px_8px_0_0_#5C85FF] mb-4 md:mb-0">
            Levo
          </span>
          <br className="hidden md:block" />
          <span className="text-black inline-block bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] text-white px-4 border-4 border-black shadow-[8px_8px_0_0_#000] mt-2">
            Solution
          </span>
        </h1>
        
        <p className="font-sans font-bold text-black text-xl md:text-3xl leading-relaxed mb-16 max-w-3xl bg-white p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
          Construimos arquitecturas escalables y experiencias contundentes. Nada de plantillas, solo código puro.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
          <a 
            href="#contacto" 
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] text-black font-display font-black tracking-wider text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all uppercase"
          >
            Iniciar Proyecto <ArrowRight strokeWidth={4} size={28} />
          </a>
          <a 
            href="#proyectos" 
            className="flex items-center justify-center bg-white text-black font-display font-black tracking-wider text-xl px-12 py-6 border-4 border-black shadow-[8px_8px_0_0_#D98BFF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#D98BFF] focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all uppercase"
          >
            Ver Casos
          </a>
        </div>
      </div>
    </section>
  );
}
