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
        <div className="fixed inset-0 bg-brand-dark/80 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl w-full max-h-[80vh] flex flex-col">
          
          <div className="flex justify-between items-center px-6 py-4 border-b border-brand-sage/20">
             <h3 className="text-lg font-bold text-brand-dark">
                 {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
             </h3>
             <button onClick={onClose} className="text-brand-dark/40 hover:text-brand-dark">
                 <X size={24} />
             </button>
          </div>

          <div className="px-6 py-6 overflow-y-auto">
             {type === 'privacy' ? (
                 <div className="prose prose-sm max-w-none text-brand-dark/70">
                     <p><strong>Effective Date: Oct 2023</strong></p>
                     <p>At Roloba, we take your privacy seriously. This Privacy Policy describes how Roloba Inc. ("we", "us", or "our") collects, uses, and discloses your information.</p>
                     <h4 className="font-bold text-brand-dark mt-4">1. Information We Collect</h4>
                     <p>We collect information you provide directly to us, such as when you create an account, subscribe to our services, or communicate with us. This may include your name, email address, phone number, and business details.</p>
                     <h4 className="font-bold text-brand-dark mt-4">2. How We Use Your Information</h4>
                     <p>We use your information to provide, maintain, and improve our Lead Generation and Strategy services. We do not sell your personal data to third parties.</p>
                     <h4 className="font-bold text-brand-dark mt-4">3. Data Security</h4>
                     <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>
                 </div>
             ) : (
                 <div className="prose prose-sm max-w-none text-brand-dark/70">
                     <p><strong>Last Updated: Oct 2023</strong></p>
                     <p>Welcome to Roloba. By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>
                     <h4 className="font-bold text-brand-dark mt-4">1. Services</h4>
                     <p>Roloba provides Lead Generation and Marketing Strategy services for businesses. We reserve the right to modify or discontinue services at any time.</p>
                     <h4 className="font-bold text-brand-dark mt-4">2. Service Disclaimer</h4>
                     <p>While we strive to provide high-quality leads via our cold calling and emailing services, results may vary by industry and location. We do not guarantee specific revenue figures.</p>
                     <h4 className="font-bold text-brand-dark mt-4">3. Payments</h4>
                     <p>Service fees are determined by the custom proposal agreed upon. Refunds are handled according to the service agreement.</p>
                 </div>
             )}
          </div>
          
          <div className="px-6 py-4 bg-brand-cream border-t border-brand-sage/20">
              <button onClick={onClose} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-dark text-base font-medium text-white hover:bg-brand-green focus:outline-none sm:text-sm">
                  Understood
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LegalModals;