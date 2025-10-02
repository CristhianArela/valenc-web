import React from "react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="inicio"
      className="hero-bg min-h-screen w-full flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1c3a5a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1c3a5a]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#1c3a5a]/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white text-sm font-semibold">
              Innovación y Solidez en Construcción
            </span>
          </div>

          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl leading-tight">
            VALENC
            <br />
            COMPANY
          </h1>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-[#1c3a5a] mb-6"></div>

          <p className="hero-subtitle text-2xl sm:text-3xl text-white/90 mb-6 font-light">
            <ol>
  <li>Expertos en Construcción</li>
  <li>Maquinaria Especializada</li>
</ol>
 
          </p>

          <p className="hero-description text-lg sm:text-xl text-white/80 mb-10 leading-relaxed">
            Calidad y tecnología al servicio de tus proyectos.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("#contacto")}
              className="cta-button bg-[#1c3a5a] hover:bg-[#2a5080] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 hover:scale-105"
            >
              Solicitar Cotización →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
