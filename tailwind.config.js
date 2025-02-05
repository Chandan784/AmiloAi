/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  options: {
    safelist: ['sm:p-10'],
},
  theme: {
    extend: {},
  },
  plugins: [],
};
