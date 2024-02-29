import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["AvenirWorldForDisneyRegular", "system-ui", "sans-serif"],
      bold: ["AvenirWorldForDisneyDemi", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        font: {
          DEFAULT: "#f9f9f9",
          subtle: "#cacaca",
          contrast: "#0e0b14",
        },
        elevation: {
          surface: "#1a1d29",
          overlay: "#31343e",
        },
        background: {
          neutral: "#40424a",
          "neutral-hovered": "#474a53",
          "neutral-pressed": "#3d3f45",
          interaction: "rgba(182, 182, 182, 0.2)",
          "interaction-hovered": "rgba(0, 0, 0, 0.4)",
          "interaction-pressed": "rgba(0, 0, 0, 0.8)",
        },
        border: {
          DEFAULT: "#f9f9f9",
          subtle: "rgba(249, 249, 249, 0.2)",
        },
      },
      borderRadius: {
        DEFAULT: "4px",
        lg: "8px",
        xl: "10px",
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px",
      },
    },
  },
  plugins: [],
} satisfies Config;
