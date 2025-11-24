import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-slate-900/75 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full max-h-[80vh] flex flex-col">
          
          <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
             <h3 className="text-lg font-bold text-slate-900">
                 {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
             </h3>
             <button onClick={onClose} className="text-slate-400 hover:text-slate-500">
                 <X size={24} />
             </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto">
             {type === 'privacy' ? (
                 <div className="prose prose-sm max-w-none text-slate-500">
                     <p><strong>Effective Date: Oct 2023</strong></p>
                     <p>At Roloba, we take your privacy seriously. This Privacy Policy describes how Roloba Inc. ("we", "us", or "our") collects, uses, and discloses your information.</p>
                     <h4 className="font-bold text-slate-900 mt-4">1. Information We Collect</h4>
                     <p>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or communicate with us. This may include your name, email address, phone number, and business details.</p>
                     <h4 className="font-bold text-slate-900 mt-4">2. How We Use Your Information</h4>
                     <p>We use your information to provide, maintain, and improve our services, specifically for our Lead Generation, AI, and Website building tools. We do not sell your personal data to third parties.</p>
                     <h4 className="font-bold text-slate-900 mt-4">3. AI & Data</h4>
                     <p>Our AI services (Voice and Chat) process data to provide automated responses. This data is processed securely and is used solely for the purpose of delivering the service to you.</p>
                 </div>
             ) : (
                 <div className="prose prose-sm max-w-none text-slate-500">
                     <p><strong>Last Updated: Oct 2023</strong></p>
                     <p>Welcome to Roloba. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>
                     <h4 className="font-bold text-slate-900 mt-4">1. Services</h4>
                     <p>Roloba provides a SaaS platform for home service businesses, including lead generation, AI automation, and business management tools. We reserve the right to modify or discontinue services at any time.</p>
                     <h4 className="font-bold text-slate-900 mt-4">2. Lead Generation Disclaimer</h4>
                     <p>While we strive to provide high-quality leads via our cold calling and emailing services, we cannot guarantee a specific number of conversions or contracts. Results vary by industry and location.</p>
                     <h4 className="font-bold text-slate-900 mt-4">3. Payments & Subscription</h4>
                     <p>The subscription fee is $197/month. Subscriptions renew automatically unless cancelled. Refunds are available within the first 14 days of service.</p>
                 </div>
             )}
          </div>
          
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
              <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-900 text-base font-medium text-white hover:bg-slate-800 focus:outline-none sm:text-sm">
                  Understood
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalModals;