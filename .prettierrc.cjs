/** @type {import("prettier").Options} */

module.exports = {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  semi: false,
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
}
