import React from "react";

const Services = ({ visibleElements }) => {
  return (
    <section id="servicios" className="py-20 w-full bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`text-center mb-20 transition-all duration-500 ${
            visibleElements.has("servicios-header")
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-16"
          }`}
          data-animate="servicios-header"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 relative">
            Nuestros Servicios
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] rounded-full"></div>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Ofrecemos soluciones integrales en construcción y alquiler de maquinaria especializada
          </p>
        </div>

        <div className="space-y-20">
          {/* Card base style */}
          {[
            {
              id: "servicio-1",
              title: "Ejecución de Obras Públicas",
              items: [
                "Carreteras y vías urbanas",
                "Puentes y infraestructura vial",
                "Sistemas de drenaje",
                "Obras de saneamiento",
                "Infraestructura municipal",
                "Proyectos de desarrollo urbano",
              ],
              img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Road_construction_in_progress.jpg",
              imgAlt: "Obras públicas - construcción de carretera",
              reverse: false,
            },
            {
              id: "servicio-2",
              title: "Construcción Privada",
              items: [
                "Edificaciones comerciales",
                "Complejos residenciales",
                "Instalaciones industriales",
                "Centros logísticos",
                "Remodelaciones y ampliaciones",
                "Proyectos arquitectónicos especializados",
              ],
              img: "construccion.jpeg",
              imgAlt: "Construcción privada - andamios y estructura de edificio",
              reverse: true,
            },
            {
              id: "servicio-3",
              title: "Alquiler de Maquinaria Pesada y Equipos",
              items: [
                "Excavadoras compactas",
                "Cargadores frontales",
                "Compactadores vibratorios",
                "Martillos neumáticos",
                "Equipos de elevación",
                "Herramientas especializadas",
              ],
              img: "maquinarias.png",
              imgAlt: "Maquinaria - excavadora y equipo en obra",
              reverse: false,
            },
            {
              id: "servicio-4",
              title: "Venta de Agregados",
              items: [
                "Arena fina",
                "Arena gruesa",
                "Piedra chancada",
                "Gravilla",
                "Tierra negra",
                "Otros materiales para construcción",
              ],
              img: "volquete.jpeg",
              imgAlt: "Venta de agregados - pilas de arena y grava",
              reverse: true,
            },
          ].map((service, i) => (
            <div
              key={service.id}
              className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-stretch transition-all duration-500 ${
                visibleElements.has(service.id)
                  ? "opacity-100 translate-x-0"
                  : i % 2 === 0
                  ? "opacity-0 -translate-x-24"
                  : "opacity-0 translate-x-24"
              }`}
              data-animate={service.id}
            >
              {/* Texto */}
              <div
                className={`bg-white p-10 lg:p-12 rounded-3xl border border-gray-200 shadow-2xl shadow-gray-400/80 hover:shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden group flex flex-col ${
                  service.reverse ? "lg:order-2" : ""
                }`}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a]"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                  {service.title}
                </h3>
                <ul className="space-y-4 text-gray-600 text-lg lg:text-xl mb-auto">
                  {service.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center transition-all duration-300 hover:text-slate-800 hover:translate-x-2"
                    >
                      <span className="text-[#1c3a5a] text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Imagen */}
              <div
                className={`rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-400/80 hover:shadow-[0_20px_50px_-5px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-105 relative group min-h-[420px] lg:min-h-[480px] ${
                  service.reverse ? "lg:order-1" : ""
                }`}
              >
                <div className="h-full w-full">
                  <img
                    src={service.img}
                    alt={service.imgAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/40 via-transparent to-[#1c3a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
