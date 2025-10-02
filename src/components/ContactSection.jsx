import React from "react";
import ContactInfo from "./ContactInfo.jsx";
import ContactForm from "./ContactForm.jsx";


const ContactSection = ({ visibleElements }) => {
  return (
    <section id="contacto" className="py-20 w-full bg-gradient-to-br from-[#1c3a5a] to-[#1c3a5a] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className={`text-center mb-20 transition-all duration-500 ${visibleElements.has("contacto-header") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`} data-animate="contacto-header">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
            Contáctanos
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] rounded-full"></div>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed">Estamos listos para hacer realidad tu próximo proyecto</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <ContactInfo visibleElements={visibleElements} />
          <div className={`transition-all duration-500 ${visibleElements.has("contacto-form") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`} data-animate="contacto-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
