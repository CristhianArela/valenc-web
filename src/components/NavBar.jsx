import React, { useEffect, useState } from "react";

const NavBar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#1c3a5a] backdrop-blur-md py-3'
        : 'bg-[#1c3a5a] py-4'
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/valenc-web/logo.png"
                alt="Valenc Company Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto "
              />
            </div>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('#inicio')} className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1">Inicio</button>
              <button onClick={() => scrollToSection('#servicios')} className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1">Servicios</button>
              <button onClick={() => scrollToSection('#quienes')} className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1">Quiénes Somos</button>
              <button onClick={() => scrollToSection('#contacto')} className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1">Contacto</button>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label="Menú de navegación"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                <span className={`h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
                <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
              </div>
            </button>
          </div>

          <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1c3a5a] backdrop-blur-md border-t border-white/20 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 py-6 space-y-4">
              <button onClick={() => { scrollToSection('#inicio'); setIsMobileMenuOpen(false); }} className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group">
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span> Inicio
              </button>
              <button onClick={() => { scrollToSection('#servicios'); setIsMobileMenuOpen(false); }} className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group">
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span> Servicios
              </button>
              <button onClick={() => { scrollToSection('#quienes'); setIsMobileMenuOpen(false); }} className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group">
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span> Quiénes Somos
              </button>
              <button onClick={() => { scrollToSection('#contacto'); setIsMobileMenuOpen(false); }} className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group">
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span> Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
