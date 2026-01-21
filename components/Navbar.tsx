import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { View } from '../App';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
    onOpenModal: () => void;
    setView: (view: View) => void;
    currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal, setView, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const menuItems: { label: string; view: View }[] = [
    { label: 'Services', view: 'services' },
    { label: 'Our Process', view: 'process' },
    { label: 'Case Studies', view: 'case-studies' },
    { label: 'About', view: 'about' }
  ];

  const handleNav = (v: View) => {
    setView(v);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Header - Increased Z-Index to stay on top of overlay */}
      <div className="sticky top-0 z-[130] bg-brand-cream/95 backdrop-blur-xl border-b border-brand-sage/10 shadow-sm">
        <nav className="max-w-7xl mx-auto py-4 sm:py-5 px-4 sm:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Always clickable to go home */}
            <div className="cursor-pointer transition-transform active:scale-95 relative z-[140]" onClick={() => handleNav('home')}>
              <Logo size={28} />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
                {menuItems.map((item) => (
                    <button
                        key={item.view}
                        onClick={() => handleNav(item.view)}
                        className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-brand-green relative group ${currentView === item.view ? 'text-brand-green' : 'text-brand-dark/40'}`}
                    >
                        {item.label}
                        <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green transition-transform duration-300 ${currentView === item.view ? 'scale-x-100' : 'scale-x-0'}`} />
                    </button>
                ))}
            </div>

            {/* Desktop Actions & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 relative z-[140]">
              <button 
                onClick={onOpenModal}
                className="hidden sm:block bg-brand-green text-white px-5 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/20"
              >
                Claim 3 Free Quotes
              </button>
              
              <button 
                className={`md:hidden p-3 rounded-xl shadow-sm ring-1 ring-brand-sage/10 active:scale-90 transition-all ${isMenuOpen ? 'bg-brand-green text-white' : 'bg-white text-brand-dark'}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Immersive Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-brand-cream z-[120] flex flex-col p-8 pt-28 animate-in fade-in zoom-in-95 duration-300">
          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
              {menuItems.map((item, index) => (
                  <button
                      key={item.view}
                      onClick={() => handleNav(item.view)}
                      className={`text-5xl font-black uppercase tracking-tighter text-left transition-all ${currentView === item.view ? 'text-brand-green' : 'text-brand-dark'}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                  >
                      {item.label}
                  </button>
              ))}
          </div>

          {/* Social Proof / Territory Info */}
          <div className="mt-12 bg-white p-6 rounded-[2rem] shadow-inner border border-brand-sage/5">
              <div className="flex items-center gap-3 mb-3">
                  <div className="bg-brand-orange/10 p-2 rounded-lg">
                      <ShieldCheck size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-brand-dark">Exclusive Rights</span>
              </div>
              <p className="text-brand-dark/50 text-xs font-bold leading-relaxed">
                  We only partner with one residential tree pro per county. First come, first served territory locks.
              </p>
          </div>
          
          {/* Mobile Bottom CTA Area */}
          <div className="mt-auto pb-6 space-y-4">
            <button 
              onClick={() => { onOpenModal(); setIsMenuOpen(false); }}
              className="w-full bg-brand-orange text-white py-6 rounded-2xl font-black text-xl uppercase tracking-[0.05em] shadow-2xl shadow-brand-orange/30 flex items-center justify-center gap-3 active:scale-95 transition-all"
            >
              Claim 3 Free Quotes
              <ArrowRight size={20} strokeWidth={3} />
            </button>
            
            <div className="flex items-center justify-between px-2">
                <p className="text-[10px] font-black text-brand-dark/30 uppercase tracking-[0.2em]">Partner with Roloba Agency</p>
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse"></div>
                    <span className="text-[9px] font-black text-brand-green uppercase tracking-widest">Network Live</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;