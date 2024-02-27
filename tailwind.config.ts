import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    },
  },
  plugins: [],
} satisfies Config;
