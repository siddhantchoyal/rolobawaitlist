import React from 'react';
import Logo from './Logo';

const Footer: React.FC<any> = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-cream border-t border-brand-sage/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
              <Logo size={24} />
          </div>
          
          {/* Internal Links for SEO */}
          <nav className="flex gap-6 text-sm font-medium text-brand-dark/70">
              <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-brand-green transition-colors">Home</button>
              <button onClick={() => scrollTo('features')} className="hover:text-brand-green transition-colors">Why Roloba?</button>
              <button onClick={() => scrollTo('join')} className="hover:text-brand-green transition-colors">Join Waitlist</button>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-brand-dark/50 text-sm">
                &copy; {new Date().getFullYear()} Roloba Inc. All rights reserved.
            </p>
            <a href="mailto:hello@roloba.com" className="text-sm font-medium text-brand-dark/70 hover:text-brand-green transition-colors">Contact Support</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;