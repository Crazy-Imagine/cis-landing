import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        nexaBold: ['"Nexa Bold"', ...defaultTheme.fontFamily.sans],
        nexaLight: ['"Nexa Light"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'blue-purple': 'var(--color-blue-purple)',
        'grayish': 'var(--color-grayish)',
        'periwinkle': 'var(--color-periwinkle)',
        'sky-blue': 'var(--color-sky-blue)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
