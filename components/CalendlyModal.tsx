import React from 'react';
import { X } from 'lucide-react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border-4 border-brand-green/20 animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-brand-sage/10 flex items-center justify-between bg-brand-cream">
          <div>
            <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tighter">Start Your Free Trial</h3>
            <p className="text-brand-green font-bold text-xs uppercase tracking-widest mt-1">First 3 Quotes 100% Free • Performance Model</p>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white rounded-2xl text-brand-dark/40 hover:text-brand-dark hover:shadow-lg transition-all"
          >
            <X size={24} strokeWidth={3} />
          </button>
        </div>

        {/* Iframe Content */}
        <div className="flex-grow bg-white">
          <iframe 
            src="https://calendly.com/roloba/freetrial?embed_domain=roloba.com&embed_type=Inline"
            width="100%"
            height="100%"
            frameBorder="0"
            title="Schedule Free Trial"
          />
        </div>
        
        {/* Footer info */}
        <div className="p-4 bg-brand-cream border-t border-brand-sage/10 text-center">
            <p className="text-[10px] text-brand-dark/30 font-black uppercase tracking-[0.2em]">
                Secure Booking via Calendly • Roloba Partnership Activation
            </p>
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;