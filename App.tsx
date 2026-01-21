import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LeadGenDeepDive from './components/LeadGenDeepDive';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import LegalModals from './components/LegalModals';
import CoreServices from './components/CoreServices';

export type View = 'home' | 'process' | 'case-studies' | 'services' | 'about';

function App() {
  const [view, setView] = useState<View>('home');
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const openFreeTrial = () => setIsCalendlyModalOpen(true);
  const closeFreeTrial = () => setIsCalendlyModalOpen(false);

  // Simple "routing" effect
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderView = () => {
    switch(view) {
      case 'process':
        return (
          <div className="animate-in fade-in duration-500">
            <CoreServices />
            <LeadGenDeepDive onOpenModal={openFreeTrial} />
          </div>
        );
      case 'case-studies':
        return (
          <div className="animate-in fade-in duration-500">
            <Testimonials />
            <Pricing onOpenModal={openFreeTrial} />
          </div>
        );
      case 'services':
        return (
          <div className="animate-in fade-in duration-500">
             <Features />
             <LeadGenDeepDive onOpenModal={openFreeTrial} />
          </div>
        );
      case 'about':
        return (
          <div className="animate-in fade-in duration-500 py-32 px-4 max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-black text-brand-dark uppercase tracking-tighter mb-8">About <span className="text-brand-green">Roloba</span></h1>
            <p className="text-2xl font-bold text-brand-dark/60 leading-relaxed mb-12">
              Roloba was founded on a single principle: Performance over Retainers. 
              We saw tree service owners getting burned by generic marketing agencies charging thousands for shared, low-quality leads.
              We decided to do things differently by only getting paid when our partners win.
            </p>
            <div className="bg-brand-green/5 p-12 rounded-[3rem] border-2 border-brand-green/10">
              <h3 className="text-3xl font-black text-brand-dark mb-4 uppercase">Our Performance Pledge</h3>
              <p className="text-lg font-bold text-brand-dark/50">
                Exclusive Residential Work. No shared leads. No setup fees. 10% commission only after you get paid.
              </p>
            </div>
            <button onClick={openFreeTrial} className="mt-12 bg-brand-orange text-white px-12 py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-all">
                Partner With Roloba
            </button>
          </div>
        );
      default:
        return (
          <div className="animate-in fade-in duration-500">
            <Hero onOpenModal={openFreeTrial} />
            <Features />
            <CoreServices />
            <Testimonials />
            <Pricing onOpenModal={openFreeTrial} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-green selection:text-white bg-brand-cream font-sans">
      
      <Navbar onOpenModal={openFreeTrial} setView={setView} currentView={view} />

      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer 
        openPrivacy={() => setLegalModalType('privacy')}
        openTerms={() => setLegalModalType('terms')}
        onContactClick={openFreeTrial}
        setView={setView}
      />

      <CalendlyModal 
        isOpen={isCalendlyModalOpen} 
        onClose={closeFreeTrial} 
      />
      
      <LegalModals 
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;