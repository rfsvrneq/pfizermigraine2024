/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D0111B',
        'primary-rebrown-900': '#775533',
        'primary-rebrown-800': '#8C6239',
        'primary-gold': '#E3C275',
        'primary-orange': '#E08A00',
        'primary-grey': '#F0EBE7',
        'primary-blue': '#004A6D',
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'sans': ['"Noto Sans TC"', '"Microsoft JhengHei"', "cursive"],
        'spartan': ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
}

