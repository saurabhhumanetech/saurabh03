import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../data/config';
import { Sunflower, LeafSprig, WashiTape, Sparkle, Blossom } from './FloralDecorations';
import { Heart, Image, CheckCheck, X, ArrowLeft } from 'lucide-react';

export const ConversationMemory: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { conversationMemory } = siteConfig;

  const handleClose = useCallback(() => {
    setIsExpanded(false);
    if (window.history.state?.modal === 'conversation-screenshot') {
      window.history.back();
    }
  }, []);

  const handleOpen = () => {
    setIsExpanded(true);
    window.history.pushState({ modal: 'conversation-screenshot' }, '');
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      if (!e.state || e.state.modal !== 'conversation-screenshot') {
        setIsExpanded(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        handleClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded, handleClose]);

  return (
    <section id="story" className="relative w-full py-20 px-4 sm:px-6 bg-garden-pink">
      {/* Background soft botanical elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 -left-12 -translate-y-1/2 opacity-35">
          <Sunflower size={150} />
        </div>
        <div className="absolute bottom-8 right-6 opacity-40">
          <LeafSprig size={70} flip />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Tag & Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <Sparkle size={14} color="#754653" />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve">
              Chapter One
            </span>
            <Sparkle size={14} color="#754653" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-garden-rose mb-3"
          >
            {conversationMemory.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-handwritten text-2xl sm:text-3xl text-garden-rose"
          >
            {conversationMemory.caption}
          </motion.p>
        </div>

        {/* Scrapbook Memory Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Decorative Corner Flowers & Tape */}
          <div className="absolute -top-4 -left-3 z-30 transform -rotate-12">
            <WashiTape text="Instagram DM ✨" />
          </div>
          <div className="absolute -top-6 -right-6 z-30 pointer-events-none">
            <Sunflower size={56} className="filter drop-shadow-sm rotate-12" />
          </div>
          <div className="absolute -bottom-6 -left-6 z-30 pointer-events-none">
            <Blossom size={44} />
          </div>

          {/* Postal Stamp element */}
          <div className="absolute top-4 right-4 z-20 hidden sm:flex flex-col items-center justify-center p-2 rounded border border-dashed border-garden-mauve/60 bg-garden-blush/30 text-[10px] uppercase font-sans text-garden-rose rotate-3 shadow-xs">
            <span className="font-serif font-bold">FIRST DM</span>
            <span className="text-[8px] text-garden-mauve">17 NOV 🌻</span>
          </div>

          {/* Main Scrapbook Sheet */}
          <div className="relative rounded-3xl bg-garden-cream p-6 sm:p-10 shadow-polaroid border border-garden-border/80">
            {/* Header of Chat Mockup / Screenshot Area */}
            <div className="border-b border-garden-border/60 pb-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-garden-blush flex items-center justify-center border border-garden-border text-garden-rose font-serif font-bold text-sm shadow-xs">
                  <span>J</span>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-sans font-medium text-sm sm:text-base text-garden-rose">
                      jaseenaacoree ✨
                    </h3>
                  </div>
                  <p className="text-[11px] font-sans text-garden-mauve">
                    Instagram • Active now
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-handwritten text-lg text-garden-rose">
                  <Heart className="w-3.5 h-3.5 text-garden-rose fill-garden-rose" />
                  Day 1
                </span>
              </div>
            </div>

            {/* Conversation content: Real screenshot if provided, or aesthetic chat mockup preview */}
            {conversationMemory.screenshotUrl ? (
              <div
                className="relative max-w-sm mx-auto rounded-3xl overflow-hidden border-2 border-garden-border/80 shadow-md cursor-pointer group bg-black/95"
                onClick={handleOpen}
              >
                <img
                  src={conversationMemory.screenshotUrl}
                  alt="First Instagram Conversation Screenshot"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-garden-rose/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-garden-cream/95 px-3.5 py-1.5 rounded-full text-xs text-garden-rose font-medium shadow-sm flex items-center gap-1.5">
                    <span>Click to view full screenshot 🔍</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 py-2">
                <div className="text-center my-2">
                  <span className="text-[11px] font-sans text-garden-mauve/80 uppercase tracking-widest bg-garden-pink/60 px-3 py-1 rounded-full border border-garden-border/50">
                    {conversationMemory.chatSnippet.date}
                  </span>
                </div>

                {conversationMemory.chatSnippet.messages.map((msg, i) => {
                  const isSaurabh = msg.sender === 'saurabh';
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: isSaurabh ? 15 : -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className={`flex flex-col ${isSaurabh ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[82%] sm:max-w-[75%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-xs ${
                          isSaurabh
                            ? 'bg-gradient-to-br from-[#754653] to-[#8C5564] text-garden-cream rounded-br-xs'
                            : 'bg-garden-blush/60 text-garden-rose border border-garden-border/80 rounded-bl-xs'
                        }`}
                      >
                        <p>{msg.text}</p>
                      </div>
                      <span className="text-[10px] text-garden-mauve/70 mt-1 px-1 flex items-center gap-1 font-sans">
                        {msg.time}
                        {isSaurabh && <CheckCheck className="w-3 h-3 text-garden-rose/70" />}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Subtle screenshot ready notice */}
                <div className="mt-6 pt-4 border-t border-dashed border-garden-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-2 text-xs text-garden-mauve">
                    <Image className="w-4 h-4 text-garden-mauve" />
                    <span>Actual DM screenshot placeholder</span>
                  </div>
                  <span className="text-xs font-handwritten text-lg text-garden-rose">
                    "And neither of us stopped talking since ♡"
                  </span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Screenshot Expand Modal */}
      <AnimatePresence>
        {isExpanded && conversationMemory.screenshotUrl && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-garden-rose/65 backdrop-blur-md overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full max-h-[92vh] flex flex-col rounded-3xl bg-garden-cream p-4 shadow-gift border-2 border-garden-border my-auto"
            >
              {/* Prominent Top Bar */}
              <div className="flex items-center justify-between border-b border-garden-border/60 pb-2.5 mb-3">
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 rounded-full bg-garden-blush/70 hover:bg-garden-blush px-3 py-1.5 text-xs font-medium text-garden-rose transition-all active:scale-95 shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <span className="font-serif italic text-xs text-garden-rose">First DM ✨</span>

                <button
                  onClick={handleClose}
                  aria-label="Close screenshot"
                  className="p-1.5 rounded-full bg-garden-blush/70 hover:bg-garden-blush text-garden-rose transition-all active:scale-95 shadow-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable image container */}
              <div className="w-full overflow-y-auto rounded-2xl max-h-[75vh] border border-garden-border/80 mb-3">
                <img
                  src={conversationMemory.screenshotUrl}
                  alt="Instagram Conversation Screenshot"
                  className="w-full h-auto rounded-2xl"
                />
              </div>

              {/* Bottom Close Button */}
              <button
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-garden-rose text-garden-cream px-4 py-2 text-xs font-medium shadow-xs hover:bg-[#633a46] active:scale-95 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Garden</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
