import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
import Icon from '../AppIcon';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();




  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Close mobile menu when scrolling
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: 'Home', path: '/', icon: 'Home', section: 'hero' },
    { name: 'Projects', path: '/', icon: 'Code', section: 'projects' },
    { name: 'Skills', path: '/', icon: 'Zap', section: 'skills' },
    { name: 'Experience', path: '/', icon: 'Briefcase', section: 'experience' },
    { name: 'Contact', path: '/', icon: 'Mail', section: 'contact' }
  ];

  const handleNavigation = (item) => {
    if (item.section) {
      // Scroll to section on the same page
      const section = document.getElementById(item.section);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to different page
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    // Open resume file from assets
    window.open('/assets/images/Ali-Shaikh_Resume.pdf', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-cyberpunk border-b border-accent/20 glow-cyan' :'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-6 lg:px-8">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => handleNavigation({ path: '/', section: 'hero' })}
            >
              <div className="relative">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  className="transition-all duration-300 group-hover:scale-110"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-neon-cyan)" />
                      <stop offset="100%" stopColor="var(--color-neon-purple)" />
                    </linearGradient>
                  </defs>
                  <rect 
                    x="2" 
                    y="2" 
                    width="36" 
                    height="36" 
                    rx="4" 
                    fill="none" 
                    stroke="url(#logoGradient)" 
                    strokeWidth="2"
                    className="group-hover:drop-shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                  />
                  <text 
                    x="20" 
                    y="26" 
                    textAnchor="middle" 
                    className="font-orbitron font-semibold text-sm fill-accent group-hover:fill-neon-cyan"
                  >
                    AS
                  </text>
                </svg>
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className="font-mono text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  Ali Shaikh
                </h1>
                <p className="font-mono text-xs text-muted-foreground group-hover:text-accent/80 transition-colors duration-300">
                  Visionary Technologist
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.slice(0, 4)?.map((item) => (
                <button
                  key={item?.name}
                  onClick={() => handleNavigation(item)}
                  className={`relative px-4 py-2 rounded-md font-mono text-sm font-medium transition-all duration-300 group ${
                    location?.pathname === item?.path
                      ? 'text-accent bg-accent/10 glow-cyan' :'text-muted-foreground hover:text-accent hover:bg-accent/5'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </span>
                  {location?.pathname === item?.path && (
                    <div className="absolute inset-0 bg-gradient-neon opacity-10 rounded-md"></div>
                  )}
                  <div className="absolute inset-0 rounded-md border border-transparent group-hover:border-accent/30 transition-colors duration-300"></div>
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleResumeClick}
                className="font-orbitron font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-cyan hover:glow-intense-cyan transition-all duration-300"
                iconName="FileText"
                iconPosition="left"
                iconSize={16}
              >
                View Resume
              </Button>
              

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-md">
            <div className="flex flex-col h-full bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-accent/20 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-tech-blue to-tech-purple rounded-lg flex items-center justify-center">
                    <span className="font-mono text-sm font-bold text-white">AS</span>
                  </div>
                  <div>
                    <h1 className="font-mono text-lg font-bold text-foreground">Ali Shaikh</h1>
                    <p className="font-mono text-xs text-muted-foreground">Visionary Technologist</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              
              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8 space-y-3 bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-lg">
                {navigationItems?.map((item, index) => (
                  <button
                    key={item?.name}
                    onClick={() => handleNavigation(item)}
                    className={`w-full flex items-center space-x-4 px-6 py-4 rounded-xl font-mono text-base font-medium transition-all duration-300 backdrop-blur-sm ${
                      location?.pathname === item?.path
                        ? 'text-accent bg-gradient-to-r from-tech-blue/30 to-tech-purple/30 glow-cyan border border-accent/40 shadow-lg' :'text-muted-foreground hover:text-accent hover:bg-gradient-to-r hover:from-tech-blue/20 hover:to-tech-purple/20 hover:shadow-md bg-gradient-to-r from-slate-800/70 to-slate-700/70'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center backdrop-blur-sm ${
                      location?.pathname === item?.path ? 'bg-gradient-to-br from-tech-blue/40 to-tech-purple/40' : 'bg-gradient-to-br from-slate-700/70 to-slate-600/70'
                    }`}>
                      <Icon name={item?.icon} size={20} />
                    </div>
                    <span className="text-left">{item?.name}</span>
                  </button>
                ))}
              </nav>
              
              {/* Action Buttons */}
              <div className="p-6 border-t border-accent/20 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-lg space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={handleResumeClick}
                  className="font-orbitron font-semibold border-accent text-accent hover:bg-accent hover:text-accent-foreground glow-cyan hover:glow-intense-cyan transition-all duration-300 py-4 rounded-xl"
                  iconName="FileText"
                  iconPosition="left"
                  iconSize={18}
                >
                  View Resume
                </Button>
                

              </div>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;