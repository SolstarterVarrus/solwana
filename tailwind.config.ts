import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "526px": "526px",
        "460px": "460px",
        "200px": "200px",
      },
      height: {
        "356px": "356px",
        "221px": "221px",
        "83px": "83px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yellow-theme": "rgba(255, 223, 58, 1)",
        "purple-theme": "rgba(153, 69, 255, 1)",
        "purple-theme-2": "rgba(214, 199, 232, 1)",
        "gray-theme": "rgba(192, 192, 192, 1)",
      },
      fontSize: {
        "28px": "28px",
        "32px": "32px",
        "39px": "39px",
      },
      lineHeight: {
        "24px": "24px",
        "42px": "42px",
      },
      boxShadow: {
        custom: "0 4px 0 #9945FF",
      },
      inset: {
        '66rem': '66rem',
        '106rem': '106rem',
      },
      borderRadius: {
        "30px": "30px",
        "28px": "28px",
        "25px": "25px",
        "20px": "20px",
        "13px": "13px",
      },
      borderWidth: {
        "3px": "3px",
      },
      rotate: {
        '-3deg': '-3deg',
        '-8deg': '-8deg',
      },
    },
  },
  plugins: [],
};
export default config;
