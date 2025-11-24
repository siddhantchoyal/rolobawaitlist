import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Background overlay */}
        <div 
            className="fixed inset-0 bg-slate-900/75 transition-opacity backdrop-blur-sm" 
            aria-hidden="true"
            onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="bg-white rounded-md text-slate-400 hover:text-slate-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X size={24} />
            </button>
          </div>

          {submitted ? (
              <div className="p-8 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                  <p className="text-slate-500 mb-6">
                      Thanks for your interest in Roloba. One of our growth specialists will reach out to you shortly to schedule your demo.
                  </p>
                  <button 
                    onClick={onClose}
                    className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-3 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:text-sm"
                  >
                      Close
                  </button>
              </div>
          ) : (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl leading-6 font-bold text-slate-900 mb-2" id="modal-title">
                        Start Your Growth Engine
                    </h3>
                    <p className="text-sm text-slate-500 mb-6">
                        Get full access to Lead Gen, AI, and the Operating System. Fill out the form below to get started.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="business" className="block text-sm font-medium text-slate-700">Business Name</label>
                            <input type="text" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" placeholder="Acme Plumbing" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                            <input type="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" placeholder="john@acme.com" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone Number</label>
                            <input type="tel" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border p-2" placeholder="(555) 123-4567" />
                        </div>
                        
                        <div className="pt-4">
                            <button type="submit" className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-3 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:text-sm transition-colors">
                                Get Started Now
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;