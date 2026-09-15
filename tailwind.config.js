/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fdfbf7',
          100: '#f8f4ee',
          200: '#f0e9db',
        },
        ink: {
          900: '#1a1a2e',
          800: '#232336',
          700: '#2d2d44',
          600: '#4a4a6a',
          400: '#7b7b9e',
          300: '#a0a0bf',
          200: '#c8c8dc',
        },
        teal: {
          600: '#0d7377',
          500: '#14a085',
          400: '#1abc9c',
          50: '#f0fafa',
          100: '#ccf0ef',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.45s ease-out both',
        'fade-in': 'fadeIn 0.35s ease-out both',
        'slide-in': 'slideIn 0.25s ease-out both',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'none' } },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideIn: { from: { opacity: '0', transform: 'translateY(-6px)' }, to: { opacity: '1', transform: 'none' } },
      },
    },
  },
  plugins: [],
}
