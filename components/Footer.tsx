import React from 'react';
import Logo from './Logo';
import { View } from '../App';

interface FooterProps {
    openPrivacy: () => void;
    openTerms: () => void;
    onContactClick: () => void;
    setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ openPrivacy, openTerms, onContactClick, setView }) => {
  return (
    <footer className="bg-brand-cream border-t border-brand-sage/20 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-xs">
              <Logo size={32} />
              <p className="mt-6 text-brand-dark/50 font-bold leading-relaxed text-sm">
                  Roloba is the industry's first performance marketing engine built strictly for residential tree service growth.
              </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-20 gap-y-8">
            <div>
              <h4 className="text-xs font-black text-brand-dark uppercase tracking-widest mb-6">Explore Roloba</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold text-brand-dark/60">
                <button onClick={() => setView('home')} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Home</button>
                <button onClick={() => setView('services')} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Services</button>
                <button onClick={() => setView('process')} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Our Process</button>
                <button onClick={() => setView('case-studies')} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Case Studies</button>
              </nav>
            </div>
            <div>
              <h4 className="text-xs font-black text-brand-dark uppercase tracking-widest mb-6">Partnership</h4>
              <nav className="flex flex-col gap-4 text-sm font-bold text-brand-dark/60">
                <button onClick={onContactClick} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Start Free Trial</button>
                <button onClick={openPrivacy} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Privacy Policy</button>
                <button onClick={openTerms} className="text-left hover:text-brand-green transition-colors uppercase tracking-tight">Terms of Service</button>
                <a href="mailto:hello@roloba.com" className="hover:text-brand-green transition-colors uppercase tracking-tight">Contact Support</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-brand-sage/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-brand-dark/30 text-[10px] font-black uppercase tracking-widest">
                &copy; {new Date().getFullYear()} Roloba Performance Agency. Designed for tree pros.
            </p>
            <div className="flex gap-4 items-center">
                <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse"></span>
                <p className="text-[10px] text-brand-green font-black uppercase tracking-widest">Roloba Network Status: Online</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;