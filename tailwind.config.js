/** @type {import('tailwindcss').Config} */
export default {
  
  darkMode: 'class',

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['merriweather']
      },
      keyframes: {
        'move-left-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'left-right': 'move-left-right 5s linear infinite',
      },
    },
  },
  plugins: [],
}

