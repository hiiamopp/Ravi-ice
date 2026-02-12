
import React, { useState } from 'react';
import { getFlavorRecommendation } from '../geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mood, setMood] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    setResponse('');
    const recommendation = await getFlavorRecommendation(mood);
    setResponse(recommendation);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-pink-500 p-4 text-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🤖</span>
              <span className="font-bold">Flavor Guru</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="p-6">
            <p className="text-sm text-gray-600 mb-4 font-medium">
              Tell me how you're feeling, and I'll find your perfect ice cream match! 🍨
            </p>
            
            <form onSubmit={handleAsk} className="space-y-3">
              <input 
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ex: I'm feeling adventurous and happy!"
                className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
              />
              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-pink-100 hover:bg-pink-200 text-pink-600 py-3 rounded-xl font-bold text-sm transition disabled:opacity-50"
              >
                {loading ? 'Thinking...' : 'Get Suggestion'}
              </button>
            </form>

            {response && (
              <div className="mt-6 p-4 bg-pink-50 rounded-2xl text-sm text-gray-800 border-l-4 border-pink-400 whitespace-pre-wrap animate-in fade-in slide-in-from-top-2 duration-300">
                {response}
              </div>
            )}
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-pink-500 rounded-full shadow-xl flex items-center justify-center text-white hover:scale-110 transition active:scale-95 group relative"
      >
        <span className="text-3xl group-hover:rotate-12 transition">🍦</span>
        {!isOpen && (
           <span className="absolute -top-1 -left-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
