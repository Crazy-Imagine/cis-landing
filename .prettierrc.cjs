/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  quoteProps: 'consistent',
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  endOfLine: 'lf',
  arrowParens: 'always',
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-astro-organize-imports',
    'prettier-plugin-tailwindcss',
  ],
  tailwindConfig: './tailwind.config.mjs',
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
