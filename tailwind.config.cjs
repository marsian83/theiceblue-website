/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#223377",
        secondary: "#000000",
        background: "#ffffff",
        foreground: "#000000",
        front: "#313131",
        back: "#ffffff",
        mute: "#7e7e7e",
      },
      borderRadius: {
        "4xl": "2rem",
        "5rem": "5rem",
        "10rem": "10rem",
      },
      padding: {
        page: "0 10vw 0 10vw",
      },
      margin: {
        page: "0 10vw 0 10vw",
      },
      fontFamily: {
        raleway: "'Raleway', sans-serif",
      },
    },
  },
  plugins: [],
};
