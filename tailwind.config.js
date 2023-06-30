module.exports = {
  theme: {
    fontFamily: {
      sans: ["VarentGrotesk"],
    },
    extend: {
      fontFamily: {
        logo: ["NeueMetana"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
