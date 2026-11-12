import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/config';
import { Sunflower, Blossom, LeafSprig, Sparkle, WashiTape } from './FloralDecorations';
import { ChevronDown, Camera } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-between overflow-hidden bg-garden-pink pt-16 pb-12 px-4 sm:px-6">
      {/* Decorative Floating Floral Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left sunflower */}
        <motion.div
          animate={{ y: [-6, 6, -6], rotate: [-5, 5, -5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-10 -left-10 opacity-70"
        >
          <Sunflower size={140} />
        </motion.div>

        {/* Top right sunflower */}
        <motion.div
          animate={{ y: [6, -8, 6], rotate: [4, -4, 4] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-12 -right-8 opacity-60"
        >
          <Sunflower size={110} />
        </motion.div>

        {/* Mid left blossom */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotate: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -left-6 opacity-60"
        >
          <Blossom size={50} />
        </motion.div>

        {/* Mid right blossom */}
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-2/3 -right-6 opacity-60"
        >
          <Blossom size={46} color="#FFFDF9" />
        </motion.div>

        {/* Scattered soft sparkles */}
        <div className="absolute top-28 left-[18%] animate-pulse-subtle">
          <Sparkle size={18} color="#F6D77A" />
        </div>
        <div className="absolute top-36 right-[22%] animate-pulse-subtle delay-700">
          <Sparkle size={16} color="#F6D77A" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Subtle greeting tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-garden-border bg-garden-cream/80 px-4 py-1.5 shadow-sm backdrop-blur mb-6"
        >
          <Sunflower size={18} className="animate-spin-slow" />
          <span className="font-serif italic text-xs sm:text-sm tracking-wide text-garden-rose">
            17 November • Kuchupuchu's Special Day 🎀
          </span>
          <Sunflower size={18} className="animate-spin-slow" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-garden-rose mb-4"
        >
          {siteConfig.hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-base sm:text-lg md:text-xl text-garden-mauve max-w-xl mx-auto mb-5 leading-relaxed font-light"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        {/* Handwritten Decorative Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mb-8"
        >
          <span className="font-handwritten text-2xl sm:text-3xl text-garden-rose tracking-wide">
            {siteConfig.hero.handwrittenNote}
          </span>
        </motion.div>

        {/* Hero Photograph Card (Polaroid style with delicate floral wreath) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          {/* Floral decorations surrounding the photo frame */}
          <div className="absolute -top-7 -left-7 z-20 pointer-events-none transform -rotate-12">
            <Sunflower size={64} className="filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="absolute -bottom-6 -right-6 z-20 pointer-events-none transform rotate-12">
            <Sunflower size={58} className="filter drop-shadow-sm transition-transform duration-300 group-hover:-rotate-12" />
          </div>
          <div className="absolute -top-5 -right-5 z-20 pointer-events-none transform rotate-45">
            <LeafSprig size={48} flip />
          </div>
          <div className="absolute -bottom-5 -left-5 z-20 pointer-events-none transform -rotate-45">
            <LeafSprig size={48} />
          </div>

          {/* Washi tape on top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <WashiTape text="pookie girl 🎀✨" />
          </div>

          {/* Polaroid Card */}
          <div className="relative rounded-2xl bg-garden-cream p-3.5 pb-5 sm:p-4 sm:pb-6 shadow-polaroid border border-garden-border/80 transition-all duration-300 group-hover:shadow-soft-lg group-hover:-translate-y-1">
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 rounded-xl overflow-hidden bg-gradient-to-b from-garden-blush/60 to-garden-pink/60 flex flex-col items-center justify-center text-center border border-garden-border/60">
              {siteConfig.hero.placeholderImage ? (
                <img
                  src={siteConfig.hero.placeholderImage}
                  alt="Kuchupuchu"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex flex-col items-center justify-center space-y-3 px-3 p-4">
                  <div className="relative p-4 rounded-full bg-garden-cream/80 border border-garden-border shadow-sm">
                    <Sunflower size={44} className="text-garden-yellowDark" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-serif italic text-lg sm:text-xl text-garden-rose font-medium">
                      Kuchupuchu 🎀
                    </p>
                    <p className="text-xs text-garden-mauve font-sans font-light">
                      The birthday pookie herself ✨
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-garden-cream/90 border border-garden-border text-[11px] text-garden-rose/80 font-handwritten text-base">
                      <Camera className="w-3.5 h-3.5 text-garden-mauve" />
                      Photograph placeholder
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Polaroid caption */}
            <div className="mt-3.5 flex items-center justify-center gap-1.5">
              <span className="font-handwritten text-xl sm:text-2xl text-garden-rose">
                Queen of Sunshine, Chaos & My Whole Heart 🥺💖
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 mt-8 flex flex-col items-center cursor-pointer group"
        onClick={onExploreClick}
      >
        <span className="font-serif italic text-xs sm:text-sm text-garden-mauve tracking-wider uppercase mb-1.5 group-hover:text-garden-rose transition-colors">
          Wander into your garden
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="p-1.5 rounded-full bg-garden-cream/80 border border-garden-border/80 text-garden-rose shadow-sm"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
