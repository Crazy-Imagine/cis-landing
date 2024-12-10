import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/backgrounds/hero.webp')",
        'light-bulbs': "url('/img/backgrounds/light-bulbs.webp')",
        'thanks-page': "url('/img/backgrounds/satelit2.webp')",
      },
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
        'slate-gray': 'var(--color-slate-gray)',
        'periwinkle': 'var(--color-periwinkle)',
        'sky-blue': 'var(--color-sky-blue)',
        'fog-white': 'var(--color-fog-white)',
        'primary-with-transparency': 'var(--color-primary-with-transparency)',
        'blue-purple-contrast': 'var(--color-blue-purple-contrast)',
        'smoke': 'var(--color-smoke)',
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
  plugins: [import('@tailwindcss/forms')],
};
