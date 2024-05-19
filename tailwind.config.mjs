import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Nexa Bold"', ...defaultTheme.fontFamily.sans],
        subtitle: ['"Nexa Light"', ...defaultTheme.fontFamily.sans],
        body: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        'blue-purple': 'var(--color-blue-purple)',
        grayish: 'var(--color-grayish)',
        periwinkle: 'var(--color-periwinkle)',
        'sky-blue': 'var(--color-sky-blue)',
      },
    },
  },
  plugins: [],
};
