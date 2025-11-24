import React from 'react';
import { CORE_SERVICES } from '../constants';

const CoreServices: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">The Foundation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                A Complete Operating System
            </p>
            <p className="mt-4 text-lg text-slate-500">
                You don't just get the advanced AI and Lead Gen tools. You get the entire business management suite included.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SERVICES.map((service) => (
            <div key={service.id} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-colors">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white text-primary-600 shadow-sm mb-4 border border-slate-100">
                <service.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;