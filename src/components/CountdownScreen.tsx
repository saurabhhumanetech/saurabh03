import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import { Sunflower, Blossom, LeafSprig, Sparkle } from './FloralDecorations';
import { Lock, Sparkles } from 'lucide-react';

interface CountdownScreenProps {
  onUnlock: () => void;
  isTestMode: boolean;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isUnlocked: boolean;
}

export const CountdownScreen: React.FC<CountdownScreenProps> = ({ onUnlock, isTestMode }) => {
  const targetTime = new Date(siteConfig.birthdayDateIST).getTime();

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = Date.now();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isUnlocked: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, isUnlocked: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeRemaining();
      setTimeLeft(updated);
      if (updated.isUnlocked) {
        clearInterval(timer);
        onUnlock();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime, onUnlock]);

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-garden-pink px-4 py-12 select-none">
      {/* Background Soft Floating Ambient Floral Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-4, 4, -4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-12 -left-12 opacity-40 sm:opacity-70"
        >
          <Sunflower size={180} />
        </motion.div>

        <motion.div
          animate={{ y: [10, -12, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-16 -right-16 opacity-40 sm:opacity-70"
        >
          <Sunflower size={200} />
        </motion.div>

        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-8 opacity-50"
        >
          <Blossom size={42} />
        </motion.div>

        <motion.div
          animate={{ y: [8, -8, 8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-8 opacity-50"
        >
          <Blossom size={36} color="#FFFDF9" />
        </motion.div>

        {/* Ambient subtle sparkles */}
        <div className="absolute top-1/3 left-1/4 animate-pulse-subtle">
          <Sparkle size={18} color="#ECC055" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-pulse-subtle delay-1000">
          <Sparkle size={16} color="#ECC055" />
        </div>
      </div>

      {/* Main Locked Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl mx-auto rounded-3xl border border-garden-border/80 bg-garden-cream/90 p-8 sm:p-12 shadow-soft-lg backdrop-blur-md text-center"
      >
        {/* Decorative corner leaves */}
        <div className="absolute -top-6 -left-6 transform -rotate-45">
          <LeafSprig size={50} />
        </div>
        <div className="absolute -top-6 -right-6 transform rotate-45">
          <LeafSprig size={50} flip />
        </div>

        {/* Blooming Floral Centerpiece */}
        <div className="relative mx-auto mb-6 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <Sunflower size={96} className="filter drop-shadow-sm" />
          </motion.div>
          <div className="absolute -top-1 -right-2">
            <motion.div
              animate={{ scale: [1, 1.25, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Sparkles className="h-6 w-6 text-garden-yellowDark" />
            </motion.div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-garden-border bg-garden-blush/40 px-3.5 py-1 text-xs font-medium text-garden-rose mb-4">
          <Lock className="h-3 w-3 text-garden-mauve" />
          <span className="tracking-widest uppercase text-[11px]">Unlocks 17 November, 12:00 AM IST</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-garden-rose mb-3">
          {siteConfig.countdown.heading}
        </h1>

        <p className="font-sans text-sm sm:text-base text-garden-mauve max-w-md mx-auto mb-8 leading-relaxed">
          {siteConfig.countdown.subheading}
        </p>

        {/* Live Countdown Counters */}
        <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto mb-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center rounded-2xl border border-garden-border/80 bg-garden-pink/60 py-3 px-2 sm:py-4 shadow-sm"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold text-garden-rose tracking-tight">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-wider text-garden-mauve mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Small note */}
        <div className="flex items-center justify-center gap-2 text-garden-mauve text-xs sm:text-sm">
          <span className="font-handwritten text-lg sm:text-xl text-garden-rose">
            "{siteConfig.countdown.note}"
          </span>
        </div>

        {/* TEST MODE Bypass (Rendered ONLY when test mode is enabled) */}
        {isTestMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 pt-6 border-t border-garden-border/60"
          >
            <div className="inline-flex flex-col items-center gap-2">
              <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-garden-rose/70 bg-garden-yellow/40 px-2.5 py-0.5 rounded-full">
                ⚡ Development Test Mode Active
              </span>
              <button
                onClick={onUnlock}
                className="mt-1 inline-flex items-center gap-2 rounded-full bg-garden-rose px-5 py-2.5 text-xs sm:text-sm font-medium text-garden-cream shadow-md transition-transform duration-200 hover:scale-105 hover:bg-[#633a46] active:scale-95"
              >
                <span>Enter Garden Now (Bypass Countdown)</span>
                <Sparkles className="h-4 w-4 text-garden-yellow" />
              </button>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Subtle bottom note */}
      <p className="mt-8 font-handwritten text-lg text-garden-mauve/80 z-10">
        Made with a little sunshine and lots of flowers ♡
      </p>
    </div>
  );
};
