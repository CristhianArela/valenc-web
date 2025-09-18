import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactItem from "./ContactItem";

const ContactInfo = ({ visibleElements }) => {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email",
      info: "info@valenccompany.com",
    },
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Teléfono",
      info: "+51 914 112 487",
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      title: "Ubicación",
      info: "Puno",
    },
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "Horarios",
      info: "Lun - Vie: 8:00 AM - 6:00 PM",
    },
  ];

  return (
    <div
      className={`space-y-8 transition-all duration-500 ${
        visibleElements.has("contacto-info")
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-16"
      }`}
      data-animate="contacto-info"
    >
      {contacts.map((contact, index) => (
        <ContactItem key={index} {...contact} />
      ))}
    </div>
  );
};

export default ContactInfo;
