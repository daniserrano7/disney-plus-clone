import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  // Theme configuration is now in src/styles.css using @theme directive
  // This is the Tailwind CSS v4 approach - CSS-first configuration
} satisfies Config;
