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
        sand: "#f6ead8",
        slate: "#33261c",
        amber: "#a65f2d",
        mist: "#e3d0b3",
      },
      boxShadow: {
        soft: "0 10px 24px rgba(70, 44, 24, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
