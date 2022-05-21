// tailwind.config.js
module.exports = {
  purge: {
    enabled: false,
    content: [ './**/*.html' ]
  },
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brice: ["BriceBlack", "cursive"],
      },
      colors: {
        icpurple: '#cc72f6',
        icpink: '#ff93ce'
      }
    },
  },
  plugins: [],
};
