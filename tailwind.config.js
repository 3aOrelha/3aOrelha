module.exports = {
  darkMode: "class",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        azul: {
          default: 'var(--azul-default)',
          light: 'var(--azul-light)',
          dark: 'var(--azul-light)',
        },
        amarelo: {
          default: 'var(--amarelo-default)',
          light: 'var(--amarelo-light)',
          dark: 'var(--amarelo-dark)',
        },
        laranja: {
          default: 'var(--laranja-default)',
          light: 'var(--laranja-light)',
          dark: 'var(--laranja-dark)',
        },
        vermelho: {
          default: 'var(--vermelho-default)',
          light: 'var(--vermelho-light)',
          dark: 'var(--vermelho-dark)',
        },
        roxo: {
          default: 'var(--roxo-default)',
          light: 'var(--roxo-light)',
          dark: 'var(--roxo-dark)',
        },
        verde: {
          default: 'var(--verde-default)',
          light: 'var(--verde-light)',
          dark: 'var(--verde-dark)',
          cinza: 'var(--cinza-verde)',
          preto: 'var(--preto-verde)',
        },
        sepia: {
          dark: 'var(--marrom-dark)',
          default: 'var(--marrom)',
          light: 'var(--sepia)'
        },
      },
    },
    darkSelector: '.dark-mode',
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"],
  },
  plugins: [require("tailwindcss-dark-mode")()],
}
