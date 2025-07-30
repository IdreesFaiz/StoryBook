/** @type {import('tailwindcss').Config} */

import {colors , white , black , transparent , currentColor} from "./src/app/tokens/colors"

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        ...colors,
        white,
        black,
        transparent,
        currentColor,
      },
    },
  },
  plugins: [],
};


