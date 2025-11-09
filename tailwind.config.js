/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00e1ff",
        secondary: "#00ff66",
        accent: "#b400ff",
        card: "#0d0d0f",
        background: "#050507",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        mono: ["'Fira Code'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 225, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
