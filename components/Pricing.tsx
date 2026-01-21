import React from 'react';
import { Check, ShieldCheck, Gift, ArrowRight } from 'lucide-react';
import { PRICING } from '../constants';

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white border-t border-brand-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[10px] sm:text-base text-brand-green font-black tracking-[0.3em] uppercase mb-4">Pricing Model</h2>
          <p className="text-3xl sm:text-6xl font-black text-brand-dark uppercase tracking-tighter leading-none">Skin In The Game.</p>
          <p className="mt-4 text-base sm:text-xl text-brand-dark/60 font-bold">
            If we aren't booking you high-ticket jobs, we don't get paid.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-brand-cream rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden border-4 border-brand-green/10 transform transition-all duration-500 relative group">
            <div className="bg-brand-green text-white text-center text-[10px] sm:text-sm font-black py-4 uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <Gift size={16} className="text-brand-orange animate-bounce" />
                Waitlist Active: 1 Spot Per County
            </div>
          <div className="px-6 py-10 sm:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mb-4 uppercase tracking-tight">{PRICING.name}</h3>
            
            <div className="bg-brand-green/5 rounded-3xl p-8 sm:p-10 mb-8 sm:mb-10 border border-brand-green/10">
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl sm:text-7xl font-black text-brand-green">{PRICING.price}</span>
                    <span className="text-lg sm:text-xl font-black text-brand-green/60 uppercase tracking-tighter">Commission</span>
                </div>
                <p className="mt-2 text-brand-green/80 font-black uppercase text-[10px] tracking-widest">{PRICING.period}</p>
                <div className="mt-4 pt-4 border-t border-brand-green/10">
                    <p className="text-brand-orange font-black text-xs sm:text-sm uppercase tracking-wide">First 3 Estimates are 100% Free</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left mb-10 sm:mb-12">
              {PRICING.features.map((feature, index) => {
                 const isBold = feature.startsWith('**');
                 const cleanFeature = feature.replace(/\*\*/g, '');
                 return (
                    <li key={index} className="flex items-start list-none">
                        <div className="flex-shrink-0 mt-1">
                            <Check className={`h-4 w-4 sm:h-5 sm:w-5 ${isBold ? 'text-brand-orange' : 'text-brand-green'}`} strokeWidth={4} />
                        </div>
                        <p className={`ml-3 text-[11px] sm:text-sm ${isBold ? 'text-brand-dark font-black uppercase tracking-tight' : 'text-brand-dark/70 font-bold'}`}>
                            {cleanFeature}
                        </p>
                    </li>
                 );
              })}
            </div>

            <div className="space-y-4">
              <button 
                onClick={onOpenModal}
                className="w-full flex items-center justify-center gap-3 px-8 py-6 sm:py-7 border border-transparent text-lg sm:text-2xl font-black rounded-[2rem] text-white bg-brand-green hover:bg-brand-dark transition-all shadow-2xl shadow-brand-green/20 uppercase tracking-widest transform active:scale-95"
              >
                {PRICING.cta}
                <ArrowRight size={24} className="hidden sm:block" />
              </button>
              <div className="flex items-center justify-center gap-2 text-brand-dark/40 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} />
                No setup fee • No credit card required • Exclusive Territory
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;