import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#D98BFF] selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      {/* Heavy Brutalist Footer */}
      <footer className="bg-black text-white py-16 border-t-8 border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter bg-[#5C85FF] text-black px-6 py-2 border-4 border-white shadow-[8px_8px_0_0_#fff]">
            Levo Solution
          </div>
          <div className="font-sans font-bold text-xl md:text-2xl text-white bg-black border-4 border-[#D98BFF] p-4 shadow-[6px_6px_0_0_#D98BFF]">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
