import React, { useState, useEffect } from 'react';

const RocketLoadingAnimation = ({ onComplete }) => {
  const [showRocket, setShowRocket] = useState(false);
  const [showTrail, setShowTrail] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => setShowRocket(true), 500);
    const timer2 = setTimeout(() => setShowTrail(true), 800);
    const timer3 = setTimeout(() => setShowGreeting(true), 1500);
    const timer4 = setTimeout(() => setShowGlow(true), 2000);
    const timer5 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-background">
      {/* Rocket */}
      <div className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-2000 ease-out ${
        showRocket ? 'translate-x-[calc(100vw-8rem)] opacity-100' : 'translate-x-0 opacity-100'
      }`}>
        <div className="relative">
          {/* Rocket Body */}
          <div className="w-24 h-12 bg-gradient-to-r from-gray-300 to-gray-100 rounded-full relative shadow-lg border border-gray-400">
            {/* Rocket Nose */}
            <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full shadow-md"></div>
            {/* Rocket Windows */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
            <div className="absolute left-9 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-blue-400 rounded-full shadow-sm"></div>
            {/* Rocket Fins */}
            <div className="absolute -right-2 top-0 w-3 h-4 bg-gray-400 transform rotate-12 shadow-md"></div>
            <div className="absolute -right-2 bottom-0 w-3 h-4 bg-gray-400 transform -rotate-12 shadow-md"></div>
          </div>
          
          {/* Rocket Engine Glow */}
          <div className={`absolute -right-6 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ${
            showTrail ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="w-12 h-6 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-10 h-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 rounded-full animate-pulse mt-1 shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Rocket Trail */}
      <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-2 bg-gradient-to-r from-transparent via-orange-400 to-transparent transition-all duration-1000 ${
        showTrail ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Greeting Text */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
        showGreeting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}>
        <h1 className={`font-space text-4xl md:text-6xl font-bold text-center transition-all duration-1000 ${
          showGlow ? 'text-glow-blue glow-intense-blue' : 'text-accent'
        }`}>
          Hello Explorers! 👋
        </h1>
      </div>



      {/* Ambient Glow Effect */}
      <div className={`absolute inset-0 transition-all duration-2000 ${
        showGlow ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-purple/10 rounded-full blur-2xl animate-pulse animation-delay-300"></div>
      </div>

      {/* Sparkle Effects */}
      {showGlow && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-1000"></div>
        </>
      )}
    </div>
  );
};

export default RocketLoadingAnimation;
