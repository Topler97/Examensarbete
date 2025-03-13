module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}', // Lägg till om du har komponenter
    ],
    theme: {
      extend: {
        maxWidth: {
          "custom-desktop": '1280px'
        }
      },
    },
    plugins: [],
}