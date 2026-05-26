import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Solicitud enviada con éxito.");
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] text-black relative border-b-8 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-8 border-black shadow-[24px_24px_0_0_#000] overflow-hidden flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-5/12 p-10 md:p-16 border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-black text-white">
            <h2 className="font-display font-black text-6xl md:text-7xl mb-8 tracking-tighter leading-none uppercase">
              Diseñemos<br/>
              <span className="text-[#5C85FF]">el futuro.</span>
            </h2>
            <p className="font-sans text-2xl font-bold mb-12 border-l-8 border-[#D98BFF] pl-6">
              Agendemos una llamada liderada por ingeniería, no por ventas.
            </p>
            
            <div className="space-y-8 font-sans font-black text-xl">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 shrink-0 bg-white border-4 border-black text-black shadow-[6px_6px_0_0_#5C85FF] flex justify-center items-center group-hover:bg-[#5C85FF] transition-colors">
                  <Mail size={28} strokeWidth={3} />
                </div>
                <span className="group-hover:text-[#5C85FF] transition-colors">contacto@levosolution.com</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 shrink-0 bg-white border-4 border-black text-black shadow-[6px_6px_0_0_#D98BFF] flex justify-center items-center group-hover:bg-[#D98BFF] transition-colors">
                  <Phone size={28} strokeWidth={3} />
                </div>
                <span className="group-hover:text-[#D98BFF] transition-colors">+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-16 h-16 shrink-0 bg-white border-4 border-black text-black shadow-[6px_6px_0_0_#fff] flex justify-center items-center group-hover:bg-white group-hover:text-black transition-colors">
                  <MapPin size={28} strokeWidth={3} />
                </div>
                <span className="group-hover:text-[#fff] transition-colors">Operativo Global</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-10 md:p-16 bg-white">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block font-display font-black text-xl uppercase tracking-wider mb-4 text-black">Nombre</label>
                  <input 
                    id="nombre"
                    name="nombre"
                    type="text" 
                    autoComplete="name"
                    required
                    className="w-full bg-white border-4 border-black p-5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5C85FF] font-sans text-xl font-bold transition-all shadow-[6px_6px_0_0_#000]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-display font-black text-xl uppercase tracking-wider mb-4 text-black">Email Corporativo</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    autoComplete="email"
                    spellCheck={false}
                    required
                    className="w-full bg-white border-4 border-black p-5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D98BFF] font-sans text-xl font-bold transition-all shadow-[6px_6px_0_0_#000]"
                    placeholder="jane@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="detalles" className="block font-display font-black text-xl uppercase tracking-wider mb-4 text-black">Detalles del Proyecto</label>
                <textarea 
                  id="detalles"
                  name="detalles"
                  rows={5}
                  required
                  className="w-full bg-white border-4 border-black p-5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black font-sans text-xl font-bold transition-all resize-none shadow-[6px_6px_0_0_#000]"
                  placeholder="Describa sus objetivos técnicos y de negocio..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto font-display font-black text-2xl tracking-wide uppercase bg-black text-white px-16 py-6 border-4 border-black shadow-[8px_8px_0_0_#5C85FF] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#D98BFF] transition-all active:translate-y-2 active:shadow-[0px_0px_0_0_#5C85FF] focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
