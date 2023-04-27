module.exports = {
  plugins: [
    require("postcss")({
      plugins: [require("stylelint")],
    }),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-preset-env")({
      autoprefixer: { grid: false },
      features: {
        "nesting-rules": true,
      },
      browsers: ["> 1%", "last 2 versions", "Firefox ESR"],
    }),
  ],
}