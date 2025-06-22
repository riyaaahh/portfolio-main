/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      colors:{
        zumthor: {
    '50': '#ffffff', 
    '100': '#fcfeff', 
    '200': '#fafdff', 
    '300': '#f5faff', 
    '400': '#f0f7ff', 
    '500': '#e7f0ff', 
    '600': '#bccbe6', 
    '700': '#8295bf', 
    '800': '#546999', 
    '900': '#2f4173', 
    '950': '#13204a',
},
      }
    },
  },
  plugins: [
  ],
}