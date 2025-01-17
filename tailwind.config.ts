import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#2D2E32",
          200: "#25262A",
          300: "#1E1E1E",
        },
        primary: {
          DEFAULT: "#00d8ff",
          200: "#1adcff",
          300: "#33e0ff",
          400: "#00d8ff",
          500: "#00c2e6",
          600: "#00adcc",
          700: "#0097b3",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      lm: "1366px", // laptop-medium
      // => @media (min-width: 1366px) { ... }

      ls: "1440px", // laptop-standard
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}) satisfies Config;
