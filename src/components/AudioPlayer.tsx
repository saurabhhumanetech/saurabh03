import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Sunflower } from './FloralDecorations';

/**
 * Romantic Lo-fi / Music Box Synthesizer using Web Audio API.
 * Plays a delicate, gentle, warm pentatonic music-box melody reminiscent of a dreamy fairy garden.
 * Zero external copyright issues, completely client-side, zero latency, strictly user-controlled.
 */
export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef<boolean>(false);
  const timerRef = useRef<number | null>(null);

  // Pentatonic romantic garden note frequencies (C4, D4, E4, G4, A4, C5, D5, E5, G5)
  const notes = [
    261.63, 293.66, 329.63, 392.00, 440.00,
    523.25, 587.33, 659.25, 783.99,
  ];

  // Sweet melodic sequence
  const sequence = [
    { note: 4, dur: 0.6 }, // A4
    { note: 5, dur: 0.6 }, // C5
    { note: 7, dur: 1.0 }, // E5
    { note: 5, dur: 0.6 }, // C5
    { note: 6, dur: 0.8 }, // D5
    { note: 4, dur: 0.6 }, // A4
    { note: 2, dur: 1.2 }, // E4
    { note: 3, dur: 0.8 }, // G4
    { note: 4, dur: 0.8 }, // A4
    { note: 1, dur: 1.0 }, // D4
    { note: 0, dur: 1.4 }, // C4
  ];

  const playChimeNote = (freq: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    
    // Primary music box tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Secondary subtle octave harmonic for music-box sparkle
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    subOsc.type = 'triangle';
    subOsc.frequency.setValueAtTime(freq * 2, now);

    // Sweet bell-like decay envelope
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.09, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    subGain.gain.setValueAtTime(0, now);
    subGain.gain.linearRampToValueAtTime(0.03, now + 0.015);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    subOsc.connect(subGain);
    subGain.connect(ctx.destination);

    osc.start(now);
    subOsc.start(now);

    osc.stop(now + 2.0);
    subOsc.stop(now + 1.5);
  };

  const startMelody = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    let step = 0;
    const playNext = () => {
      if (!isPlayingRef.current) return;
      const current = sequence[step % sequence.length];
      playChimeNote(notes[current.note]);

      step++;
      timerRef.current = window.setTimeout(playNext, current.dur * 1000);
    };

    isPlayingRef.current = true;
    setIsPlaying(true);
    playNext();
  };

  const stopMelody = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMelody();
    } else {
      startMelody();
    }
  };

  useEffect(() => {
    return () => {
      stopMelody();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40">
      <button
        onClick={toggleMusic}
        title={isPlaying ? "Mute garden melody" : "Play garden melody"}
        className="group flex items-center gap-2 rounded-full border border-garden-border bg-garden-cream/90 px-3.5 py-2 text-xs font-medium text-garden-rose shadow-soft backdrop-blur transition-all duration-300 hover:bg-garden-blush/60 hover:shadow-md"
      >
        <div className="relative flex items-center justify-center">
          <Sunflower
            size={18}
            className={`transition-transform duration-700 ${isPlaying ? 'animate-spin-slow' : 'opacity-70'}`}
          />
        </div>
        
        <span className="font-serif italic text-sm tracking-wide">
          {isPlaying ? "Music Box ♪" : "Play Melody"}
        </span>

        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-garden-rose" />
        ) : (
          <VolumeX className="h-4 w-4 text-garden-mauve" />
        )}
      </button>
    </div>
  );
};
