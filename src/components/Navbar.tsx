import React, { useState, useEffect } from 'react';
import { Sunflower } from './FloralDecorations';
import { Lock, Unlock } from 'lucide-react';

interface NavbarProps {
  isTestMode: boolean;
  onLockScreenToggle?: () => void;
  isUnlocked: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  isTestMode,
  onLockScreenToggle,
  isUnlocked,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Garden', href: '#hero' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Story', href: '#story' },
    { label: 'Gift', href: '#gift' },
    { label: 'Letter', href: '#letter' },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center gap-1.5 sm:gap-3 rounded-full border border-garden-border/90 px-3.5 sm:px-5 py-2 shadow-soft backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'bg-garden-cream/95 shadow-md py-1.5' : 'bg-garden-cream/80'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-1.5 text-xs sm:text-sm font-serif font-medium text-garden-rose pr-2 border-r border-garden-border/60 hover:opacity-80 transition-opacity"
        >
          <Sunflower size={20} className="animate-spin-slow" />
          <span className="hidden xs:inline">Kuchupuchu's Garden 🎀</span>
        </a>

        {/* Navigation Anchors */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-2.5 py-1 text-xs font-sans text-garden-rose/80 hover:text-garden-rose hover:bg-garden-blush/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Test Mode Switcher: visible ONLY if test mode is enabled */}
        {isTestMode && onLockScreenToggle && (
          <div className="pl-1 sm:pl-2 border-l border-garden-border/60">
            <button
              onClick={onLockScreenToggle}
              title={isUnlocked ? "Preview Countdown Screen" : "Unlock Garden"}
              className="flex items-center gap-1 rounded-full bg-garden-yellow/40 border border-garden-yellowDark/30 px-2 py-0.5 text-[10px] font-medium text-garden-rose hover:bg-garden-yellow/60 transition-colors"
            >
              {isUnlocked ? (
                <>
                  <Lock className="w-3 h-3 text-garden-rose" />
                  <span className="hidden md:inline">Test Lock</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3 h-3 text-garden-rose" />
                  <span className="hidden md:inline">Test Unlock</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
