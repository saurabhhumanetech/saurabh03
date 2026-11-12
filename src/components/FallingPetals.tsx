import React, { useEffect, useRef, useState } from 'react';
import { Flower2, EyeOff } from 'lucide-react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spinSpeed: number;
  type: 'sunflower' | 'blossom' | 'daisy';
  color: string;
  opacity: number;
  swayFactor: number;
}

export const FallingPetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(true);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isEnabled || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Color choices: Sunflower golden yellows and soft garden blush pinks
    const petalColors = {
      sunflower: ['#F6D77A', '#F3C966', '#ECC055', '#FED976'],
      blossom: ['#FADDE4', '#FFF0F3', '#F7CAD0', '#FFCCD5'],
      daisy: ['#FFFDF9', '#FFF7EB'],
    };

    // Calculate number of petals based on screen width (optimized for mobile)
    const petalCount = Math.min(Math.floor(width / 32), 38);
    const petals: Petal[] = [];

    const createPetal = (startY?: number): Petal => {
      const types: ('sunflower' | 'blossom' | 'daisy')[] = [
        'sunflower',
        'sunflower',
        'blossom',
        'blossom',
        'daisy',
      ];
      const type = types[Math.floor(Math.random() * types.length)];
      const colorList = petalColors[type];
      const color = colorList[Math.floor(Math.random() * colorList.length)];

      return {
        x: Math.random() * width,
        y: startY !== undefined ? startY : Math.random() * -height,
        size: Math.random() * 8 + (type === 'sunflower' ? 10 : 8),
        speedY: Math.random() * 0.9 + 0.6,
        speedX: (Math.random() - 0.5) * 0.6,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: (Math.random() - 0.5) * 0.03,
        type,
        color,
        opacity: Math.random() * 0.45 + 0.55,
        swayFactor: Math.random() * 2 + 1,
      };
    };

    // Initialize petals across height
    for (let i = 0; i < petalCount; i++) {
      petals.push(createPetal(Math.random() * height));
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Natural fluttering movement
        p.y += p.speedY;
        p.x += Math.sin(time * p.swayFactor + i) * 0.8 + p.speedX;
        p.angle += p.spinSpeed;

        // Reset when falling off bottom or edges
        if (p.y > height + 20) {
          petals[i] = createPetal(-20);
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        // Draw petal
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'sunflower') {
          // Elongated sunflower petal shape
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.ellipse(0, 0, p.size * 0.5, p.size * 1.3, 0, 0, Math.PI * 2);
          ctx.fill();

          // Soft highlight line in middle of petal
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = 1;
          ctx.moveTo(0, -p.size * 0.8);
          ctx.lineTo(0, p.size * 0.8);
          ctx.stroke();
        } else if (p.type === 'blossom') {
          // Soft rounded rose/cherry blossom petal
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.arc(0, 0, p.size * 0.75, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.fillStyle = '#EBCBD3';
          ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Tiny delicate daisy blossom
          ctx.fillStyle = p.color;
          for (let petalIdx = 0; petalIdx < 5; petalIdx++) {
            ctx.save();
            ctx.rotate((petalIdx * Math.PI * 2) / 5);
            ctx.beginPath();
            ctx.ellipse(0, p.size * 0.5, p.size * 0.35, p.size * 0.55, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
          // Yellow center
          ctx.beginPath();
          ctx.fillStyle = '#F6D77A';
          ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-20 h-full w-full"
        />
      )}

      {/* Floating control button to toggle falling petals */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <button
          onClick={() => setIsEnabled((prev) => !prev)}
          title={isEnabled ? "Pause falling petals" : "Resume falling petals"}
          className="group flex items-center gap-1.5 rounded-full border border-garden-border bg-garden-cream/90 px-3 py-2 text-xs font-medium text-garden-rose shadow-soft backdrop-blur transition-all duration-300 hover:bg-garden-blush/60 hover:shadow-md"
        >
          {isEnabled ? (
            <>
              <Flower2 className="h-4 w-4 animate-spin-slow text-garden-yellowDark" />
              <span className="hidden sm:inline">Petals: ON</span>
            </>
          ) : (
            <>
              <EyeOff className="h-4 w-4 text-garden-mauve" />
              <span className="hidden sm:inline">Petals: OFF</span>
            </>
          )}
        </button>
      </div>
    </>
  );
};

