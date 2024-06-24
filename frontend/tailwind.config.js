/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clr1: '#fbfdff',
        clr2: '#097240',
        clr3: '#f58629',
        clr4: '#6098b6',
        clr5: '#e0b669',
        clr6: '#e6cc1a',
        clr7: '#f1f1f1',
        clr8: '#1C323A',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}

