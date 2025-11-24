import React from 'react';
import { Zap, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
    openPrivacy: () => void;
    openTerms: () => void;
    onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ openPrivacy, openTerms, onContactClick }) => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 text-white p-1 rounded">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-xl text-slate-900">Roloba</span>
            </div>
            <p className="text-slate-500 text-sm">
              The operating system for modern home service businesses. Lead Gen, AI, and Management in one box.
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors"><Instagram size={20} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors"><Facebook size={20} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors"><Twitter size={20} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-primary-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-primary-600 transition-colors">Pricing</a></li>
              <li><a href="#ai-demo" className="hover:text-primary-600 transition-colors">AI Demo</a></li>
              <li><a href="#lead-gen" className="hover:text-primary-600 transition-colors">Lead Hunting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><a href="#lead-gen" className="hover:text-primary-600 transition-colors">Cold Calling</a></li>
              <li><a href="#lead-gen" className="hover:text-primary-600 transition-colors">Lead Generation</a></li>
              <li><a href="#features" className="hover:text-primary-600 transition-colors">Web Design</a></li>
              <li><a href="#viral-content" className="hover:text-primary-600 transition-colors">Short Form Content</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><button onClick={onContactClick} className="hover:text-primary-600 transition-colors text-left">Contact Sales</button></li>
              <li><button onClick={openPrivacy} className="hover:text-primary-600 transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={openTerms} className="hover:text-primary-600 transition-colors text-left">Terms of Service</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Roloba Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;