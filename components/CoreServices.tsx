import React from 'react';
import { CORE_SERVICES } from '../constants';

const CoreServices: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-brand-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-base text-brand-green font-black tracking-[0.3em] uppercase mb-4">The Workflow</h2>
            <p className="text-4xl leading-[0.9] font-black tracking-tighter text-brand-dark sm:text-7xl uppercase">
                A Simple Profit <br/>Engine.
            </p>
            <p className="mt-6 text-xl text-brand-dark/60 font-bold italic">
                You focus on the trees. We focus on the revenue.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SERVICES.map((service) => (
            <div key={service.id} className="bg-brand-cream rounded-[2.5rem] p-10 border border-brand-green/5 hover:border-brand-green/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center">
              <div className="flex items-center justify-center h-20 w-20 rounded-3xl bg-white text-brand-green shadow-inner mb-8 group-hover:bg-brand-green group-hover:text-white transition-all duration-500">
                <service.icon size={36} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-4 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-brand-dark/60 font-bold leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;