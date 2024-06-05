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
        'custom-grey': '#F1F1EB',
        'custom-grey-500': '#CBC8BB',
        'custom-grey-800': '#3A3633',
        'custom-grey-900': '#292621',
        'custom-blue': '#264964',
        'custom-yellow': '#F4F0BB',
        'custom-green': '#C3DCD9',
      },
      screens: {
        'xs': '480px',
      },
      fontFamily: {
        'sans': ['"Noto Sans TC"', '"Microsoft JhengHei"'],
        'zen': ["Zen Maru Gothic", "sans-serif"],
      },
    },
  },
  plugins: [],
}

