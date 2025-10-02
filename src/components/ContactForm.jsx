import React, { useState } from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mandlejo', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setFormStatus('sent');
        setTimeout(() => {
          setFormStatus('idle');
          e.target.reset();
        }, 3000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  return (
    <div data-animate="contacto-form" className="transition-all duration-500">
      <form onSubmit={handleSubmit} className="bg-white/10 p-10 lg:p-12 rounded-3xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
        <div className="space-y-8">
          <div>
            <label className="block text-slate-300 font-semibold mb-3 text-lg">Nombre Completo *</label>
            <input type="text" name="nombre" placeholder="Tu nombre completo" required className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105" />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-3 text-lg">Email *</label>
            <input type="email" name="email" placeholder="tu@email.com" required className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105" />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-3 text-lg">Teléfono</label>
            <input type="tel" name="telefono" placeholder="+51 999 999 999" className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 focus:scale-105" />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-3 text-lg">Servicio de Interés</label>
            <select name="servicio" className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15">
              <option value="" className="bg-[#1c3a5a] text-white">Selecciona un servicio</option>
              <option value="obras-publicas" className="bg-[#1c3a5a] text-white">Obras Públicas</option>
              <option value="construccion-privada" className="bg-[#1c3a5a] text-white">Construcción Privada</option>
              <option value="alquiler-maquinaria" className="bg-[#1c3a5a] text-white">Alquiler de Maquinaria</option>
              <option value="venta-agregados" className="bg-[#1c3a5a] text-white">Venta de Agregados</option>
              <option value="consultoria" className="bg-[#1c3a5a] text-white">Consultoría</option>
            </select>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-3 text-lg">Mensaje *</label>
            <textarea name="mensaje" rows="5" placeholder="Cuéntanos sobre tu proyecto..." required className="w-full p-4 lg:p-5 border-2 border-white/20 rounded-xl bg-white/10 text-white text-lg placeholder-white/60 transition-all duration-300 focus:outline-none focus:border-slate-300 focus:bg-white/15 resize-none"></textarea>
          </div>

          <button type="submit" disabled={formStatus === "sending"} className={`w-full py-5 rounded-full font-bold text-xl transition-all duration-300 ${formStatus === "sending" ? "bg-gradient-to-r from-slate-500 to-slate-600 text-white cursor-not-allowed" : formStatus === "sent" ? "bg-gradient-to-r from-green-500 to-green-600 text-white" : formStatus === "error" ? "bg-gradient-to-r from-red-500 to-red-600 text-white" : "bg-gradient-to-r from-[#1c3a5a] to-[#1c3a5a] text-white hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-[#1c3a5a]/50"}`}>
            {formStatus === "sending" ? "Enviando..." : formStatus === "sent" ? "¡Mensaje Enviado!" : formStatus === "error" ? "Error - Intenta de nuevo" : "Enviar Mensaje"}
          </button>

          {formStatus === "sent" && (
            <div className="text-center text-green-300 bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <p className="font-semibold">¡Gracias por contactarnos!</p>
              <p className="text-sm">Te responderemos en menos de 24 horas.</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
