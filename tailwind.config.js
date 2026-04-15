/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#0a0e14",
        "surface-container-lowest": "#000000",
        "surface-container-low": "#0f141a",
        "surface-container": "#151a21",
        "surface-container-high": "#1b2028",
        "surface-container-highest": "#20262f",
        "surface-bright": "#262c36",
        primary: "#6bff8f",
        secondary: "#c180ff",
        "outline-variant": "#44484f",
        "on-surface": "#f1f3fc",
        "on-surface-variant": "#a8abb3",
        outline: "#72757d",
      },
      fontFamily: {
        headline: ["Space Grotesk", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        label: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      boxShadow: {
        "ambient-primary": "0 20px 40px -10px rgba(107, 255, 143, 0.08)",
        "ambient-secondary": "0 20px 40px -10px rgba(193, 128, 255, 0.12)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(45deg, #6bff8f 0%, #c180ff 100%)",
      },
    },
  },
  plugins: [],
};
