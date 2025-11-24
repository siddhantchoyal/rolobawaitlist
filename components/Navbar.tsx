import React from 'react';
import Logo from './Logo';

const Navbar: React.FC<any> = () => {
  return (
    <nav className="w-full py-6 px-4 sm:px-8 max-w-7xl mx-auto relative z-20">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Logo />
        </div>

        {/* Simple CTA */}
        <div className="hidden sm:block">
           <a 
             href="#join" 
             onClick={(e) => {
               e.preventDefault();
               document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className="text-sm font-bold text-brand-dark hover:text-brand-green transition-colors"
           >
             Access Early
           </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;