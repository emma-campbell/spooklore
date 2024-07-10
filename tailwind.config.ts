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
        sans: ["var(--font-secondary)"],
        serif: ["var(--font-primary)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
    colors: {
      primary: "#00715C",
      secondary: "#FBFBFB",
      heading: "#222222",
      body: "#434343",
      highlighted: "#706E62",
    },
  },
  plugins: [],
};

export default config;
