import React from "react";
import NavBar from "../../../components/Navbar.jsx";
import Hero from "../../../components/Hero.jsx";
import QuienesSomos from "../../../components/QuienesSomos.jsx";
import Services from "../../../components/Services.jsx";
import ContactSection from "../../../components/ContactSection.jsx";
import Footer from "../../../components/Footer.jsx";
import WhatsAppButton from "../../../components/WhatsAppButton.jsx";
import useVisibleElements from "../hooks/useVisibleElements.js"; // hook se queda en modules/home/hooks


const HomePage = () => {
  const visibleElements = useVisibleElements();

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full">
      <NavBar scrollToSection={scrollToSection} />

      <Hero scrollToSection={scrollToSection} />

      <QuienesSomos visibleElements={visibleElements} />

      <Services visibleElements={visibleElements} />

      <ContactSection visibleElements={visibleElements} />

      <Footer />

      <WhatsAppButton />

      {/* Mantengo tu CSS in-file para no perder estilos/animaciones */}
      <style jsx>{`
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

        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1e293b; }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #1c3a5a, #1c3a5a);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #1c3a5a, #1c3a5a);
        }

        @media (min-width: 1536px) {
          .max-w-7xl { max-width: 1280px; }
        }
      `}</style>
    </div>
  );
};

export { HomePage };
