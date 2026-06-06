/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF5EE', // Rich cream background
        surface: '#FFFBF5',    // Lighter cream for cards (no pure white)
        primary: '#C2410C',    // Terracotta
        'primary-hover': '#9A3412',
        accent: '#D97706',     // Amber/Gold
        text: '#292524',       // Deep gray/brown
        muted: '#78716C',      // Warm gray
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(194, 65, 12, 0.05)',
        'soft-hover': '0 30px 60px -15px rgba(194, 65, 12, 0.1)',
        'glow': '0 0 50px 15px rgba(194, 65, 12, 0.15)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'ambient': 'ambient 15s ease-in-out infinite alternate',
      },
      keyframes: {
        ambient: {
          '0%': { transform: 'scale(1) translate(0, 0)', opacity: '0.4' },
          '100%': { transform: 'scale(1.2) translate(5%, 5%)', opacity: '0.7' },
        }
      }
    },
  },
  plugins: [],
}
