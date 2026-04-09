import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      screens: {
        sm: '500px',
        md: '600px',
        lg: '800px',
        xl: '1000px',
        '2xl': '1200px',
      },
    },
    extend: {
      backgroundImage: {
        'hero': "url('/img/backgrounds/hero.webp')",
        'hero-background': "url('/img/backgrounds/heroBg.webp')",
        'light-bulbs': "url('/img/backgrounds/light-bulbs.webp')",
        'thanks-page': "url('/img/backgrounds/satelit2.webp')",
        'gradinet-font': 'var(--color-gradinet-font)',
      },
      fontFamily: {
        colvetica: ['"Colvetica"', ...defaultTheme.fontFamily.sans],
        nexaLight: ['"Nexa Light"', ...defaultTheme.fontFamily.sans],
        openSansBold: ['"Open Sans Bold"', ...defaultTheme.fontFamily.sans],
        openSansLight: ['"Open Sans Light"', ...defaultTheme.fontFamily.sans],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'primary-new': 'var(--color-primary-new)',
        'primary-blue': 'var(--color-primary-blue)',
        'font-light-gray': 'var(--color-font-light-gray)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'blue-purple': 'var(--color-blue-purple)',
        'grayish': 'var(--color-grayish)',
        'slate-gray': 'var(--color-slate-gray)',
        'periwinkle': 'var(--color-periwinkle)',
        'sky-blue': 'var(--color-sky-blue)',
        'fog-white': 'var(--color-fog-white)',
        'primary-with-transparency': 'var(--color-primary-with-transparency)',
        'primary-blue-with-transparency': 'var(--color-primary-blue-with-transparency)',
        'blue-purple-contrast': 'var(--color-blue-purple-contrast)',
        'smoke': 'var(--color-smoke)',
        'green-contact': 'var(--color-green-contact)',
        'gray-new': 'var(--color-gray-new)',
        'primary-new-with-transparency': 'var(--color-primary-new-with-transparency)',
        'gradient-font': 'var(--color-gradient-font)',
        'primary-with-transparency-white': 'var(--color-primary-with-transparency-white)',
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
