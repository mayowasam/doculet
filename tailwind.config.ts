import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      fontFamily: {
        sans: ["var(--font-cabinet)"],
      },
      screens: {
        xl: "1280px",
        "2xl": "1536px",
        widescreen: {
          raw: "(min-aspect-ratio: 3/2)",
        },
        tallscreen: {
          raw: "(max-aspect-ratio: 13/20)",
        },
      },
      colors: {
        yellowtext: "rgba(249, 174, 25)",
        greytext: "rgba(97, 102, 114)",
        bluetext: "rgba(0, 64, 193)",
        lightbluetext:"rgba(239, 247, 255)",
        blacktext:"rgba(15, 26, 42)"
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
        "marquee": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "marquee": 'marquee 25s linear infinite',
      },  
    },
  },
  plugins: [],
};
export default config;
