import React, { useState, useEffect } from 'react';
import MisionCard from "../../../components/MisionCard";
import ContactInfo from "../../../components/ContactInfo";

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [formStatus, setFormStatus] = useState('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efecto para scroll de navegación
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer para animaciones
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animate]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elementsToObserve = document.querySelectorAll('[data-animate]');
    elementsToObserve.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Cerrar menú móvil al navegar
    }
  };

  // Toggle del menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // MANEJO DEL FORMULARIO CON FORMSPREE
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mandlejo', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('sent');
        setTimeout(() => {
          setFormStatus('idle');
          e.target.reset();
        }, 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = "51914112487"; // CAMBIA ESTE NÚMERO POR EL TUYO
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los servicios de Valenc Company. ¿Podrían brindarme más información?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen w-full">
      {/* Backdrop para cerrar menú móvil */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Navegación */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#1c3a5a] backdrop-blur-md py-3'
        : 'bg-[#1c3a5a] py-4'
        }`}>
        {/* Contenedor centrado para pantallas grandes */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Valenc Company Logo"
                className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto "
              />
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('#inicio')}
                className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('#servicios')}
                className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1"
              >
                Servicios
              </button>

              {/* Nuevo: Quiénes Somos */}
              <button
                onClick={() => scrollToSection('#quienes')}
                className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1"
              >
                Quiénes Somos
              </button>

              <button
                onClick={() => scrollToSection('#contacto')}
                className="text-white font-bold px-4 py-2 rounded-full transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:-translate-y-1"
              >
                Contacto
              </button>
            </div>

            {/* BOTÓN HAMBURGUESA MÓVIL */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110"
              aria-label="Menú de navegación"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                {/* Línea 1 */}
                <span
                  className={`h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                />
                {/* Línea 2 */}
                <span
                  className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"
                    }`}
                />
                {/* Línea 3 */}
                <span
                  className={`h-0.5 w-6 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                />
              </div>
            </button>
          </div>

          {/* MENÚ MÓVIL DESPLEGABLE */}
          <div
            className={`md:hidden absolute top-full left-0 right-0 bg-[#1c3a5a] backdrop-blur-md border-t border-white/20 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="px-6 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('#inicio')}
                className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group"
              >
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span>
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('#servicios')}
                className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group"
              >
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span>
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('#quienes')}
                className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group"
              >
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span>
                Quiénes Somos
              </button>
              <button
                onClick={() => scrollToSection('#contacto')}
                className="w-full text-left text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:text-gray-200 hover:bg-white/10 hover:translate-x-2 flex items-center group"
              >
                <span className="text-gray-300 mr-3 transition-transform duration-300 group-hover:scale-110">•</span>
                Contacto
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Hero Section - Usando CSS background */}
      <section
        id="inicio"
        className="hero-bg min-h-screen w-full flex items-center justify-center text-center relative overflow-hidden"
      >
        {/* Blobs animados */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1c3a5a]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1c3a5a]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-[#1c3a5a]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            VALENC COMPANY
          </h1>
          <p className="hero-subtitle text-xl sm:text-2xl text-slate-300 mb-8 font-light">
            Construcción y Maquinaria Especializada
          </p>
          <p className="hero-description text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
            Líderes en ejecución de obras públicas y privadas con tecnología de vanguardia
          </p>
          <button
            onClick={() => scrollToSection('#contacto')}
            className="cta-button inline-block bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-[#1c3a5a]/50 hover:-translate-y-3 hover:scale-105 animate-pulse"
          >
            Solicitar Cotización
          </button>
        </div>
      </section>

      {/* Quiénes Somos (estilo igual a Servicios) */}
      <section id="quienes" className="py-20 w-full bg-gradient-to-br from-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center mb-16 transition-all duration-500 ${visibleElements.has('quienes-header')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-16'
              }`}
            data-animate="quienes-header"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 relative">
              Quiénes Somos
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] rounded-full"></div>
            </h2>

            {/* Texto de presentación */}
            <p className="text-gray-600 text-lg sm:text-xl lg:text-xl font-light leading-relaxed max-w-3xl mx-auto px-4 md:px-0 mb-4 tracking-wide">
              Somos <span className="font-semibold text-slate-800">Valenc Company</span> — especialistas en obras públicas y privadas y en alquiler de maquinaria pesada.
              Combinamos experiencia local con procesos modernos para entregar proyectos seguros, eficientes y sostenibles. Nuestro enfoque es técnico, responsable y orientado a resultados.
            </p>

            {/* Nota decorativa */}
            <p className="text-sm text-slate-500 max-w-2xl mx-auto">
              Operamos con normas de seguridad y equipos propios para cumplir plazos y calidad en cada proyecto.
            </p>
          </div>

          <div className="space-y-12">
            {/* Bloque principal: texto + imagen */}
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-500 ${visibleElements.has('quienes-card')
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-24'
                }`}
              data-animate="quienes-card"
            >
              {/* Aquí ya usas el componente en vez del div */}
              <MisionCard />

              {/* Imagen con overlay */}
              <div className="rounded-3xl overflow-hidden shadow-xl transition-all duration-400 hover:scale-105 relative group">
                <img
                  src="/maquinaria.jpg"
                  alt="Maquinaria y equipo"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/30 via-transparent to-[#1c3a5a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            </div>

            {/* Segunda fila - valores */}
            <div
              className={`grid lg:grid-cols-3 gap-8 transition-all duration-500 ${visibleElements.has('quienes-values')
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-24'
                }`}
              data-animate="quienes-values"
            >
              {[
                { title: 'Equipos Modernos', text: 'Contamos con maquinaria reciente y mantenida para mayor eficiencia.' },
                { title: 'Equipo Especializado', text: 'Personal capacitado en seguridad y operación de equipos.' },
                { title: 'Soporte Integral', text: 'Asesoría y logística completa para tu proyecto.' }
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


      {/* Servicios */}
      <section id="servicios" className="py-20 w-full bg-gradient-to-br from-gray-50 to-gray-200">
        {/* Contenedor centrado para pantallas grandes */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div
            className={`text-center mb-20 transition-all duration-500 ${visibleElements.has('servicios-header')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-16'
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

          {/* Servicios Grid */}
          <div className="space-y-20">
            {/* Servicio 1 - Obras Públicas */}
            <div className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center transition-all duration-500 ${visibleElements.has('servicio-1')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-24'
              }`}
              data-animate="servicio-1">
              <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a]"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                  Ejecución de Obras Públicas
                </h3>
                <ul className="space-y-4 text-gray-600 text-lg lg:text-xl">
                  {[
                    'Carreteras y vías urbanas',
                    'Puentes y infraestructura vial',
                    'Sistemas de drenaje',
                    'Obras de saneamiento',
                    'Infraestructura municipal',
                    'Proyectos de desarrollo urbano'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center transition-all duration-300 hover:text-slate-800 hover:translate-x-2">
                      <span className="text-[#1c3a5a] text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105 relative group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Road_construction_in_progress.jpg"
                  alt="Obras públicas - construcción de carretera"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/40 via-transparent to-[#1c3a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            </div>

            {/* Servicio 2 - Construcción Privada */}
            <div className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center transition-all duration-500 ${visibleElements.has('servicio-2')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-24'
              }`}
              data-animate="servicio-2">
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105 relative group lg:order-1">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/011/295/508/non_2x/construction-site-and-bulldozzer-photo.jpg"
                  alt="Construcción privada - andamios y estructura de edificio"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/40 via-transparent to-[#1c3a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
              <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 relative overflow-hidden group lg:order-2">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a]"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                  Construcción Privada
                </h3>
                <ul className="space-y-4 text-gray-600 text-lg lg:text-xl">
                  {[
                    'Edificaciones comerciales',
                    'Complejos residenciales',
                    'Instalaciones industriales',
                    'Centros logísticos',
                    'Remodelaciones y ampliaciones',
                    'Proyectos arquitectónicos especializados'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center transition-all duration-300 hover:text-slate-800 hover:translate-x-2">
                      <span className="text-[#1c3a5a] text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Servicio 3 - Maquinaria */}
            <div className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center transition-all duration-500 ${visibleElements.has('servicio-3')
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-24'
              }`}
              data-animate="servicio-3">
              <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a]"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8">
                  Alquiler de Maquinaria Pesada y Equipos
                </h3>
                <ul className="space-y-4 text-gray-600 text-lg lg:text-xl">
                  {[
                    'Excavadoras compactas',
                    'Cargadores frontales',
                    'Compactadores vibratorios',
                    'Martillos neumáticos',
                    'Equipos de elevación',
                    'Herramientas especializadas'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center transition-all duration-300 hover:text-slate-800 hover:translate-x-2">
                      <span className="text-[#1c3a5a] text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105 relative group">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Caterpillar_M315C_excavator.JPG"
                  alt="Maquinaria - excavadora y equipo en obra"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/40 via-transparent to-[#1c3a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            </div>

            {/* Servicio 4 - Venta de Agregados */}
            <div
              className={`grid lg:grid-cols-2 gap-12 xl:gap-16 items-center transition-all duration-500 ${visibleElements.has('servicio-4') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-24'
                }`}
              data-animate="servicio-4"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-400 hover:scale-105 relative group lg:order-1 border border-gray-200">
                <img
                  src="https://www.unicon.com.pe/wp-content/uploads/2019/05/6.jpg"
                  alt="Venta de agregados - pilas de arena y grava"
                  className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1c3a5a]/40 via-transparent to-[#1c3a5a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>

              <div className="bg-white p-10 lg:p-14 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-400 hover:-translate-y-3 relative overflow-hidden group lg:order-2 border border-gray-200">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a]"></div>
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-10">
                  Venta de Agregados
                </h3>
                <ul className="space-y-5 text-gray-600 text-lg lg:text-xl pl-2">
                  {[
                    'Arena fina',
                    'Arena gruesa',
                    'Piedra chancada',
                    'Gravilla',
                    'Tierra negra',
                    'Otros materiales para construcción'
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center transition-all duration-300 hover:text-slate-800 hover:translate-x-2"
                    >
                      <span className="text-[#1c3a5a] text-2xl mr-4 transition-transform duration-300 group-hover:scale-110">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="py-20 w-full bg-gradient-to-br from-[#1c3a5a] to-[#1c3a5a] text-white"
      >
        {/* Contenedor centrado para pantallas grandes */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`text-center mb-20 transition-all duration-500 ${visibleElements.has("contacto-header")
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
              }`}
            data-animate="contacto-header"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
              Contáctanos
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] rounded-full"></div>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">
              Estamos listos para hacer realidad tu próximo proyecto
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Información de contacto con Lucide Icons */}
            <ContactInfo visibleElements={visibleElements} />

            {/* FORMULARIO CON FORMSPREE */}
            <div
              className={`transition-all duration-500 ${visibleElements.has("contacto-form")
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
                }`}
              data-animate="contacto-form"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 p-10 lg:p-12 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="space-y-8">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-3 text-lg">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      required
                      className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-3 text-lg">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      required
                      className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-3 text-lg">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="+51 999 999 999"
                      className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-3 text-lg">
                      Servicio de Interés
                    </label>
                    <select
                      name="servicio"
                      className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15"
                    >
                      <option value="" className="bg-[#1c3a5a] text-white">
                        Selecciona un servicio
                      </option>
                      <option value="obras-publicas" className="bg-[#1c3a5a] text-white">
                        Obras Públicas
                      </option>
                      <option
                        value="construccion-privada"
                        className="bg-[#1c3a5a] text-white"
                      >
                        Construcción Privada
                      </option>
                      <option
                        value="alquiler-maquinaria"
                        className="bg-[#1c3a5a] text-white"
                      >
                        Alquiler de Maquinaria
                      </option>
                      <option value="venta-agregados" className="bg-[#1c3a5a] text-white">
                        Venta de Agregados
                      </option>
                      <option value="consultoria" className="bg-[#1c3a5a] text-white">
                        Consultoría
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-3 text-lg">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      rows="5"
                      placeholder="Cuéntanos sobre tu proyecto..."
                      required
                      className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 resize-none"
                    ></textarea>
                  </div>

                  {/* BOTÓN CON ESTADOS MEJORADOS */}
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className={`w-full py-5 rounded-full font-bold text-xl transition-all duration-300 ${formStatus === "sending"
                        ? "bg-gradient-to-r from-slate-500 to-slate-600 text-white cursor-not-allowed"
                        : formStatus === "sent"
                          ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                          : formStatus === "error"
                            ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                            : "bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] text-white hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#1c3a5a]/50"
                      }`}
                  >
                    {formStatus === "sending"
                      ? "Enviando..."
                      : formStatus === "sent"
                        ? "¡Mensaje Enviado!"
                        : formStatus === "error"
                          ? "Error - Intenta de nuevo"
                          : "Enviar Mensaje"}
                  </button>

                  {/* Mensaje de éxito */}
                  {formStatus === "sent" && (
                    <div className="text-center text-green-300 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                      <p className="font-semibold">¡Gracias por contactarnos!</p>
                      <p className="text-sm">Te responderemos en menos de 24 horas.</p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#1c3a5a] text-white text-center py-12 border-t-4 border-[#1c3a5a] w-full">
        {/* Contenedor centrado para pantallas grandes */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-lg lg:text-xl mb-3 font-medium">&copy; 2025 Valenc Company. Todos los derechos reservados.</p>
          <p className="text-gray-300 text-base lg:text-lg">Construyendo el futuro con excelencia y compromiso</p>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-[#1c3a5a] hover:bg-[#1c3a5a] text-white w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        {/* Ícono de WhatsApp SVG */}
        <svg
          className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119" />
        </svg>
      </button>

      {/* CSS personalizado dentro del componente */}
      <style jsx>{`
        /* Animaciones para el Hero */
        .hero-title {
          opacity: 0;
          transform: translateY(50px);
          animation: fadeInUp 1s ease 0.5s forwards;
        }

        .hero-subtitle {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease 1s forwards;
        }

        .hero-description {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease 1.5s forwards;
        }

        .cta-button {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s ease 2s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #1e293b;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1c3a5a, #1c3a5a);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1c3a5a, #1c3a5a);
        }

        /* Contenedor centrado para pantallas grandes */
        @media (min-width: 1536px) {
          .max-w-7xl {
            max-width: 1280px;
          }
        }
      `}</style>
    </div>
  );
};

export { HomePage };
