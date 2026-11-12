import React from 'react';

// Delicate Blooming Sunflower SVG
export const Sunflower: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 48 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="transition-transform duration-300">
        {/* Sunflower Petals (Ring of 16 petals) */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="20"
            rx="7.5"
            ry="18"
            fill={i % 2 === 0 ? "#F6D77A" : "#F3C966"}
            transform={`rotate(${angle} 50 50)`}
            opacity="0.95"
          />
        ))}

        {/* Inner secondary petal layer for depth */}
        {[11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75].map((angle, i) => (
          <ellipse
            key={`inner-${i}`}
            cx="50"
            cy="25"
            rx="5.5"
            ry="12"
            fill="#ECC055"
            transform={`rotate(${angle} 50 50)`}
            opacity="0.9"
          />
        ))}

        {/* Flower Center Rim */}
        <circle cx="50" cy="50" r="18" fill="#7A4C3A" />
        <circle cx="50" cy="50" r="15" fill="#5E382A" />

        {/* Center Seed Texture */}
        <circle cx="46" cy="46" r="2.5" fill="#8D5B4C" />
        <circle cx="54" cy="46" r="2.5" fill="#8D5B4C" />
        <circle cx="50" cy="53" r="3" fill="#8D5B4C" />
        <circle cx="43" cy="52" r="2" fill="#8D5B4C" />
        <circle cx="57" cy="52" r="2" fill="#8D5B4C" />
      </g>
    </svg>
  );
};

// Soft Pink Blossom / Daisy
export const Blossom: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 36,
  color = "#FADDE4",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <path
          key={i}
          d="M50 50 C40 25, 60 25, 50 50"
          fill={color}
          stroke="#EBCBD3"
          strokeWidth="1.5"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="8" fill="#F6D77A" />
      <circle cx="50" cy="50" r="5" fill="#E5A93C" />
    </svg>
  );
};

// Botanical Leaf Sprig
export const LeafSprig: React.FC<{ className?: string; size?: number; flip?: boolean }> = ({
  className = '',
  size = 40,
  flip = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${flip ? '-scale-x-100' : ''}`}
    >
      <path
        d="M20 80 Q45 60 75 25"
        stroke="#8FA382"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Leaves */}
      <path
        d="M35 68 C25 60 30 50 42 58 C46 62 40 68 35 68 Z"
        fill="#A3B899"
        opacity="0.9"
      />
      <path
        d="M48 56 C60 50 58 40 46 45 C42 47 44 54 48 56 Z"
        fill="#8FA382"
      />
      <path
        d="M58 42 C50 32 58 24 66 32 C68 36 64 42 58 42 Z"
        fill="#A3B899"
        opacity="0.95"
      />
      <path
        d="M75 25 C82 20 80 12 70 16 C66 18 69 24 75 25 Z"
        fill="#8FA382"
      />
    </svg>
  );
};

// Washi Tape Graphic
export const WashiTape: React.FC<{ className?: string; text?: string }> = ({
  className = '',
  text = '',
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center px-4 py-1 text-xs font-handwritten tracking-wider uppercase text-garden-rose select-none washi-tape ${className}`}
      style={{
        clipPath: 'polygon(0% 15%, 4% 0%, 96% 0%, 100% 15%, 97% 100%, 3% 100%)',
      }}
    >
      {text}
    </div>
  );
};

// Sparkle Star
export const Sparkle: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 20,
  color = "#F6D77A",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
        fill={color}
      />
    </svg>
  );
};

// Cute Illustrated Cloud (for the gift reveal!)
export const CuteCloud: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 180,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 220 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cloud Body with soft shadow */}
      <filter id="cloud-shadow" x="-10%" y="-10%" width="120%" height="130%">
        <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#754653" floodOpacity="0.1" />
      </filter>
      
      <g filter="url(#cloud-shadow)">
        {/* Soft Fluffy Cloud Base */}
        <path
          d="M45 105 C25 105 10 90 10 70 C10 52 24 38 41 36 C47 18 64 5 85 5 C102 5 117 14 124 28 C132 20 144 15 157 15 C176 15 192 28 196 46 C209 50 218 62 218 76 C218 93 204 105 186 105 Z"
          fill="#FFFDF9"
          stroke="#FADDE4"
          strokeWidth="3"
        />
        
        {/* Cute Blushing Cheeks */}
        <ellipse cx="62" cy="74" rx="7" ry="4.5" fill="#FADDE4" opacity="0.9" />
        <ellipse cx="152" cy="74" rx="7" ry="4.5" fill="#FADDE4" opacity="0.9" />
        
        {/* Cute Eyes (Happy curved arches) */}
        <path
          d="M74 65 Q83 55 92 65"
          stroke="#754653"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M122 65 Q131 55 140 65"
          stroke="#754653"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Sweet Little Smile */}
        <path
          d="M102 73 Q107 80 112 73"
          stroke="#754653"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tiny sunflower tucked into cloud's hair */}
        <g transform="translate(148, 18) scale(0.35)">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="25"
              rx="7"
              ry="16"
              fill="#F6D77A"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="16" fill="#7A4C3A" />
        </g>
      </g>
    </svg>
  );
};

// Wax Flower Seal for the envelope
export const WaxFlowerSeal: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 56,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Wax blob outline */}
      <circle cx="50" cy="50" r="42" fill="#C86D7C" />
      <circle cx="50" cy="50" r="39" fill="#B85D6C" />
      <circle cx="50" cy="50" r="33" fill="#D47B8A" stroke="#E294A2" strokeWidth="2" />
      
      {/* Imprinted Flower Symbol */}
      <g transform="scale(0.8) translate(12, 12)">
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <ellipse
            key={i}
            cx="50"
            cy="32"
            rx="6"
            ry="11"
            fill="#FFF0F3"
            opacity="0.85"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="7" fill="#F6D77A" />
      </g>
    </svg>
  );
};

