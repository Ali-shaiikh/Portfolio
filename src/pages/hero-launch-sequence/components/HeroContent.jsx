import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import TypingAnimation from './TypingAnimation';

const HeroContent = ({ onExploreClick }) => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const greetingTexts = [
    "System Initializing...",
    "Neural Networks Active...",
    "Future Vision Loading..."
  ];

  const handleTypingComplete = () => {
    setTimeout(() => {
      setShowMainContent(true);
      setTimeout(() => {
        setShowCTA(true);
      }, 800);
    }, 200);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center data-stream">
      {/* Animated Greeting */}
      <div className="mb-8">
        <h1 className="font-space text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-4">
          <TypingAnimation 
            texts={greetingTexts}
            typeSpeed={50}
            deleteSpeed={30}
            pauseTime={500}
            onComplete={handleTypingComplete}
            className="text-glow-blue"
          />
        </h1>
      </div>

      {/* Main Content - Appears after typing animation */}
      <div className={`transition-all duration-1000 ${showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Identity Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Profile Picture Circle */}
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 border-tech-blue/30 glow-blue neural-network shadow-lg">
              <img 
                src="/assets/images/IMG_3771.jpeg" 
                alt="Ali Shaikh" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/assets/images/IMG_3771.jpeg";
                }}
              />
            </div>
            
            {/* Name Badge */}
            <div className="inline-block px-6 py-3 rounded-lg bg-tech-blue/10 border border-tech-blue/30 glow-blue neural-network">
              <span className="font-space text-lg md:text-xl font-semibold text-tech-blue text-glow-blue">
                Ali Shaikh
              </span>
            </div>
          </div>
          
          <h2 className="font-space text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Future-Ready
            <span className="holographic-text"> Technologist</span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-6">
            Architecting tomorrow's solutions through 
            <span className="text-tech-blue font-semibold text-glow-blue"> intelligent automation</span>, 
            <span className="text-tech-purple font-semibold text-glow-purple"> scalable cloud infrastructure</span>, and 
            <span className="text-tech-emerald font-semibold text-glow-emerald"> cutting-edge AI innovation</span>.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-6 text-center interactive-element neural-network">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-tech-blue/20 flex items-center justify-center quantum-glow">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-space text-lg font-semibold text-foreground mb-2">AI Innovation</h3>
              <p className="text-sm text-muted-foreground">Developing neural networks that understand and enhance human potential</p>
            </div>
            
            <div className="glass-card p-6 text-center interactive-element neural-network animation-delay-200">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-tech-purple/20 flex items-center justify-center quantum-glow">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-space text-lg font-semibold text-foreground mb-2">Cloud Architecture</h3>
              <p className="text-sm text-muted-foreground">Building quantum-ready infrastructure for next-generation applications</p>
            </div>
            
            <div className="glass-card p-6 text-center interactive-element neural-network animation-delay-300">
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-tech-emerald/20 flex items-center justify-center quantum-glow">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-space text-lg font-semibold text-foreground mb-2">Digital Transformation</h3>
              <p className="text-sm text-muted-foreground">Bridging the gap between human needs and technological possibilities</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center interactive-element">
            <div className="font-space text-3xl md:text-4xl font-bold text-tech-blue text-glow-blue holographic-text">2000+</div>
            <div className="text-sm text-muted-foreground">Future Minds Guided</div>
          </div>
          <div className="text-center interactive-element animation-delay-200">
            <div className="font-space text-3xl md:text-4xl font-bold text-tech-purple text-glow-purple holographic-text">400+</div>
            <div className="text-sm text-muted-foreground">Innovation Network</div>
          </div>
          <div className="text-center interactive-element animation-delay-300">
            <div className="font-space text-3xl md:text-4xl font-bold text-tech-emerald text-glow-emerald holographic-text">5+</div>
            <div className="text-sm text-muted-foreground">Breakthrough Solutions</div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className={`transition-all duration-1000 ${showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="default"
            size="lg"
            onClick={onExploreClick}
            className="font-space font-semibold bg-tech-blue text-white hover:bg-tech-blue/90 glow-intense-blue interactive-element px-8 py-4 text-lg neural-network"
            iconName="Rocket"
            iconPosition="left"
            iconSize={20}
          >
            Explore Tech Vision
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://linkedin.com/in/ali-shaikhh', '_blank')}
            className="font-space font-semibold border-tech-purple text-tech-purple hover:bg-tech-purple hover:text-white glow-purple interactive-element px-8 py-4 text-lg neural-network"
            iconName="ExternalLink"
            iconPosition="right"
            iconSize={18}
          >
            Connect & Collaborate
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative">
            <div className="w-6 h-10 border-2 border-tech-blue rounded-full flex justify-center quantum-glow">
              <div className="w-1 h-3 bg-tech-blue rounded-full mt-2 animate-bounce glow-blue"></div>
            </div>
            <div className="absolute -inset-2 border border-tech-blue/30 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 font-mono tracking-wider">SCROLL TO DISCOVER</p>
          <div className="mt-2 flex space-x-1">
            <div className="w-1 h-1 bg-tech-blue rounded-full animate-pulse"></div>
            <div className="w-1 h-1 bg-tech-purple rounded-full animate-pulse animation-delay-200"></div>
            <div className="w-1 h-1 bg-tech-emerald rounded-full animate-pulse animation-delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;