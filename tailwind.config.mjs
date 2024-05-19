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
      fontSize: {
        h1: ['90px', { lineHeight: '80px' }],
        h2: ['58px', { lineHeight: 'normal' }],
        h3: ['40px', { lineHeight: 'normal' }],
        h4: ['28px', { lineHeight: 'normal' }],
        h5: ['22px', { lineHeight: 'normal' }],
        h6: ['22px', { lineHeight: 'normal' }],
        caption: ['20px', { lineHeight: 'normal' }],
        body1: ['20px', { lineHeight: 'normal' }],
        body2: ['18px', { lineHeight: 'normal' }],
        body3: ['14px', { lineHeight: 'normal' }],
        button: ['16px', { lineHeight: '14px', letterSpacing: '0.75px' }],
        subtitle1: ['16px', { lineHeight: '20px' }],
      },
    },
  },
  plugins: [],
};
