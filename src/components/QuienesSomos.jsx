import React from "react";
import MisionCard from "./MisionCard.jsx";

const QuienesSomos = ({ visibleElements }) => {
  return (
    <section id="quienes" className="py-20 w-full bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            visibleElements.has("quienes-header")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
          data-animate="quienes-header"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 relative">
            Quiénes Somos
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] rounded-full"></div>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl lg:text-xl font-light leading-relaxed max-w-3xl mx-auto px-4 md:px-0 mb-4 tracking-wide">
            Somos <span className="font-semibold text-slate-800">Valenc Company</span>, especialistas en ejecución de obras públicas y privadas y en alquiler de maquinaria pesada. Combinamos experiencia técnica, equipos propios y procesos modernos para entregar proyectos seguros, eficientes y con cumplimiento estricto de plazos.
          </p>

          <p className="text-sm text-slate-500 max-w-2xl mx-auto">
            Trabajamos bajo normas de seguridad y control de calidad, priorizando la prevención, la transparencia con nuestros clientes y la entrega de resultados medibles.
          </p>
        </div>

        {/* SECCIÓN CARD + IMAGEN */}
        <div className="space-y-12">
          <div
            className={`grid lg:grid-cols-2 gap-12 items-stretch transition-all duration-500 ${
              visibleElements.has("quienes-card")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }`}
            data-animate="quienes-card"
          >
            {/* Card de misión */}
            <MisionCard />

            {/* Imagen */}
            <div className="rounded-3xl overflow-hidden shadow-xl transition-all duration-400 hover:scale-105 relative group h-full min-h-[20rem] flex">
              <img
                src="/valenc-web/mision.png"
                alt="Maquinaria y equipo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/30 via-transparent to-[#1c3a5a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </div>
          </div>

          {/* VALORES */}
          <div
            className={`grid lg:grid-cols-3 gap-8 transition-all duration-500 ${
              visibleElements.has("quienes-values")
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }`}
            data-animate="quienes-values"
          >
            {[
              {
                title: "Equipos Modernos",
                text: "Flota propia y equipada para maximizar productividad y reducir tiempos de ejecución.",
              },
              {
                title: "Equipo Especializado",
                text: "Operadores y técnicos certificados, con foco en seguridad y eficiencia operativa.",
              },
              {
                title: "Soporte Integral",
                text: "Asesoría técnica, logística y seguimiento para garantizar el éxito del proyecto.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
