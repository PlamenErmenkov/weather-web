import type { Config } from "tailwindcss";
import gridAreas from "@savvywombat/tailwindcss-grid-areas"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b131e",
        foreground: "#f6f4f5",
        primary: "#202b3b",
        "primary-foreground": "#f6f4f5",
        "text-muted": "#494949"
      },
      borderRadius: {
        logo: "16px",
        container: "32px"
      },
      gridTemplateAreas: {
        "weather-layout": [
          "A A B", 
          "C C B", 
          "D D B"
        ]
      }
    },
  },
  plugins: [gridAreas],
};
export default config;
