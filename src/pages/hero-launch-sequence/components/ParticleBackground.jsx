import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef([]);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const viewportRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const ctx = canvas?.getContext('2d');
    let particles = [];
    let nodes = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(120, Math.floor((canvas?.width * canvas?.height) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles?.push({
          x: Math.random() * canvas?.width,
          y: Math.random() * canvas?.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.6 ? '#3B82F6' : Math.random() > 0.3 ? '#8B5CF6' : '#10B981',
          pulse: Math.random() * 0.02 + 0.01
        });
      }
      particlesRef.current = particles;
    };

    const createNodes = () => {
      nodes = [];
      const nodeCount = 15;
      
      for (let i = 0; i < nodeCount; i++) {
        nodes?.push({
          x: Math.random() * canvas?.width,
          y: Math.random() * canvas?.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 6 + 4,
          opacity: Math.random() * 0.6 + 0.4,
          color: '#0EA5E9',
          connections: [],
          energy: Math.random()
        });
      }
      nodesRef.current = nodes;
    };

    const drawParticle = (particle, time) => {
      const pulsedOpacity = particle?.opacity + Math.sin(time * particle?.pulse) * 0.3;
      ctx?.beginPath();
      ctx?.arc(particle?.x, particle?.y, particle?.size, 0, Math.PI * 2);
      
      // Create gradient for futuristic glow
      const gradient = ctx?.createRadialGradient(
        particle?.x, particle?.y, 0,
        particle?.x, particle?.y, particle?.size * 3
      );
      gradient?.addColorStop(0, `${particle?.color}${Math.floor(pulsedOpacity * 255)?.toString(16)?.padStart(2, '0')}`);
      gradient?.addColorStop(1, `${particle?.color}00`);
      
      ctx.fillStyle = gradient;
      ctx?.fill();
    };

    const drawNode = (node, time) => {
      const energyPulse = 0.5 + Math.sin(time * 0.003 + node?.energy * 10) * 0.5;
      const size = node?.size * (0.8 + energyPulse * 0.4);
      
      ctx?.beginPath();
      ctx?.arc(node?.x, node?.y, size, 0, Math.PI * 2);
      
      // Neural node gradient
      const gradient = ctx?.createRadialGradient(
        node?.x, node?.y, 0,
        node?.x, node?.y, size * 2
      );
      gradient?.addColorStop(0, `${node?.color}${Math.floor((node?.opacity * energyPulse) * 255)?.toString(16)?.padStart(2, '0')}`);
      gradient?.addColorStop(0.7, `${node?.color}40`);
      gradient?.addColorStop(1, `${node?.color}00`);
      
      ctx.fillStyle = gradient;
      ctx?.fill();
      
      // Draw pulsing ring
      ctx?.beginPath();
      ctx?.arc(node?.x, node?.y, size * 1.5, 0, Math.PI * 2);
      ctx.strokeStyle = `${node?.color}${Math.floor((energyPulse * 0.3) * 255)?.toString(16)?.padStart(2, '0')}`;
      ctx.lineWidth = 1;
      ctx?.stroke();
    };

    const drawConnections = (time) => {
      const maxDistance = 150;
      const neuralDistance = 200;
      const mouseInfluence = 100;
      
      // Particle connections
      for (let i = 0; i < particles?.length; i++) {
        for (let j = i + 1; j < particles?.length; j++) {
          const dx = particles?.[i]?.x - particles?.[j]?.x;
          const dy = particles?.[i]?.y - particles?.[j]?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.4;
            const pulse = Math.sin(time * 0.002 + distance * 0.01) * 0.2 + 0.8;
            
            ctx?.beginPath();
            ctx?.moveTo(particles?.[i]?.x, particles?.[i]?.y);
            ctx?.lineTo(particles?.[j]?.x, particles?.[j]?.y);
            ctx.strokeStyle = `#3B82F6${Math.floor((opacity * pulse) * 255)?.toString(16)?.padStart(2, '0')}`;
            ctx.lineWidth = 0.8;
            ctx?.stroke();
          }
        }
        
        // Mouse interaction enhancement
        const mouseDx = particles?.[i]?.x - mouseRef?.current?.x;
        const mouseDy = particles?.[i]?.y - mouseRef?.current?.y;
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
        
        if (mouseDistance < mouseInfluence) {
          const influence = (1 - mouseDistance / mouseInfluence);
          const pulseSize = particles?.[i]?.size * (1 + influence * 2);
          
          ctx?.beginPath();
          ctx?.arc(particles?.[i]?.x, particles?.[i]?.y, pulseSize, 0, Math.PI * 2);
          ctx.fillStyle = `#0EA5E9${Math.floor((influence * 0.6) * 255)?.toString(16)?.padStart(2, '0')}`;
          ctx?.fill();
          
          // Create ripple effect
          ctx?.beginPath();
          ctx?.arc(particles?.[i]?.x, particles?.[i]?.y, pulseSize * 2, 0, Math.PI * 2);
          ctx.strokeStyle = `#0EA5E9${Math.floor((influence * 0.3) * 255)?.toString(16)?.padStart(2, '0')}`;
          ctx.lineWidth = 1;
          ctx?.stroke();
        }
      }
      
      // Neural network connections between nodes
      for (let i = 0; i < nodes?.length; i++) {
        for (let j = i + 1; j < nodes?.length; j++) {
          const dx = nodes?.[i]?.x - nodes?.[j]?.x;
          const dy = nodes?.[i]?.y - nodes?.[j]?.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < neuralDistance) {
            const opacity = (1 - distance / neuralDistance) * 0.6;
            const energyFlow = Math.sin(time * 0.005 + distance * 0.02) * 0.5 + 0.5;
            
            ctx?.beginPath();
            ctx?.moveTo(nodes?.[i]?.x, nodes?.[i]?.y);
            ctx?.lineTo(nodes?.[j]?.x, nodes?.[j]?.y);
            
            // Create flowing energy effect
            const gradient = ctx?.createLinearGradient(
              nodes?.[i]?.x, nodes?.[i]?.y,
              nodes?.[j]?.x, nodes?.[j]?.y
            );
            gradient?.addColorStop(0, `#8B5CF6${Math.floor((opacity * energyFlow) * 255)?.toString(16)?.padStart(2, '0')}`);
            gradient?.addColorStop(0.5, `#0EA5E9${Math.floor((opacity) * 255)?.toString(16)?.padStart(2, '0')}`);
            gradient?.addColorStop(1, `#10B981${Math.floor((opacity * energyFlow) * 255)?.toString(16)?.padStart(2, '0')}`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1.5;
            ctx?.stroke();
          }
        }
      }
    };

    const animate = (time) => {
      ctx?.clearRect(0, 0, canvas?.width, canvas?.height);
      
      // Update and draw particles
      particles?.forEach(particle => {
        particle.x += particle?.vx;
        particle.y += particle?.vy;
        
        // Boundary bouncing with slight randomness
        if (particle?.x < 0 || particle?.x > canvas?.width) {
          particle.vx *= -0.9 + Math.random() * 0.2;
        }
        if (particle?.y < 0 || particle?.y > canvas?.height) {
          particle.vy *= -0.9 + Math.random() * 0.2;
        }
        
        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas?.width, particle?.x));
        particle.y = Math.max(0, Math.min(canvas?.height, particle?.y));
        
        drawParticle(particle, time);
      });
      
      // Update and draw nodes
      nodes?.forEach(node => {
        node.x += node?.vx;
        node.y += node?.vy;
        
        if (node?.x < 0 || node?.x > canvas?.width) node.vx *= -1;
        if (node?.y < 0 || node?.y > canvas?.height) node.vy *= -1;
        
        node.x = Math.max(0, Math.min(canvas?.width, node?.x));
        node.y = Math.max(0, Math.min(canvas?.height, node?.y));
        
        drawNode(node, time);
      });
      
      drawConnections(time);
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e?.clientX,
        y: e?.clientY
      };
      
      // Enhanced mouse interaction - particles follow mouse
      if (!isDraggingRef.current) {
        particles?.forEach(particle => {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const force = (150 - distance) / 150;
            particle.vx += (dx / distance) * force * 0.5;
            particle.vy += (dy / distance) * force * 0.5;
          }
        });
        
        // Nodes also respond to mouse
        nodes?.forEach(node => {
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const force = (200 - distance) / 200;
            node.vx += (dx / distance) * force * 0.3;
            node.vy += (dy / distance) * force * 0.3;
          }
        });
      }
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      dragStartRef.current = {
        x: e.clientX - viewportRef.current.x,
        y: e.clientY - viewportRef.current.y
      };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleDrag = (e) => {
      if (isDraggingRef.current) {
        viewportRef.current = {
          x: e.clientX - dragStartRef.current.x,
          y: e.clientY - dragStartRef.current.y
        };
      }
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createNodes();
    };

    resizeCanvas();
    createParticles();
    createNodes();
    animate(0);

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('drag', handleDrag);

    return () => {
      if (animationRef?.current) {
        cancelAnimationFrame(animationRef?.current);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('drag', handleDrag);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0F172A 0%, #0A0E1A 50%, #1E293B 100%)' }}
    />
  );
};

export default ParticleBackground;