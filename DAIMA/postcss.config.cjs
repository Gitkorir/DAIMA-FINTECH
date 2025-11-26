// NOTE: Tailwind v4 requires the `@tailwindcss/postcss` PostCSS plugin.
// The plugin package is separate from the `tailwindcss` runtime. This file
// uses the dedicated `@tailwindcss/postcss` plugin so that Vite and PostCSS
// build steps work correctly for Tailwind v4.
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(),
    require('autoprefixer')(),
  ],
};
