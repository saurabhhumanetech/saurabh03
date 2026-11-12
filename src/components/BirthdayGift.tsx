import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config';
import { Sunflower, Blossom, CuteCloud } from './FloralDecorations';
import { Gift, RefreshCw, Heart, ChevronDown } from 'lucide-react';

export const BirthdayGift: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { gift } = siteConfig;

  const triggerFloralBurst = (originX: number, originY: number) => {
    confetti({
      particleCount: 80,
      spread: 85,
      origin: { x: originX, y: originY },
      colors: ['#FF5C8A', '#F6D77A', '#FADDE4', '#FF85A1', '#FFFDF9', '#ECC055', '#754653'],
      shapes: ['circle'],
      scalar: 1.25,
      gravity: 0.75,
      ticks: 240,
    });
  };

  const handleBoxClick = (e: React.MouseEvent) => {
    if (!isOpen) {
      setIsOpen(true);
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 3) / window.innerHeight;
      triggerFloralBurst(x, y);

      setTimeout(() => {
        triggerFloralBurst(x, y - 0.05);
      }, 250);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section id="gift" className="relative w-full py-24 px-4 sm:px-6 bg-gradient-to-b from-garden-pink/60 via-garden-blush/30 to-garden-pink/60 overflow-hidden">
      {/* Background Floating Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-8 opacity-30">
          <Sunflower size={110} />
        </div>
        <div className="absolute bottom-16 right-8 opacity-35">
          <Sunflower size={130} />
        </div>
        <div className="absolute top-1/2 right-10 opacity-40">
          <Blossom size={48} />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-garden-rose" />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve font-medium">
              A Special Surprise
            </span>
            <Gift className="w-5 h-5 text-garden-rose" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-garden-rose mb-2">
            {gift.sectionTitle}
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-garden-mauve font-light">
            {gift.teaserText}
          </p>
        </motion.div>

        {/* Gift Box Stage Container */}
        <div className="relative min-h-[460px] sm:min-h-[520px] flex flex-col items-center justify-end pb-8">
          {/* Glowing Aura Behind Box */}
          <div className="absolute bottom-10 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-garden-yellow/30 via-[#FF85A1]/25 to-garden-yellow/30 blur-3xl rounded-full pointer-events-none"></div>

          {/* Cloud Emerging from inside the box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="gift-reveal"
                initial={{ opacity: 0, y: 90, scale: 0.3 }}
                animate={{
                  opacity: 1,
                  y: -175,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 160,
                    damping: 14,
                    delay: 0.25,
                  },
                }}
                exit={{ opacity: 0, y: 40, scale: 0.3 }}
                className="absolute z-30 flex flex-col items-center pointer-events-auto"
              >
                {/* Floating animation for the cloud */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Illustrated Cute Cartoon Cloud */}
                  <CuteCloud size={250} className="filter drop-shadow-lg" />

                  {/* Cloud Revealed Dialogue Bubble */}
                  <div className="relative -mt-2 max-w-sm sm:max-w-md rounded-3xl bg-garden-cream px-7 py-4 shadow-gift border-3 border-garden-rose/70 text-center">
                    {/* Speech bubble beak */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-garden-cream border-t-3 border-l-3 border-garden-rose/70 transform rotate-45"></div>

                    <p className="font-serif text-xl sm:text-2xl font-medium text-garden-rose leading-snug">
                      "{gift.revealedMessage}"
                    </p>

                    <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs sm:text-sm text-garden-mauve font-sans font-medium">
                      <Heart className="w-4 h-4 text-garden-rose fill-garden-rose/40" />
                      <span>{gift.revealedCaption}</span>
                      <Heart className="w-4 h-4 text-garden-rose fill-garden-rose/40" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Eye-Catching Interactive Cartoon Present Box */}
          <div className="relative z-20 flex flex-col items-center">
            {/* Pulsing "TAP TO OPEN" Callout Sticker when closed */}
            {!isOpen && (
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                onClick={handleBoxClick}
                className="cursor-pointer mb-3 inline-flex items-center gap-2 rounded-full border-2 border-garden-rose bg-gradient-to-r from-garden-yellow via-[#FFFDF9] to-garden-yellow px-5 py-2 shadow-md hover:scale-105 transition-transform"
              >
                <span className="text-base animate-bounce">🎁</span>
                <span className="font-serif italic font-bold text-sm sm:text-base text-garden-rose tracking-wide">
                  Tap to unwrap your gift! ♡
                </span>
                <ChevronDown className="w-4 h-4 text-garden-rose animate-bounce" />
              </motion.div>
            )}

            {/* Clickable Gift Box Container with Cartoon Physics */}
            <motion.div
              onClick={handleBoxClick}
              animate={
                !isOpen
                  ? {
                      scale: [1, 1.025, 0.99, 1],
                      rotate: [-1, 1, -1],
                    }
                  : {}
              }
              transition={{
                duration: 2.8,
                repeat: !isOpen ? Infinity : 0,
                ease: 'easeInOut',
              }}
              whileHover={!isOpen ? { scale: 1.06, rotate: 1 } : {}}
              whileTap={!isOpen ? { scale: 0.94 } : {}}
              className="relative cursor-pointer select-none"
            >
              {/* Dangling Cartoon Gift Tag */}
              {!isOpen && (
                <motion.div
                  animate={{ rotate: [-6, 6, -6] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-6 sm:-right-8 z-40 transform rotate-12"
                >
                  <div className="relative bg-[#FFFDF9] border-2.5 border-garden-rose rounded-2xl px-3.5 py-2 shadow-md text-left">
                    <div className="absolute -top-4 left-4 w-1 h-4 bg-garden-rose"></div>
                    <div className="absolute top-1.5 left-2.5 w-2 h-2 rounded-full border-1.5 border-garden-rose bg-garden-yellow"></div>
                    <p className="text-[10px] font-sans font-bold text-garden-mauve uppercase tracking-widest pl-2">
                      FOR POOKIE
                    </p>
                    <p className="font-handwritten text-base text-garden-rose leading-none pl-2">
                      Kuchupuchu ♡
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Cartoon Box Lid with Giant Puffy Bow */}
              <motion.div
                animate={
                  isOpen
                    ? { y: -160, x: 45, rotate: 25, opacity: 0.9 }
                    : { y: 0, x: 0, rotate: 0, opacity: 1 }
                }
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="relative z-20 flex flex-col items-center"
              >
                {/* SVG Puffy Cartoon Bow */}
                <svg
                  width="220"
                  height="95"
                  viewBox="0 0 220 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="-mb-3 filter drop-shadow-md z-30"
                >
                  {/* Left ribbon tail */}
                  <path
                    d="M95 55 Q70 85 82 94 L98 87 Q92 70 105 55 Z"
                    fill="#FFF6D6"
                    stroke="#5E2C37"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />
                  {/* Right ribbon tail */}
                  <path
                    d="M125 55 Q150 85 138 94 L122 87 Q128 70 115 55 Z"
                    fill="#FFF6D6"
                    stroke="#5E2C37"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                  />

                  {/* Left Big Puffy Bow Loop */}
                  <path
                    d="M110 52 C70 15, 30 18, 45 48 C55 68, 85 64, 110 55 Z"
                    fill="#FFF4CE"
                    stroke="#5E2C37"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  {/* Left loop inner shadow */}
                  <path
                    d="M60 40 C65 35, 80 38, 85 45 C75 48, 65 46, 60 40 Z"
                    fill="#FFE8A3"
                  />

                  {/* Right Big Puffy Bow Loop */}
                  <path
                    d="M110 52 C150 15, 190 18, 175 48 C165 68, 135 64, 110 55 Z"
                    fill="#FFF4CE"
                    stroke="#5E2C37"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  {/* Right loop inner shadow */}
                  <path
                    d="M160 40 C155 35, 140 38, 135 45 C145 48, 155 46, 160 40 Z"
                    fill="#FFE8A3"
                  />

                  {/* Center Bow Knot (Chunky rounded cushion) */}
                  <ellipse
                    cx="110"
                    cy="52"
                    rx="18"
                    ry="15"
                    fill="#FFF8DC"
                    stroke="#5E2C37"
                    strokeWidth="4"
                  />

                  {/* Cute center sunflower icon */}
                  <circle cx="110" cy="52" r="7" fill="#F6D77A" />
                  <circle cx="110" cy="52" r="4.5" fill="#8C4B59" />
                </svg>

                {/* Cartoon Lid Overhang Rectangle */}
                <div className="relative w-72 sm:w-84 h-18 rounded-2xl bg-gradient-to-r from-[#FF7A9E] via-[#FF668F] to-[#FF7A9E] border-4 border-[#5E2C37] shadow-lg flex items-center justify-center overflow-hidden">
                  {/* Cute white polka dots */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none flex justify-around items-center px-4">
                    <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-white"></div>
                  </div>

                  {/* Chunky Cream Vertical Ribbon on Lid */}
                  <div className="absolute top-0 bottom-0 w-16 bg-[#FFF4CE] border-x-4 border-[#5E2C37] flex items-center justify-center">
                    <div className="w-1.5 h-full bg-[#E5C973]"></div>
                  </div>

                  {/* Top gloss highlight reflection */}
                  <div className="absolute top-1 left-3 right-3 h-2 rounded-full bg-white/30 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Cartoon Box Main Body */}
              <div className="relative -mt-3 w-64 sm:w-76 h-54 sm:h-60 rounded-b-3xl bg-gradient-to-b from-[#FF668F] via-[#FF527D] to-[#E83E6A] border-4 border-[#5E2C37] shadow-gift flex flex-col items-center justify-between p-4 overflow-hidden">
                {/* Gloss highlight stripe on left */}
                <div className="absolute top-0 bottom-0 left-4 w-3 bg-white/20 rounded-full pointer-events-none"></div>

                {/* Cute white polka dots on box */}
                <div className="absolute inset-0 opacity-40 pointer-events-none flex flex-wrap justify-between items-around p-4 gap-6">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-3.5 h-3.5 rounded-full bg-white shadow-xs"></div>
                  ))}
                </div>

                {/* Chunky Vertical Cream Ribbon */}
                <div className="absolute top-0 bottom-0 w-16 bg-[#FFF4CE] border-x-4 border-[#5E2C37] flex items-center justify-center">
                  <div className="w-1.5 h-full bg-[#E5C973]"></div>
                </div>

                {/* Chunky Horizontal Cream Ribbon */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-14 bg-[#FFF4CE] border-y-4 border-[#5E2C37] flex items-center justify-center">
                  <div className="w-full h-1.5 bg-[#E5C973]"></div>
                </div>

                {/* Corner Floral Badges */}
                <div className="absolute bottom-3 left-3 z-10 filter drop-shadow-sm">
                  <Sunflower size={34} />
                </div>
                <div className="absolute bottom-3 right-3 z-10 filter drop-shadow-sm">
                  <Sunflower size={34} />
                </div>

                {/* Front Cartoon Label Banner */}
                <div className="relative z-10 mt-auto mb-2 bg-[#FFFDF9] border-2.5 border-[#5E2C37] rounded-2xl px-5 py-2 shadow-md text-center">
                  <p className="font-handwritten text-xl sm:text-2xl text-garden-rose tracking-wide font-bold">
                    {isOpen ? "A little gift of love ♡" : gift.boxLabel}
                  </p>
                </div>
              </div>

              {/* Bottom Ground Shadow */}
              <div className="mx-auto mt-2 w-52 sm:w-64 h-4 bg-[#754653]/20 rounded-full blur-xs"></div>
            </motion.div>
          </div>
        </div>

        {/* Replay / Reset Action */}
        <div className="mt-4 flex items-center justify-center">
          {isOpen ? (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border-2 border-garden-rose bg-garden-cream px-5 py-2.5 text-xs sm:text-sm font-medium text-garden-rose shadow-md hover:bg-garden-blush transition-all active:scale-95"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Pack gift back into the box 🎀</span>
            </button>
          ) : (
            <p className="font-serif italic text-sm text-garden-mauve flex items-center justify-center gap-1.5">
              <span>(Click the big pink present to open your surprise)</span>
              <Heart className="w-4 h-4 text-garden-rose fill-garden-rose/40" />
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
