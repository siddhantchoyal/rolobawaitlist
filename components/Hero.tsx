import React from 'react';
import { CheckCircle, ArrowRight, PhoneCall } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 lg:pt-24 lg:pb-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-600 ring-1 ring-inset ring-primary-600/20 mb-8 animate-fade-in-up">
          <span className="mr-2 bg-primary-600 text-white rounded-full px-2 py-0.5 text-xs">New</span>
          Now with AI Voice & Active Lead Gen
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 max-w-4xl">
          Run Your Service Business On <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Autopilot</span>
        </h1>
        
        <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          The only platform that manages your business AND brings you new customers. 
          We handle the cold calling, content creation, and missed calls—so you can focus on the work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <button 
            onClick={onOpenModal}
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 md:text-xl shadow-lg hover:shadow-primary-500/30 transition-all transform hover:-translate-y-1"
          >
            Start Growing Today
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </button>
          <button 
            onClick={() => document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex justify-center items-center px-8 py-4 border border-slate-300 text-lg font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:text-xl transition-all"
          >
            View AI Demo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span>No per-lead fees</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span>Replaces 5+ software tools</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <CheckCircle className="text-green-500 h-5 w-5" />
                <span>Setup in 5 minutes</span>
            </div>
        </div>

        {/* Abstract Dashboard Placeholder */}
        <div className="mt-16 relative rounded-xl bg-slate-900 p-2 ring-1 ring-slate-900/10 shadow-2xl lg:-m-4 lg:rounded-2xl lg:p-4 w-full max-w-5xl mx-auto overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 opacity-50 group-hover:opacity-75 transition-opacity" />
            <img 
                src="https://picsum.photos/1200/800?grayscale&blur=2" 
                alt="Roloba Dashboard Interface" 
                className="rounded-md shadow-2xl ring-1 ring-white/10 w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur p-6 rounded-xl shadow-xl max-w-sm text-left border border-slate-200 transform transition-transform hover:scale-105">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 animate-pulse">
                            <PhoneCall size={20} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">Incoming Call: <span className="font-normal text-slate-600">Commercial Lead</span></p>
                            <p className="text-xs text-slate-500">AI Receptionist Active • Recording</p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg mb-3">
                        <p className="italic">"Hello! This is Roloba AI. I see you're looking for a quote on the warehouse HVAC project. I can book a site visit for tomorrow at 10 AM?"</p>
                    </div>
                    <div className="flex gap-2">
                       <button 
                        onClick={onOpenModal}
                        className="flex-1 py-2 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800 transition-colors"
                       >
                           Listen
                       </button>
                       <button 
                        onClick={onOpenModal}
                        className="flex-1 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded hover:bg-slate-50 transition-colors"
                       >
                           View Transcript
                       </button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;