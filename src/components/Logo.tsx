import React from 'react';

const Logo = ({ className = "", textColor = "text-white" }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        {/* Main Logo Circle */}
        <div className="w-12 h-12 bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
          {/* Inner Design */}
          <div className="relative w-8 h-8">
            {/* Stylized P with beauty elements */}
            <svg viewBox="0 0 32 32" className="w-full h-full text-white fill-current">
              {/* Letter P base */}
              <path d="M6 4 L6 28 L10 28 L10 18 L18 18 C22 18 24 16 24 12 C24 8 22 4 18 4 Z M10 8 L18 8 C19 8 20 9 20 12 C20 15 19 14 18 14 L10 14 Z" />
              {/* Beauty sparkle */}
              <circle cx="24" cy="8" r="1.5" className="animate-pulse" />
              <circle cx="26" cy="12" r="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="22" cy="6" r="0.8" className="animate-pulse" style={{animationDelay: '1s'}} />
            </svg>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse"></div>
      </div>
      
      <div className="hidden sm:block">
        <h1 className={`text-xl font-bold ${textColor} transition-colors duration-300`}>
          Pathivara
          <span className="block text-xs font-normal opacity-80">Cosmetic Biratnagar</span>
        </h1>
      </div>
    </div>
  );
};

export default Logo;