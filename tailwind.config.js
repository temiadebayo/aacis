// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        'montserratAlt': ['DM Sans', 'sans-serif'],
        montserrat: ['DM Sans', 'sans-serif'],
        gruppo: ['DM Sans', 'sans-serif'],
        'digital': ['DM Sans', 'sans-serif'],
        'michroma': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
