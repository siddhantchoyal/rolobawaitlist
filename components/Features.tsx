import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-cream border-t border-brand-sage/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-base text-brand-green font-black tracking-[0.3em] uppercase mb-4">The Engine</h2>
          <p className="text-4xl leading-tight font-black tracking-tight text-brand-dark sm:text-6xl">
            Everything You Need <br/> To Own Your Market.
          </p>
          <p className="mt-6 max-w-2xl text-xl text-brand-dark/60 mx-auto font-medium">
            Most agencies charge you for "leads" that are shared with 5 other guys. We land you exclusive jobs and only bill when the work is done.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-white rounded-[2rem] p-10 shadow-xl hover:shadow-2xl transition-all border border-brand-green/5 flex flex-col group hover:-translate-y-2 duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-brand-green/10 text-brand-green mb-8 group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shadow-inner">
                <feature.icon size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4">{feature.title}</h3>
              <p className="text-brand-dark/60 leading-relaxed flex-grow font-medium">{feature.description}</p>
              
              <div className="mt-8 pt-6 border-t border-brand-green/5">
                <span className="text-xs font-black text-brand-green uppercase tracking-widest">Performance Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;