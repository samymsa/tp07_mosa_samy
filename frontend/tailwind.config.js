/** @type {import('tailwindcss').Config} */
const { default: daisyui } = require("daisyui");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        logo: ["New Walt Disney Font", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        juliartist: {
          primary: "#161616",
          "primary-content": "#ffffff",
          secondary: "#ffffff",
          "secondary-content": "#161616",
          accent: "#DB0D0D",
          neutral: "#65635F",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
