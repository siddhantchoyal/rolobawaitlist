import React from 'react';
import { Trees, MapPin, Home, ArrowRight } from 'lucide-react';

interface LeadGenProps {
    onOpenModal?: () => void;
}

const LeadGenDeepDive: React.FC<LeadGenProps> = ({ onOpenModal }) => {
  return (
    <section id="lead-gen" className="py-24 bg-white border-t border-brand-sage/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-20">
          <h2 className="text-base text-brand-green font-black tracking-widest uppercase mb-4">Residential Precision</h2>
          <p className="text-4xl font-black text-brand-dark sm:text-6xl leading-[0.9] uppercase tracking-tighter">
            Booked Quotes in <br className="hidden sm:block"/> Your Target Zip Codes.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="relative bg-brand-cream p-10 rounded-[3rem] border-2 border-brand-green/5 transition-all hover:shadow-2xl group text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-3xl bg-brand-dark text-white mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Trees size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">Full Removals</h3>
              <p className="text-brand-dark/60 leading-relaxed font-bold">
                Our strategic marketing targets residential homeowners looking for high-value removals—large oaks, hazard pines, and complex crane jobs.
              </p>
            </div>

            <div className="relative bg-brand-cream p-10 rounded-[3rem] border-2 border-brand-green/5 transition-all hover:shadow-2xl group text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-3xl bg-brand-orange text-white mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <MapPin size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">Affluent Targeting</h3>
              <p className="text-brand-dark/60 leading-relaxed font-bold">
                We deploy neighborhood-specific campaigns in your most profitable territories, reaching homeowners who prioritize quality and safety.
              </p>
            </div>

            <div className="relative bg-brand-cream p-10 rounded-[3rem] border-2 border-brand-green/5 transition-all hover:shadow-2xl group text-center">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-3xl bg-brand-green text-white mb-8 group-hover:scale-110 transition-transform shadow-xl">
                <Home size={40} />
              </div>
              <h3 className="text-2xl font-black text-brand-dark mb-4 uppercase tracking-tight">Calendar Control</h3>
              <p className="text-brand-dark/60 leading-relaxed font-bold">
                Forget "leads" that don't answer. We qualify the scope and book the estimate directly on your schedule. You just show up and quote.
              </p>
            </div>

          </div>
          
          <div className="mt-20 text-center">
              <button 
                onClick={onOpenModal}
                className="group inline-flex flex-col items-center bg-brand-dark text-white font-black px-12 py-7 rounded-[2rem] hover:bg-brand-green transition-all shadow-2xl shadow-brand-dark/20 uppercase tracking-widest"
              >
                  <span className="flex items-center gap-3 text-xl">
                      Claim Your Free Trial
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] opacity-50 mt-1 font-bold">3 Booked Quotes Free • Performance Based thereafter</span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenDeepDive;