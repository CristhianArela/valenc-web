import React from "react";

const ContactItem = ({ icon, title, info }) => {
  return (
    <div className="flex items-center p-6 lg:p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/15 hover:translate-x-3 group">
      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-slate-400 rounded-full flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-lg lg:text-xl font-semibold text-slate-300 mb-1">
          {title}
        </h4>
        <p className="text-gray-200 text-base lg:text-lg">{info}</p>
      </div>
    </div>
  );
};

export default ContactItem;
