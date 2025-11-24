import React from 'react';
import { Check } from 'lucide-react';
import { PRICING } from '../constants';

interface PricingProps {
  onOpenModal: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-slate-500">
            One plan. All features. No hidden upsells.
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 transform transition-all hover:scale-105 duration-300 relative">
            {PRICING.popular && (
                <div className="bg-primary-600 text-white text-center text-sm font-bold py-2 uppercase tracking-wide">
                    Most Popular Choice
                </div>
            )}
          <div className="px-6 py-10 sm:p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900">{PRICING.name}</h3>
            <div className="mt-6 flex items-baseline justify-center gap-1">
              <span className="text-6xl font-extrabold text-slate-900">{PRICING.price}</span>
              <span className="text-xl font-medium text-slate-500">{PRICING.period}</span>
            </div>
            <p className="mt-4 text-sm text-slate-500">Cancel anytime. No long-term contracts.</p>
            
            <ul className="mt-8 space-y-4 text-left">
              {PRICING.features.map((feature, index) => {
                 const isBold = feature.startsWith('**');
                 const cleanFeature = feature.replace(/\*\*/g, '');
                 return (
                    <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                        <Check className={`h-6 w-6 ${isBold ? 'text-primary-600' : 'text-green-500'}`} />
                    </div>
                    <p className={`ml-3 text-base ${isBold ? 'text-slate-900 font-bold' : 'text-slate-700 font-medium'}`}>
                        {cleanFeature}
                    </p>
                    </li>
                 );
              })}
            </ul>

            <div className="mt-10">
              <button 
                onClick={onOpenModal}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-secondary-500 hover:bg-secondary-600 md:text-xl transition-colors shadow-lg shadow-secondary-500/30"
              >
                {PRICING.cta}
              </button>
              <p className="mt-4 text-xs text-slate-400">
                Includes 14-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;