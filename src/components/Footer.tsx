import React from 'react';
import { siteConfig } from '../data/config';
import { Sunflower } from './FloralDecorations';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-16 px-4 bg-garden-blush/40 border-t border-garden-border overflow-hidden text-center">
      {/* Decorative floral accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-6 -left-6 opacity-30">
          <Sunflower size={90} />
        </div>
        <div className="absolute -bottom-6 -right-6 opacity-30">
          <Sunflower size={90} />
        </div>
      </div>

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Animated Sunflower Centerpiece */}
        <div
          onClick={scrollToTop}
          className="cursor-pointer group mb-5 relative transition-transform duration-300 hover:scale-110"
          title="Return to top of garden"
        >
          <Sunflower size={48} className="transition-transform duration-700 group-hover:rotate-180" />
          <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase font-sans tracking-widest text-garden-mauve whitespace-nowrap">
            Back to top ↑
          </span>
        </div>

        {/* Primary Quote */}
        <p className="font-serif italic text-base sm:text-lg text-garden-rose max-w-md mx-auto leading-relaxed mb-3">
          "{siteConfig.footer.quote}"
        </p>

        {/* Made for Jaseena */}
        <div className="flex items-center justify-center gap-1.5 font-handwritten text-2xl sm:text-3xl text-garden-rose mb-4">
          <span>{siteConfig.footer.madeFor}</span>
        </div>

        <div className="w-12 h-0.5 bg-garden-border/80 my-2"></div>

        {/* Soft copyright / date badge */}
        <p className="font-sans text-xs text-garden-mauve/80 tracking-wider uppercase mt-2">
          17 November • A little digital garden
        </p>
      </div>
    </footer>
  );
};
