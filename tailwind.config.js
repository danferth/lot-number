const plugin = require("tailwindcss/plugin")
const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/pages/*.js",
    "./src/pages/**/*.js",
    ".src/styles/app.css",
  ],
  separator: ":",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      purple: colors.purple,
      red: colors.red,
      pink: colors.pink,
      green: colors.emerald,
      teal: colors.teal,
      orange: colors.orange,
      yellow: {
        50: "#FFFEF3",
        100: "#FFFDE8",
        200: "#FFF5C4",
        300: "#FFEA96",
        400: "#FFDD6E",
        500: "#FFCC33",
        600: "#E3AC22",
        700: "#C48E18",
        800: "#8A620D",
        900: "#593E0E",
      },
      blue: {
        50: "#F5FCFF",
        100: "#EBF9FF",
        200: "#D6EFFE",
        300: "#B8E1FC",
        400: "#A3D2F2",
        500: "#6DABDE",
        600: "#2473B3",
        700: "#1A5C96",
        800: "#1C4A73",
        900: "#003959",
      },
    },
    extend: {
      margin: {
        "1/3": "33.333%",
      },
      fontFamily: {
        sans: [
          "Inter var",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      maxWidth: {
        "screen-2xl": "1536px",
      },
      minWidth: {
        "1/3": "33%",
        "2/3": "66%",
        "1/4/": "25%",
        "2/4": "50%",
        "3/4": "75%",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "hover",
      "focus",
      "odd",
      "even",
      "group-hover",
      "disabled",
    ],
    borderWidth: ["responsive", "first", "last"],
    borderRadius: ["responsive", "hover", "focus"],
    margin: ["responsive", "first"],
    display: ["responsive", "hover", "focus"],
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".col-count-1": {
          "column-count": 1,
        },
        ".col-count-2": {
          "column-count": 2,
        },
        ".col-count-3": {
          "column-count": 3,
        },
      }

      addUtilities(newUtilities, ["responsive"])
    }),
  ],
}
