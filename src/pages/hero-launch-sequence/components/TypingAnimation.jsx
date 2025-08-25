import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ 
  texts = [], 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  className = "",
  onComplete = null 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (texts?.length === 0) return;

    const timeout = setTimeout(() => {
      const fullText = texts?.[currentTextIndex];
      
      if (isPaused) {
        setIsPaused(false);
        if (currentTextIndex === texts?.length - 1) {
          // Last text - don't delete, call onComplete
          if (onComplete) onComplete();
          return;
        }
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(fullText?.substring(0, currentText?.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts?.length);
        }
      } else {
        setCurrentText(fullText?.substring(0, currentText?.length + 1));
        
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isPaused ? pauseTime : isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typeSpeed, deleteSpeed, pauseTime, onComplete]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
};

export default TypingAnimation;