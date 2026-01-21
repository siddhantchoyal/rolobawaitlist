import React from 'react';
import { ArrowRight, Check, Gift, Target, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden bg-brand-cream pt-6 pb-12 lg:pt-20 lg:pb-32">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badges */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-[9px] sm:text-xs font-black text-brand-green ring-1 ring-inset ring-brand-green/20 uppercase tracking-[0.2em]">
                <Target size={14} className="text-brand-orange" />
                #1 Growth Engine for Tree Pros
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-4 py-1.5 text-[9px] sm:text-xs font-black text-brand-orange ring-1 ring-inset ring-brand-orange/20 uppercase tracking-[0.2em] shadow-sm">
                <ShieldCheck size={14} />
                1 Spot Per County
            </div>
        </div>

        <h1 className="text-[2.6rem] sm:text-7xl lg:text-8xl font-black tracking-tighter text-brand-dark mb-6 sm:mb-8 leading-[0.9] uppercase max-w-5xl">
          Exclusive <span className="text-brand-green italic">Residential</span><br />
          Tree Jobs.
        </h1>
        
        <p className="mt-2 text-sm sm:text-xl text-brand-dark/70 max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed font-bold px-4">
           We find the homeowners. We book the quotes. You close the jobs. <br className="hidden md:block"/>
           <span className="text-brand-dark block mt-2 font-black underline decoration-brand-green/30 decoration-4 underline-offset-4">Get your first 3 booked quotes for free to verify our quality.</span>
        </p>

        <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-6 sm:gap-8 px-2">
             <button 
               onClick={onOpenModal}
               className="w-full bg-brand-orange text-white rounded-[1.8rem] sm:rounded-[2.5rem] px-6 sm:px-12 py-5 sm:py-8 font-black text-lg sm:text-2xl hover:bg-secondary-600 transition-all transform hover:scale-[1.02] shadow-2xl shadow-brand-orange/40 flex flex-col items-center justify-center gap-1 uppercase tracking-wider"
             >
                <span className="flex items-center gap-3">
                    Claim 3 Free Quotes
                    <ArrowRight size={24} strokeWidth={3} className="hidden sm:block" />
                </span>
                <span className="text-[8px] sm:text-xs opacity-80 font-bold tracking-[0.1em] mt-0.5 sm:mt-1">Zero Retainers • Performance Only</span>
             </button>

             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <div className="flex -space-x-3 sm:-space-x-4 overflow-hidden">
                    {[10, 15, 22, 33, 44].map((i) => (
                        <img
                            key={i}
                            className="inline-block h-8 w-8 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl ring-2 sm:ring-4 ring-brand-cream object-cover grayscale hover:grayscale-0 transition-all"
                            src={`https://randomuser.me/api/portraits/men/${i}.jpg`}
                            alt="Top Tree Professional"
                        />
                    ))}
                </div>
                <div className="text-center sm:text-left">
                    <p className="text-brand-dark font-black text-[9px] sm:text-sm uppercase tracking-tight">Trusted by 50+ Top American Arborists</p>
                    <p className="text-brand-green font-bold text-[8px] sm:text-xs uppercase tracking-[0.15em]">Scaling exclusively with Roloba Performance Agency</p>
                </div>
             </div>
        </div>
        
        {/* Proof Points */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-12 w-full max-w-5xl px-4">
            {[
                { label: 'High-Ticket Removals', icon: Target },
                { label: '3 Free Estimates', icon: Gift },
                { label: 'Pay After Closing', icon: Check },
                { label: 'Locked Territories', icon: Check }
            ].map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-brand-dark font-black text-[8px] sm:text-[10px] uppercase tracking-widest bg-white/40 sm:bg-transparent p-3 sm:p-0 rounded-2xl border border-brand-green/5 sm:border-0">
                    <div className="bg-brand-green/10 p-2 sm:p-3 rounded-xl">
                        <item.icon className={`w-3.5 h-3.5 sm:w-5 sm:h-5 ${item.icon === Gift ? 'text-brand-orange' : 'text-brand-green'}`} strokeWidth={4} />
                    </div>
                    <span className="text-center">{item.label}</span>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;