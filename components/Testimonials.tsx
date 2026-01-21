import React from 'react';
import { Star, TrendingUp, CheckCircle, Trees } from 'lucide-react';
import { TESTIMONIALS, FEATURED_CASE_STUDY } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-cream border-t border-brand-sage/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-[10px] sm:text-base text-brand-green font-black tracking-[0.3em] uppercase mb-4">Success Stories</h2>
          <p className="text-3xl leading-tight font-black tracking-tighter text-brand-dark sm:text-6xl uppercase">
            Trusted by the <br className="hidden sm:block"/>Industry's Best.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 mb-16 sm:mb-24">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 relative shadow-xl border border-brand-green/5 group hover:-translate-y-1 transition-all duration-300">
              <div className="flex gap-1 text-brand-orange mb-4 sm:mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-brand-dark font-bold leading-relaxed mb-6 sm:mb-8 italic text-base sm:text-lg">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl object-cover border-2 border-white shadow-md"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=228b4e&color=fff`; }}
                />
                <div>
                  <h4 className="font-black text-brand-dark text-sm sm:text-base uppercase tracking-tighter">{testimonial.name}</h4>
                  <p className="text-brand-green font-black text-[10px] uppercase tracking-widest">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study - Fixed Layout */}
        <div className="bg-brand-dark rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative border-4 border-brand-green/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
                <span className="bg-brand-orange text-white text-[9px] sm:text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                  Performance Case Study
                </span>
                <span className="text-white/40 text-[10px] sm:text-xs font-black uppercase tracking-widest">{FEATURED_CASE_STUDY.industry}</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tighter uppercase">
                How {FEATURED_CASE_STUDY.business} Hit <span className="text-brand-green">{FEATURED_CASE_STUDY.stats[0].value}</span> Monthly Revenue.
              </h3>
              
              <blockquote className="border-l-4 border-brand-green pl-6 mb-8 sm:mb-10 bg-white/5 py-4 rounded-r-2xl">
                <p className="text-white/80 italic text-lg sm:text-xl font-bold leading-relaxed">"{FEATURED_CASE_STUDY.quote}"</p>
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-white/5 pt-8 sm:pt-10">
                {FEATURED_CASE_STUDY.stats.map((stat, idx) => (
                  <div key={idx} className={idx === 2 ? "col-span-2 sm:col-span-1" : ""}>
                    <p className="text-xl sm:text-3xl font-black text-white mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1 text-brand-green text-[9px] sm:text-[10px] font-black uppercase tracking-widest mb-1">
                      <TrendingUp size={10} strokeWidth={3} />
                      {stat.growth}
                    </div>
                    <p className="text-white/30 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Visual / Solution (Fixed Empty Space) */}
            <div className="relative min-h-[300px] sm:min-h-[450px] lg:h-auto overflow-hidden order-1 lg:order-2 bg-[#0a111e]">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#228b4e 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
              
              {/* The Image */}
              <div className="absolute inset-0 z-0">
                  <img 
                    src={FEATURED_CASE_STUDY.image} 
                    alt="Success Outcome" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent hidden lg:block"></div>
              </div>
              
              {/* Content Box */}
              <div className="relative z-10 w-full h-full p-6 sm:p-10 flex items-center justify-center lg:items-end lg:justify-start">
                <div className="bg-brand-dark/60 backdrop-blur-2xl rounded-[1.5rem] sm:rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-2xl max-w-sm">
                    <h4 className="text-white font-black mb-4 flex items-center gap-3 uppercase tracking-widest text-[10px] sm:text-xs">
                        <CheckCircle size={18} className="text-brand-green" />
                        The Profit Blueprint
                    </h4>
                    <p className="text-white/90 font-bold leading-relaxed text-xs sm:text-sm">
                        {FEATURED_CASE_STUDY.solution}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-1 w-12 bg-brand-green rounded-full"></div>
                      <span className="text-white/40 text-[8px] uppercase font-black tracking-widest">Execution Verified</span>
                    </div>
                </div>
              </div>

              {/* Decorative Tree Icon if image breaks */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Trees size={300} className="text-white" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;