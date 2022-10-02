/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      helvetica: ["Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        prTextDark: "#240D57",
        prTextLight: "#240D57",
        prPurple: "#8456EC",
        prPink: "#E87BF8",
        secPurple1: "#CCB6FF",
        secPurple2: "#EDE5FF",
        secPurple3: "#F6F2FF",
        red: "#E61445",
        lightGreen: "#D3FFE2",
        lightRed: "#FFD7E0",
        green: "#00805E",
      },
    },
  },
  plugins: [],
};
