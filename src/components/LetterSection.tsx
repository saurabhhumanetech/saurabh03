import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';
import { Sunflower, LeafSprig, WaxFlowerSeal, Blossom, WashiTape } from './FloralDecorations';
import { Mail, Sparkles, X } from 'lucide-react';

export const LetterSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { letter } = siteConfig;

  const handleEnvelopeClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section id="letter" className="relative w-full py-24 px-4 sm:px-6 bg-garden-pink">
      {/* Decorative Floral background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-12 opacity-30">
          <Sunflower size={140} />
        </div>
        <div className="absolute bottom-16 -left-10 opacity-35">
          <Sunflower size={120} />
        </div>
        <div className="absolute top-10 left-12 opacity-40">
          <Blossom size={40} />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-garden-rose" />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve">
              A Personal Note
            </span>
            <Mail className="w-4 h-4 text-garden-rose" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-garden-rose mb-3">
            {letter.heading}
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-garden-mauve font-light">
            {letter.subheading}
          </p>
        </motion.div>

        {/* Envelope & Letter Container */}
        <div className="relative flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {!isOpen ? (
              /* Closed Envelope View */
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.4 }}
                onClick={handleEnvelopeClick}
                className="group relative cursor-pointer select-none"
              >
                {/* Washi tape on top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape text="For Jaseena 💌" />
                </div>

                {/* Envelope Body */}
                <div className="relative w-80 sm:w-96 h-56 sm:h-64 rounded-2xl bg-[#FADDE4] border-2 border-garden-border shadow-gift transition-all duration-300 group-hover:shadow-soft-lg group-hover:-translate-y-1 overflow-hidden flex flex-col items-center justify-center">
                  {/* Decorative envelope triangular folds */}
                  <div
                    className="absolute inset-0 bg-[#F6CCD7] opacity-60 pointer-events-none"
                    style={{
                      clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)',
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#F3BCCB] opacity-50 pointer-events-none"
                    style={{
                      clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
                    }}
                  />

                  {/* Envelope Front Details */}
                  <div className="relative z-10 flex flex-col items-center text-center px-6">
                    <p className="font-handwritten text-3xl text-garden-rose mb-1">
                      Dear Jaseena
                    </p>
                    <p className="font-serif italic text-xs text-garden-mauve tracking-wide">
                      A little note written from the heart
                    </p>
                  </div>

                  {/* Wax Flower Seal */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-transform duration-300 group-hover:scale-110">
                    <WaxFlowerSeal size={62} className="filter drop-shadow-md" />
                  </div>

                  {/* Subtle Stamp in Corner */}
                  <div className="absolute top-3 right-3 z-10 p-1.5 border border-dashed border-garden-mauve/50 rounded bg-garden-cream/60 rotate-6 text-[9px] uppercase font-sans text-garden-rose">
                    <span>17 NOV</span>
                  </div>
                </div>

                {/* Tap to open hint */}
                <p className="mt-4 font-serif italic text-xs sm:text-sm text-garden-mauve group-hover:text-garden-rose transition-colors flex items-center justify-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-garden-yellowDark" />
                  <span>{letter.envelopeLabel}</span>
                  <Sparkles className="w-3.5 h-3.5 text-garden-yellowDark" />
                </p>
              </motion.div>
            ) : (
              /* Opened Stationary Letter View */
              <motion.div
                key="open-letter"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-2xl text-left"
              >
                {/* Washi Tape styling at top */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
                  <WashiTape text="A letter for Jaseena 🌻" />
                </div>

                {/* Decorative Floral Accents on Letter Paper */}
                <div className="absolute -top-6 -left-6 z-30 pointer-events-none">
                  <Sunflower size={60} className="filter drop-shadow-xs" />
                </div>
                <div className="absolute -bottom-6 -right-6 z-30 pointer-events-none">
                  <Sunflower size={64} className="filter drop-shadow-xs" />
                </div>
                <div className="absolute top-1/2 -right-5 z-30 pointer-events-none hidden sm:block">
                  <LeafSprig size={40} flip />
                </div>

                {/* Parchment Paper Card */}
                <div className="relative rounded-3xl bg-garden-cream border-2 border-garden-border p-7 sm:p-12 shadow-gift paper-texture">
                  {/* Close / Fold Back button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-garden-blush/60 text-garden-rose hover:bg-garden-blush transition-colors flex items-center gap-1 text-xs font-serif italic shadow-xs"
                    title="Fold back into envelope"
                  >
                    <X className="w-4 h-4" />
                    <span className="hidden sm:inline">Fold back</span>
                  </button>

                  {/* Letter Header */}
                  <div className="mb-6 pt-2">
                    <p className="font-handwritten text-3xl sm:text-4xl text-garden-rose">
                      {letter.salutation}
                    </p>
                  </div>

                  {/* Letter Body Paragraphs */}
                  <div className="space-y-4 font-serif text-base sm:text-lg text-garden-rose/95 leading-relaxed">
                    {letter.paragraphs.map((p, idx) => (
                      <p key={idx} className="indent-4 sm:indent-6">
                        {p}
                      </p>
                    ))}
                  </div>

                  {/* Sign-off & Closing */}
                  <div className="mt-8 pt-6 border-t border-garden-border/60 flex flex-col items-end text-right">
                    <p className="font-serif italic text-base sm:text-lg text-garden-rose font-medium">
                      {letter.signOff}
                    </p>
                    <div className="mt-3">
                      <p className="font-handwritten text-2xl sm:text-3xl text-garden-rose leading-tight whitespace-pre-line">
                        {letter.sender}
                      </p>
                    </div>
                  </div>

                  {/* Tiny decorative stamp in bottom corner */}
                  <div className="mt-6 flex items-center justify-between text-xs text-garden-mauve/70 font-sans">
                    <span className="flex items-center gap-1">
                      <Sunflower size={16} />
                      Written with warmth
                    </span>
                    <span className="font-serif italic">17 November 2026</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
