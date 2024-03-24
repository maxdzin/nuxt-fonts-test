import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export default {
  content: [
    `./app.{js,ts,vue}`,
    `./App.{js,ts,vue}`,
    `./components/**/*.{vue,js,ts}`,
    `./composables/**/*.{js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./plugins/**/*.{vue,js,ts}`,
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: colors.neutral,
        primary: colors.amber,
      },
      fontFamily: {
        display: ['Montserrat', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config
