import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';

const HeroContent = ({ onExploreClick, onConnectClick }) => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const roles = [
    'Future-Ready Technologist',
    'AI Innovation Architect',
    'Cloud Infrastructure Engineer',
    'Digital Transformation Specialist',
    'Full-Stack Developer',
    'Tech Community Leader'
  ];

  useEffect(() => {
    // Show main content immediately
    setTimeout(() => {
      setShowMainContent(true);
    }, 200);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  useEffect(() => {
    // Show main content immediately
    setTimeout(() => {
      setShowMainContent(true);
    }, 200);
  }, []);

  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen px-6 data-stream pt-20">
      {/* Main Content */}
      <div className={`transition-all duration-1000 w-full max-w-4xl mx-auto text-center ${showMainContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Profile Picture Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Main Profile Picture */}
            <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-tech-blue/40 glow-blue neural-network shadow-2xl">
              <img 
                src="/assets/images/IMG_3771.jpeg" 
                alt="Ali Shaikh" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/assets/images/IMG_3771.jpeg";
                }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 via-transparent to-tech-purple/20"></div>
            </div>
            
            {/* Floating Tech Icons with Animation - Reduced top positioning */}
            <div className="absolute -top-4 -left-6 w-16 h-16 bg-tech-blue rounded-full flex items-center justify-center shadow-xl glow-blue border-2 border-tech-blue/50 animate-bounce animation-delay-500">
              <span className="text-white font-bold text-xl">&lt;/&gt;</span>
            </div>
            <div className="absolute -top-4 -right-6 w-16 h-16 bg-tech-emerald rounded-full flex items-center justify-center shadow-xl glow-emerald border-2 border-tech-emerald/50 animate-bounce animation-delay-1000">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-tech-purple rounded-full flex items-center justify-center shadow-xl glow-purple border-2 border-tech-purple/50 animate-bounce animation-delay-1500">
              <span className="text-white font-bold text-xl">☁</span>
            </div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-tech-orange rounded-full flex items-center justify-center shadow-xl glow-orange border-2 border-tech-orange/50 animate-bounce animation-delay-2000">
              <span className="text-white font-bold text-xl">🚀</span>
            </div>
            
            {/* Additional Floating Elements - Reduced top positioning */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-tech-blue/30 rounded-full animate-ping animation-delay-300"></div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-tech-purple/30 rounded-full animate-ping animation-delay-700"></div>
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 w-4 h-4 bg-tech-emerald/40 rounded-full animate-ping animation-delay-1200"></div>
            <div className="absolute right-1/2 -bottom-8 transform -translate-y-1/2 w-5 h-5 bg-tech-orange/40 rounded-full animate-ping animation-delay-1800"></div>
            
            {/* Animated Rings - Reduced size to prevent overlap */}
            <div className="absolute inset-0 rounded-full border-2 border-tech-blue/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full border border-tech-purple/20 animate-pulse animation-delay-1000"></div>
            <div className="absolute inset-8 rounded-full border border-tech-emerald/15 animate-pulse animation-delay-2000"></div>
            
            {/* Floating Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="50%" y1="0" x2="25%" y2="25%" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" className="animate-pulse animation-delay-500"/>
              <line x1="75%" y1="0" x2="75%" y2="25%" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" className="animate-pulse animation-delay-1000"/>
              <line x1="0" y1="75%" x2="25%" y2="75%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" className="animate-pulse animation-delay-1500"/>
              <line x1="100%" y1="75%" x2="75%" y2="75%" stroke="rgba(249, 115, 22, 0.3)" strokeWidth="1" className="animate-pulse animation-delay-2000"/>
            </svg>
          </div>
        </div>
        
        {/* Role Badges */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="bg-card/60 backdrop-blur-md px-6 py-3 rounded-full border border-tech-blue/40 glow-blue shadow-lg animate-pulse">
            <span className="font-space text-lg font-semibold text-foreground">
              Visionary Technologist
            </span>
          </div>
        </div>
        
        {/* Greeting */}
        <div className="text-center mb-8">
          <h1 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Hi, I am </span>
            <span className="holographic-text">Ali Shaikh</span>
          </h1>
          

          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Architecting tomorrow's solutions through 
            <span className="text-tech-blue font-semibold text-glow-blue"> intelligent automation</span>, 
            <span className="text-tech-purple font-semibold text-glow-purple"> scalable cloud infrastructure</span>, and 
            <span className="text-tech-emerald font-semibold text-glow-emerald"> cutting-edge AI innovation</span>.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="default"
              size="lg"
              onClick={onExploreClick}
              className="font-space font-semibold bg-black/90 text-white hover:bg-black/80 px-8 py-4 text-lg relative overflow-hidden group"
              iconName="Rocket"
              iconPosition="left"
              iconSize={20}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="absolute inset-0 border border-cyan-400/60 rounded-lg group-hover:border-cyan-400/80 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-lg group-hover:from-cyan-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              <span className="relative z-10">Explore Tech Vision</span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={onConnectClick}
              className="font-space font-semibold bg-black/90 text-white hover:bg-black/80 px-8 py-4 text-lg relative overflow-hidden group"
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={18}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-500/30 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="absolute inset-0 border border-purple-400/60 rounded-lg group-hover:border-purple-400/80 transition-all duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-500/5 rounded-lg group-hover:from-purple-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              <span className="relative z-10">Connect & Collaborate</span>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://github.com/Ali-shaiikh', '_blank')}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
              iconName="Github"
              iconSize={24}
            />
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://linkedin.com/in/ali-shaikhh', '_blank')}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
              iconName="Linkedin"
              iconSize={24}
            />
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://x.com/alishaiikhh', '_blank')}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
              iconName="Twitter"
              iconSize={24}
            />
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('mailto:alishaikhh15@email.com', '_blank')}
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-transform"
              iconName="Mail"
              iconSize={24}
            />
          </div>
        </div>
        
        {/* Feature Cards */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8">
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
      </div>
    </div>
  );
};

export default HeroContent;