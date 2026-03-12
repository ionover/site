import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f4e5d1",
        slate: "#2f2319",
        amber: "#b86e2f",
        mist: "#e7d9c7",
      },
      boxShadow: {
        soft: "0 14px 34px rgba(73, 49, 30, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
