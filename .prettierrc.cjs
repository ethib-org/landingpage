/** @type {import("prettier").Options} */

module.exports = {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  semi: false,
  trailingComma: "all",
  singleQuote: false,
  tabWidth: 2,
  useTabs: false
};
