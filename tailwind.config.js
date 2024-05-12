/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#261E1E", // BROWN
        green: "#54736B", // GREEN
        light: "#FCFCFC", // BACKGROUND GRAY
        grey: "#F5F5F5", // BACKGROUND MORE GRAY
        secondary: "#F28482",
        lightpink: "#FFF4F3",
        yellow: "#F6BD60",
      },
    },
  },
  plugins: [],
}

