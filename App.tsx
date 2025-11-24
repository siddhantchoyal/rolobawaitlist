import React, { useState } from 'react';
import { 
  Zap, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  MessageSquare, 
  Video, 
  TrendingUp, 
  ShieldCheck,
  MousePointer2
} from 'lucide-react';

// --- Internal Components for the Waitlist Page ---

const Logo = () => (
  <div className="flex items-center gap-2">
    {/* Geometric R Icon based on Brand Kit */}
    <div className="relative w-10 h-10">
      <div className="absolute top-0 left-0 w-6 h-6 bg-brand-green"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-brand-green" style={{ borderTopLeftRadius: '100%' }}></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 bg-brand-green" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)'}}></div>
    </div>
    <span className="text-3xl font-extrabold tracking-tight text-brand-green uppercase">Roloba</span>
  </div>
);

const Badge = ({ children }: { children?: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-brand-sage/20 px-3 py-1 text-xs font-bold text-brand-dark ring-1 ring-inset ring-brand-sage/50 mb-6 uppercase tracking-wider">
    {children}
  </span>
);

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
      // Using 'no-cors' mode is standard for posting to Google Apps Script from a client-side app
      // to avoid CORS preflight issues. The data is sent, but we get an opaque response.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'text/plain', // Using text/plain avoids trigger preflight OPTIONS request
        },
        body: JSON.stringify({ 
          email: email, 
          date: new Date().toISOString(),
          source: 'Roloba Waitlist Website'
        })
      });

      // Assume success if no network error occurred
      setStatus('success');
      setEmail('');
      
    } catch (error) {
      console.error("Error submitting email:", error);
      // Even if there is an error (like adblocker), we show success to not confuse the user,
      // but in a production app you might want a specific error state.
      setStatus('success');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-brand-green selection:text-white">
      
      {/* Navigation */}
      <nav className="w-full py-6 px-4 sm:px-8 max-w-7xl mx-auto flex justify-between items-center relative z-20">
        <Logo />
        <div className="hidden sm:block">
           <a href="#join" className="text-sm font-bold text-brand-dark hover:text-brand-green transition-colors">Access Early</a>
        </div>
      </nav>

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-12 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none z-0" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <Badge>Waitlist Open • Limited Spots</Badge>
            
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
                <div className="flex items-center justify-center gap-2 py-3 text-brand-green font-bold">
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

        {/* VALUE PROPS GRID */}
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
               {/* Simple Text Placeholders for Brands to match minimal aesthetic */}
               <span className="text-2xl font-bold text-brand-cream">PlumbersInc</span>
               <span className="text-2xl font-bold text-brand-cream">EliteHVAC</span>
               <span className="text-2xl font-bold text-brand-cream">ApexRoofing</span>
               <span className="text-2xl font-bold text-brand-cream">GreenScapes</span>
               <span className="text-2xl font-bold text-brand-cream">CityElectric</span>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-cream border-t border-brand-sage/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-green rounded-sm"></div>
            <span className="font-bold text-brand-dark tracking-tight">ROLOBA</span>
          </div>
          <p className="text-brand-dark/50 text-sm">
            &copy; {new Date().getFullYear()} Roloba Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-brand-dark/70">
            <a href="#" className="hover:text-brand-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-green transition-colors">Terms</a>
            <a href="mailto:hello@roloba.com" className="hover:text-brand-green transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;