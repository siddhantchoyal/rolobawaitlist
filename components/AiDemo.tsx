import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Sparkles, Bot, User, Mic } from 'lucide-react';
import { ROLOBA_SYSTEM_PROMPT } from '../constants';
import { ChatMessage } from '../types';

const SUGGESTED_QUESTIONS = [
    "How does the Cold Calling work?",
    "Can the AI handle missed calls?",
    "Do you create content for plumbers?",
    "What's included in the $197 price?"
];

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m the Roloba AI assistant. I can simulate how our Voice & Chat AI handles your leads. Ask me anything!' }
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
      
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        history: history,
        config: {
          systemInstruction: ROLOBA_SYSTEM_PROMPT,
        }
      });

      const result = await chat.sendMessage({ message: userMsg.text });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText || "I'm sorry, I didn't catch that." }]);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to the server right now. Please try again later." }]);
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

  if (!process.env.API_KEY) {
      return (
          <div id="ai-demo" className="bg-slate-900 py-24 text-white text-center px-4">
              <h2 className="text-3xl font-bold mb-4">Experience Our AI</h2>
              <p className="text-slate-400">Please configure the API_KEY to interact with the live demo.</p>
          </div>
      )
  }

  return (
    <section id="ai-demo" className="py-24 bg-slate-900 relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div className="mb-12 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-500/20 p-2 rounded-lg">
                <Sparkles className="text-primary-400 h-6 w-6" />
              </div>
              <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Live AI Demo</span>
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Your 24/7 Super-Employee
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Roloba's AI doesn't just chat; it speaks. It answers phone calls, qualifies leads, and schedules appointments into your calendar instantly.
            </p>
            
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Mic size={18} className="text-secondary-500" />
                    Voice AI Capabilities
                </h4>
                <ul className="space-y-3 text-slate-300 text-sm">
                    <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
                        Answers missed calls immediately
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
                        Sounds 100% human with natural pauses
                    </li>
                    <li className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 bg-green-400 rounded-full" />
                        Books directly to your Roloba calendar
                    </li>
                </ul>
            </div>

            <div className="flex gap-4">
                 <div className="text-center">
                     <p className="text-3xl font-bold text-white">24/7</p>
                     <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Availability</p>
                 </div>
                 <div className="w-px bg-slate-700"></div>
                 <div className="text-center">
                     <p className="text-3xl font-bold text-white">&lt; 1s</p>
                     <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Response Time</p>
                 </div>
                 <div className="w-px bg-slate-700"></div>
                 <div className="text-center">
                     <p className="text-3xl font-bold text-white">100%</p>
                     <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Lead Capture</p>
                 </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col h-[600px]">
            <div className="bg-slate-900 p-4 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary-600 p-2 rounded-full relative">
                  <Bot size={20} className="text-white" />
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-slate-900" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Roloba AI Assistant</h3>
                  <p className="text-xs text-slate-400">Replies instantly</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-slate-800/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-500' : 'bg-slate-600'}`}>
                      {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' : 'bg-slate-700 text-slate-100 rounded-tl-none border border-slate-600 shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none border border-slate-600">
                     <div className="flex space-x-1">
                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                       <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                     </div>
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className="px-4 pt-2 pb-2 bg-slate-800/80 border-t border-slate-700 overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex space-x-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSend(q)}
                            disabled={isLoading}
                            className="px-3 py-1 bg-slate-700 text-xs text-slate-300 rounded-full hover:bg-slate-600 hover:text-white transition-colors border border-slate-600"
                        >
                            {q}
                        </button>
                    ))}
                </div>
            </div>

            <div className="p-4 bg-slate-900 border-t border-slate-700">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me about lead generation..."
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-full py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent placeholder-slate-500"
                  disabled={isLoading}
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
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