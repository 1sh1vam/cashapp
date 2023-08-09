/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      mulish: ['Mulish', 'sans-serif'],
      agrandir: ['Agrandir', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('src/assets/images/hero-bg.png')",
      }
    },
  },
  plugins: [],
}

