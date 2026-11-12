import React, { useState, useEffect } from 'react';
import { Sunflower } from './FloralDecorations';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-garden-blush/40 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-garden-yellow to-garden-yellowDark transition-all duration-150 relative"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Tiny sunflower tip at progress edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
          <Sunflower size={14} className="animate-spin-slow" />
        </div>
      </div>
    </div>
  );
};

