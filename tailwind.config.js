/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    screens: {
      'max-sm': '360px',
      "sm2" : "390px",
      'sm': '481px',
      'md': '641px',
      'lg': '961px',
      'xl': '1025px',
      '2xl': '1250px',
      '3xl': '1400px',
    },
    extend: {},
  },
  plugins: [],
};
