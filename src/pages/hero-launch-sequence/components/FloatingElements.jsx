import React, { useEffect, useState, useRef } from 'react';

const FloatingElements = () => {
  const [elements, setElements] = useState([]);
  const [codeSnippets, setCodeSnippets] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const createFloatingElements = () => {
      const newElements = [];
      const elementCount = 12;
      
      const techSymbols = [
        '◉', '⬡', '◊', '⚡', '▲', '●', '◈', '⬢', '◐', '◑', '◒', '◓'
      ];
      
      for (let i = 0; i < elementCount; i++) {
        newElements?.push({
          id: i,
          symbol: techSymbols?.[i],
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 8,
          duration: 20 + Math.random() * 15,
          size: 0.6 + Math.random() * 0.8,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          opacity: 0.1 + Math.random() * 0.2
        });
      }
      
      setElements(newElements);
    };

    const createCodeSnippets = () => {
      const snippets = [
        {
          id: 'neural-1',
          text: 'const future = new Promise(resolve => innovate());',
          x: 8,
          y: 15,
          rotation: 8,
          color: 'text-tech-blue',
          delay: 0
        },
        {
          id: 'quantum-1',
          text: 'while(learning) { adapt(); evolve(); }',
          x: 75,
          y: 25,
          rotation: -6,
          color: 'text-tech-purple',
          delay: 2
        },
        {
          id: 'ai-1',
          text: 'if(possibilities.infinite) breakthrough();',
          x: 15,
          y: 70,
          rotation: 12,
          color: 'text-tech-emerald',
          delay: 4
        },
        {
          id: 'cloud-1',
          text: 'scale.auto(demand => optimize(resources));',
          x: 82,
          y: 80,
          rotation: -8,
          color: 'text-neural-network',
          delay: 1
        },
        {
          id: 'tech-1',
          text: 'connect(minds, machines, magic);',
          x: 45,
          y: 10,
          rotation: 4,
          color: 'text-tech-orange',
          delay: 3
        },
        {
          id: 'innovation-1',
          text: 'await transform(ideas).into(reality);',
          x: 25,
          y: 45,
          rotation: -10,
          color: 'text-quantum-violet',
          delay: 5
        }
      ];
      
      setCodeSnippets(snippets);
    };

    createFloatingElements();
    createCodeSnippets();

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (draggedElement) {
        const dx = e.clientX - dragStartRef.current.x;
        const dy = e.clientY - dragStartRef.current.y;
        
        if (draggedElement.symbol) {
          // Dragging geometric elements
          setElements(prev => prev.map(el => 
            el.id === draggedElement.id 
              ? { ...el, x: Math.max(0, Math.min(100, el.x + dx / window.innerWidth * 100)), 
                         y: Math.max(0, Math.min(100, el.y + dy / window.innerHeight * 100)) }
              : el
          ));
        } else {
          // Dragging code snippets
          setCodeSnippets(prev => prev.map(snippet => 
            snippet.id === draggedElement.id 
              ? { ...snippet, x: Math.max(0, Math.min(100, snippet.x + dx / window.innerWidth * 100)), 
                             y: Math.max(0, Math.min(100, snippet.y + dy / window.innerHeight * 100)) }
              : snippet
          ));
        }
        
        dragStartRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseUp = () => {
      setDraggedElement(null);
    };

    const handleMouseDown = (e, element) => {
      e.preventDefault();
      e.stopPropagation();
      setDraggedElement(element);
      dragStartRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedElement]);

  return (
    <div className="fixed inset-0 pointer-events-auto z-5 overflow-hidden">
      {/* Geometric Tech Elements */}
      {elements?.map((element) => (
        <div
          key={element?.id}
          className="absolute font-mono text-tech-blue animate-pulse cursor-grab active:cursor-grabbing hover:scale-110 transition-transform duration-200 select-none"
          style={{
            left: `${element?.x}%`,
            top: `${element?.y}%`,
            fontSize: `${element?.size}rem`,
            opacity: element?.opacity,
            animationDelay: `${element?.delay}s`,
            animationDuration: `${element?.duration}s`,
            transform: `rotate(${element?.rotation}deg)`,
            zIndex: draggedElement?.id === element?.id ? 10 : 1,
            pointerEvents: 'auto'
          }}
          onMouseDown={(e) => handleMouseDown(e, element)}
        >
          <div 
            className="animate-bounce"
            style={{
              animationDelay: `${element?.delay + 2}s`,
              animationDuration: `${element?.duration / 3}s`,
              transform: `rotate(${element?.rotation + element?.rotationSpeed * 10}deg)`
            }}
          >
            {element?.symbol}
          </div>
        </div>
      ))}
      
      {/* Floating Code Snippets */}
      {codeSnippets?.map((snippet) => (
        <div
          key={snippet?.id}
          className={`absolute opacity-15 font-mono text-xs ${snippet?.color} animate-pulse hidden lg:block hover:opacity-30 transition-all duration-500 cursor-grab active:cursor-grabbing hover:scale-105 select-none`}
          style={{
            left: `${snippet?.x}%`,
            top: `${snippet?.y}%`,
            transform: `rotate(${snippet?.rotation}deg)`,
            animationDelay: `${snippet?.delay}s`,
            animationDuration: '4s',
            pointerEvents: 'auto',
            zIndex: draggedElement?.id === snippet?.id ? 10 : 1
          }}
          onMouseDown={(e) => handleMouseDown(e, snippet)}
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 rounded blur-sm"></div>
            <div className="relative bg-background/20 backdrop-blur-sm rounded px-2 py-1 border border-tech-blue/20">
              {snippet?.text}
            </div>
          </div>
        </div>
      ))}
      
      {/* Animated Tech Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 })?.map((_, index) => (
          <div
            key={`particle-${index}`}
            className="absolute w-1 h-1 bg-tech-blue rounded-full opacity-40 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      {/* Holographic Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="tech-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path 
                d="M 100 0 L 0 0 0 100" 
                fill="none" 
                stroke="#3B82F6" 
                strokeWidth="1"
                opacity="0.3"
              />
            </pattern>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)"/>
          <rect width="100%" height="100%" fill="url(#grid-gradient)"/>
        </svg>
      </div>
      
      {/* Data Stream Visualization */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 6 })?.map((_, index) => (
          <div
            key={`stream-${index}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent"
            style={{
              left: 0,
              right: 0,
              top: `${15 + index * 15}%`,
              animationDelay: `${index * 0.8}s`,
              animation: `dataFlow ${4 + index}s linear infinite`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes dataFlow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;