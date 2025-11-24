import React from 'react';
import { Star, TrendingUp, CheckCircle } from 'lucide-react';
import { TESTIMONIALS, FEATURED_CASE_STUDY } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Trusted by 500+ Service Businesses
          </h2>
          <p className="mt-4 text-xl text-slate-500">
            See how contractors are scaling from $20k to $100k+ months using the Roloba engine.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 rounded-2xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Client Spotlight
                </span>
                <span className="text-slate-400 text-sm font-medium">{FEATURED_CASE_STUDY.industry}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                How {FEATURED_CASE_STUDY.business} Scaled Revenue by {FEATURED_CASE_STUDY.stats[0].growth} in 90 Days
              </h3>
              
              <blockquote className="border-l-4 border-primary-600 pl-4 mb-8">
                <p className="text-slate-300 italic text-lg">"{FEATURED_CASE_STUDY.quote}"</p>
              </blockquote>

              <div className="grid grid-cols-3 gap-4 border-t border-slate-800 pt-8">
                {FEATURED_CASE_STUDY.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</p>
                    <div className="flex items-center gap-1 text-green-400 text-xs font-bold uppercase tracking-wide mb-1">
                      <TrendingUp size={12} />
                      {stat.growth}
                    </div>
                    <p className="text-slate-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-64 lg:h-auto bg-slate-800">
              <img 
                src={FEATURED_CASE_STUDY.image} 
                alt="Case Study Graph" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-400" />
                        The Solution
                    </h4>
                    <p className="text-slate-200 text-sm leading-relaxed">
                        {FEATURED_CASE_STUDY.solution}
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;