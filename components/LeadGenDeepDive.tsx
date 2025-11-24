import React from 'react';
import { Mail, Phone, UserCheck, ArrowRight } from 'lucide-react';

interface LeadGenProps {
    onOpenModal?: () => void;
}

const LeadGenDeepDive: React.FC<LeadGenProps> = ({ onOpenModal }) => {
  return (
    <section id="lead-gen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            We Don't Just Manage Leads. <br/>
            <span className="text-primary-600">We Hunt Them For You.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
            Most software waits for the phone to ring. Roloba goes out and rings the phone for you. 
            Our dedicated outreach systems work 24/7 to fill your calendar with high-value jobs.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            
            <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-shadow hover:shadow-lg">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white shadow-lg">
                  <Phone size={24} />
                </div>
              </div>
              <h3 className="mt-6 text-lg leading-6 font-bold text-slate-900">Commercial Cold Calling</h3>
              <p className="mt-2 text-base text-slate-500">
                We identify businesses and property managers in your area. Our professional team calls them to pitch your services and secure recurring commercial contracts.
              </p>
            </div>

            <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-shadow hover:shadow-lg">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white shadow-lg">
                  <Mail size={24} />
                </div>
              </div>
              <h3 className="mt-6 text-lg leading-6 font-bold text-slate-900">Targeted Cold Emailing</h3>
              <p className="mt-2 text-base text-slate-500">
                We launch high-volume, personalized email campaigns to decision-makers. We handle the follow-ups until they are ready to book an estimate.
              </p>
            </div>

            <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-shadow hover:shadow-lg">
              <div className="absolute -top-6 left-8">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary-500 text-white shadow-lg">
                  <UserCheck size={24} />
                </div>
              </div>
              <h3 className="mt-6 text-lg leading-6 font-bold text-slate-900">Residential Targeting</h3>
              <p className="mt-2 text-base text-slate-500">
                We target homeowners in your specific zip codes for renovations, repairs, and maintenance. We turn neighbors into lifelong customers.
              </p>
            </div>

          </div>
          
          <div className="mt-16 text-center">
              <button 
                onClick={onOpenModal}
                className="inline-flex items-center text-primary-600 font-bold text-lg hover:text-primary-700 transition-colors"
              >
                  See Our Lead Gen Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGenDeepDive;