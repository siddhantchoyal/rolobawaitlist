import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Bot, User, Phone, Zap } from 'lucide-react';
import { ROLOBA_SYSTEM_PROMPT } from '../constants';
import { ChatMessage } from '../types';

const SUGGESTED_QUESTIONS = [
    "I have a downed oak on my roof!",
    "Do you handle stump grinding?",
    "Need a quote for lot clearing.",
    "Is a bucket truck included?"
];

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Roloba Dispatch here. We handle your calls 24/7 so you never miss an emergency removal job. Try me—simulate a homeowner calling after a storm!' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || !process.env.API_KEY) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: ROLOBA_SYSTEM_PROMPT,
        }
      });

      const result = await chat.sendMessage({ message: userMsg.text });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "Dispatch copy, we're on it." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Signal lost. We'll try to reconnect with base." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!process.env.API_KEY) return null;

  return (
    <section id="ai-demo" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#064e3b_0%,transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-6 bg-brand-green/20 px-4 py-1.5 rounded-full">
              <Sparkles className="text-brand-orange h-5 w-5" />
              <span className="text-brand-cream font-black tracking-widest uppercase text-xs">Proprietary Tech</span>
            </div>
            <h2 className="text-4xl font-black text-white sm:text-6xl mb-8 leading-tight">
              The Dispatcher <br/> That Never Sleeps.
            </h2>
            <p className="text-xl text-brand-cream/70 mb-10 font-medium">
              Our AI Dispatcher answers every call in 1 second. It qualifies the tree species, the hazard level, and the urgency—then books the estimate directly on your crew's calendar.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <Zap className="text-brand-orange mb-4" size={32} />
                    <h4 className="text-white font-black mb-2 uppercase tracking-wide">Instant Triage</h4>
                    <p className="text-brand-cream/50 text-sm">Categorizes jobs by size: $500 trim vs $15k crane removal.</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <Phone className="text-brand-orange mb-4" size={32} />
                    <h4 className="text-white font-black mb-2 uppercase tracking-wide">Call Record</h4>
                    <p className="text-brand-cream/50 text-sm">Every single call recorded and transcribed for your review.</p>
                </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-[#1a100f] rounded-[2.5rem] shadow-2xl border-4 border-white/5 overflow-hidden flex flex-col h-[650px]">
            <div className="bg-brand-dark/80 p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-brand-green p-3 rounded-2xl relative">
                  <Bot size={24} className="text-white" />
                  <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-green-400 ring-4 ring-brand-dark" />
                </div>
                <div>
                  <h3 className="text-white font-black tracking-wide uppercase">Roloba Dispatch</h3>
                  <p className="text-xs text-brand-green font-bold">LIVE OPERATOR SIMULATOR</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#1a100f]">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-2xl flex items-center justify-center ${msg.role === 'user' ? 'bg-brand-orange' : 'bg-brand-green'}`}>
                      {msg.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
                    </div>
                    <div className={`p-5 rounded-3xl text-sm leading-relaxed font-medium ${msg.role === 'user' ? 'bg-brand-orange text-white rounded-tr-none' : 'bg-white/5 text-brand-cream rounded-tl-none border border-white/10'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none border border-white/10">
                     <div className="flex space-x-2">
                       <div className="w-2 h-2 bg-brand-green rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-brand-green rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                       <div className="w-2 h-2 bg-brand-green rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                     </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-6 bg-brand-dark/50 border-t border-white/5">
              <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                  {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button 
                          key={i}
                          onClick={() => handleSend(q)}
                          disabled={isLoading}
                          className="px-4 py-2 bg-white/5 text-xs text-brand-cream/70 font-bold rounded-full hover:bg-white/10 hover:text-white transition-all border border-white/5 whitespace-nowrap"
                      >
                          {q}
                      </button>
                  ))}
              </div>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Simulate a homeowner call..."
                  className="w-full bg-white/5 text-white border-2 border-white/10 rounded-2xl py-4 pl-6 pr-14 focus:outline-none focus:border-brand-green transition-all placeholder-white/20 font-medium"
                  disabled={isLoading}
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-3 bg-brand-green text-white rounded-xl hover:bg-brand-green/80 disabled:opacity-50 transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiDemo;