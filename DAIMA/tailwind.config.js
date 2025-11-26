/** @type {import('tailwindcss').Config} */
export default {
  // Include html and css files and any other file types that contain
  // Tailwind utility classes or @tailwind directives, so the extension
  // can match files such as `src/index.css` and components.
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,css}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
