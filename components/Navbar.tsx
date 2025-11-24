import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <div className="bg-primary-600 text-white p-1.5 rounded-lg">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">Roloba</span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#features" className="text-slate-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#lead-gen" className="text-slate-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Lead Gen</a>
              <a href="#ai-demo" className="text-slate-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">AI Demo</a>
              <a href="#pricing" className="text-slate-500 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex flex-shrink-0">
              <button 
                onClick={onOpenModal}
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all"
              >
                Get Started
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Features</a>
            <a href="#lead-gen" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Lead Gen</a>
            <a href="#ai-demo" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">AI Demo</a>
            <a href="#pricing" onClick={handleMobileLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50">Pricing</a>
            <button 
              onClick={() => {
                  setIsOpen(false);
                  onOpenModal();
              }}
              className="w-full mt-4 block px-4 py-3 text-center font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;