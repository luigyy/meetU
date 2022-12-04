/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    screens: {
      md: "768px",
      tall: { raw: "(min-height: 800px)" }, //for tall cellphone
      giant: { raw: "(min-height: 1000px)" }, //for tablets that are tall but not so wide (<1000px)
      huge: { raw: "(min-height: 1000px) and (min-width: 1000px)" }, //for tall and wide devices (ipad pro for example)
      wide: { raw: "(min-width: 1000px)" }, //wide devices, nest hubs for example and short
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "cupcake",
      "dark",
      "cmyk",
      "garden",
      "cyberpunk",
      "valentine",
      "forest",
    ],
  },
};
