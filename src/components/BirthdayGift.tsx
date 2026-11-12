import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config';
import { Sunflower, Blossom, Sparkle, CuteCloud } from './FloralDecorations';
import { Gift as GiftIcon, Sparkles, RefreshCw, Heart } from 'lucide-react';

export const BirthdayGift: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { gift } = siteConfig;

  const triggerSparkleBurst = (originX: number, originY: number) => {
    // Gentle pastel and sunflower confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { x: originX, y: originY },
      colors: ['#F6D77A', '#FADDE4', '#FFFDF9', '#EBCBD3', '#ECC055', '#754653'],
      shapes: ['circle'],
      scalar: 1.1,
      gravity: 0.7,
      ticks: 200,
    });
  };

  const handleBoxClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isOpen) {
      setIsOpen(true);
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 3) / window.innerHeight;
      triggerSparkleBurst(x, y);

      // Secondary follow-up mini burst
      setTimeout(() => {
        triggerSparkleBurst(x, y - 0.05);
      }, 250);
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <section id="gift" className="relative w-full py-24 px-4 sm:px-6 bg-garden-pink/80 overflow-hidden">
      {/* Background Floating Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-12 left-10 opacity-30">
          <Sunflower size={110} />
        </div>
        <div className="absolute bottom-16 right-10 opacity-35">
          <Sunflower size={130} />
        </div>
        <div className="absolute top-1/2 right-12 opacity-40">
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
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <GiftIcon className="w-4 h-4 text-garden-rose" />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve">
              A Special Surprise
            </span>
            <GiftIcon className="w-4 h-4 text-garden-rose" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-garden-rose mb-2">
            {gift.sectionTitle}
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-garden-mauve font-light">
            {gift.teaserText}
          </p>
        </motion.div>

        {/* Gift Box Interactive Container */}
        <div className="relative min-h-[380px] sm:min-h-[440px] flex flex-col items-center justify-end pb-8">
          {/* Cloud Emerging from inside the box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="gift-reveal"
                initial={{ opacity: 0, y: 80, scale: 0.4 }}
                animate={{
                  opacity: 1,
                  y: -140,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 140,
                    damping: 14,
                    delay: 0.25,
                  },
                }}
                exit={{ opacity: 0, y: 40, scale: 0.4 }}
                className="absolute z-30 flex flex-col items-center pointer-events-auto"
              >
                {/* Floating animation for the cloud */}
                <motion.div
                  animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Illustrated Cute Cloud */}
                  <CuteCloud size={210} className="filter drop-shadow-md" />

                  {/* Cloud Revealed Dialogue Bubble */}
                  <div className="relative -mt-3 max-w-sm rounded-3xl bg-garden-cream px-6 py-4 shadow-gift border-2 border-garden-border/80 text-center">
                    {/* Speech bubble beak */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-garden-cream border-t-2 border-l-2 border-garden-border/80 transform rotate-45"></div>

                    <p className="font-serif text-lg sm:text-xl font-medium text-garden-rose leading-snug">
                      "{gift.revealedMessage}"
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-garden-mauve font-sans">
                      <Sparkles className="w-3.5 h-3.5 text-garden-yellowDark" />
                      <span>{gift.revealedCaption}</span>
                      <Sparkles className="w-3.5 h-3.5 text-garden-yellowDark" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Illustrated Birthday Present Box */}
          <div
            onClick={handleBoxClick}
            className={`relative z-20 cursor-pointer select-none transition-transform duration-300 ${
              !isOpen ? 'hover:scale-[1.03] active:scale-[0.98]' : ''
            }`}
          >
            {/* Subtle floating sparkles around closed box */}
            {!isOpen && (
              <>
                <motion.div
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.2, repeat: Infinity }}
                  className="absolute -top-8 -left-6 z-30 pointer-events-none"
                >
                  <Sparkle size={24} color="#F6D77A" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-4 -right-8 z-30 pointer-events-none"
                >
                  <Sparkle size={20} color="#F6D77A" />
                </motion.div>
              </>
            )}

            {/* Gift Box Lid and Bow (Animated to pop up and tilt open) */}
            <motion.div
              animate={
                isOpen
                  ? { y: -130, x: 25, rotate: 18, opacity: 0.85 }
                  : { y: 0, x: 0, rotate: 0, opacity: 1 }
              }
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative z-20 flex flex-col items-center"
            >
              {/* Cute Cream Bow on Top */}
              <div className="relative -mb-1 flex items-center justify-center">
                {/* Left bow loop */}
                <div className="w-8 h-8 rounded-full border-4 border-[#FFFDF9] bg-garden-cream shadow-xs transform -rotate-30 -mr-2"></div>
                {/* Bow knot */}
                <div className="relative z-10 w-6 h-6 rounded-full bg-garden-cream border-2 border-garden-border shadow-xs flex items-center justify-center">
                  <Sunflower size={14} />
                </div>
                {/* Right bow loop */}
                <div className="w-8 h-8 rounded-full border-4 border-[#FFFDF9] bg-garden-cream shadow-xs transform rotate-30 -ml-2"></div>
              </div>

              {/* Box Lid Rectangle */}
              <div className="relative w-64 sm:w-72 h-14 rounded-2xl bg-gradient-to-r from-[#FADDE4] via-[#F8D2DC] to-[#FADDE4] border-2 border-garden-border shadow-md flex items-center justify-center">
                {/* Vertical Ribbon on Lid */}
                <div className="absolute top-0 bottom-0 w-12 bg-garden-cream/95 border-x border-garden-border flex items-center justify-center">
                  <div className="w-0.5 h-full bg-garden-border/40"></div>
                </div>

                {/* Small flower sticker on lid corner */}
                <div className="absolute -top-2 left-4">
                  <Blossom size={22} />
                </div>
              </div>
            </motion.div>

            {/* Box Lower Body */}
            <div className="relative -mt-2 w-56 sm:w-64 h-48 sm:h-52 rounded-b-3xl bg-gradient-to-b from-[#FADDE4] to-[#F5C7D3] border-2 border-garden-border shadow-gift flex flex-col items-center justify-between p-4 overflow-hidden">
              {/* Vertical Ribbon */}
              <div className="absolute top-0 bottom-0 w-12 bg-garden-cream/95 border-x border-garden-border flex items-center justify-center">
                <div className="w-0.5 h-full bg-garden-border/40"></div>
              </div>

              {/* Horizontal Ribbon */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 bg-garden-cream/95 border-y border-garden-border flex items-center justify-center">
                <div className="w-full h-0.5 bg-garden-border/40"></div>
              </div>

              {/* Delicate Floral Corner Accents */}
              <div className="absolute bottom-3 left-3 z-10">
                <Sunflower size={28} />
              </div>
              <div className="absolute bottom-3 right-3 z-10">
                <Sunflower size={28} />
              </div>

              {/* Box Front Label */}
              <div className="relative z-10 mt-auto mb-4 bg-garden-cream/95 border border-garden-border rounded-xl px-4 py-2 shadow-sm text-center">
                <p className="font-handwritten text-lg sm:text-xl text-garden-rose tracking-wide">
                  {isOpen ? "A little gift of sunshine ♡" : gift.boxLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Replay / Close Action */}
        <div className="mt-4 flex items-center justify-center">
          {isOpen ? (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-garden-border bg-garden-cream/90 px-4 py-2 text-xs sm:text-sm font-medium text-garden-rose shadow-soft hover:bg-garden-blush/60 transition-all active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Pack gift back into the box</span>
            </button>
          ) : (
            <p className="font-serif italic text-sm text-garden-mauve flex items-center justify-center gap-1.5">
              <span>(Click the pink box to untie the ribbon)</span>
              <Heart className="w-3.5 h-3.5 text-garden-rose" />
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
