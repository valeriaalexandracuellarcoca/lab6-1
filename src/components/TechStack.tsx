export default function TechStack() {
  const categories = [
    {
      title: "Frontend & UI",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      color: "bg-white",
      accent: "bg-[#5C85FF]"
    },
    {
      title: "Backend & API",
      items: ["Node.js", "Python", "GraphQL", "REST APIs"],
      color: "bg-white",
      accent: "bg-[#D98BFF]"
    },
    {
      title: "Infra & Cloud",
      items: ["AWS", "Docker", "PostgreSQL", "Redis"],
      color: "bg-white",
      accent: "bg-black"
    }
  ];

  return (
    <section id="tecnologias" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 text-left md:text-center max-w-4xl mx-auto">
          <h2 className="font-display font-black text-6xl md:text-8xl tracking-tighter mb-8 uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#5C85FF] to-[#D98BFF] drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
            Stack Técnico
          </h2>
          <p className="font-sans font-bold text-2xl text-white bg-black border-4 border-[#5C85FF] p-6 shadow-[8px_8px_0_0_#D98BFF]">
            Seleccionamos la herramienta adecuada para cada problema, priorizando rendimiento, seguridad y escalabilidad a largo plazo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className={`${cat.color} border-4 border-white p-8 shadow-[12px_12px_0_0_#5C85FF] hover:translate-x-2 hover:translate-y-2 hover:shadow-[4px_4px_0_0_#D98BFF] transition-all duration-300 text-black`}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-8 h-8 border-4 border-black ${cat.accent}`}></div>
                <h3 className="font-display font-black text-3xl uppercase tracking-wide">{cat.title}</h3>
              </div>
              
              <div className="flex flex-col gap-4">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="bg-white border-4 border-black py-4 px-6 font-sans font-black text-xl flex items-center justify-between shadow-[4px_4px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
