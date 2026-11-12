import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { siteConfig, isTestModeEnabled } from './data/config';
import { CountdownScreen } from './components/CountdownScreen';
import { HeroSection } from './components/HeroSection';
import { ArtGallery } from './components/ArtGallery';
import { ConversationMemory } from './components/ConversationMemory';
import { BirthdayGift } from './components/BirthdayGift';
import { LetterSection } from './components/LetterSection';
import { Footer } from './components/Footer';
import { FallingPetals } from './components/FallingPetals';
import { AudioPlayer } from './components/AudioPlayer';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import confetti from 'canvas-confetti';

export function App() {
  const isTestMode = isTestModeEnabled();
  const targetTime = new Date(siteConfig.birthdayDateIST).getTime();

  // If test mode is enabled, start unlocked; otherwise check if target time has passed
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    if (isTestMode) return true;
    return Date.now() >= targetTime;
  });

  const triggerCelebrationPatake = () => {
    // 1. Center high burst
    confetti({
      particleCount: 100,
      spread: 85,
      origin: { y: 0.6 },
      colors: ['#F6D77A', '#FADDE4', '#FF85A1', '#FF69B4', '#FFFDF9', '#C9184A', '#ECC055'],
      shapes: ['circle', 'square'],
      scalar: 1.2,
    });

    // 2. Left firework pataka
    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 65,
        origin: { x: 0.05, y: 0.7 },
        colors: ['#FF758F', '#F6D77A', '#FFCCD5', '#FF4D6D', '#FFFDF9'],
      });
    }, 350);

    // 3. Right firework pataka
    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 120,
        spread: 65,
        origin: { x: 0.95, y: 0.7 },
        colors: ['#FF758F', '#F6D77A', '#FFCCD5', '#FF4D6D', '#FFFDF9'],
      });
    }, 700);

    // 4. Big grand finale shower from top
    setTimeout(() => {
      confetti({
        particleCount: 130,
        spread: 110,
        origin: { x: 0.5, y: 0.35 },
        colors: ['#F6D77A', '#ECC055', '#FFB3C1', '#FF4D6D', '#FFFDF9'],
        scalar: 1.15,
      });
    }, 1100);
  };

  // Launch celebration patake whenever the unlocked website is opened or refreshed!
  useEffect(() => {
    if (isUnlocked) {
      const timer = setTimeout(() => {
        triggerCelebrationPatake();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isUnlocked]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    triggerCelebrationPatake();
  };

  const handleToggleLockScreen = () => {
    if (isTestMode) {
      setIsUnlocked((prev) => !prev);
    }
  };

  const handleExploreClick = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-garden-pink text-garden-rose font-sans selection:bg-garden-blush selection:text-garden-rose relative">
      {/* Falling Flower Petals Canvas */}
      <FallingPetals />

      {/* Gentle Music Box Ambient Player */}
      <AudioPlayer />

      {/* Floating Interactive Patake Button */}
      {isUnlocked && (
        <div className="fixed bottom-16 right-5 z-40">
          <button
            onClick={triggerCelebrationPatake}
            title="Launch celebration patake! 🎆"
            className="group flex items-center gap-1.5 rounded-full border border-garden-border bg-garden-cream/95 px-3 py-2 text-xs font-medium text-garden-rose shadow-soft backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-garden-blush/80 active:scale-95"
          >
            <span className="text-base animate-bounce">🎆</span>
            <span className="font-serif italic text-xs hidden sm:inline">Patake! 💖</span>
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="countdown-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
            transition={{ duration: 0.8 }}
          >
            <CountdownScreen onUnlock={handleUnlock} isTestMode={isTestMode} />
          </motion.div>
        ) : (
          <motion.div
            key="garden-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Scroll progress indicator */}
            <ScrollProgress />

            {/* Floating Navigation Bar */}
            <Navbar
              isTestMode={isTestMode}
              onLockScreenToggle={handleToggleLockScreen}
              isUnlocked={isUnlocked}
            />

            {/* Section 1: Hero Section */}
            <div id="hero">
              <HeroSection onExploreClick={handleExploreClick} />
            </div>

            {/* Section 2: Her Little Art Gallery */}
            <ArtGallery />

            {/* Section 3: First Conversation Scrapbook Memory */}
            <ConversationMemory />

            {/* Section 4: Interactive Birthday Gift */}
            <BirthdayGift />

            {/* Section 5: A Little Letter for You */}
            <LetterSection />

            {/* Section 6: Minimal Floral Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
