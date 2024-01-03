/** @type {import("prettier").Config & { tailwindFunctions: string[]}} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  tailwindFunctions: ["tv"],
};

module.exports = config;
