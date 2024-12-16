/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    animation: {
      fadeIn: 'fadeIn 2s ease-in-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
  },
};
export const plugins = [];
