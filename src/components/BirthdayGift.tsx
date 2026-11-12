import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { siteConfig } from '../data/config';
import { Sunflower, Blossom, CuteCloud } from './FloralDecorations';
import { Gift, RefreshCw, Heart } from 'lucide-react';

export const BirthdayGift: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { gift } = siteConfig;

  const triggerFloralBurst = (originX: number, originY: number) => {
    // Pure pastel, sunflower, and heart confetti burst (zero AI stars)
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { x: originX, y: originY },
      colors: ['#F6D77A', '#FADDE4', '#FF85A1', '#FF69B4', '#FFFDF9', '#ECC055', '#754653'],
      shapes: ['circle'],
      scalar: 1.15,
      gravity: 0.75,
      ticks: 220,
    });
  };

  const handleBoxClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
    <section id="gift" className="relative w-full py-24 px-4 sm:px-6 bg-garden-pink/80 overflow-hidden">
      {/* Background Floating Floral Decor */}
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
            <Gift className="w-4 h-4 text-garden-rose" />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve">
              A Special Surprise
            </span>
            <Gift className="w-4 h-4 text-garden-rose" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-garden-rose mb-2">
            {gift.sectionTitle}
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-garden-mauve font-light">
            {gift.teaserText}
          </p>
        </motion.div>

        {/* Gift Box Interactive Container */}
        <div className="relative min-h-[400px] sm:min-h-[460px] flex flex-col items-center justify-end pb-8">
          {/* Cloud Emerging from inside the box */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="gift-reveal"
                initial={{ opacity: 0, y: 90, scale: 0.3 }}
                animate={{
                  opacity: 1,
                  y: -155,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 150,
                    damping: 14,
                    delay: 0.25,
                  },
                }}
                exit={{ opacity: 0, y: 40, scale: 0.3 }}
                className="absolute z-30 flex flex-col items-center pointer-events-auto"
              >
                {/* Floating animation for the cloud */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [-2.5, 2.5, -2.5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex flex-col items-center"
                >
                  {/* Illustrated Cute Cartoon Cloud */}
                  <CuteCloud size={230} className="filter drop-shadow-md" />

                  {/* Cloud Revealed Dialogue Bubble */}
                  <div className="relative -mt-2 max-w-sm rounded-3xl bg-garden-cream px-7 py-4 shadow-gift border-3 border-garden-border/90 text-center">
                    {/* Speech bubble beak */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-garden-cream border-t-3 border-l-3 border-garden-border/90 transform rotate-45"></div>

                    <p className="font-serif text-lg sm:text-xl font-medium text-garden-rose leading-snug">
                      "{gift.revealedMessage}"
                    </p>

                    <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-garden-mauve font-sans">
                      <Heart className="w-3.5 h-3.5 text-garden-rose fill-garden-rose/40" />
                      <span>{gift.revealedCaption}</span>
                      <Heart className="w-3.5 h-3.5 text-garden-rose fill-garden-rose/40" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Illustrated Cartoon Present Box */}
          <motion.div
            onClick={handleBoxClick}
            animate={
              !isOpen
                ? {
                    y: [0, -5, 0],
                    rotate: [-1, 1, -1],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: !isOpen ? Infinity : 0,
              ease: 'easeInOut',
            }}
            whileHover={!isOpen ? { scale: 1.04, rotate: 1 } : {}}
            whileTap={!isOpen ? { scale: 0.96 } : {}}
            className="relative z-20 cursor-pointer select-none"
          >
            {/* Dangling Cartoon Gift Tag tied to the ribbon */}
            {!isOpen && (
              <motion.div
                animate={{ rotate: [-4, 6, -4] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-10 sm:-right-12 z-40 transform rotate-12"
              >
                <div className="relative bg-[#FFFDF9] border-2 border-garden-rose/60 rounded-xl px-3 py-1.5 shadow-sm text-left">
                  {/* Tag string */}
                  <div className="absolute -top-3 left-3 w-0.5 h-3.5 bg-garden-mauve/70"></div>
                  {/* Tag eyelet hole */}
                  <div className="absolute top-1 left-2 w-1.5 h-1.5 rounded-full border border-garden-rose/70 bg-white"></div>
                  <p className="text-[10px] font-sans font-medium text-garden-mauve uppercase tracking-widest pl-2">
                    For you
                  </p>
                  <p className="font-handwritten text-sm text-garden-rose leading-none pl-2">
                    Kuchupuchu ♡
                  </p>
                </div>
              </motion.div>
            )}

            {/* Cartoon Box Lid & Puffy Bow */}
            <motion.div
              animate={
                isOpen
                  ? { y: -140, x: 30, rotate: 22, opacity: 0.9 }
                  : { y: 0, x: 0, rotate: 0, opacity: 1 }
              }
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              className="relative z-20 flex flex-col items-center"
            >
              {/* Puffy 3D Cartoon Cream Bow */}
              <div className="relative -mb-2 flex items-center justify-center">
                {/* Left Bow Loop */}
                <div className="relative w-12 h-10 rounded-full border-3 border-garden-rose/80 bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE5] shadow-sm transform -rotate-25 -mr-3 flex items-center justify-center">
                  <div className="w-5 h-4 rounded-full bg-garden-blush/60 border border-garden-border/60"></div>
                </div>

                {/* Left Ribbon Tail */}
                <div
                  className="absolute -bottom-3 left-4 w-5 h-8 bg-garden-cream border-2 border-garden-rose/80 transform -rotate-15 shadow-2xs"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }}
                ></div>

                {/* Bow Center Knot with Sunflower Button */}
                <div className="relative z-20 w-8 h-8 rounded-full bg-garden-cream border-3 border-garden-rose/80 shadow-sm flex items-center justify-center">
                  <Sunflower size={18} />
                </div>

                {/* Right Ribbon Tail */}
                <div
                  className="absolute -bottom-3 right-4 w-5 h-8 bg-garden-cream border-2 border-garden-rose/80 transform rotate-15 shadow-2xs"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)' }}
                ></div>

                {/* Right Bow Loop */}
                <div className="relative w-12 h-10 rounded-full border-3 border-garden-rose/80 bg-gradient-to-bl from-[#FFFDF9] to-[#F5ECE5] shadow-sm transform rotate-25 -ml-3 flex items-center justify-center">
                  <div className="w-5 h-4 rounded-full bg-garden-blush/60 border border-garden-border/60"></div>
                </div>
              </div>

              {/* Cartoon Box Lid Rectangle */}
              <div className="relative w-68 sm:w-76 h-16 rounded-2xl bg-[#FFB5C5] border-3 border-garden-rose/80 shadow-md flex items-center justify-center overflow-hidden">
                {/* Cute white polka dots pattern */}
                <div className="absolute inset-0 opacity-40 pointer-events-none flex flex-wrap gap-4 p-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-2.5 h-2.5 rounded-full bg-white shadow-2xs"></div>
                  ))}
                </div>

                {/* Chunky Vertical Cream Ribbon on Lid */}
                <div className="absolute top-0 bottom-0 w-14 bg-[#FFFDF9] border-x-3 border-garden-rose/80 flex items-center justify-center">
                  <div className="w-1 h-full bg-[#EBCBD3]"></div>
                </div>

                {/* Small blossom sticker on lid corner */}
                <div className="absolute -top-1 left-4 z-10">
                  <Blossom size={24} color="#FFFDF9" />
                </div>
              </div>
            </motion.div>

            {/* Cartoon Box Main Body */}
            <div className="relative -mt-2.5 w-60 sm:w-68 h-50 sm:h-56 rounded-b-3xl bg-gradient-to-b from-[#FFA8BC] to-[#FF94AC] border-3 border-garden-rose/80 shadow-gift flex flex-col items-center justify-between p-4 overflow-hidden">
              {/* Cute white polka dots on box */}
              <div className="absolute inset-0 opacity-40 pointer-events-none flex flex-wrap gap-5 p-3">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-white shadow-2xs"></div>
                ))}
              </div>

              {/* Chunky Vertical Cream Ribbon */}
              <div className="absolute top-0 bottom-0 w-14 bg-[#FFFDF9] border-x-3 border-garden-rose/80 flex items-center justify-center">
                <div className="w-1 h-full bg-[#EBCBD3]"></div>
              </div>

              {/* Chunky Horizontal Cream Ribbon */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 bg-[#FFFDF9] border-y-3 border-garden-rose/80 flex items-center justify-center">
                <div className="w-full h-1 bg-[#EBCBD3]"></div>
              </div>

              {/* Delicate Corner Sunflowers */}
              <div className="absolute bottom-2.5 left-2.5 z-10">
                <Sunflower size={32} />
              </div>
              <div className="absolute bottom-2.5 right-2.5 z-10">
                <Sunflower size={32} />
              </div>

              {/* Cartoon Box Front Label */}
              <div className="relative z-10 mt-auto mb-3 bg-[#FFFDF9] border-2 border-garden-rose/70 rounded-2xl px-5 py-2 shadow-sm text-center">
                <p className="font-handwritten text-lg sm:text-xl text-garden-rose tracking-wide">
                  {isOpen ? "A little gift of love ♡" : gift.boxLabel}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Replay / Close Action */}
        <div className="mt-4 flex items-center justify-center">
          {isOpen ? (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-full border border-garden-border bg-garden-cream/90 px-4 py-2 text-xs sm:text-sm font-medium text-garden-rose shadow-soft hover:bg-garden-blush/60 transition-all active:scale-95"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Pack gift back into the box 🎀</span>
            </button>
          ) : (
            <p className="font-serif italic text-sm text-garden-mauve flex items-center justify-center gap-1.5">
              <span>(Click the cute pink box to open your gift)</span>
              <Heart className="w-3.5 h-3.5 text-garden-rose fill-garden-rose/40" />
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
