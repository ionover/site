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
        sand: "#f6efe3",
        slate: "#14202b",
        amber: "#d78d34",
        mist: "#dce5ea",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(20, 32, 43, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
