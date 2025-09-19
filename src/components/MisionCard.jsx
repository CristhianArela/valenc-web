import { BadgeCheck, ShieldCheck } from "lucide-react";

export default function MisionCard() {
  return (
    <div className="bg-white p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-3 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-slate-400 to-slate-600"></div>
      
      <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
        Nuestra misión
      </h3>
      <p className="text-gray-600 text-lg mb-6">
        Brindar soluciones integrales en construcción y maquinaria, priorizando
        seguridad, calidad y cumplimiento de plazos para maximizar el valor de
        cada proyecto.
      </p>

      <h4 className="text-xl font-semibold text-slate-800 mb-3">Visión</h4>
      <p className="text-gray-600 mb-6">
        Ser referentes regionales en ejecución de obras y servicios de
        maquinaria, innovando continuamente y cuidando el entorno.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        {/* Compromiso */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-400 rounded-full text-white">
            <BadgeCheck className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h5 className="font-semibold text-slate-800">Compromiso</h5>
            <p className="text-gray-600 text-sm">Cumplimos lo que prometemos.</p>
          </div>
        </div>

        {/* Seguridad */}
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-600 rounded-full text-white">
            <ShieldCheck className="w-6 h-6" strokeWidth={2} />
          </div>
          <div>
            <h5 className="font-semibold text-slate-800">Seguridad</h5>
            <p className="text-gray-600 text-sm">
              Protegemos a nuestro equipo y clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
