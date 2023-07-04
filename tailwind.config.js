module.exports = {
  theme: {
    fontFamily: {
      sans: ["RobotoMono"],
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
