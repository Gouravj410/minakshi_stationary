/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFBF7', // Rich ivory
        surface: '#FFFFFF',
        primary: '#C2410C', // Terracotta
        'primary-hover': '#9A3412',
        accent: '#D97706',
        text: '#431407', // Deep elegant brown
        muted: '#78716C', // Warm gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -10px rgba(194, 65, 12, 0.05)',
        'soft-hover': '0 30px 60px -15px rgba(194, 65, 12, 0.1)',
        'glow': '0 0 40px 10px rgba(194, 65, 12, 0.05)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
