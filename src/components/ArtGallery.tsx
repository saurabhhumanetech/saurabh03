import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig, type GalleryItem } from '../data/config';
import { Sunflower, Blossom, LeafSprig, WashiTape } from './FloralDecorations';
import { Camera, X, ZoomIn, ArrowLeft } from 'lucide-react';

export const ArtGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // Digital device back button (Android back swipe / browser back) handler
  const handleClose = useCallback(() => {
    setSelectedPhoto(null);
    if (window.history.state?.modal === 'photo-gallery') {
      window.history.back();
    }
  }, []);

  const handleOpenPhoto = (item: GalleryItem) => {
    setSelectedPhoto(item);
    window.history.pushState({ modal: 'photo-gallery', id: item.id }, '');
  };

  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      // When user presses device back button or swipes back
      if (!e.state || e.state.modal !== 'photo-gallery') {
        setSelectedPhoto(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPhoto) {
        handleClose();
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPhoto, handleClose]);

  return (
    <section id="gallery" className="relative w-full py-20 px-4 sm:px-6 bg-garden-pink/60">
      {/* Decorative background flowers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 opacity-30">
          <Sunflower size={100} />
        </div>
        <div className="absolute bottom-10 left-8 opacity-30">
          <Blossom size={60} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <LeafSprig size={28} />
            <span className="font-serif italic text-sm tracking-wider uppercase text-garden-mauve">
              Moments & Memories
            </span>
            <LeafSprig size={28} flip />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-garden-rose mb-3"
          >
            {siteConfig.gallery.sectionTitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-garden-mauve"
          >
            {siteConfig.gallery.sectionSubtitle}
          </motion.p>
        </div>

        {/* Editorial Asymmetric Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {siteConfig.gallery.items.map((item, index) => {
            const hasFloralDecoration = index === 0 || index === 2;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative group ${item.rotation || ''} hover:rotate-0 transition-transform duration-300`}
                onClick={() => handleOpenPhoto(item)}
              >
                {/* Washi Tape styling */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape text={`0${item.id}`} />
                </div>

                {/* Delicate Floral Corner Decoration for selected photos */}
                {hasFloralDecoration && (
                  <div className="absolute -top-5 -right-5 z-20 pointer-events-none">
                    <Sunflower size={44} className="filter drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                )}
                {index === 1 && (
                  <div className="absolute -bottom-4 -left-4 z-20 pointer-events-none">
                    <Blossom size={34} />
                  </div>
                )}
                {index === 3 && (
                  <div className="absolute -top-4 -left-4 z-20 pointer-events-none">
                    <LeafSprig size={38} />
                  </div>
                )}

                {/* Polaroid Frame */}
                <div className="relative rounded-2xl bg-garden-cream p-4 pb-5 shadow-polaroid border border-garden-border/80 transition-all duration-300 group-hover:shadow-soft-lg group-hover:-translate-y-1.5 cursor-pointer">
                  {/* Photo area */}
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-gradient-to-b from-garden-blush/40 to-garden-pink/60 flex flex-col items-center justify-center text-center border border-garden-border/50">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-3 p-4">
                        <div className="p-3.5 rounded-full bg-garden-cream/90 border border-garden-border/70 shadow-sm">
                          <Camera className="w-6 h-6 text-garden-mauve" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="font-serif italic text-base font-medium text-garden-rose">
                            {item.placeholderTitle}
                          </p>
                          <p className="text-[11px] font-sans text-garden-mauve/80 uppercase tracking-wider">
                            Ready for photo
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Hover zoom overlay hint */}
                    <div className="absolute inset-0 bg-garden-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                      <div className="p-2 rounded-full bg-garden-cream/90 text-garden-rose shadow-sm">
                        <ZoomIn className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-4 px-1 text-center">
                    <p className="font-serif italic text-base sm:text-lg text-garden-rose leading-snug">
                      "{item.caption}"
                    </p>
                    <div className="mt-1 flex items-center justify-center gap-1 text-xs text-garden-mauve font-handwritten text-lg">
                      <span>{item.sticker || '♡'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-garden-rose/60 backdrop-blur-md overflow-y-auto"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl bg-garden-cream p-4 sm:p-7 shadow-gift border-2 border-garden-border my-auto"
            >
              {/* Prominent Top Navigation Bar in Modal */}
              <div className="flex items-center justify-between border-b border-garden-border/60 pb-3 mb-4">
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-1.5 rounded-full bg-garden-blush/70 hover:bg-garden-blush px-3.5 py-1.5 text-xs sm:text-sm font-medium text-garden-rose transition-all active:scale-95 shadow-xs"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Gallery</span>
                </button>

                <button
                  onClick={handleClose}
                  aria-label="Close modal"
                  className="p-2 rounded-full bg-garden-blush/70 hover:bg-garden-blush text-garden-rose transition-all active:scale-95 shadow-xs"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo Area */}
              <div className="text-center">
                <div className="relative aspect-[4/5] max-h-[58vh] w-full mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-garden-blush/40 to-garden-pink/60 flex items-center justify-center border border-garden-border/80 mb-4 shadow-sm">
                  {selectedPhoto.imageUrl ? (
                    <img
                      src={selectedPhoto.imageUrl}
                      alt={selectedPhoto.caption}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-3 p-6 text-center">
                      <Sunflower size={56} />
                      <p className="font-serif italic text-xl text-garden-rose font-medium">
                        {selectedPhoto.placeholderTitle}
                      </p>
                    </div>
                  )}
                </div>

                <p className="font-serif text-xl sm:text-2xl text-garden-rose italic font-medium mb-1">
                  "{selectedPhoto.caption}"
                </p>
                <p className="font-handwritten text-2xl text-garden-mauve mb-4">
                  A little piece of sunshine {selectedPhoto.sticker || '♡'}
                </p>

                {/* Bottom Touch-Friendly Back Button */}
                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-garden-rose text-garden-cream px-6 py-2.5 text-xs sm:text-sm font-medium shadow-sm hover:bg-[#633a46] active:scale-95 transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Close & Return to Garden</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
