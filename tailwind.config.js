/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        garden: {
          pink: "#FFF0F3",        // Background baby pink
          blush: "#FADDE4",       // Secondary background soft blush
          rose: "#754653",        // Primary text deep dusty rose
          mauve: "#A47783",       // Secondary text muted mauve
          yellow: "#F6D77A",      // Accent warm sunflower yellow
          yellowDark: "#E5A93C",  // Accent sunflower deeper tone
          cream: "#FFFDF9",       // Neutral creamy white
          border: "#EBCBD3",      // Subtle pale pink borders
          paper: "#FFFAF5",       // Letter parchment paper
          green: "#8FA382",       // Soft sage green for leaves
          greenLight: "#E8EFE5",  // Sage leaf light tint
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        handwritten: ['"Allura"', '"Caveat"', 'cursive'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(117, 70, 83, 0.08)',
        'soft-lg': '0 20px 40px -10px rgba(117, 70, 83, 0.12)',
        'gift': '0 25px 50px -12px rgba(117, 70, 83, 0.18)',
        'polaroid': '0 12px 28px rgba(117, 70, 83, 0.1), 0 2px 6px rgba(117, 70, 83, 0.05)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2.5s ease-in-out infinite',
        'sway': 'sway 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
