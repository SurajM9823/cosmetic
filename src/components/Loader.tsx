import React from 'react';
import { Sparkles } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-purple-600 rounded-full flex items-center justify-center mx-auto animate-pulse shadow-2xl">
            <span className="text-white font-bold text-2xl">P</span>
          </div>
          <div className="absolute -top-2 -right-2 animate-spin">
            <Sparkles className="w-8 h-8 text-rose-400" />
          </div>
          <div className="absolute -bottom-2 -left-2 animate-bounce">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in">
          Pathivara Cosmetic
        </h1>
        <p className="text-sm text-gray-600 mb-8 animate-fade-in-delay">
          Biratnagar
        </p>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          <div className="w-3 h-3 bg-rose-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <p className="text-xs text-gray-500 mt-4 animate-pulse">
          Loading beautiful cosmetics...
        </p>
      </div>
    </div>
  );
};

export default Loader;