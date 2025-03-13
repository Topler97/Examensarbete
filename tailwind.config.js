module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Lägg till om du har komponenter
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`poppins`, `inter`, `sans-serif`],
      },
    },
  },
  plugins: [],
};
