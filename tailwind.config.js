/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
        'playfair-display': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans'],
      },
    },
  },
  plugins: [],

  purge: [
    './src/**/*.html',
    './src/**/*.js',
    // Add more file paths as needed
  ],
}

