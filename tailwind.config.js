/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        waf: "3480px",
        xs: "540px",
      },
      borderColor: {
        primary: {
          dark: "#424855",
        },
        secondary: {
          dark: "#aaafb7",
        },
        tertiary: {
          dark: "#2f3949",
        },
      },
      textColor: {
        primary: {
          dark: "#e5e7eb",
        },
        secondary: {
          dark: "#babec4",
        },
        tertiary: {
          dark: "#808794",
        },
      },
      colors: {
        primary: {
          dark: "#111827",
        },
        secondary: {
          dark: "#465772",
        },
        tertiary: {
          dark: "#030712",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
