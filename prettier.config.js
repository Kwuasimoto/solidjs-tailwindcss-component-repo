module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["cn", "clsx"],
  importOrder: ["^\\u0000", "^@\\w", "^[^.]"],
};
