import { useState } from 'react';
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

  // If test mode is enabled, start unlocked; otherwise check if midnight has passed
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    if (isTestMode) return true;
    return Date.now() >= targetTime;
  });

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Celebrate unlock with floral confetti burst
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#F6D77A', '#FADDE4', '#FFFDF9', '#EBCBD3', '#ECC055', '#754653'],
    });
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
