/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#0a1628',
          900: '#0d1b33',
          800: '#0f1f3d',
          700: '#162035',
          600: '#1e3a5f',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      },
    },
  },
  plugins: [],
};