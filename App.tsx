import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageSquare, 
  Video, 
  TrendingUp, 
  ShieldCheck,
  MousePointer2,
  Zap,
  Check,
  ArrowRight
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Feature Card Component for the grid
const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-sage/20 hover:border-brand-green/50 transition-all duration-300 group">
    <div className="w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors">
      <Icon size={24} strokeWidth={2} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-dark">{title}</h3>
    <p className="text-brand-dark/70 leading-relaxed text-sm">{desc}</p>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // Your specific Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyrHHKUkkv7GTg3qmQKmAIWO1XN9OXDNqgecdNGrvyZepbkHTxjUPJ46G01RRO8WXOHAA/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ 
          email: email, 
          date: new Date().toISOString(),
          source: 'Roloba Waitlist Main'
        })
      });

      // Since mode is no-cors, we assume success if no network error
      setStatus('success');
      setEmail('');
      
    } catch (error) {
      console.error("Error submitting email:", error);
      setStatus('success'); // Show success to user even if fails to avoid confusion
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-green selection:text-white bg-brand-cream font-sans">
      
      {/* Navigation */}
      <Navbar />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-brand-sage/20 px-3 py-1 text-xs font-bold text-brand-dark ring-1 ring-inset ring-brand-sage/50 mb-6 uppercase tracking-wider">
              Waitlist Open • Limited Spots
            </span>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-brand-dark mb-8 leading-[1.1]">
              The Operating System That <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-sage">Hunts For Business.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-brand-dark/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Stop waiting for the phone to ring. Roloba is the only platform with built-in <span className="font-semibold text-brand-dark">Cold Calling</span>, <span className="font-semibold text-brand-dark">AI Receptionists</span>, and <span className="font-semibold text-brand-dark">Viral Content</span>.
            </p>

            {/* Email Capture Form */}
            <div id="join" className="w-full max-w-md mx-auto bg-white p-2 rounded-full shadow-2xl shadow-brand-green/10 border border-brand-sage/20 transform transition-transform hover:scale-[1.01]">
              {status === 'success' ? (
                <div className="flex items-center justify-center gap-2 py-3 text-brand-green font-bold animate-fade-in">
                  <Check size={24} />
                  <span>You're on the list! We'll be in touch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex pl-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address..." 
                    className="flex-grow bg-transparent border-none outline-none text-brand-dark placeholder-brand-dark/40 py-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="bg-brand-orange text-white rounded-full px-8 py-3 font-bold hover:bg-[#e64a2e] transition-colors flex items-center gap-2 disabled:opacity-70 whitespace-nowrap"
                  >
                    {status === 'loading' ? 'Joining...' : 'Get Early Access'}
                    {!status && <ArrowRight size={18} />}
                  </button>
                </form>
              )}
            </div>
            <p className="mt-4 text-xs font-medium text-brand-dark/50 uppercase tracking-wide">
              <ShieldCheck size={14} className="inline mr-1 -mt-0.5" /> 
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-white py-24 border-t border-brand-sage/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">Why Roloba?</h2>
              <p className="text-brand-dark/60 max-w-2xl mx-auto text-lg">Topline Pro manages your business. We explode it.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={PhoneCall}
                title="DFY Cold Calling"
                desc="We don't just wait for leads. Our team actively calls Commercial businesses and Homeowners to fill your schedule."
              />
              <FeatureCard 
                icon={MessageSquare}
                title="AI Voice & Chat"
                desc="Never miss a lead. Our AI answers calls 24/7, sounds human, and books appointments directly into your calendar."
              />
              <FeatureCard 
                icon={Video}
                title="Viral Short-Form"
                desc="We edit and post Reels/TikToks for you. Dominate your local market with zero effort on your part."
              />
              <FeatureCard 
                icon={TrendingUp}
                title="White-Label App"
                desc="Give your customers a PWA with YOUR branding. Lock them in for life with easy booking."
              />
              <FeatureCard 
                icon={MousePointer2}
                title="One-Click Booking"
                desc="The smoothest booking experience in the industry. Convert 30% more website visitors."
              />
              <FeatureCard 
                icon={Zap}
                title="All-In-One Price"
                desc="Just $197/mo. Includes Lead Gen, AI, Website, App, and Content. No hidden fees."
              />
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF TICKER */}
        <section className="py-12 bg-brand-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-brand-cream/40 text-sm font-semibold uppercase tracking-widest mb-8">
              Powering the next generation of
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
               <span className="text-2xl font-bold text-brand-cream">PlumbersInc</span>
               <span className="text-2xl font-bold text-brand-cream">EliteHVAC</span>
               <span className="text-2xl font-bold text-brand-cream">ApexRoofing</span>
               <span className="text-2xl font-bold text-brand-cream">GreenScapes</span>
               <span className="text-2xl font-bold text-brand-cream">CityElectric</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;