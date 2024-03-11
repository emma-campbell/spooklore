import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-alegreya)"],
        serif: ["var(--font-barrio)"],
        logo: ["var(--font-barriecito)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
    colors: {
      black: "#222222",
      gray: {
        200: "#7F7F7F",
        300: "#222222",
      },
      text: "#D7D7D7",
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
