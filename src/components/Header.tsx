import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b-4 border-black bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none">
          <img 
            src="/logo.png" 
            alt="Levo Solution Logo"
            className="h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform origin-left"
          />
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-sans font-bold text-lg">
          <a href="#servicios" className="text-black uppercase border-b-4 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all">Servicios</a>
          <a href="#tecnologias" className="text-black uppercase border-b-4 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all">Tecnologías</a>
          <a href="#proyectos" className="text-black uppercase border-b-4 border-transparent hover:border-black focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all">Proyectos</a>
          <a 
            href="#contacto" 
            className="bg-[#D98BFF] text-black px-8 py-3 border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_0_#000] focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none transition-all uppercase font-black tracking-wide"
          >
            Cotizar
          </a>
        </nav>
        
        {/* Mobile Hamburger */}
        <button 
          aria-label="Abrir menú"
          className="md:hidden p-2 border-4 text-black border-black bg-[#5C85FF] shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-[0px_0px_0_0_#000] focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none"
        >
          <Menu size={28} color="black" strokeWidth={4} />
        </button>
      </div>
    </header>
  );
}
