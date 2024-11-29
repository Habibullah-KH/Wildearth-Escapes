import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'clr-primary': '#A7C957',
      'clr-secondary': '#6A994E',
      'clr-accent': '#BC4749',
      'clr-bg': '#F2E8CF',
      },
    },
  },
  plugins: [
    daisyui
  ],
}

