import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        <div 
            className="fixed inset-0 bg-brand-dark/90 transition-opacity backdrop-blur-md" 
            aria-hidden="true"
            onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-brand-cream rounded-[2.5rem] text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl w-full border-4 border-brand-green/10">
          <div className="absolute top-0 right-0 pt-6 pr-6 z-10">
            <button
              type="button"
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full text-brand-dark/40 hover:text-brand-dark focus:outline-none transition-colors"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X size={20} />
            </button>
          </div>

          {submitted ? (
              <div className="p-12 text-center">
                  <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-brand-green/10 mb-8">
                      <CheckCircle className="h-10 w-10 text-brand-green" />
                  </div>
                  <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tight uppercase">Application Sent!</h3>
                  <p className="text-brand-dark/60 mb-8 font-bold text-lg leading-relaxed">
                      Our growth manager will review your business and call you to confirm your <span className="text-brand-green underline decoration-brand-green/30">exclusive territory</span> rights.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full inline-flex justify-center rounded-2xl border border-transparent shadow-xl px-8 py-4 bg-brand-green text-xl font-black text-white hover:bg-brand-dark focus:outline-none transition-all uppercase tracking-widest"
                  >
                      Finish
                  </button>
              </div>
          ) : (
            <div className="px-8 pt-10 pb-10 sm:px-12 sm:pb-12">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 mb-4 bg-brand-green/10 px-4 py-1.5 rounded-full">
                        <span className="text-brand-green font-black tracking-widest uppercase text-xs">Partner Application</span>
                    </div>
                    <h3 className="text-3xl font-black text-brand-dark mb-3 tracking-tight uppercase" id="modal-title">
                        Secure Your Area
                    </h3>
                    <p className="text-brand-dark/60 font-bold">
                        We only partner with ONE tree service per county. <br/>Apply to see if yours is still open.
                    </p>
                </div>
                    
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2">Owner Name</label>
                            <input type="text" required className="block w-full rounded-2xl border-brand-green/10 shadow-sm focus:border-brand-green focus:ring-brand-green text-brand-dark font-black border p-4 bg-white" placeholder="First & Last" />
                        </div>
                        <div>
                            <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2">Company Name</label>
                            <input type="text" required className="block w-full rounded-2xl border-brand-green/10 shadow-sm focus:border-brand-green focus:ring-brand-green text-brand-dark font-black border p-4 bg-white" placeholder="e.g. Oak Experts" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2">Cell Phone (For Booking Alerts)</label>
                        <input type="tel" required className="block w-full rounded-2xl border-brand-green/10 shadow-sm focus:border-brand-green focus:ring-brand-green text-brand-dark font-black border p-4 bg-white" placeholder="(555) 000-0000" />
                    </div>
                    <div>
                        <label className="block text-xs font-black text-brand-dark/40 uppercase tracking-widest mb-2">Primary County Covered</label>
                        <input type="text" required className="block w-full rounded-2xl border-brand-green/10 shadow-sm focus:border-brand-green focus:ring-brand-green text-brand-dark font-black border p-4 bg-white" placeholder="e.g. Harris County, TX" />
                    </div>
                    
                    <div className="pt-6">
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full inline-flex justify-center items-center rounded-2xl border border-transparent shadow-2xl shadow-brand-orange/30 px-8 py-5 bg-brand-orange text-xl font-black text-white hover:bg-secondary-600 focus:outline-none focus:ring-4 focus:ring-brand-orange/20 transition-all transform active:scale-95 uppercase tracking-widest"
                        >
                            {loading ? <Loader2 className="animate-spin h-6 w-6" /> : (
                                <>
                                    Apply Now
                                    <ArrowRight className="ml-3 h-6 w-6" />
                                </>
                            )}
                        </button>
                        <p className="mt-4 text-center text-[10px] text-brand-dark/40 font-black uppercase tracking-widest">
                            No setup fee. No retainer. 10% on close.
                        </p>
                    </div>
                </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;