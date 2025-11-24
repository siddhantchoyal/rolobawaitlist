import React from 'react';
import Logo from './Logo';

const Footer: React.FC<any> = () => {
  return (
    <footer className="bg-brand-cream border-t border-brand-sage/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
              <Logo size={24} />
          </div>
          <p className="text-brand-dark/50 text-sm">
              &copy; {new Date().getFullYear()} Roloba Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-brand-dark/70">
              <a href="mailto:hello@roloba.com" className="hover:text-brand-green transition-colors">Contact</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;