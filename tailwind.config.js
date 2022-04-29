module.exports = {
  purge: ["./src/**/*.tsx", "./src/components/**/*.tsx"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        numbers: {
          0: "#f1f3f4",
          1: "#6d6d6d",
        },
        operators: {
          0: "#dadce0",
          1: "#5385ec",
        },
        clear: {
          0: "#dadce0",
          1: "#e5e5e5",
        },
        equal: {
          0: "#5385ec",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
