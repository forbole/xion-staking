import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        bg: {
          400: "#949494",
          50: "#FFF",
          500: "#474747",
          550: "#434040",
          600: "#1A1A1A",
        },
        danger: "#D74506",
        success: "#04C700",
        successBg: "#04C7001A",
        typo: {
          100: "#F2F2F2",
          125: "#BBBBBB",
          150: "#A5A5A5",
          200: "#949494",
          300: "#8E919A",
          600: "#575454",
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
};

export default config;