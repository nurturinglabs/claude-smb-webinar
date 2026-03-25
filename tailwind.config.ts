import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F7',
        surface: '#EDE8E0',
        primary: '#191918',
        secondary: '#6B6B65',
        accent: '#DA7756',
        border: '#DDD8CE',
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-inter)", "monospace"],
        body: ["var(--font-inter)", "sans-serif"],
        kannada: ["var(--font-noto-sans-kannada)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
