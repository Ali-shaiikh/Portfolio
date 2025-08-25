import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const QuickNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'Launch', icon: 'Rocket', color: 'tech-blue' },
    { id: 'about', label: 'About', icon: 'User', color: 'tech-purple' },
    { id: 'skills', label: 'Skills', icon: 'Zap', color: 'tech-emerald' },
    { id: 'projects', label: 'Projects', icon: 'Code', color: 'tech-orange' },
    { id: 'experience', label: 'Experience', icon: 'Briefcase', color: 'tech-blue' },
    { id: 'education', label: 'Education', icon: 'GraduationCap', color: 'tech-purple' },
    { id: 'contact', label: 'Contact', icon: 'Mail', color: 'tech-emerald' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

      // Detect which section is currently in view
      const sections = navigationItems?.map(item => document.getElementById(item?.id))?.filter(Boolean);
      
      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = sections?.[i];
        if (section) {
          const rect = section?.getBoundingClientRect();
          if (rect?.top <= window?.innerHeight * 0.5) {
            setActiveSection(section?.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-50 transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
    }`}>
      <div className="glass-card p-3 glow-blue neural-network">
        <nav className="flex flex-col space-y-3">
          {navigationItems?.map((item, index) => {
            const isActive = activeSection === item?.id;
            return (
              <button
                key={item?.id}
                onClick={() => scrollToSection(item?.id)}
                className={`group relative p-3 rounded-full transition-all duration-400 interactive-element ${
                  isActive
                    ? `bg-${item?.color}/20 text-${item?.color} glow-${item?.color?.split('-')?.[1]} scale-110` 
                    : `text-muted-foreground hover:text-${item?.color} hover:bg-${item?.color}/10 hover:glow-${item?.color?.split('-')?.[1]}`
                }`}
                title={item?.label}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <Icon name={item?.icon} size={20} />
                {/* Enhanced Tooltip */}
                <div className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none ${
                  isActive ? 'opacity-100' : ''
                }`}>
                  <div className="glass-card px-3 py-2 text-xs font-mono text-foreground whitespace-nowrap glow-blue">
                    {item?.label}
                    <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-tech-blue/30 border-y-4 border-y-transparent"></div>
                  </div>
                </div>
                {/* Active Indicator Ring */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full border-2 border-tech-blue/40 animate-pulse">
                    <div className="absolute inset-1 rounded-full border border-tech-blue/20 animate-ping"></div>
                  </div>
                )}
                {/* Hover Effect Ring */}
                <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-tech-blue/30 transition-all duration-300"></div>
              </button>
            );
          })}
        </nav>
        
        {/* Progress Indicator */}
        <div className="mt-4 pt-3 border-t border-tech-blue/20">
          <div className="flex flex-col items-center space-y-1">
            {navigationItems?.map((item, index) => (
              <div
                key={`progress-${item?.id}`}
                className={`w-1 h-3 rounded-full transition-all duration-300 ${
                  activeSection === item?.id 
                    ? 'bg-tech-blue glow-blue' :'bg-muted/30'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Background Tech Element */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-r from-tech-blue/5 to-tech-purple/5 blur-xl rounded-lg animate-pulse"></div>
    </div>
  );
};

export default QuickNavigation;