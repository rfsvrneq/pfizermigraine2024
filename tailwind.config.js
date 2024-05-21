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
        'custom-red': '#D0111B',
        'custom-gold': '#E3C275',
        'custom-orange': '#E08A00',
        'custom-grey': '#F0EBE7',
        'custom-blue': '#004A6D',
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'sans': ['"Noto Sans TC"', '"Microsoft JhengHei"', "cursive"],
        'zen': ["Zen Maru Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}

